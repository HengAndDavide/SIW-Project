package it.uniroma3;

import java.util.Date;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import it.uniroma3.model.Allievo;
import it.uniroma3.service.AllievoService;

@SpringBootApplication
public class Progetto2018Application {

	@Autowired
	private AllievoService allievoService;

	public static void main(String[] args) {
		SpringApplication.run(Progetto2018Application.class, args);
	}

	// @PostConstruct
	// public void init() {
	// Customer customer = new Customer("Paolo", "Merialdo", "Genova");
	// customerService.save(customer);
	// for(Customer c : customerService.findByCity("Genova")) {
	// System.out.println(c.getName());
	// }
	// }

	@PostConstruct
	public void init() {
		Allievo allievo = new Allievo();
		allievo.setNome("Davide");
		allievo.setCognome("Vergari");
		allievo.setDataNascita(new Date());
		allievo.setEmail("davidevergari@gmail.it");
		allievo.setLuogoNascita("Roma");
		allievo.setTelefono("06432423");
		allievoService.save(allievo);
		for (Allievo c : allievoService.findByLuogoNascita("Roma")) {
			System.out.println(c.getNome());
		}
	}

}
