package com.db2.service.dao.impl;

import com.db2.service.dao.DAO;
import com.db2.service.entity.Table;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class DAOImpl implements DAO {
    @Override
    public Table createTable(Table table) {
        return null;
    }

    @Override
    public boolean insertIntoTable(String tableName, Map<String, String> mp) {
        return false;
    }
}
