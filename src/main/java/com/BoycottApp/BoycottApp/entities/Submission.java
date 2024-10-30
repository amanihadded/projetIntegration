package com.BoycottApp.BoycottApp.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Submission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

   @Enumerated(EnumType.STRING)
    private SubmissionType submissionType;

    private String proofURL;
    private String reason;

    private String alternativeBrand;

    @ManyToOne
    private Product product;
}
