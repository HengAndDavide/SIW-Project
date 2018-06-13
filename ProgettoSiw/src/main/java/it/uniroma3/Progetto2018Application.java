package it.uniroma3;

import java.util.Date;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

import it.uniroma3.model.Allievo;
import it.uniroma3.service.AllievoService;
import it.uniroma3.service.AttivitaService;
import it.uniroma3.service.CentroFormazioneService;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class Progetto2018Application {

	@Autowired
	private AllievoService allievoService;

	@Autowired
	private AttivitaService attivitaService;

	@Autowired
	private CentroFormazioneService CentroFormazioneService;

	public static void main(String[] args) {
		SpringApplication.run(Progetto2018Application.class, args);
	}

	@PostConstruct
	public void init() {

		// Date data = new Date();
		// Allievo allievo = new Allievo();
		// allievo.setNome("");
		// allievo.setCognome("");
		// allievo.setDataNascita(data);
		// allievo.setEmail("");
		// allievo.setTelefono("");
		// allievo.setLuogoNascita("");
		// allievoService.save(allievo);

		// CentroFormazione centroFormazione = new CentroFormazione();
		// centroFormazione.setNome("Pittura");
		// centroFormazione.setEmail("pittura@centro.it");
		// centroFormazione.setIndirizzo("Via Arte");
		// centroFormazione.setTelefono("06453453");
		// centroFormazione.setCapienzaMassima(30);
		// CentroFormazioneService.save(centroFormazione);
		//
		// Attivita attivita = new Attivita();
		// attivita.setDescrizione("Natura Morta");
		// attivita.setPrezzo(70);
		// attivita.setCentroFormazione(centroFormazione);
		// attivitaService.save(attivita);

	}

}
