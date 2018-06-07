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

	public Allievo save(Allievo Allievo) {
		return this.allievoRepository.save(Allievo);
	}

	public List<Allievo> findByLuogoNascita(String city) {
		return this.allievoRepository.findByLuogoNascita(city);
	}

	public List<Allievo> findAll() {
		return (List<Allievo>) this.allievoRepository.findAll();
	}

	public Allievo findById(Long id) {
		Optional<Allievo> allievo = this.allievoRepository.findById(id);
		if (allievo.isPresent())
			return allievo.get();
		else
			return null;
	}

	public void uppa(Allievo allievo) {
		String nome = allievo.getNome();
		nome = nome.substring(0, 1).toUpperCase() + nome.substring(1, nome.length()).toLowerCase();
		allievo.setNome(nome);
		String cognome = allievo.getCognome();
		cognome = cognome.substring(0, 1).toUpperCase() + cognome.substring(1, cognome.length()).toLowerCase();
		allievo.setCognome(cognome);
		String citta = allievo.getLuogoNascita();
		citta = citta.substring(0, 1).toUpperCase() + citta.substring(1, citta.length()).toLowerCase();
		allievo.setLuogoNascita(citta);
	}

	public boolean alreadyExists(Allievo Allievo) {
		List<Allievo> Allievi = this.allievoRepository.findByNomeAndCognomeAndLuogoNascita(Allievo.getNome(),
				Allievo.getCognome(), Allievo.getLuogoNascita());
		if (Allievi.size() > 0)
			return true;
		else
			return false;
	}

	public Allievo findByNomeAndCognome(String nome, String cognome) {
		return this.allievoRepository.findByNomeAndCognome(nome, cognome);
	}

	public Allievo findByEmail(String email) {
		Optional<Allievo> allievo = this.allievoRepository.findByEmail(email);
		if (allievo.isPresent())
			return allievo.get();
		else
			return null;
	}

	public void update(Allievo allievoTrovato) {
		// allievoTrovato.setNome(nome);
		// allievoTrovato.setCognome(cognome);
		// allievoTrovato.setEmail(email);
		// allievoTrovato.setDataNascita(dataNascita);
		// allievoTrovato.setLuogoNascita(luogoNascita);
		// allievoTrovato.setTelefono(telefono);
	}
	
}
