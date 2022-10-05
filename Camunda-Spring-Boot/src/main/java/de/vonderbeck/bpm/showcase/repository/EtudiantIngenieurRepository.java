package de.vonderbeck.bpm.showcase.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import de.vonderbeck.bpm.showcase.entity.EtudiantIngenieur;

@Repository
public interface EtudiantIngenieurRepository extends JpaRepository<EtudiantIngenieur, Long> {
	
	public EtudiantIngenieur findByCin(long cin);
	
}
