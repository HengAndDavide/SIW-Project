package it.uniroma3;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

import it.uniroma3.model.Responsabile;
//import it.uniroma3.service.CentroFormazioneService;
import it.uniroma3.service.ResponsabileService;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class Progetto2018Application {

	// @Autowired
	// private AllievoService allievoService;

	// @Autowired
	// private AttivitaService attivitaService;

	@Autowired
	private ResponsabileService r;

	// @Autowired
	// private CentroFormazioneService CentroFormazioneService;

	public static void main(String[] args) {
		SpringApplication.run(Progetto2018Application.class, args);
	}

	@PostConstruct
	public void init() {

		// Responsabile r = new Responsabile("admin", "admin", "admin", "admin",
		// "admin");
		// this.r.save(r);
		// r = new Responsabile("res", "res", "res", "res", "res");
		// this.r.save(r);	

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
		// this.CentroFormazioneService.save(centroFormazione);

		// Attivita attivita = new Attivita();
		// attivita.setDescrizione("Natura Morta");
		// attivita.setPrezzo(70);
		// attivita.setCentroFormazione(centroFormazione);
		// attivitaService.save(attivita);

	}

}
