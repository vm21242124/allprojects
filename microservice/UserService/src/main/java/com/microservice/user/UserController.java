package com.microservice.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    public  AdminService adminService;
    @GetMapping("/user/all")
    public ResponseEntity<String> allUser(){
        return  new ResponseEntity<>("all user will be here", HttpStatusCode.valueOf(200));
    }
    @GetMapping("/admin/all")
    public ResponseEntity<String> allAdmin(){
        String s = adminService.getallAdmin();
        return  new ResponseEntity<>(s,HttpStatusCode.valueOf(200));
    }
}
