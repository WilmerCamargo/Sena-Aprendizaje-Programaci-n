public class Main {
    public static void main(String[] args) {
        String[] personajes = {"Goku", "Vegeta", "Chanchito feliz"};


//        for (int i = 0; i < personajes.length; i++) {
//            System.out.println(personajes[i]);
//        }
        // For each

        for (String personaje: personajes) {
            System.out.println(personaje);
        }
    }
}