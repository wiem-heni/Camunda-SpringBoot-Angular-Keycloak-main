package de.vonderbeck.bpm.showcase;


import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import de.vonderbeck.bpm.showcase.entity.EtudiantIngenieur;
import de.vonderbeck.bpm.showcase.entity.EtudiantLicence;
import de.vonderbeck.bpm.showcase.service.EtudiantIngenieurService;
import de.vonderbeck.bpm.showcase.service.EtudiantLicenceService;
import lombok.Getter;
import lombok.Setter;

@Service
public class Printer {
	
	@Autowired
	EtudiantIngenieurService etudiantIngenieurService;
	@Autowired
	EtudiantLicenceService etudiantLicenceService;
	
   public void printMessage(DelegateExecution execution) {
	   LoggerFactory.getLogger(this.getClass()).info("Licence " + execution.getVariable("date"));
	   String cin = (String) execution.getVariable("cin");
	   String niveau = (String) execution.getVariable("niveau");
	   String nom = (String) execution.getVariable("nom");
	   String prenom = (String) execution.getVariable("prenom");
	   
	   EtudiantLicence etudiant = new EtudiantLicence(Long.valueOf(cin), niveau, nom, prenom);
	   etudiantLicenceService.save(etudiant);	   
	   System.out.println("\n\n\n\n\n  -> "+etudiant+" \n\n\n\n");
   }
   
   public void printMessageIng(DelegateExecution execution) {
	   LoggerFactory.getLogger(this.getClass()).info("Ingenierie " + execution.getVariable("date"));
	   String cin = (String) execution.getVariable("cin");
	   String niveau = (String) execution.getVariable("niveau");
	   String credit = (String) execution.getVariable("credit");
	   String nom = (String) execution.getVariable("nom");
	   String prenom = (String) execution.getVariable("prenom");
	   String nbrAbs = (String) execution.getVariable("nbrAbs");
	   String specialite = (String) execution.getVariable("specialite");
	   EtudiantIngenieur etudiant = new EtudiantIngenieur(Long.valueOf(cin), niveau, nom, prenom, Integer.valueOf(nbrAbs), specialite, Integer.valueOf(credit));
	   etudiantIngenieurService.save(etudiant);	   
	   System.out.println("\n\n\n\n\n  -> "+etudiant+" \n\n\n\n");
   }
  
   
   public Boolean verifIng(DelegateExecution execution) {
	   String niveau = (String) execution.getVariable("niveau");
	   if(niveau.equals("Ingenieurie"))
		   return true;
	   return false;
   }
   
   public Boolean verifLis(DelegateExecution execution) {
	   String niveau = (String) execution.getVariable("niveau");
	   if(niveau.equals("Licence"))
		   return true;
	   return false;
   }
   
   public Boolean verifTrue(DelegateExecution execution) {
	   return true;
   }
   
   public Boolean verifFalse(DelegateExecution execution) {
	   return true;
   }
   
   public void hello(DelegateExecution execution) {
	   System.out.println("Hello . . .");
   }
   
   
}