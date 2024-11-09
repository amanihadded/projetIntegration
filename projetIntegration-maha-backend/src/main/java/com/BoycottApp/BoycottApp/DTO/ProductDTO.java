package com.BoycottApp.BoycottApp.DTO;

import lombok.Data;

@Data
public class ProductDTO {
    private Long id;
    private String name;
    private Long barCode;
    private String brand;
    private Boolean isBoycotted;
    private String raison;
    private String prodType;
    private Long userId;
    private Long categoryId;
    private String submissionId ;
}
