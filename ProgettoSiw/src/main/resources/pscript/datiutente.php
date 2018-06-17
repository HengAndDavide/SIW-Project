

 		   <?php
	   
 		     // memorizza i dati di utente nelle variabili $.....
  		     $Nome = trim(htmlentities($_REQUEST['Nome'], ENT_QUOTES, "UTF-8"));
  		     $Nome = str_replace(' ', '', $Nome);

  		     $Nome_test = strtolower($Nome);

  		     
  		     $Cognome = trim(htmlentities($_REQUEST['Cognome'], ENT_QUOTES, "UTF-8"));
  		     $Cognome = str_replace(' ', '', $Cognome);

  		     $Cognome_test = strtolower($Cognome);

  		     
    	     $Matricola = trim(htmlentities($_REQUEST['Matricola'], ENT_QUOTES, "UTF-8"));  		     

    	     $Email = trim(htmlentities($_REQUEST['Email'], ENT_QUOTES, "UTF-8"));
    	     
  		     $UserName = trim(htmlentities($_REQUEST['UserName'], ENT_QUOTES, "UTF-8"));
  		     $UserName = str_replace(' ', '', $UserName);

  		     $UserName_test = strtolower($UserName);

  		     
  		     $Password = trim(htmlentities($_REQUEST['Passwordclient'], ENT_QUOTES, "UTF-8")); 
    	                       
    	     // pre-definisce lo Status. Necessario per la verifica della conferma di iscrizione.
    	     $Status = '0';

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
              
 
        // Verifica che i dati utente sensibili siano presenti nella tabella Utenti
             
             // determina il numero di utenti registrati
             $numero = mysql_query("SELECT count(user_id) FROM Utenti"); // il valore è in una tabella 1x1
             $num = mysql_fetch_array($numero); // il contenuto della tabella 1x1 è in un array 1x1
             $iterazioni = $num['count(user_id)']; // il contenuto dell'array è nella variabile
              
             $test = true; // è la variabile che si valuta successivamente per decidere se registrare i dati utente o meno
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
      			  $Nomeutente = $row[7];
      			  $Nomeutente_test = strtolower($Nomeutente);     
      			  
      			  $Matricolautente_test = $row[5]; 	
      			  
      			  $Cognomeutente = $row[8];
      			  $Cognomeutente_test = strtolower($Nomeutente); 		  
      			  
       			  $UserNameutente = $row[1];
        		  $UserNameutente_test = strtolower($UserNameutente);      			  
       			  
       			  $Passwordutente = $row[2];
                
      		    } 
      		    
      		    
      	
               	   if ($Nome_test != $Nomeutente_test) {
                  
               	     $test = false;
                     echo ("Il Nome di battesimo non corrisponde a quello di un utente autorizzato. Fornisca il nome corretto per favore.\n\n"); // visualizza il messaggio
                 	 break; // esce dalla scansione della tabella in quanto non ha trovato il Nome di battesimo corretto
                 
                   }
                   
                   
               	   if ($Cognome_test != $Cognomeutente_test) {
                  
               	     $test = false;
                     echo ("Il Cognome non corrisponde a quello di un utente autorizzato. Fornisca il Cognome corretto per favore.\n\n"); // visualizza il messaggio
                 	 break; // esce dalla scansione della tabella in quanto non ha trovato il Cognome corretto
                 
                   } 
                   
                   
               	   if ($Matricola != $Matricolautente_test) {
                  
               	     $test = false;
                     echo ("La matricola non corrisponde a quella di un utente autorizzato. Fornisca la matricola corretta per favore.\n\n"); // visualizza il messaggio
                 	 break; // esce dalla scansione della tabella in quanto non ha trovato il Cognome corretto
                 
                   }                    
                   
                                                     
                 
               	  $counter++;
               
                endwhile;
            



             if ($test == true) {
             
               $Dataattuale = date("Y-m-d");  // data di oggi


               // prepara i dati utente per la memorizzazione nella tabella Utenti inclusa nel data base DBinfoutenti

                // istruzione per aggiungere nella riga i dati di accesso dell'utente (UPDATE)
                // includere l'istruzione che pone il campo Stato = 0
                           
    		   // memorizza i dati nella tabella
    		   mysql_query($insert_sql)
               or die(mysql_error());
                
                
               $controllo = mysql_query("UNLOCK TABLES"); 

               
               echo ("Riceverà una e-mail di conferma della sua iscrizione che la inviterà a completare la procedura.\n\n");	             
               
               echo ("Torni alla pagina Home");
		    
              
			   // esegue l'invio della email di conferma dell'iscrizione all'utente ********************************************************
			   
			//   echo"<meta http-equiv='ContentType' content='text/html; charset=ISO-88591'/>";

             // determina l'indice della persona appena registrata
             $numero = mysql_query("SELECT count(user_id) FROM Utenti"); // il valore è in una tabella 1x1
             $num = mysql_fetch_array($numero); // il contenuto della tabella 1x1 è in un array 1x1
             $Indpersona = $num['count(user_id)']; // il contenuto dell'array è nella variabile
			
			
			    // prepara il contenuto della email 
 		    
 		        $oggetto = 'Nome azienda: conferma della sua iscrizione.';
 		        
 		        $messaggio .= "Content-type: text/html; charset=UTF-8\n";
				$messaggio .= "Content-Transfer-Encoding: 8bit\n";
 		     
			    $messaggio = "Benvenuta/o \n\n";
			    $messaggio .= "La ringraziamo per la sua iscrizione.\n\n";
			    $messaggio .= "La procedura di iscrizione è quasi completata. Per completarla le chiediamo di accedere alla pagina riportata di seguito\n";
 		        $messaggio .= "Grazie per la collaborazione.\n\n";
 		        $messaggio .= "http://home.net/pscript/confermautente.php?Ind=$Indpersona";
			  
			    // limita la lunghezza di riga a 70 caratteri per la compatibilità
			    $messaggio = wordwrap($messaggio,70);
			  
			    // invia la email
			    mail($Email,$oggetto,$messaggio,"Da/From: pippo@pluto.com\r\n"
			    ."From: pippo@pluto.com\r\n"
   				 ."X-Mailer: PHP/" . phpversion());
			   
			   
              }
              
               
			  
		   ?>
