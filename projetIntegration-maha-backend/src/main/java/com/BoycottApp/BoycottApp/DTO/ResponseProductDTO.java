package com.BoycottApp.BoycottApp.DTO;

import com.BoycottApp.BoycottApp.entities.Category;
import com.BoycottApp.BoycottApp.entities.ProdType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseProductDTO {
    private Long id;
    private String name;
    private Long BarCode;
    private String Brand;
    private Boolean IsBoycotted ;
    private String Raison;
    private ProdType prodType;
    private Category category;
    private UserDTO user ;
}
