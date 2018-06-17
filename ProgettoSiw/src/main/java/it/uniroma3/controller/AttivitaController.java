package it.uniroma3.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import it.uniroma3.controller.validator.AttivitaValidator;
import it.uniroma3.model.Attivita;
import it.uniroma3.service.AttivitaService;

@Controller
public class AttivitaController {

	@Autowired
	private AttivitaService attivitaService;

	@Autowired
	private AttivitaValidator validator;

	@Autowired
	private MainController mainController;

	@RequestMapping("/homeAttivita")
	public String homeAttivita() {
		return "attivita/gestioneAttivita";
	}

	@RequestMapping("/inserisciAttivita")
	public String addAttivita(Model model) {
		model.addAttribute("attivita", new Attivita());
		return "attivita/attivitaForm";
	}

	@RequestMapping(value = "/saveAttivita", method = RequestMethod.POST)
	public String saveAttivita(@Valid @ModelAttribute("attivita") Attivita attivita, Model model,
			BindingResult bindingResult) {
		this.validator.validate(attivita, bindingResult);
		if (!bindingResult.hasErrors()) {
			this.attivitaService.uploadParametri(attivita);
			if (this.attivitaService.alreadyExists(attivita)) {
				model.addAttribute("exists", "Attivita esiste gia'");
				return "attivita/attivitaForm";
			} else {
				this.attivitaService.save(attivita, mainController.getCentroFormazione());
				model.addAttribute("attivitaTrovata", attivita);
				return "attivita/showAttivita";
			}
		}
		return "attivita/attivitaForm";
	}

	@RequestMapping("/cercaAttivita")
	public String cercaAttivita() {
		return "attivita/findAttivita";
	}

	@RequestMapping(value = "/findAttivita")
	public String findAttivita(@RequestParam("descrizione") String descrizione, Model model) {

		if (!descrizione.equals("") && descrizione != null) {
			this.attivitaService.uploadString(descrizione);
			Attivita attivitaTrovato = this.attivitaService.findByDescrizione(descrizione);
			if (attivitaTrovato == null) {
				model.addAttribute("notexists", "Attivita non esiste");
				return "attivita/findAttivita";
			} else {
				model.addAttribute("attivitaTrovato", attivitaTrovato);
				return "attivita/showAttivita";
			}
		}
		model.addAttribute("errorParam", "Inserisci Descrizione");
		return "attivita/findAttivita";
	}

	@RequestMapping(value = "/findAttivitaId/{id}", method = RequestMethod.GET)
	public String findAttivita(@PathVariable("id") Long id, Model model) {
		model.addAttribute("attivitaTrovata", this.attivitaService.findById(id));
		return "attivita/showAttivita";
	}

	@RequestMapping(value = "/modificaAttivita/{id}", method = RequestMethod.GET)
	public String modificaAttivita(@PathVariable("id") Long id, Model model) {
		model.addAttribute("attivitaTrovato", this.attivitaService.findById(id));
		return "attivita/mergeAttivita";
	}

	@RequestMapping(value = "/updateAttivita/{id}", method = RequestMethod.POST)
	public String updateAttivita(@PathVariable("id") Long id, @RequestParam("descrizione") String decrizione,
			@RequestParam("prezzo") Double prezzo, Model model) {
		Attivita attivita = this.attivitaService.update(this.attivitaService.findById(id), decrizione, prezzo);
		this.attivitaService.uploadParametri(attivita);
		this.attivitaService.save(attivita, mainController.getCentroFormazione());
		model.addAttribute("attivitaTrovata", attivita);
		return "attivita/showAttivita";
	}

	@RequestMapping("/listaAttivita")
	public String listaAttivita(Model model) {
		model.addAttribute("listaAttivita", this.attivitaService.findAll());
		return "attivita/attivitaList";
	}

	@RequestMapping(value = "/cancellaAttivita/{id}", method = RequestMethod.GET)
	public String cancelllaAttivita(@PathVariable("id") Long id, Model model) {
		this.attivitaService.delete(id);
		return "attivita/deleteAttivita";
	}

}