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

import it.uniroma3.controller.validator.CentroFormazioneValidator;
import it.uniroma3.model.CentroFormazione;
import it.uniroma3.service.CentroFormazioneService;

@Controller
public class CentroFormazioneController {

	@Autowired
	private CentroFormazioneService centroFormazioneService;

	@Autowired
	private CentroFormazioneValidator validator;

	@RequestMapping("/homeCentroFormazione")
	public String homeCentroFormazione() {
		return "centroFormazione/gestioneCentriFormazione";
	}

//	// Inserisci CentroFormazione metodo Supporto
//	@RequestMapping("/inserisciCentroFormazione")
//	public String inserisciCentroFormazione(Model model) {
//		model.addAttribute("centroFormazione", new CentroFormazione());
//		return "centroFormazione/centroFormazioneForm";
//	}
//
//	// Persistence CentroFormazione
//	@RequestMapping(value = "/saveCentroFormazione", method = RequestMethod.POST)
//	public String nuovoCentroFormazione(@Valid @ModelAttribute("centroFormazione") CentroFormazione centroFormazione,
//			Model model, BindingResult bindingResult) {
//		
//		this.validator.validate(centroFormazione, bindingResult);
//		if (!bindingResult.hasErrors()) {
//			this.centroFormazioneService.uppa(centroFormazione);
//			if (this.centroFormazioneService.alreadyExists(centroFormazione)) {
//				model.addAttribute("exists", "CentroFormazione esiste gia'");
//				return "centroFormazione/centroFormazioneForm";
//			} else {
//
//				this.centroFormazioneService.save(centroFormazione);
//				model.addAttribute("centroFormazioneTrovato", centroFormazione);
//				return "centroFormazione/showCentroFormazione";
//			}
//		}
//		return "centroFormazione/centroFormazioneForm";
//	}

	// Ricerca CentroFormazione metodo Supporto
	@RequestMapping("/cercaCentroFormazione")
	public String cercaCentroFormazione() {
		return "centroFormazione/findCentroFormazione";
	}

	// Search CentroFormazione Email
	@RequestMapping(value = "/findCentroFormazione")
	public String findCentroFormazione(@RequestParam("nome") String nome, Model model) {

		if (!nome.equals("") && nome != null) {
			this.centroFormazioneService.uploadString(nome);
			CentroFormazione CentroFormazioneTrovato = this.centroFormazioneService.findByNome(nome);
			if (CentroFormazioneTrovato == null) {
				model.addAttribute("notexists", "centroFormazione non esiste");
				return "centroFormazione/findCentroFormazione";
			} else {
				model.addAttribute("centroFormazioneTrovato", CentroFormazioneTrovato);
				return "centroFormazione/showCentroFormazione";
			}
		}
		model.addAttribute("errorParam", "Inserisci Nome Centro Formazione");
		return "centroFormazione/findCentroFormazione";
	}

	// Search CentroFormazione tramite ID
	@RequestMapping(value = "/findCentroFormazioneId/{id}", method = RequestMethod.GET)
	public String findCentroFormazione(@PathVariable("id") Long id, Model model) {
		model.addAttribute("centroFormazioneTrovato", this.centroFormazioneService.findById(id));
		return "centroFormazione/showCentroFormazione";
	}

	// Modifica CentroFormazione tramite id Supporto
	@RequestMapping(value = "/modificaCentroFormazione/{id}", method = RequestMethod.GET)
	public String modificaCentroFormazione(@PathVariable("id") Long id, Model model) {
		model.addAttribute("centroFormazioneTrovato", this.centroFormazioneService.findById(id));
		return "centroFormazione/mergeCentroFormazione";
	}

	// Update CentroFormazione tramite Id
	@RequestMapping(value = "/updateCentroFormazione/{id}", method = RequestMethod.POST)
	public String updateCentroFormazione(@PathVariable("id") Long id, @RequestParam("nome") String nome,
			@RequestParam("indirizzo") String indirizzo, @RequestParam("email") String email,
			@RequestParam("telefono") String telefono, @RequestParam("capienzaMassima") int capienzaMassima,
			Model model) {
		CentroFormazione CentroFormazione = this.centroFormazioneService
				.update(this.centroFormazioneService.findById(id), nome, indirizzo, email, telefono, capienzaMassima);
		this.centroFormazioneService.uploadParametri(CentroFormazione);
		this.centroFormazioneService.save(CentroFormazione);
		model.addAttribute("centroFormazioneTrovato", CentroFormazione);
		return "centroFormazione/showCentroFormazione";
	}

	// Mostra Lista CentriFormazione
	@RequestMapping("/listaCentriFormazione")
	public String listaCentri(Model model) {
		model.addAttribute("listaCentriFormazione", this.centroFormazioneService.findAll());
		return "centroFormazione/centroFormazioneList";
	}

	// Delete CentroFormazione tramite Id
	@RequestMapping(value = "/cancellaCentroFormazione/{id}", method = RequestMethod.GET)
	public String cancelllaCentroFormazione(@PathVariable("id") Long id, Model model) {
		this.centroFormazioneService.delete(id);
		return "centroFormazione/deleteCentroFormazione";
	}

}