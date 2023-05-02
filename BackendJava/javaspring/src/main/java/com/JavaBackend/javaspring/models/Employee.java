package com.JavaBackend.javaspring.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

//to show this is going to work with the database
@Entity
public class Employee {
    private int employeeID;
    private String emp_num;
    private String firstName;
    private String surname;
    private String email;
    private String emp_address;
    private String department;


    //This is a constructor for the employee class
    public Employee(int employeeID, String employeeNumber, String Name, String Surname, String email,String address ,String department)    {
        this.employeeID = employeeID;
        this.emp_num = employeeNumber;
        this.firstName = Name;
        this.surname = Surname;
        this.email = email;
        this.emp_address = address;
        this.department = department;
        
    }

    public Employee()
    {
        
    }
    //getting the employee id
    @Id
    @GeneratedValue //makes the id to be automatically generated
    public int getEmployeeID() {
        return employeeID;
    }

    //set the employee id (whereby the employee id within the class to be equal to the one on the parameter)
    public void setEmployeeID(int employeeID){
        this.employeeID = employeeID;
    }


    //getting the first name
    public String getName() {
        return firstName;
    }

    //set the first name
    public void setName(String Name) {
        this.firstName = Name;
    }

    //getting the last name
    public String getSurname() {
        return surname;
    }

    //set the last name
    public void setSurname(String Surname) {
        this.surname = Surname;
    }

    //getting the email
    public String getEmail() {
        return email;
    }

    //set the email
    public void setEmail(String email) {
        this.email = email;
    }

    //getting the department
    public String getDepartment() {
        return department;
    }

    //set the department
    public void setDepartment(String department) {
        this.department = department;
    }

    //getting the address
   public String getAddress() {
        return emp_address;
    }
    //set the address
    public void setAddress(String address) {
        this.emp_address = address;
    }

    //getting the employee number
    public String getEmployeeNumber() {
        return emp_num;
    }

    //set the employee number
    public void setEmployeeNumber(String employeeNumber) {
        this.emp_num = employeeNumber;
    }

}
