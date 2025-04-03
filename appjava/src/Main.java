// Crear una clase y metodos


public class Main {
    public static void main(String[] args){
        User user = new User("Nicolas");
        // user.name = ; // Se puede acceder a sus propiedades del objeto de la otra clase con el punto (.)

        User user1 = new User("Felipe");


        user.saludable();
        user1.saludable();


        System.out.println(User.tableName);
    }
}
