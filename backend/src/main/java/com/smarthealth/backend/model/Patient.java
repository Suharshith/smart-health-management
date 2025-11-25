package com.smarthealth.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data
@Document(collection = "patients")
public class Patient {
    @Id
    private String id;
    private String name;
    private int age;
    private String gender;
    private String contact;
    private String medicalHistory;
}
