package it.uniroma3;

import java.util.Date;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

import it.uniroma3.model.Allievo;
import it.uniroma3.model.Attivita;
import it.uniroma3.model.CentroFormazione;
import it.uniroma3.model.Responsabile;
import it.uniroma3.service.AllievoService;
import it.uniroma3.service.AttivitaService;
import it.uniroma3.service.CentroFormazioneService;
import it.uniroma3.service.ResponsabileService;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class Progetto2018Application {

	@Autowired
	private AllievoService allievoService;

	@Autowired
	private AttivitaService attivitaService;

	@Autowired
	private ResponsabileService r;

	@Autowired
	private CentroFormazioneService CentroFormazioneService;

	public static void main(String[] args) {
		SpringApplication.run(Progetto2018Application.class, args);
	}

	@PostConstruct
	public void init() {

		Date data = new Date();
		Allievo allievo = new Allievo();
		allievo.setNome("Heng");
		allievo.setCognome("Ge");
		allievo.setDataNascita(data);
		allievo.setEmail("geheng@gmail.com");
		allievo.setTelefono("065432");
		allievo.setLuogoNascita("Cina");
		allievoService.save(allievo);

		Responsabile r = new Responsabile();
		r.setUsername("admin");
		r.setPassword("admin");
		r.setRole("admin");
		this.r.save(r);

		CentroFormazione centroFormazione = new CentroFormazione();
		centroFormazione.setNome("Artistico");
		centroFormazione.setEmail("artistico@centro.it");
		centroFormazione.setIndirizzo("Via Arte");
		centroFormazione.setTelefono("06453453");
		centroFormazione.setCapienzaMassima(30);
		this.CentroFormazioneService.save(centroFormazione);
		
		r = new Responsabile();
		r.setUsername("rArte");
		r.setPassword("arte");
		r.setRole("responsabile");
		r.setCentroFormazione(centroFormazione);
		this.r.save(r);

		Attivita attivita = new Attivita();
		attivita.setDescrizione("Pittura");
		attivita.setPrezzo(70);
		attivita.setDataAttivita(new Date());
		attivita.setCentroFormazione(centroFormazione);
		attivitaService.save(attivita);
		
		centroFormazione = new CentroFormazione();
		centroFormazione.setNome("Sportivo");
		centroFormazione.setEmail("sportivo@centro.it");
		centroFormazione.setIndirizzo("Via sport");
		centroFormazione.setTelefono("0678653");
		centroFormazione.setCapienzaMassima(300);
		this.CentroFormazioneService.save(centroFormazione);

		r = new Responsabile();
		r.setUsername("rSport");
		r.setPassword("sport");
		r.setRole("responsabile");
		r.setCentroFormazione(centroFormazione);
		this.r.save(r);
		
		attivita = new Attivita();
		attivita.setDescrizione("Calcio");
		attivita.setPrezzo(150);
		attivita.setDataAttivita(new Date());
		attivita.setCentroFormazione(centroFormazione);
		attivitaService.save(attivita);

	}

}
