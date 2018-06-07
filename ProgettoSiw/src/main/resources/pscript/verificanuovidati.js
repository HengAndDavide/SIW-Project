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
			
			
			
			function validateusername() {
				
 					// Verifica la presenza della nuova username
   					 var test = true;
	  				 var inputElements = document.getElementById('cambiausername').elements;

	  				for(var i = 0; i< inputElements.length;i++) {
                    
                        //Se non è presente il contenuto presenta un messaggio e dichiara false la variabile test.

	         			 if (inputElements[i].value =='') {
							test = false;
							
							var label = inputElements[i].name;
							alert("E' necessario fornire la nuova " + label);
     				     }	  
     				     
 					 }	
 					

					if (test) {
 						// la username è presente
   
                        //chiede la conferma all'utente
                        var username = inputElements[1].value;
                        var outsideconferma = window.confirm("Conferma la sua nuova User Name: '" +username+ "' ?");
     
                       if (outsideconferma) {
                          return true;
                       }
					    else {  
                          window.alert("La sua User Name non è stata cambiata");
                          return false;
                        }
						
					}
					else {
  					 return false; }
     		     	
			}
			
			
			

			
				function validateemail() {
				
 					// Verifica la presenza della nuova email
   					 var test = true;
	  				 var inputElements = document.getElementById('cambiaemail').elements;

	  				for(var i = 0; i< inputElements.length;i++) {
                    
                        //Se non è presente il contenuto presenta un messaggio e dichiara false la variabile test.

	         			 if (inputElements[i].value =='') {
							test = false;
							
							var label = inputElements[i].name;
							alert("E' necessario fornire la nuova " + label);
     				     }	  
     				     
 					 }	
 					

					if (test) {
 						// la email è presente
   
 					    //chiede la conferma all'utente
                        var email = inputElements[1].value;
                        var outsideconferma = window.confirm("Conferma la sua nuova Email: '" +email+ "' ?");
     
                       if (outsideconferma) {
                          return true;
                       }
					    else {  
                          window.alert("La sua Email non è stata cambiata");
                          return false;
                        }
						
					}
					else {
  					 return false; }
     		     	
			}