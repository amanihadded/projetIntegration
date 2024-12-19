package com.BoycottApp.BoycottApp.controllers;

import com.BoycottApp.BoycottApp.Services.SuggestService;
import com.BoycottApp.BoycottApp.entities.Suggest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/suggests")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SuggestController {

    private final SuggestService suggestService;

    @Autowired
    public SuggestController(SuggestService suggestService) {
        this.suggestService = suggestService;
    }

    @PostMapping
    public ResponseEntity<Suggest> createSuggest(@RequestBody Suggest suggest) {
        return suggestService.saveSuggest(suggest);
    }

    @GetMapping
    public ResponseEntity<List<Suggest>> getAllSuggests() {
        return suggestService.getAllSuggests();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Suggest> getSuggestById(@PathVariable Long id) {
        return suggestService.getSuggestById(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSuggest(@PathVariable Long id) {
        return suggestService.deleteSuggestById(id);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Suggest> updateSuggest(@PathVariable Long id, @RequestBody Suggest updatedSuggest) {
        return suggestService.updateSuggest(id, updatedSuggest);
    }
}
