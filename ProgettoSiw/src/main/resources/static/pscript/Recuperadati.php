<!DOCTYPE html>
<html> 
	<head>
		<title>Recuperadati</title> 
		
		<link rel="stylesheet" href="stylesheetrecuperadati.css" type="text/css" />

		<script src="verificanuovapassword.js"></script>

        <script src="cifratura_sha1_client.js" ></script>
		
		<meta charset="utf-8">
		
	</head>
	<body>
		<?php
		
				
			// contiene i dati di accesso a mysql e al database
			 require 'accessoDB.php';
			 
			 // memorizza la email dell'utente nella variabile $Email
			 $Email = trim($_REQUEST['Email']);
			 
			// esegue la connessione a mysql
             $dbc = mysql_connect($database_host, $usernameDB, $passwordDB)
             or die("<p>Non &eacute riuscita la connessione a mysql: " . mysql_error() . "</p>");

             // esegue la selezione del data base DBinfoutenti
             mysql_select_db($database_name, $dbc)
             or die("<p>Errore nella selezione del data base DBinfoutenti:" . mysql_error() . "</p>");
             
               // esegue il lock tables per gestire correttamente eventuali accessi contemporanei alla tabella Utenti
              $controllo = mysql_query("LOCK TABLES Utenti READ"); 
			 
			 // determina il numero di utenti registrati
             $numero = mysql_query("SELECT count(user_id) FROM Utenti"); // il valore è in una tabella 1x1
             $num = mysql_fetch_array($numero); // il contenuto della tabella 1x1 è in un array 1x1
             $iterazioni = $num['count(user_id)']; // il contenuto dell'array è nella variabile
             
             $test = false; // è la variabile che si valuta successivamente per decidere se i dati di accesso dell'utente sono stati trovati o meno
              
             $conferma = true; // é la variabile che si valuta successivamente per gestire lo stato di conferma della registrazione
              
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
      			  $Emailutente = $row[4];
      			  $Status = $row[9];
      		    } 
      		    
                if ($Email == $Emailutente) {
                  if ($Status == 1) {
                    $test = true;
                    $indice = $counter;
                 
                    break; // esce dalla scansione della tabella in quanto ha trovato la corrispondenza con i dati di accesso dell'utente che ha confermato l'iscrizione
                  }
                  else {
                    $conferma = false;  // i dati di accesso corrispondono ma l'utente non ha confermato l'iscrizione
                  }
                }
                 
                 $counter++;
               
             endwhile;
             
             $controllo = mysql_query("UNLOCK TABLES");
                          
             
             if ($test == true) {
               // ottiene i dati di accesso ed il Nome dell'utente
               // Build the SELECT statement
               $select_query = "SELECT * FROM Utenti WHERE user_id = $indice"; // Write your SQL query, and store it in a string or a variable.
               // Esegue la query
               $result = mysql_query($select_query);  // Pass your query into mysql_query and get back a PHP resource. 
      	       $row = mysql_fetch_row($result); // Pass that resource into mysql_fetch_row to get back rows of results, one at a time
      	       $Nome = $row[7];
      	       $Cognome = $row[8];
          	   $UserName = $row[1];
          	   $Password = $row[2];
          	   
          	   // esegue l'invio della email di conferma dell'iscrizione all'utente ********************************************************
			
			    // prepara il contenuto della email 
 		    
 		        $oggetto = '.........: recupero dei suoi dati di accesso.';
 		     
			    $messaggio = "Gentile $Nome $Cognome,\n\n";
			    $messaggio .= "La Direzione le ha inviato questa email in seguito alla sua richiesta di recupero dei suoi dati di accesso.\n\n";
			    $messaggio .= "La sua UserName è: $UserName\n\n";
			    $messaggio .= "\n\n";
 		        $messaggio .= "Come sa dai Termini del Servizio, noi non memorizziamo la sua Password, ma solo una sua versione cifrata,\n";
 		        $messaggio .= "dalla quale non é possibile per noi recuperare la sua forma equivalente originale che ha fornito all'atto della sua iscrizione\n";
 		        $messaggio .= "a questo servizio.\n";
			    $messaggio .= "Per questo motivo deve cambiare la sua Password usando la procedura che le abbiamo fornito al momento della sua richiesta\n"; 
			    $messaggio .= "di recupero dei suoi dati di accesso.\n\n";
			  
			    // limita la lunghezza di riga a 70 caratteri per la compatibilità
			    $messaggio = wordwrap($messaggio,70);
			  
			    // invia la email
			    mail($Email,$oggetto,$messaggio,"Da/From: pippo@pluto.com\r\n"
			    ."From: pippo@pluto.com\r\n"
   				."X-Mailer: PHP/" . phpversion());
			    
			    
	            echo("<div id='conferma' >"); 
	    			    echo ("<p class='confermarecupero'>Riceverà una e-mail con il suo UserName. Qui può cambiare la sua password.</p><br>");
	            echo("</div>");
	            			    
			    // genera il form per cambiare la password
		        echo"<form id='cambiapassword' action='modificapassword.php' method='post' onsubmit='return validatepassword()'>
		          <p class='labelpassword'>Modifichi la sua Password</p>
		          <fieldset id='cambiapassword'>
		           <label for='password' >Password</label>
                   <input id='password' type='password' maxlength='20' name='Password' placeholder='Non superi i 20 caratteri.'><br>
                       <input type='hidden' type'text' name='indice' id='indice' value='$indice' /> 
                  </fieldset>

                        <input name='Password_client' type='hidden'>

                 		<h1 class='aggiornapassword'><input onclick='Password_client.value = hex_sha1(Password.value)' type='submit' value='Cambi la sua Password'></h1>
         
                  </form>"; 

               
 	            echo("<div id='tornahome' >");               
               		 echo ("<p class='back'>Torni alla pagina Home</p><br>");
                	// genera il link alla pagina Home
		       		 echo "<a href='javascript:history.go(-2)' class='edithome'>Home</a>";
	            echo("</div>"); 		       		 

             }
              else {
              
                if ($conferma == false) {
                   //  visualizza il messaggio che invita l'utente a completare l'scrizione attraverso la email che ha ricevuto dopo la submittion dei suoi dati

                    echo "<script>alert('Sembra che non ha completato la procedura di iscrizione. Controlli la email che ha ricevuto all'atto della sua iscrizione e completi la procedura.'); 
                    window.location='javascript:history.go(-2)';</script>"; 
	               
                }
                else {
                 
                  // visualizza il messaggio che avvisa l'utente che non è stata riconosciuta la sua email
                  
                    echo "<script>alert('La sua email non risulta tra quelle degli utenti iscritti. Potrebbe aver digitato male la mail. Riprovi. Nel caso che ancora la sua email non venga riconosciuta la invitiamo a ripetere la sua iscrizione.'); 
                    window.location='javascript:history.go(-1)';</script>";   	                              	
               
               }  
            
               
              }
              
			 
        ?>
		
		 

	</body>
</html>