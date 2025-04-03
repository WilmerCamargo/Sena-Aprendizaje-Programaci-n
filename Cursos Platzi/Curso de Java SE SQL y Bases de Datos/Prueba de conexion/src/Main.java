import java.sql.*;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        Connection myConn = null;
        Statement myStamt = null;
        ResultSet myRes = null; // ==> esto es para consultar y actualizar

        try {
            myConn = DriverManager.getConnection("jdbc:mysql://localhost:3306/project","root","root");
            System.out.println("Genial, nos conectamos");
 //            String sql = ("INSERT INTO employees (first_name, pa_surname) VALUES (?, ?)"); // esto es para insertar
//            myStamt = myConn.prepareStatement(sql); // esto es para insertar
//            myStamt.setString(1, "Johana"); // esto es para insertar
//            myStamt.setString(2, "Dorantes"); // esto es para insertar

//            myStamt = myConn.createStatement();
//            int rowsAffected = myStamt.executeUpdate("UPDATE employees " + "set email='johanador2@example.com' " + "WHERE first_name='johana'");
//
//            myRes = myStamt.executeQuery("SELECT * FROM employees order by pa_surname"); // ==> esto es para consultar y actualizar
//
//            while (myRes.next()){
//                System.out.println(myRes.getString("first_name") + "," + myRes.getString("email"));
//            }

            myStamt = myConn.createStatement();

            int rowsAffected = myStamt.executeUpdate("DELETE FROM employees " + "WHERE first_name='Johana'");
            System.out.println("Empleados actuales");
            myRes = myStamt.executeQuery("SELECT * FROM employees");

            System.out.println("Empleados despues de eliminar");
            while (myRes.next()){
                System.out.println(myRes.getString("first_name"));
            }

        } catch (SQLException e) {
             e.printStackTrace();

            System.out.println("Algo salio mal : ");
        }
    }
}