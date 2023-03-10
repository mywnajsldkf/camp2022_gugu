package com.example.community.category.application.service;

import com.example.community.category.application.port.in.CreateCategoryCommand;
import com.example.community.category.application.port.in.RecordCategoryUseCase;
import com.example.community.category.application.port.in.UpdateCategoryCommand;
import com.example.community.category.application.port.out.RecordCategoryStatePort;
import com.example.community.server.application.port.out.LoadServerStatePort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RecordCategoryService implements RecordCategoryUseCase {
    private final RecordCategoryStatePort recordCategoryStatePort;
    private final LoadServerStatePort loadServerStatePort;

    @Override
    public boolean createCategory(Integer serverId, CreateCategoryCommand command) {
        loadServerStatePort.existsByServerId(serverId);
        recordCategoryStatePort.saveCategory(serverId, command);
        return true;
    }

    @Override
    public boolean updateCategory(Integer categoryId, UpdateCategoryCommand command) {
        recordCategoryStatePort.updateCategory(categoryId, command);
        return true;
    }

}
