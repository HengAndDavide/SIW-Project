			function verificaclient() {
				
 					// Verifica che i dati di accesso esistono.
 					
 					// Genera un array con i contenuti dei campi del form Utenti.
   					 var test = true;
	  				 var accessElements = document.getElementById('Utenti').elements;

             	    // Sequenzialmente verifica la presenza dei dati di accesso.
	  				for(var i = 0; i< accessElements.length;i++) {
                      if ((accessElements[i].name=='UserName') && (accessElements[i].value =='')) {
							test = false;
							
							var label = accessElements[i].name;
							alert("E' necessario fornire l'"+ label);
     				     }	
     				     
     				     if ((accessElements[i].name=='Password') && (accessElements[i].value =='')) {
							test = false;
							
							var label = accessElements[i].name;
							alert("E' necessario fornire la " + label);
     				     }
        		   } 					
 	
				if (test) {
 						// Tutti i dati di accesso sono presenti ed accede alla pagina Contatti o Gruppi
						
						return true;
					}
					else {
					// Non tutti i dati di accesso sono presenti per cui non accede alla pagina Contatti o Gruppi
  					 return false; }
     		     
				}
				
				