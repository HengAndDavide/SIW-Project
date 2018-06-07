package it.uniroma3.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Partecipazione {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ManyToOne
	private Allievo allievo;

	@ManyToOne
	private Attivita attivita;

	public Partecipazione(Allievo allievo, Attivita attivita) {
		this.allievo = allievo;
		this.attivita = attivita;
	}

	public Partecipazione() {
	}

	public Allievo getAllievo() {
		return allievo;
	}

	public void setAllievo(Allievo allievo) {
		this.allievo = allievo;
	}

	public Attivita getAttivita() {
		return attivita;
	}

	public void setAttivita(Attivita attivita) {
		this.attivita = attivita;
	}

}
