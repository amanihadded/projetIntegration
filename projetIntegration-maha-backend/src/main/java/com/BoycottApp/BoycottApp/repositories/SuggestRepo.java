package com.BoycottApp.BoycottApp.repositories;

import com.BoycottApp.BoycottApp.entities.Suggest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SuggestRepo extends JpaRepository<Suggest,Long> {
}
