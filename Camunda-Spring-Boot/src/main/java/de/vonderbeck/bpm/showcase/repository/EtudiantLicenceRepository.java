package de.vonderbeck.bpm.showcase.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import de.vonderbeck.bpm.showcase.entity.EtudiantIngenieur;
import de.vonderbeck.bpm.showcase.entity.EtudiantLicence;

@Repository
public interface EtudiantLicenceRepository extends JpaRepository<EtudiantLicence, Long> {
	
	public EtudiantLicence findByCin(long cin);
	
}
