package com.db2.service.controllers;


import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Map;

@RestController
@RequestMapping("/db")
public class Controller {

    @GetMapping("/select")
    public ResponseEntity<String> selectQuery(){
        return new ResponseEntity<>("select quiery is running", HttpStatusCode.valueOf(200));
    }
}
