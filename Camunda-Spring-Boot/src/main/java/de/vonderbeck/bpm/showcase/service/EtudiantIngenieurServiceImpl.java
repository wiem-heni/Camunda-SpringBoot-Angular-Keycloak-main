package de.vonderbeck.bpm.showcase.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import de.vonderbeck.bpm.showcase.entity.EtudiantIngenieur;
import de.vonderbeck.bpm.showcase.repository.EtudiantIngenieurRepository;


@Service	
public class EtudiantIngenieurServiceImpl implements EtudiantIngenieurService {
	
	@Autowired
	EtudiantIngenieurRepository etudiantIngenieurRepository;

    @Transactional
    @Override
    public void save(EtudiantIngenieur etudiantIngenieur) {
    	etudiantIngenieurRepository.save(etudiantIngenieur);
    }
    
    @Override
    public List<EtudiantIngenieur> findAll() {
        return etudiantIngenieurRepository.findAll();
    }
    
	
}
