package it.uniroma3.controller;

import org.springframework.beans.factory.annotation.Autowired;

import it.uniroma3.controller.validator.CentroFormazioneValidator;
import it.uniroma3.service.CentroFormazioneService;

public class AmmistrazioneController {

	@Autowired
	private CentroFormazioneService centroFormazioneService;

	@Autowired
	private CentroFormazioneValidator validator;
	
	

}
