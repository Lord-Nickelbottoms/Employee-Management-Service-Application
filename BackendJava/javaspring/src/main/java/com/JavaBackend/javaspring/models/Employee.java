package com.JavaBackend.javaspring.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

//to show this is going to work with the database
@Entity
public class Employee {
    private int employeeID;
    private String firstName;
    private String lastName;
    private String email;
    private String department;
    private String phoneNumber;


    //This is a constructor for the employee class
    public Employee(int employeeID, String firstName, String lastName, String email, String department, String phoneNumber)    {
        this.employeeID = employeeID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.department = department;
        this.phoneNumber = phoneNumber;
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
    public String getFirstName() {
        return firstName;
    }

    //set the first name
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    //getting the last name
    public String getLastName() {
        return lastName;
    }

    //set the last name
    public void setLastName(String lastName) {
        this.lastName = lastName;
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

    //getting the phone number
    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

}
