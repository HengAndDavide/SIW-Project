package it.uniroma3.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Allievo {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(nullable = false)
	private String nome;
	@Column(nullable = false)
	private String cognome;

	@Column(nullable = false, unique = true)
	private String email;

	@Column(nullable = false)
	private String telefono;

	@Column()
	@Temporal(TemporalType.DATE)
	private Date dataNascita;

	@Column(nullable = false)
	private String luogoNascita;

	@OneToMany(mappedBy = "allievo")
	private List<Partecipazione> listaPartecipazione;

	public Allievo() {
	}

	public Allievo(String nome, String cognome, String email, String telefono, String luogoNascita) {
		super();
		this.nome = nome;
		this.cognome = cognome;
		this.email = email;
		this.telefono = telefono;
		this.luogoNascita = luogoNascita;
	}

	public Allievo(String nome, String cognome, String email, String luogoNascita) {
		super();
		this.nome = nome;
		this.cognome = cognome;
		this.email = email;
		this.luogoNascita = luogoNascita;
	}

	public Allievo(String nome, String cognome, String email, String telefono, Date dataNascita, String luogoNascita) {
		super();
		this.nome = nome;
		this.cognome = cognome;
		this.email = email;
		this.telefono = telefono;
		this.dataNascita = dataNascita;
		this.luogoNascita = luogoNascita;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCognome() {
		return cognome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public Date getDataNascita() {
		return dataNascita;
	}

	public void setDataNascita(Date dataNascita) {
		this.dataNascita = dataNascita;
	}

	public String getLuogoNascita() {
		return luogoNascita;
	}

	public void setLuogoNascita(String luogoNascita) {
		this.luogoNascita = luogoNascita;
	}

	public List<Partecipazione> getListaPartecipazione() {
		return listaPartecipazione;
	}

	public void setListaAttivita(List<Partecipazione> listaPartecipazione) {
		this.listaPartecipazione = listaPartecipazione;
	}

	public Long getId() {
		return id;
	}

}
