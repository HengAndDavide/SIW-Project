package it.uniroma3.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import it.uniroma3.model.Allievo;
import it.uniroma3.repository.AllievoRepository;

@Transactional
@Service
public class AllievoService {

	@Autowired
	private AllievoRepository allievoRepository;

	// Metodi di ricerca
	public Allievo findById(Long id) {
		Optional<Allievo> allievo = this.allievoRepository.findById(id);
		if (allievo.isPresent())
			return allievo.get();
		else
			return null;
	}

	public Allievo findByEmail(String email) {
		Optional<Allievo> allievo = this.allievoRepository.findByEmail(email);
		if (allievo.isPresent())
			return allievo.get();
		else
			return null;
	}

	public Allievo findByNomeAndCognome(String nome, String cognome) {
		Optional<Allievo> allievo = this.allievoRepository.findByNomeAndCognome(nome, cognome);
		if (allievo.isPresent())
			return allievo.get();
		else
			return null;
	}

	public List<Allievo> findByLuogoNascita(String luogoNascita) {
		return this.allievoRepository.findByLuogoNascita(luogoNascita);
	}

	public List<Allievo> findAll() {
		return (List<Allievo>) this.allievoRepository.findAll();
	}

	// Metodi di supporto
	public void uploadParametri(Allievo allievo) {
		allievo.setNome(uploadString(allievo.getNome()));
		allievo.setCognome(uploadString(allievo.getCognome()));
		allievo.getEmail().toLowerCase();
		allievo.setLuogoNascita(uploadString(allievo.getLuogoNascita()));
	}

	public String uploadString(String str) {
		StringBuilder b = new StringBuilder(str);
		int i = 0;
		do {
			b.replace(i, i + 1, b.substring(i, i + 1).toUpperCase());
			i = b.indexOf(" ", i) + 1;
		} while (i > 0 && i < b.length());
		return b.toString();
	}

	public boolean alreadyExists(Allievo allievo) {
		Optional<Allievo> allievoTrovato = this.allievoRepository.findByEmail(allievo.getEmail());
		return allievoTrovato.isPresent();
	}

	// Metodi Persistence
	public Allievo save(Allievo allievo) {
		return this.allievoRepository.save(allievo);
	}

	public Allievo update(Allievo allievo, String nome, String cognome, String email, Date dataNascita,
			String telefono, String luogoNascita) {
		allievo.setNome(nome);
		allievo.setCognome(cognome);
		allievo.setEmail(email);
		allievo.setDataNascita(dataNascita);
		allievo.setTelefono(telefono);
		allievo.setLuogoNascita(luogoNascita);
		return allievo;
	}

	public void delete(Long id) {
		this.allievoRepository.deleteById(id);
	}

}
