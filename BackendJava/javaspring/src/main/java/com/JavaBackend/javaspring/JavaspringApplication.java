package com.JavaBackend.javaspring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JavaspringApplication {

	public static void main(String[] args) {
		SpringApplication.run(JavaspringApplication.class, args);
		System.out.println("Port connect to port 8080");
	}

}
