package de.vonderbeck.bpm.showcase.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import de.vonderbeck.bpm.showcase.entity.EtudiantIngenieur;
import de.vonderbeck.bpm.showcase.entity.EtudiantLicence;
import de.vonderbeck.bpm.showcase.service.EtudiantIngenieurService;
import de.vonderbeck.bpm.showcase.service.EtudiantLicenceService;

@RestController
@CrossOrigin("*")
@RequestMapping("etudiant-lsc")
public class EtudiantLicenceController {
	
	@Autowired
	EtudiantLicenceService etudiantLicenceService;

	
	@GetMapping
    public List<EtudiantLicence> findAllLicence() {
        return etudiantLicenceService.findAll();
    }

	
	
}
