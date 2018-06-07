         function validateform() {
				
 					// Genera un array con i contenuti dei campi del form Iscrizione.
   					 var test = true;
	  				 var inputElements = document.getElementById('Iscriviti').elements;

             	    // Sequenzialmente verifica la presenza di tutti i campi REQUIRED.
	  				for(var i = 0; i< inputElements.length;i++) {
                    // Verifica se l’elemento è di tipo Required.
	     			 if (inputElements[i].hasAttribute('required')) {
                        // Se l’elemento è Required verifica se è presente il contenuto 
                        //Se non è presente il contenuto presenta un messaggio e dichiara false la variabile test.

	         			 if (inputElements[i].value =='') {
							test = false;
							
							var label = inputElements[i].name;
							alert("E' necessario fornire il dato: " + label);
     				     }	  
     				     
 					 }  // termina l'If dei required	
 					
 					 // Se l’elemento è il Checkbox verifica se è stato marcato 
                        //Se non è stato marcato presenta un messaggio e dichiara false la variabile test.
 					 if ((inputElements[i].name=='Accetta i termini del servizio?') && (!inputElements[i].checked)) {
							test = false;
							
							var label = inputElements[i].name;
							alert("E' necessario accettare i termini del servizio per comunicare attraverso le risorse di questo Social Network. E' necessario marcare il piccolo riquadro presso: " + label);
							
        		     }
        		   
        		   
         		   //Se non è presente il contenuto del captcha dichiara false la variabile test.
                     if (inputElements[i].name=='cpt') {
	         			 if ((inputElements[i].name=='cpt') && (inputElements[i].value =='')) {
							test = false;							
							alert("E' necessario scrivere il CODICE");
     				     }	
     				     else { 
     				       var inputcaptcha = inputElements[i].value;
     				     }    				            		     
        		      }
        		   
        		   }  // termina il for
	   
 
         		   //Se il testo fornito non é uguale al CAPTCHA dichiara false la variabile test.
 
	         			 if (inputcaptcha != outsidecaptcha) {
							test = false;
							alert("Non ha inserito correttamente il CODICE");
     				     }          		   
        		   

					if (test) {
 						// Tutti i campi Required sono presenti
   
 					    //chiede la conferma all'utente
                        var outsideconferma = window.confirm("Conferma i suoi dati di utente?");

                        var nome = inputElements[2].value;
                        var cognome = inputElements[3].value;
                        var matricola = inputElements[4].value;
                        var email = inputElements[5].value;
                        var username = inputElements[6].value;
                        var password = inputElements[7].value;
                        
                        var outsideconferma = window.confirm("Conferma il suo Nome: '" +nome+ "' ?");
                        var outsideconferma = window.confirm("Conferma il suo Cognome: '" +cognome+ "' ?");
                        var outsideconferma = window.confirm("Conferma la sua matricola: '" +matricola+ "' ?");
                        var outsideconferma = window.confirm("Conferma la sua email: '" +email+ "' ?");                        
                        var outsideconferma = window.confirm("Conferma il suo UserName: '" +username+ "' ?");
                        var outsideconferma = window.confirm("Conferma la sua Password: '" +password+ "' ?");
     
                       if (outsideconferma) {
                         outsidestato = true;
                          return false;
                       }
					    else {  
                          window.alert("Non ha confermato i suoi dati");
                         outsidestato = false;
                          return false;
                        }						
					}
					else {
					 outsidestato = false;
  					 return false; }
     		     	
			}