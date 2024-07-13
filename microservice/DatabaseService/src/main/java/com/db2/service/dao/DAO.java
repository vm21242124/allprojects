package com.db2.service.dao;

import com.db2.service.entity.Table;
import org.springframework.stereotype.Repository;

import java.util.Map;

public interface DAO {
    Table createTable(Table table);
    boolean insertIntoTable(String tableName, Map<String,String> mp);
}
