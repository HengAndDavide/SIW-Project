package it.uniroma3.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ResponsabileCentro {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(nullable = false)
	private String cognome;
	@Column(nullable = false)
	private String nome;

	@Column(nullable = false, unique = true)
	private String email;
	@Column(nullable = false)
	private String password;

	public ResponsabileCentro() {
	}

	public ResponsabileCentro(String cognome, String nome, String email, String password) {
		this.cognome = cognome;
		this.nome = nome;
		this.email = email;
		this.password = password;
	}
	
	public boolean checkPassword(String email, String psw) {
		return this.password.equals(psw) && this.email.equals(email);
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
