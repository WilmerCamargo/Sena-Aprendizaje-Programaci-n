package model;

public class Doctor {
    //Atributos
    static int id = 0; //Autoincrement
    String name;
    String email;
    String speciality;

    Doctor(){
        System.out.println("Construyendo el Objeto model.Doctor");
    }

    Doctor(String name, String speciality){
        System.out.println("El nombre del model.Doctor asignado es: " + name);
        id++;
        this.name = name;
        this.speciality = speciality;
    }

    //Comportamientos
    public void showName(){
        System.out.println(name);
    }

    public void showId(){
        System.out.println("ID model.Doctor: " + id);
    }

}