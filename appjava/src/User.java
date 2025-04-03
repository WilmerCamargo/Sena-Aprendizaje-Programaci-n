// metodo constructor

class User {
    static String tableName = "user";
    double id = Math.random();
    String name;

    User(String name) {
        this.name = name;
    }

    public void saludable() {
        System.out.println("Hola mundo soy " + tableName);
    }
}
