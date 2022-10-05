package de.vonderbeck.bpm.showcase.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import de.vonderbeck.bpm.showcase.entity.EtudiantIngenieur;
import de.vonderbeck.bpm.showcase.entity.EtudiantLicence;
import de.vonderbeck.bpm.showcase.repository.EtudiantIngenieurRepository;
import de.vonderbeck.bpm.showcase.repository.EtudiantLicenceRepository;


@Service	
public class EtudiantLicenceServiceImpl implements EtudiantLicenceService {
	
	@Autowired
	EtudiantLicenceRepository etudiantLicenceRepository;

    @Transactional
    @Override
    public void save(EtudiantLicence etudiantLicence) {
    	etudiantLicenceRepository.save(etudiantLicence);
    }
    
    @Override
    public List<EtudiantLicence> findAll() {
        return etudiantLicenceRepository.findAll();
    }
    
	
}
