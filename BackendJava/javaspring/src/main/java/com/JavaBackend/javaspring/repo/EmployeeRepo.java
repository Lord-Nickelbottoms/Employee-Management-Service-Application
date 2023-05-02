package com.JavaBackend.javaspring.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.JavaBackend.javaspring.models.Employee;

//The "JPARepository" helps us to store data to the database withing a specific manner
//The "Employee" is the name of the model as the interface extends that model so we can have access to it
//The JpaRepository expects the name of the model together with the variable type of the first variable within the model
public interface EmployeeRepo  extends JpaRepository<Employee,Integer>{
   
}
