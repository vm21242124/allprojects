package com.microservice.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    private Service2client adminclien;

    public String getallAdmin(){
        ResponseEntity<String> allAdmin = adminclien.getAllAdmin();
        return allAdmin.getBody();
    }
}
