package it.uniroma3.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Attivita {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(nullable = false)
	private String descrizione;
	@Column(nullable = false)
	private double prezzo;

	@ManyToOne
	private CentroFormazione centroFormazione;

	@OneToMany(mappedBy = "attivita")
	private List<Partecipazione> listaPartecipazioni;

}
