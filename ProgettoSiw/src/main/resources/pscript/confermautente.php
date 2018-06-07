

 		   <?php
 		   
 		   	// ottiene l'indice della tabella corrispondente all'utente	
		    $Indpersona = $_GET['Ind'];

			 // contiene i dati di accesso a mysql e al database
			 require 'accessoDB.php';
			 			 
			 // esegue la connessione a mysql
             $dbc = mysql_connect($database_host, $usernameDB, $passwordDB)
             or die("<p>Non &eacute riuscita la connessione a mysql: " . mysql_error() . "</p>");


             // esegue la selezione del data base DBinfoutenti
             mysql_select_db($database_name, $dbc)
             or die("<p>Errore nella selezione del data base DBinfoutenti:" . mysql_error() . "</p>");
             
             // esegue il lock tables per gestire correttamente eventuali accessi contemporanei alla tabella Utenti
      //        $controllo = mysql_query("LOCK TABLES Utenti WRITE"); 
              
             // esegue la query per porre nello stato logico "1" la variabile "Status". Questo è interpretato come conferma dell'iscrizione.
               $confermaiscrizione = "UPDATE Utenti SET Stato = 1 WHERE user_id = $Indpersona";

			   // Execute query
			   mysql_query($confermaiscrizione)
			   or die(mysql_error());
             
             //************************
			   
                           

             
         //    $controllo = mysql_query("UNLOCK TABLES");
             

                echo "<script>
                        alert('La procedura di iscrizione é completata.'); 
                      </script>"; 
		    
			  
		   ?>
