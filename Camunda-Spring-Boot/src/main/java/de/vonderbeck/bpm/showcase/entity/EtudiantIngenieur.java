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
public class EtudiantIngenieur implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)  
	@Getter @Setter
	@Column(name="etudiant_ingenieur_id")
	private Long id;
	@Getter @Setter
	private Long cin;
	@Getter @Setter
	private String niveau;
	@Getter @Setter
	private String nom;
	@Getter @Setter
	private String prenom;
	@Getter @Setter
	private int nbrAbs;
	@Getter @Setter
	private String specialite;
	@Getter @Setter
	private int credit;
	
	public EtudiantIngenieur() {
		super();
	}

	public EtudiantIngenieur(Long cin, String niveau, String nom, String prenom, int nbrAbs, String specialite,
			int credit) {
		super();
		this.cin = cin;
		this.niveau = niveau;
		this.nom = nom;
		this.prenom = prenom;
		this.nbrAbs = nbrAbs;
		this.specialite = specialite;
		this.credit = credit;
	}



	@Override
	public String toString() {
		return "EtudiantIngenieur [ " + cin + " niveau=" + niveau + ", nom=" + nom + ", prenom=" + prenom
				+ ", nbrAbs=" + nbrAbs + ", specialite=" + specialite + ", credit=" + credit + " ]";
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

	public int getNbrAbs() {
		return nbrAbs;
	}

	public void setNbrAbs(int nbrAbs) {
		this.nbrAbs = nbrAbs;
	}

	public String getSpecialite() {
		return specialite;
	}

	public void setSpecialite(String specialite) {
		this.specialite = specialite;
	}

	public int getCredit() {
		return credit;
	}

	public void setCredit(int credit) {
		this.credit = credit;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	
	
}

