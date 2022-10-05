package de.vonderbeck.bpm.showcase.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import java.io.Serializable;


@Entity
@Data
public class EtudiantLicence implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)  
	@Getter @Setter
	@Column(name="etudiant_licence_id")
	private Long id;
	@Getter @Setter
	private Long cin;
	@Getter @Setter
	private String niveau;
	@Getter @Setter
	private String nom;
	@Getter @Setter
	private String prenom;
	
	public EtudiantLicence() {
		super();
	}
	
	public EtudiantLicence(Long cin, String niveau, String nom, String prenom) {
		super();
		this.cin = cin;
		this.niveau = niveau;
		this.nom = nom;
		this.prenom = prenom;
	}

	@Override
	public String toString() {
		return "EtudiantIngenieur [ " + cin + " niveau=" + niveau + ", nom=" + nom + ", prenom=" + prenom
				+ " ]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getCin() {
		return cin;
	}

	public void setCin(Long cin) {
		this.cin = cin;
	}

	public String getNiveau() {
		return niveau;
	}

	public void setNiveau(String niveau) {
		this.niveau = niveau;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	
}

