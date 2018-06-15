package it.uniroma3.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import it.uniroma3.service.CentroFormazioneService;

@Controller
public class CentroFormazioneController {

	@Autowired
	private CentroFormazioneService centroFormazioneService;
	
	// Search CentroFormazione tramite ID
	@RequestMapping(value = "/findCentroFormazioneId/{id}", method = RequestMethod.GET)
	public String findCentroFormazione(@PathVariable("id") Long id, Model model) {
		model.addAttribute("centroFormazioneTrovato", this.centroFormazioneService.findById(id));
		return "centroFormazione/showCentroFormazione";
	}


//	// Persistence CentroFormazione
//	@RequestMapping(value = "/admin/saveCentroFormazione", method = RequestMethod.POST)
//	public String nuovoCentroFormazione(@Valid @ModelAttribute("centroFormazione") CentroFormazione centroFormazione,
//			Model model, BindingResult bindingResult) {
//
//		this.validator.validate(centroFormazione, bindingResult);
//		if (!bindingResult.hasErrors()) {
//			this.centroFormazioneService.uploadParametri(centroFormazione);
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
//		return "centroFormazioneForm";
//	}
	
	@RequestMapping("/admin/homeCentroFormazione")
	public String homeCentroFormazione() {
		return "gestioneCentriFormazione";
	}
	
	// Ricerca CentroFormazione metodo Supporto
	@RequestMapping("/admin/cercaCentroFormazione")
	public String cercaCentroFormazione() {
		return "centroFormazione/findCentroFormazione";
	}
	
//	// Delete CentroFormazione tramite Id
//	@RequestMapping(value = "/admin/cancellaCentroFormazione/{id}", method = RequestMethod.GET)
//	public String cancelllaCentroFormazione(@PathVariable("id") Long id, Model model) {
//		this.centroFormazioneService.delete(id);
//		return "centroFormazione/deleteCentroFormazione";
//	}

	// Modifica CentroFormazione tramite id Supporto
	@RequestMapping(value = "/admin/modificaCentroFormazione/{id}", method = RequestMethod.GET)
	public String modificaCentroFormazione(@PathVariable("id") Long id, Model model) {
		model.addAttribute("centroFormazioneTrovato", this.centroFormazioneService.findById(id));
		return "centroFormazione/mergeCentroFormazione";
	}
//
//	// Update CentroFormazione tramite Id
//	@RequestMapping(value = "/admin/updateCentroFormazione/{id}", method = RequestMethod.POST)
//	public String updateCentroFormazione(@PathVariable("id") Long id, @RequestParam("nome") String nome,
//			@RequestParam("indirizzo") String indirizzo, @RequestParam("email") String email,
//			@RequestParam("telefono") String telefono, @RequestParam("capienzaMassima") int capienzaMassima,
//			Model model) {
//		CentroFormazione CentroFormazione = this.centroFormazioneService
//				.update(this.centroFormazioneService.findById(id), nome, indirizzo, email, telefono, capienzaMassima);
//		this.centroFormazioneService.uploadParametri(CentroFormazione);
//		this.centroFormazioneService.save(CentroFormazione);
//		model.addAttribute("centroFormazioneTrovato", CentroFormazione);
//		return "centroFormazione/showCentroFormazione";
//	}

	// Mostra Lista CentriFormazione
	@RequestMapping("/admin/listaCentriFormazione")
	public String listaCentri(Model model) {
		model.addAttribute("listaCentriFormazione", this.centroFormazioneService.findAll());
		return "centroFormazione/centroFormazioneList";
	}

}