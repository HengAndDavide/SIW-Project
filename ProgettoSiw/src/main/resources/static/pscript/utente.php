<!DOCTYPE html>
<html> 
	<head>
		<title>utente</title> 
		
		<link rel="stylesheet" href="stylesheetutente.css" type="text/css" />
		 		
		<meta charset="utf-8">
		
	</head>
	<body>
	
	
	
		<div id="wrapper" >
		 
		 <?php
		 
		  // inserire le istruzioni per verificare i dati di accesso
				
			// contiene i dati di accesso a mysql e al database
			 require 'accessoDB.php';
			 
			 // memorizza i dati di utente nelle variabili $.....
			 $UserName = trim($_REQUEST['UserName']);
    	     $Password = trim($_REQUEST['Password_client']);
			 
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
              

            //   $Password = Sha1($Password); // esegue la cifratura della password generando la versione a 40 caratteri

             
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
       			  $Ruolo = $row[6];
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
                    
                 
                 $counter++;
               
             endwhile;
             
             
             $controllo = mysql_query("UNLOCK TABLES"); 
             
             
             if ($test == true) {
             
               // avvia la sessione che vale per l'accesso alla paginacontatti e alle pagine accessibili da questa
               session_start();
               
               // rende disponibili alcuni dati di utente usati nelle altre pagine php attraverso le variabili di sessione
               $_SESSION['Nome'] = $Nome;
               $_SESSION['Cognome'] = $Cognome;
               $_SESSION['UserName'] = $UserNameutente;
               $_SESSION['Password'] = $Passwordutente;
               $_SESSION['Indutente'] = $indice;
               
               
               // istruzioni che differenziano l'accesso alla pagina direttore dalla pagina responsabile di centro
               
               if ($Ruolo == 'Responsabilecentro') {              
              		 // accede alla pagina "paginaresponsabilecentro" 
             		  header("Location: paginaresponsabilecentro.php?SID");  
              		 exit();               
             
               }
               else {
              		 // accede alla pagina "paginadirettore" 
              		 header("Location: paginadirettore.php?SID");  
              		 exit();
               }
              
              
             }
              else {
              
                if ($conferma == false) {
                   //  visualizza il messaggio che invita l'utente a completare la registrazione attraverso la email che ha ricevuto dopo la submittion dei suoi dati
                   
                    echo "<script>alert('Sembra che non ha completato la procedura di iscrizione. Controlli la email che ha ricevuto dopo la sua iscrizione e completi la procedura.'); 
                    window.location='javascript:history.go(-2)';</script>";                  
                                   
                }
                else {
                 
                  // visualizza il messaggio che avvisa l'utente che i dati di accesso o uno di essi non corrispondono a quelli di un utente iscritto
                  
                    echo "<script>alert('I suoi dati di accesso non corrispondono a quelli di un utente iscritto. Se lei é già iscritta/o riprovi a digitare nuovamente i suoi dati di accesso altrimenti si iscriva mediante il link Iscrizione'); 
                    window.location='javascript:history.go(-1)';</script>";                                 
                  
               }  
            
               
             }
              
        ?>
		
	 </div>	 

	</body>
</html>