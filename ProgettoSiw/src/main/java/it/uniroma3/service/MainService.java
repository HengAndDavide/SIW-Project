package it.uniroma3.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import it.uniroma3.controller.AttivitaController;
import it.uniroma3.model.Responsabile;

@Transactional
@Service
public class MainService {
	
	@Autowired
	private AttivitaController attivitaController;

	public String gestisci(Responsabile responsabile) {
		if (responsabile.getRole().equals("admin")) {
			return "amministrazione/amministrazione";
		}
		this.attivitaController.setCf(responsabile.getCentroFormazione());
		return "listaCentri/centro" + responsabile.getCentroFormazione().getNome();
	}

}
