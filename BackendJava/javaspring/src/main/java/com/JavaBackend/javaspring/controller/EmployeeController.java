package com.JavaBackend.javaspring.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.JavaBackend.javaspring.models.Employee;
import com.JavaBackend.javaspring.repo.EmployeeRepo;

import io.micrometer.common.lang.NonNull;

@RestController //used to specify your end points
@RequestMapping(value= "/employees") //end points for the local host "Example: localhost/8010/employees"
public class EmployeeController {
    @Autowired
    EmployeeRepo employeeRepo; //this is the name of interface. The name of the file called EmployeeRepo under the repo folder

     
    //We iterate on all the Employees within the List
    @GetMapping
    public List<Employee> getEmployees()
    {
        return employeeRepo.findAll();
    }


    //this is the name of the file called EmployeeRepo under the repo folder. Enables us to Post 
    //Within the parameters for @Validation makes sure that the information being passed is correct and nothing is missing
    //@NonNull means that it shouldn't accept or proceed till the all information is inserted 
    @PostMapping
    public Employee save(@Validated @NonNull @RequestBody Employee employee)
    {
        return employeeRepo.save(employee);
    }

    @GetMapping(value = "/{id}")
    public Optional<Employee> findOne(Employee employee) {
        return employeeRepo.findById(employee.getEmployeeID());
    }


    @PutMapping("/{id}")
    public Employee update(@Validated @NonNull @RequestBody Employee employee) {
        return employeeRepo.save(employee);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable int id) {
        employeeRepo.deleteById(id);
    }
}
