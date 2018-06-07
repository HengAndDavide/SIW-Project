           function startMail() {
				
 					// Verifica che la email è stata fornita.
 					
 					// Genera un array con i contenuti dei campi del form Utenti.
   					 var test = true;
	  				 var accessElements = document.getElementById('Recuperadati').elements;

             	    // Sequenzialmente verifica la presenza dei dati di accesso.
	  				for(var i = 0; i< accessElements.length;i++) {
                      if ((accessElements[i].name=='Email') && (accessElements[i].value =='')) {
							test = false;
							
							var label = accessElements[i].name;
							alert("E' necessario fornire la " + label);
     				     }	
        		   } 					
 	
				if (test) {
 						// La email è stata fornita dall'utente
						
						return true;
					}
					else {
					// La email non è stata fornita dall'utente
  					 return false; }
     		     
				}