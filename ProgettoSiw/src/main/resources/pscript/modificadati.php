<!DOCTYPE html>
<html> 
	<head>
		<title>modificadati</title> 
		
		<link rel="stylesheet" href="stylemodificadati.css" type="text/css" />
		 		
		<script src="verificanuovidati.js"></script>

        <script src="cifratura_sha1_client.js" ></script>
		
		<meta charset="utf-8">
		
	</head>
	<body>
	
	<?php
     
    	      // inserire le istruzioni per verificare i dati di accesso
				
			// contiene i dati di accesso a mysql e al database
			 require 'accessoDB.php';
			 
			 // memorizza i dati di utente nelle variabili $.....
			 $UserName = trim($_REQUEST['User']);
    	     $Password = trim($_REQUEST['Pass_client']);
			 
			// esegue la connessione a mysql
             $dbc = mysql_connect($database_host, $usernameDB, $passwordDB)
             or die("<p>Non &eacute riuscita la connessione a mysql: " . mysql_error() . "</p>");

             // esegue la selezione del data base DBinfoutenti
             mysql_select_db($database_name, $dbc)
             or die("<p>Errore nella selezione del data base DBinfoutenti:" . mysql_error() . "</p>");
			 
			 // esegue il lock tables per gestire correttamente eventuali accessi contemporanei alla tabella Utenti
              $controllo = mysql_query("LOCK TABLES Utenti READ"); 
			 
        // Verifica che i dati utente sensibili "UserName" e "Password" siano presenti nella tabella Utenti
             
             // determina il numero di utenti registrati
             $numero = mysql_query("SELECT count(user_id) FROM Utenti"); // il valore è in una tabella 1x1
             $num = mysql_fetch_array($numero); // il contenuto della tabella 1x1 è in un array 1x1
             $iterazioni = $num['count(user_id)']; // il contenuto dell'array è nella variabile
             
              $test = false; // è la variabile che si valuta successivamente per decidere se accedere o meno alla pagina "paginacontatti"
              
              $conferma = true; // é la variabile che si valuta successivamente per gestire lo stato di conferma della registrazione
              
              $OKusername = false; // é una delle due variabili che si valutano per gestire l'eventuale segnalazione di dati di accesso non riconosciuti
              
              $OKpassword = false; // é una delle due variabili che si valutano per gestire l'eventuale segnalazione di dati di accesso non riconosciuti
              

          //     $Password = Sha1($Password); // esegue la cifratura della password generando la versione a 40 caratteri

             
             // inizia a scandire la tabella Utenti
              
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
       			  $Nome = $row[7];
       			  $Cognome = $row[8];
       			  $UserNameutente = $row[1];
       			  $Passwordutente = $row[2];
       			  $Status = $row[9];
                
      		    } 
      		    
                if (($UserName == $UserNameutente) and ($Password == $Passwordutente)) {
                  if ($Status == 1) {
                    $test = true;
                    $indice = $counter;
                 
                    break; // esce dalla scansione della tabella in quanto ha trovato la corrispondenza con i dati di accesso dell'utente
                  }
                  else {
                    $conferma = false;  // i dati di accesso corrispondono ma l'utente non ha confermato la registrazione
                  }
                }
                  else {
                    if ($UserName == $UserNameutente) {
                      $OKusername = true;
                    }
                    
                    if ($Password == $Passwordutente) {
                      $OKpassword = true;
                    }
                }
                 
                 $counter++;
               
             endwhile;
             
             
             $controllo = mysql_query("UNLOCK TABLES"); 
    	     
    	     
    	     
    	      if ($test == true) {

               
               // scrive Pagina di modifica dei dati di utente di .......
	     echo("<div id='pagina' >"); 
				echo ("<h1 class='utente'>Pagina di modifica dei dati di $Nome $Cognome</h1>"); 
	     echo("</div>"); 
	            
	            		
		// genera il form per cambiare la password
		 echo"<form id='cambiapassword' action='modificapassword.php' method='post' onsubmit='return validatepassword()'>
		          <p class='labelpassword'>Modifichi la sua Password</p>
		          <fieldset id='cambiapassword'>
		           <label for='password' >Password</label>
                   <input id='password' type='password' maxlength='20' name='Password' placeholder='Non superare i 20 caratteri.'><br>
                       <input type='hidden' type'text' name='indice' id='indice' value='$indice' /> 
                  </fieldset>

                        <input name='Password_client' type='hidden'>

                 		<h1 class='aggiornapassword'><input onclick='Password_client.value = hex_sha1(Password.value)' type='submit' value='Cambi la sua Password'></h1>

               </form>"; 
                 							
         // genera il form per cambiare la username 
		 echo"<form id='cambiausername' action='modificausername.php' method='post' onsubmit='return validateusername()'>
		          <p class='labelusername'>Modifica la tua User Name</p>
		          <fieldset id='cambiausername'>
		           <label for='username'>User Name</label>
                   <input id='username' type='text' maxlength='30' name='UserName' placeholder='Non superare i 30 caratteri.'><br>
                       <input type='hidden' type'text' name='indice' id='indice' value='$indice' /> 
                       <input type='hidden' type'text' name='attualeUserName' id='attuale' value='$UserName' /> 
                  </fieldset>
                 		
                 		<h1 class='aggiornausername'><input type='submit' value='Cambi la sua User Name'></h1>
               </form>";
		
		
		// genera il form per cambiare la email
		echo"<form id='cambiaemail' action='modificaemail.php' method='post' onsubmit='return validateemail()'>
		          <p class='labelemail'>Modifica la tua Email</p>
		          <fieldset id='cambiaemail'>
		           <label for='email'>Email</label>
                   <input id='email' type='email' name='Email' ><br>
                       <input type='hidden' type'text' name='indice' id='indice' value='$indice' /> 
                  </fieldset>
                 		
                 		<h1 id='cambiaemail' class='aggiornamail'><input type='submit' value='Cambi la sua Email'></h1>
               </form>";
		
		
		
		
		//genera il link title alla pagina di utente
 	    echo("<div id='torna' >"); 		
				echo "<a href='javascript:history.go(-1)' class='paginautente'>Torni alla pagina di Direttore</a><br>"; 
		echo("</div>"); 
             

             }
              else {
              
                if ($conferma == false) {
                   //  visualizza il messaggio che invita l'utente a completare la registrazione attraverso la email che ha ricevuto dopo la submittion dei suoi dati
                    echo "<script>alert('Sembra che non ha completato la procedura di iscrizione. Controlli la email che ha ricevuto all'atto della tua iscrizione e completi la procedura.'); 
                    window.location='javascript:history.go(-2)';</script>";  
                }
                else {
                 if (($OKusername == true) and ($OKpassword == false)) {
                  // visualizza il messaggio che avvisa l'utente che la password non corrisponde
                    echo "<script>alert('Riconosciamo la sua User Name ma non la sua password. Riprovi digitando la password corretta.'); 
                    window.location='javascript:history.go(-1)';</script>";  
                 }
                 
                 if (($OKusername == false) and ($OKpassword == true)) {
                  // visualizza il messaggio che avvisa l'utente che la User name non corrisponde
                    echo "<script>alert('Riconosciamo la sua Password ma non la sua User Name. Riprovi digitando la User Name corretta.'); 
                    window.location='javascript:history.go(-1)';</script>";  
                 }
                 
                 if (($OKusername == false) and ($OKpassword == false)) {
                  // visualizza il messaggio che avvisa l'utente che sia la user Name sia la password non corrispondono
                    echo "<script>alert('I suoi dati di accesso non corrispondono a quelli di un utente iscritto. Se é già iscritto/a riprovi a digitare nuovamente i suoi dati di accesso altrimenti si iscriva mediante la pagina Iscrizione'); 
                    window.location='javascript:history.go(-1)';</script>";  
                 }          
               
               }
            } 
	
  ?>
		

	</body>
</html>