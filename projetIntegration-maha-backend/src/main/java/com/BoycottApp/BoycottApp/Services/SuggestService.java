package com.BoycottApp.BoycottApp.Services;

import com.BoycottApp.BoycottApp.entities.Suggest;
import com.BoycottApp.BoycottApp.repositories.SuggestRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SuggestService {

    private final SuggestRepo suggestRepository;

    @Autowired
    public SuggestService(SuggestRepo suggestRepository) {
        this.suggestRepository = suggestRepository;
    }

    // Create or update a Suggest entity
    public ResponseEntity<Suggest> saveSuggest(Suggest suggest) {
        Suggest savedSuggest = suggestRepository.save(suggest);
        return new ResponseEntity<>(savedSuggest, HttpStatus.CREATED);
    }

    // Retrieve all Suggest entities
    public ResponseEntity<List<Suggest>> getAllSuggests() {
        List<Suggest> suggests = suggestRepository.findAll();
        if (suggests.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(suggests, HttpStatus.OK);
    }

    // Retrieve a Suggest entity by its ID
    public ResponseEntity<Suggest> getSuggestById(Long id) {
        Optional<Suggest> suggest = suggestRepository.findById(id);
        if (suggest.isPresent()) {
            return new ResponseEntity<>(suggest.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Delete a Suggest entity by its ID
    public ResponseEntity<Void> deleteSuggestById(Long id) {
        if (suggestRepository.existsById(id)) {
            suggestRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Update a Suggest entity
    public ResponseEntity<Suggest> updateSuggest(Long id, Suggest updatedSuggest) {
        Optional<Suggest> existingSuggestOpt = suggestRepository.findById(id);

        if (existingSuggestOpt.isPresent()) {
            Suggest existingSuggest = existingSuggestOpt.get();

            // Update fields of the existing Suggest entity with the values from updatedSuggest
            if (updatedSuggest.getType() != null) {
                existingSuggest.setType(updatedSuggest.getType());
            }
            if (updatedSuggest.getBrandName() != null) {
                existingSuggest.setBrandName(updatedSuggest.getBrandName());
            }
            if (updatedSuggest.getProofUrl() != null) {
                existingSuggest.setProofUrl(updatedSuggest.getProofUrl());
            }
            if (updatedSuggest.getReasonWhy() != null) {
                existingSuggest.setReasonWhy(updatedSuggest.getReasonWhy());
            }
            if (updatedSuggest.getAlternativeOf() != null) {
                existingSuggest.setAlternativeOf(updatedSuggest.getAlternativeOf());
            }
            if (updatedSuggest.getUserName() != null) {
                existingSuggest.setUserName(updatedSuggest.getUserName());
            }
            if (updatedSuggest.getLiked() != null) {
                existingSuggest.setLiked(updatedSuggest.getLiked());
            }

            // Save the updated entity
            Suggest savedSuggest = suggestRepository.save(existingSuggest);
            return new ResponseEntity<>(savedSuggest, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Custom logic can be added here if needed (e.g., search or filtering methods)
}
