package com.db2.service.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Database {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int databaseId;
    private String databaseName;

    private List<Table> tables= new ArrayList<>();
}
