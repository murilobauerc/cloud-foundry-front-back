package com.example.cfdemo.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class HelloControler {
    @GetMapping("/")
    String helloWorld(){
        return "Olá mundo.";
    }
}

