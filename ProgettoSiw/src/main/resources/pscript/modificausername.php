 <!DOCTYPE html> 
 <html> 
      <head>
		<title>modificausername</title>
		
        
        <meta charset="utf-8">
		 
	  </head>
	
	  <body>

 		   <?php
 		   	
			// ottiene l'indice della tabella Utenti corrispondente all'utente
		    $Indpersona = trim($_REQUEST['indice']);
		    
		    // precedente User Name
		    $attualeUserName = trim($_REQUEST['attualeUserName']);
		    
		    // nuova User Name
		    $NuovaUserName = trim($_REQUEST['UserName']);

			 // contiene i dati di accesso a mysql e al database
			 require 'accessoDB.php';
			 			 
			 // esegue la connessione a mysql
             $dbc = mysql_connect($database_host, $usernameDB, $passwordDB)
             or die("<p>Non &eacute riuscita la connessione a mysql: " . mysql_error() . "</p>");


             // esegue la selezione del data base DBinfoutenti
             mysql_select_db($database_name, $dbc)
             or die("<p>Errore nella selezione del data base DBinfoutenti:" . mysql_error() . "</p>");
              
 
        // Verifica che il dato di utente sensibile "UserName" non é presente nella tabella Utenti
             
             // determina il numero di utenti registrati
             $numero = mysql_query("SELECT count(user_id) FROM Utenti"); // il valore è in una tabella 1x1
             $num = mysql_fetch_array($numero); // il contenuto della tabella 1x1 è in un array 1x1
             $iterazioni = $num['count(user_id)']; // il contenuto dell'array è nella variabile
              
             $test = true; // è la variabile che si valuta successivamente per decidere modificare il dato di utente o meno
             // inizia a scandire la tabella
             
             $counter = 1;
             while ($counter <= $iterazioni):
               
                // esegue le query per la lettura dei dati sensibili da confrontare
                $user_id = $counter;
                // Build the SELECT statement
                $select_query = "SELECT * FROM Utenti WHERE user_id = $user_id"; // Write your SQL query, and store it in a string or a variable.
                // Esegue la query
                $result = mysql_query($select_query);  // Pass your query into mysql_query and get back a PHP resource. 
                if ($result) {
      			  $row = mysql_fetch_row($result); // Pass that resource into mysql_fetch_row to get back rows of results, one at a time.
       			  $Nomeutente = $row[6];
       			  $UserNameutente = $row[1];
                
      		    } 
      		    
      	
                if $NuovaUserName == $UserNameutente {
					
                  $test = false;
                 
                  break; // esce dalla scansione della tabella in quanto ha trovato la nuova username già presente nella tabella
                 
                 }
                 
                 $counter++;
               
             endwhile;             
             
             
             
            if ($test == true) {            
             
             // esegue il lock tables per gestire correttamente eventuali accessi contemporanei alla tabella Utenti
              $controllo = mysql_query("LOCK TABLES Utenti WRITE");                
              
             // esegue la query per modificare la UserName.
               $cambiausername = "UPDATE Utenti SET UserName = '$NuovaUserName' WHERE user_id = $Indpersona";
                mysql_query($cambiausername);
             
             
              // invia la email di conferma di modifica della UserName ----------------------------
        
		           // ottiene la email e il Nome della persona 
                   $select_query = "SELECT * FROM Utenti WHERE user_id = $Indpersona"; // Write your SQL query, and store it in a string or a variable.
                   // Esegue le queries
                   $result = mysql_query($select_query);  // Pass your query into mysql_query and get back a PHP resource. 
      		       $row = mysql_fetch_row($result); // Pass that resource into mysql_fetch_row to get back rows of results, one at a time.
      		       $Nome = $row[7];
      		       
      		       $Cognome = $row[8];
      		       
          	       $email = $row[4];
          	             
              
                
                  // esegue l'invio della email ----------------------------------------

			   
			     //  echo"<meta http-equiv='ContentType' content='text/html; charset=ISO-88591'/>";
			   
			       $oggetto = "Conferma del cambio dei dati di accesso dalla ..............\n\n";
			   
			       //$messaggio .= "Content-type: text/html; charset=UTF-8\n";
				   //$messaggio .= "Content-Transfer-Encoding: 8bit\n";
			
			       $messaggio = "Gentile $Nome $Cognome,\n\n";
			       $messaggio .= "le confermiamo che ha cambiato la sua UserName.\n\n";
			       $messaggio .= "La sua nuova UserName è '$NuovaUserName'.\n\n";
			       $messaggio .= "Grazie per la sua collaborazione.";
			    
			       // limita la lunghezza di riga a 140 caratteri per la compatibilità
			       $messaggio = wordwrap($messaggio,140);
			 
			       // invia la email
			       mail($email,$oggetto,$messaggio,"Da/From: pippo@pluto.com\r\n"
			       ."From: pippo@pluto.com\r\n"
   				   ."X-Mailer: PHP/" . phpversion());
			    
			       // ------------------------------------------------------------------
             
                   echo "<script>
                        alert('Hai modificato il tuo User Name.'); 
                        window.location='javascript:history.go(-2)';
                      </script>"; 
                      
                      
                   $controllo = mysql_query("UNLOCK TABLES");  


              }
              
              else {
                  
                 echo "<script>
                        alert('Lo UserName scelto già esiste. Scelga un altro UserName per favore.'); 
                        window.location='javascript:history.go(-1)';
                      </script>"; 
                                              
              }

			  
		   ?>
			    
			
      </body>
</html>