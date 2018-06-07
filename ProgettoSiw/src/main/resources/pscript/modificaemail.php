 <!DOCTYPE html> 
 <html> 
      <head>
		<title>modificaemail</title>
		
        
        <meta charset="utf-8">
		 
	  </head>
	
	  <body>

 		   <?php
 		   	
			// ottiene l'indice della tabella Utenti corrispondente all'utente
		    $Indpersona = trim($_REQUEST['indice']);
		    
		    // nuova Email
		    $NuovaEmail = trim($_REQUEST['Email']);

			 // contiene i dati di accesso a mysql e al database
			 require 'accessoDB.php';
			 			 
			 // esegue la connessione a mysql
             $dbc = mysql_connect($database_host, $usernameDB, $passwordDB)
             or die("<p>Non &eacute riuscita la connessione a mysql: " . mysql_error() . "</p>");


             // esegue la selezione del data base DBinfoutenti
             mysql_select_db($database_name, $dbc)
             or die("<p>Errore nella selezione del data base DBinfoutenti:" . mysql_error() . "</p>");
             
             // esegue il lock tables per gestire correttamente eventuali accessi contemporanei alla tabella Utenti
              $controllo = mysql_query("LOCK TABLES Utenti WRITE"); 
              
             // esegue la query per modificare la password.
               $cambiamail = "UPDATE Utenti SET Email = '$NuovaEmail' WHERE user_id = $Indpersona";
                mysql_query($cambiamail);
             
             
                 // invia la email di conferma di modifica della email ----------------------------
        
		           // ottiene il Nome della persona
                   $select_query = "SELECT * FROM Utenti WHERE user_id = $Indpersona"; // Write your SQL query, and store it in a string or a variable.
                   // Esegue le queries
                   $result = mysql_query($select_query);  // Pass your query into mysql_query and get back a PHP resource. 
      		       $row = mysql_fetch_row($result); // Pass that resource into mysql_fetch_row to get back rows of results, one at a time.
      		       $Nome = $row[7];
      		       
      		       $Cognome = $row[8];
          	       
          	       
          	  $controllo = mysql_query("UNLOCK TABLES");      
              
                
                  // esegue l'invio della email ----------------------------------------
			   
			       $email = $NuovaEmail;
			   
			     //  echo"<meta http-equiv='ContentType' content='text/html; charset=ISO-88591'/>";
			   
			       $oggetto = "Conferma della modifica dei tuoi dati personali dalla ..........\n\n";
			   
			       //$messaggio .= "Content-type: text/html; charset=UTF-8\n";
				   //$messaggio .= "Content-Transfer-Encoding: 8bit\n";
			
			       $messaggio = "Gentile $Nome $Cognome,\n\n";
			       $messaggio .= "le confermiamo che ha cambiato la email.\n\n";
			       $messaggio .= "Grazie per la sua collaborazione.";
			    
			       // limita la lunghezza di riga a 140 caratteri per la compatibilità
			       $messaggio = wordwrap($messaggio,140);
			 
			       // invia la email
			       mail($email,$oggetto,$messaggio,"Da/From: pippo@pluto.com\r\n"
			       ."From: pippo@pluto.com\r\n"
   				   ."X-Mailer: PHP/" . phpversion());
			    
			       // ------------------------------------------------------------------
             
             echo "<script>
                        alert('Ha modificato il suo indirizzo email. Ora è $NuovaEmail'); 
                        window.location='javascript:history.go(-1)';
                      </script>"; 
		    
			  
		   ?>
			    
			
      </body>
</html>