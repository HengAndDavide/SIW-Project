			function verificapersona() {
				
 					// Verifica che i dati di accesso esistono.
 					
 					// Genera un array con i contenuti dei campi del form Utenti.
   					 var test = true;
	  				 var accessElements = document.getElementById('verificadati').elements;

             	    // Sequenzialmente verifica la presenza dei dati di accesso.
	  				for(var i = 0; i< accessElements.length;i++) {
                      if ((accessElements[i].name=='User') && (accessElements[i].value =='')) {
							test = false;
							
							var label = accessElements[i].name;
							alert("E' necessario fornire la UserName");
     				     }	
     				     
     				     if ((accessElements[i].name=='Pass') && (accessElements[i].value =='')) {
							test = false;
							
							var label = accessElements[i].name;
							alert("E' necessario fornire la Password");
     				     }
        		   } 					
 	
				if (test) {
 						// Tutti i dati di accesso sono presenti ed accede alla pagina di modifica dei dati di utente
						
						return true;
					}
					else {
					// Non tutti i dati di accesso sono presenti per cui non accede alla pagina di modifica dei dati di utente
  					 return false; }
     		     
				}
				
				