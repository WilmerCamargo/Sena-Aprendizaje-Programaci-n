package org.CRUD.model;

public class Employee {

    private Integer id;
    private String first_name;
    private String pa_surname;
    private String ma_surname;
    private String email;
    private float salary;
    private String curp;

    public Employee(Integer id, String first_name, String pa_surname, String ma_surname, String email, float salary, String curp) {
        this.id = id;
        this.first_name = first_name;
        this.pa_surname = pa_surname;
        this.ma_surname = ma_surname;
        this.email = email;
        this.salary = salary;
        this.curp = curp;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getPa_surname() {
        return pa_surname;
    }

    public void setPa_surname(String pa_surname) {
        this.pa_surname = pa_surname;
    }

    public String getMa_surname() {
        return ma_surname;
    }

    public void setMa_surname(String ma_surname) {
        this.ma_surname = ma_surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public float getSalary() {
        return salary;
    }

    public void setSalary(float salary) {
        this.salary = salary;
    }

    public String getCurp() {
        return curp;
    }

    public void setCurp(String curp) {
        this.curp = curp;
    }

    public Employee() {
    }

//    @Override
//    public String toString() {
//        return "Employee{" +
//                "id=" + id +
//                ", first_name='" + first_name + '\'' +
//                ", pa_surname='" + pa_surname + '\'' +
//                ", ma_surname='" + ma_surname + '\'' +
//                ", email='" + email + '\'' +
//                ", salary='" + salary + '\'' +
//                '}';
//    }
@Override
public String toString() {
    return
            "\n-------------------------------------"+
                    "\nEmployee" +
                    "\nid: " + id +
                    "\nfirst_name: " + first_name +
                    "\npa_surname: " + pa_surname +
                    "\nma_surname: " + ma_surname +
                    "\nemail: " + email +
                    "\nsalary: " + salary +
                    "\ncurp: " + curp +
            "\n-------------------------------------"
            ;
}
}
