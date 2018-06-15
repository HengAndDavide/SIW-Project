package it.uniroma3.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Responsabile {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(nullable = false)
	private String cognome;
	@Column(nullable = false)
	private String nome;
	@Column(nullable = false, unique = true)
	private String username;
	@Column(nullable = false)
	private String password;
	@Column(nullable = false)
	private String ruolo;
	
	@OneToOne
	private CentroFormazione centroFormazione;

	public Responsabile() {
	}

	public Responsabile(String nome, String cognome, String username, String password, String role) {
		this.cognome = cognome;
		this.nome = nome;
		this.username = username;
		this.password = password;
		this.ruolo = role;
	}

	public boolean checkPassword(String email, String psw) {
		return this.password.equals(psw) && this.username.equals(email);
	}

	public void nuovaPassword(String psw) {
		this.password = psw;
	}

	public String getCognome() {
		return cognome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public CharSequence getPassword() {
		return this.password;
	}

	public String getRuolo() {
		return this.ruolo;
	}
	public void setRuolo(String ruolo) {
		this.ruolo = ruolo;
	}
	
	public CentroFormazione getCentroFormazione() {
		return centroFormazione;
	}

	public void setCentroFormazione(CentroFormazione centroFormazione) {
		this.centroFormazione = centroFormazione;
	}


}
