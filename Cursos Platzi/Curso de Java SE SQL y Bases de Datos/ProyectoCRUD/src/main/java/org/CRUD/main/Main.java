package org.CRUD.main;

import org.CRUD.Repository.EmployeeRepository;
import org.CRUD.Repository.Repository;
import org.CRUD.model.Employee;
import org.CRUD.util.DatabaseConnection;

import java.sql.*;

public class Main {
    public static void main(String[] args) throws SQLException {

        System.out.println("-----Listando todos-----");
        Repository<Employee> repository = new EmployeeRepository();
        repository.findAll().forEach(System.out::println);

        System.out.println("\n-----Buscando por ID-----");
        System.out.println(repository.getById(2));

    }
}
