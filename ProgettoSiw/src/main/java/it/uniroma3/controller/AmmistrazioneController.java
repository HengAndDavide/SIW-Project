package it.uniroma3.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import it.uniroma3.model.CentroFormazione;
import it.uniroma3.service.AmministrazioneService;
import it.uniroma3.service.CentroFormazioneService;

public class AmmistrazioneController {

	@Autowired
	private CentroFormazioneService centroFormazioneService;
	
	@Autowired
	private AmministrazioneService as;
	
	private CentroFormazione cf;
	
	@RequestMapping("/nUtentiCentro")
	public String nUtentiCentro(Model model) {
		cf.getListaAttivita();
		return "statistiche";
	}
	
	

}
