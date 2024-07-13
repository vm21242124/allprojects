package com.microservice.admin;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class AdminController {
    @GetMapping("/all")
    public ResponseEntity<String> alladmin(){
        return  new ResponseEntity<>("all admin will be here comming from admin service", HttpStatusCode.valueOf(200));
    }
}
