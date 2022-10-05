package de.vonderbeck.bpm.showcase.service;

import java.util.List;

import de.vonderbeck.bpm.showcase.entity.EtudiantIngenieur;

public interface EtudiantIngenieurService {
	
	public void save(EtudiantIngenieur etudiantIngenieur);	
	public List<EtudiantIngenieur> findAll();
	
}
