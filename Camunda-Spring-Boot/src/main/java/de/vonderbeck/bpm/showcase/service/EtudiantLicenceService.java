package de.vonderbeck.bpm.showcase.service;

import java.util.List;

import de.vonderbeck.bpm.showcase.entity.EtudiantIngenieur;
import de.vonderbeck.bpm.showcase.entity.EtudiantLicence;

public interface EtudiantLicenceService {
	
	public void save(EtudiantLicence etudiantLicence);	
	public List<EtudiantLicence> findAll();
	
}
