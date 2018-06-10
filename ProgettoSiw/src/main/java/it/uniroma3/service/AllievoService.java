package it.uniroma3.service;

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
		if (allievoTrovato.isPresent())
			return true;
		else
			return false;
	}

	// Metodi Persistence
	public Allievo save(Allievo allievo) {
		return this.allievoRepository.save(allievo);
	}

	public Allievo update(Allievo allievoTrovato, String nome, String cognome, String email, String telefono,
			String luogoNascita) {
		allievoTrovato.setNome(nome);
		allievoTrovato.setCognome(cognome);
		allievoTrovato.setEmail(email);
		allievoTrovato.setTelefono(telefono);
		allievoTrovato.setLuogoNascita(luogoNascita);
		return allievoTrovato;
	}

	public void delete(Long id) {
		this.allievoRepository.deleteById(id);
	}

}
