package it.uniroma3.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class Attivita {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(nullable = false)
	private String descrizione;
	@Column(nullable = false)
	private double prezzo;

	@Temporal(TemporalType.DATE)
	@DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
	private Date dataAttivita;

	@Temporal(TemporalType.TIME)
	@DateTimeFormat(pattern = "HH:mm")
	private Date oraInizio;
	@Temporal(TemporalType.TIME)
	@DateTimeFormat(pattern = "HH:mm")
	private Date oraFine;

	@ManyToOne
	private CentroFormazione centroFormazione;

	@OneToMany(mappedBy = "attivita")
	private List<Partecipazione> listaPartecipazioni;

	public Attivita() {
	}

	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}

	public double getPrezzo() {
		return prezzo;
	}

	public void setPrezzo(double prezzo) {
		this.prezzo = prezzo;
	}

	public CentroFormazione getCentroFormazione() {
		return centroFormazione;
	}

	public void setCentroFormazione(CentroFormazione centroFormazione) {
		this.centroFormazione = centroFormazione;
	}

	public List<Partecipazione> getListaPartecipazioni() {
		return listaPartecipazioni;
	}

	public void setListaPartecipazioni(List<Partecipazione> listaPartecipazioni) {
		this.listaPartecipazioni = listaPartecipazioni;
	}

	public Long getId() {
		return id;
	}

	public Date getOraInizio() {
		return oraInizio;
	}

	public void setOraInizio(Date oraInizio) {
		this.oraInizio = oraInizio;
	}

	public Date getOraFine() {
		return oraFine;
	}

	public void setOraFine(Date oraFine) {
		this.oraFine = oraFine;
	}
	
	public Date getDataAttivita() {
		return dataAttivita;
	}

	public void setDataAttivita(Date dataAttivita) {
		this.dataAttivita = dataAttivita;
	}

}
