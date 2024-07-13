package com.microservice.user;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "service2", url = "http://localhost:8082")
public interface Service2client {
    @GetMapping("/admin/all")
    public ResponseEntity<String> getAllAdmin();
}
