            function validatepassword() {
				
 					// Verifica la presenza della nuova password
   					 var test = true;
	  				 var inputElements = document.getElementById('cambiapassword').elements;

	  				for(var i = 0; i< inputElements.length;i++) {
                    
                        //Se non è presente il contenuto presenta un messaggio e dichiara false la variabile test.

	         			 if (inputElements[i].value =='') {
							test = false;
							
							var label = inputElements[i].name;
							alert("E' necessario fornire la nuova " + label);
     				     }	  
     				     
 					 }	
 					

					if (test) {
 						// la password è presente
   
                        //chiede la conferma all'utente
                        var password = inputElements[1].value;
                        var outsideconferma = window.confirm("Conferma la sua nuova Password: '" +password+ "' ?");
     
                       if (outsideconferma) {
                          return true;
                       }
					    else {  
                          window.alert("La sua password non è stata cambiata");
                          return false;
                        }
						
					}
					else {
  					 return false; }
     		     	
			}
			
			
			
			