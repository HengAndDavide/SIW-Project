 <!DOCTYPE html> 
 <html> 
      <head>
		<title>modificapassword</title>
		
        
        <meta charset="utf-8">
		 
	  </head>
	
	  <body>

 		   <?php
 		   	
			// ottiene l'indice della tabella Utenti corrispondente all'utente
		    $Indpersona = trim($_REQUEST['indice']);
		    
		    // nuova password
		    $NuovaPassword = trim($_REQUEST['Password_client']);

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

        //    $NuovaPassword = Sha1($NuovaPassword); // esegue la cifratura della password generando la versione a 40 caratteri

              
             // esegue la query per modificare la password.
               $cambiapassword = "UPDATE Utenti SET Password = '$NuovaPassword' WHERE user_id = $Indpersona";
                mysql_query($cambiapassword);
                
             
              // invia la email di conferma di modifica della password ----------------------------
        
		           // ottiene la email e il Nome della persona
                   $select_query = "SELECT * FROM Utenti WHERE user_id = $Indpersona"; // Write your SQL query, and store it in a string or a variable.
                   // Esegue le queries
                   $result = mysql_query($select_query);  // Pass your query into mysql_query and get back a PHP resource. 
      		       $row = mysql_fetch_row($result); // Pass that resource into mysql_fetch_row to get back rows of results, one at a time.
      		       $Nome = $row[7];
      		       
      		       $Cognome = $row[8];
      		       
          	       $email = $row[4];
          	       
          	       
          	  $controllo = mysql_query("UNLOCK TABLES");      
              
                
                  // esegue l'invio della email ----------------------------------------

			   
			     //  echo"<meta http-equiv='ContentType' content='text/html; charset=ISO-88591'/>";
			   
			       $oggetto = "Conferma del cambio dei dati di accesso dalla ..............\n\n";
			   
			       //$messaggio .= "Content-type: text/html; charset=UTF-8\n";
				   //$messaggio .= "Content-Transfer-Encoding: 8bit\n";
			
			       $messaggio = "Gentile $Nome $Cognome,\n\n";
			       $messaggio .= "le confermiamo che ha cambiato la sua password.\n\n";
			       $messaggio .= "Grazie per la sua collaborazione.";
			    
			       // limita la lunghezza di riga a 140 caratteri per la compatibilità
			       $messaggio = wordwrap($messaggio,140);
			 
			       // invia la email
			       mail($email,$oggetto,$messaggio,"Da/From: pippo@pluto.com\r\n"
			       ."From: pippo@pluto.com\r\n"
   				   ."X-Mailer: PHP/" . phpversion());
			    
			       // ------------------------------------------------------------------
             
             echo "<script>
                        alert('Ha modificato la sua password.'); 
                        window.location='javascript:history.go(-2)';
                      </script>"; 
		    
			  
		   ?>
			    
			
      </body>
</html>