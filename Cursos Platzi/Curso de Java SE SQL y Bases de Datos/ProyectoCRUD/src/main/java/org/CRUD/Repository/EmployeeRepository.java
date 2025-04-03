package org.CRUD.Repository;

import org.CRUD.model.Employee;
import org.CRUD.util.DatabaseConnection;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class EmployeeRepository implements Repository<Employee> {

    private Connection getConnection() throws SQLException {
        return DatabaseConnection.getConnection();
    }

    @Override
    public List<Employee> findAll() throws SQLException {
        List<Employee> employees = new ArrayList<>();
        try (Connection myConn = getConnection();
                Statement myStamt = myConn.createStatement();
             ResultSet myRest = myStamt.executeQuery("SELECT * FROM employees")) {
            while (myRest.next()) {
                Employee e = createEmployee(myRest);
                employees.add(e);
            }
        }
        return employees;
    }

    @Override
    public Employee getById(Integer id) throws SQLException {
        Employee employee = null;
        try (Connection myConn = getConnection();
                PreparedStatement myStamt = myConn.prepareStatement("SELECT * FROM employees WHERE id = ?")) {
            myStamt.setInt(1, id);
            try (ResultSet myRes = myStamt.executeQuery()) {
                if (myRes.next()) {
                    employee = createEmployee(myRes);
                }
            }
        }
        return employee;
    }

    @Override
    public void save(Employee employee) throws SQLException {
        String sql;
        // Si contiene un valor numerico mayor que 0, entonces existe id y es un update
        if (employee.getId() != null && employee.getId() > 0) {
            sql = "UPDATE employees SET first_name=?, pa_surname=?, ma_surname=?, email=?, salary=?, curp=? WHERE id=?";
        } else {
            sql = "INSERT INTO employees (first_name, pa_surname, ma_surname, email, salary, curp) VALUES (?,?,?,?,?,?)";
        }
        try (Connection myConn = getConnection();
                PreparedStatement myStamt = myConn.prepareStatement(sql)) {
            myStamt.setString(1, employee.getFirst_name());
            myStamt.setString(2, employee.getPa_surname());
            myStamt.setString(3, employee.getMa_surname());
            myStamt.setString(4, employee.getEmail());
            myStamt.setFloat ( 5,  employee.getSalary());
            myStamt.setString(6, employee.getCurp());

            if (employee.getId() != null && employee.getId() > 0) {
                myStamt.setInt(7, employee.getId());
            }
            myStamt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void delete(Integer id) throws SQLException {
        try (Connection myConn = getConnection();
                PreparedStatement myStamt = myConn.prepareStatement("DELETE FROM employees WHERE id=?")) {
            myStamt.setInt(1, id);
            myStamt.executeUpdate();
        }

    }

    private Employee createEmployee(ResultSet myRest) throws SQLException {
        Employee e = new Employee();
        e.setId(myRest.getInt("id"));
        e.setFirst_name(myRest.getString("first_name"));
        e.setPa_surname(myRest.getString("pa_surname"));
        e.setMa_surname(myRest.getString("ma_surname"));
        e.setEmail(myRest.getString("email"));
        e.setSalary(myRest.getFloat("salary"));
        e.setCurp(myRest.getString("curp"));
        return (e);
    }
}