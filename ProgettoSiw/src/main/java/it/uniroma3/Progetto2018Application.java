package it.uniroma3;

import java.util.Date;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import it.uniroma3.model.Allievo;
import it.uniroma3.service.AllievoService;
import it.uniroma3.service.AttivitaService;

@SpringBootApplication
public class Progetto2018Application {

	@Autowired
	private AllievoService allievoService;

	@Autowired
	private AttivitaService attivitaService;

	public static void main(String[] args) {
		SpringApplication.run(Progetto2018Application.class, args);
	}

	@SuppressWarnings("deprecation")
	@PostConstruct
	public void init() {
		
		Allievo allievo = new Allievo();
		Date data = new Date(1993 - 1900, 03 - 1, 05);
		allievo.setNome("Heng");
		allievo.setCognome("Ge");
		allievo.setDataNascita(data);
		allievo.setEmail("geheng@gmail.it");
		allievo.setLuogoNascita("Cina");
		allievo.setTelefono("06432423");
		allievoService.save(allievo);
		
		
	}

}
