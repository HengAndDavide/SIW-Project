package it.uniroma3.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import it.uniroma3.model.Attivita;
import it.uniroma3.model.CentroFormazione;

public class AmministrazioneService {

	private CentroFormazioneService centroFormazioneService;

	private List<CentroFormazione> centri = this.centroFormazioneService.findAll();

	public Map<CentroFormazione, Integer> classificaPerNAllievi() {
		Map<CentroFormazione, Integer> centro2Integer = new HashMap<>();
		for (CentroFormazione centro : this.centri) {
			for (Attivita attivita : centro.getListaAttivita()) {
				int n = attivita.getListaPartecipazioni().size();
				if (!centro2Integer.containsKey(centro))
					centro2Integer.put(centro, n);
				else
					centro2Integer.put(centro, centro2Integer.get(centro) + n);
			}
		}
		return centro2Integer;
	}

	@SuppressWarnings("unchecked")
	public List<CentroFormazione> ordina() {
		Map<CentroFormazione, Integer> map = classificaPerNAllievi();
		return (List<CentroFormazione>) sortByValue(map);
	}

	public <K, V extends Comparable<? super V>> Map<K, V> sortByValue(Map<K, V> map) {
		List<Entry<K, V>> list = new ArrayList<>(map.entrySet());
		list.sort(Entry.comparingByValue());

		Map<K, V> result = new LinkedHashMap<>();
		for (Entry<K, V> entry : list) {
			result.put(entry.getKey(), entry.getValue());
		}

		return result;
	}
}
