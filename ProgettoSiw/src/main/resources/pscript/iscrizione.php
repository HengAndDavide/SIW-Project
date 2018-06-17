<!DOCTYPE html>
<html> 
	<head>
		<title>iscrizione</title>
		
        <link rel="stylesheet" href="stylesheetiscrizione.css" type="text/css" />
        
        
        <META http-equiv="Content-Type" content="text/html; charset=utf-8">
                
		<title>Link al Javascript di validazione del form utente</title> 
		<script src="iscrizionescripts.js"></script>
		
		<script src="jquery-2.1.1.min.js"></script>
		
        <script src="json2.js"></script>		
		
        <script src="cifratura_sha1_client.js" ></script>
		 
	</head>
	<body>
	
			<! genera il link title: Home>

    <div id="home">

		<a href="javascript:history.go(-2)" class="edithome">Home</a> <br> 
		
	</div>	

	
		
		<?php
		// include le pagine alle quali si accede dalla pagina Iscrizionedirettore
			include ("Home.html");
			
		    $Dataattuale = date("Y-m-d");  // data di oggi
		    			

  echo("<div id='iscrizione' >");  		
		//Genera la maschera con i campi di immissione dei dati di utente
	 echo"	
		<form id='Iscriviti' action='' method='post' onsubmit='return validateform()'>
          <p><i>Benvenuta/o. Le chiediamo gentilmente di fornire i dati di utente e i dati di accesso. 
          I campi obbligatori sono indicati con un asterisco</i><em>*</em></p>
        
          <fieldset>
           <legend>DATI DI UTENTE</legend>
            <label for='nome'>Nome </label>
            <input id='nome' type='text' maxlength='30' name='Nome' placeholder='Nome.' title='Nome di battesimo con il quale lei &eacute registrato/a nell'organizzazione.' required><br>
            
            <label for='cognome'>Cognome</label>
            <input id='cognome' type='text' name='Cognome' placeholder='Cognome.' title='Cognome con il quale lei &eacute registrato/a nell'organizzazione.' required><br>

            <label for='matricola'>Matricola</label>
            <input id='matricola' type='text' name='Matricola' placeholder='Matricola.' title='Matricola con la quale lei &eacute registrato/a nell'organizzazione.' required><br>
            
            <label for='email'>Email </label>
            <input id='email' type='email' name='Email' placeholder='Legga la nota in fondo' required><br>           
          
          </fieldset>
        
          <fieldset>
           <legend>DATI DI ACCESSO</legend>
            <label for='username'>User Name </label>
            <input id='username' type='text' maxlength='30' name='UserName' placeholder='Non superare i 30 caratteri e non lasciare spazi.' required><br>
            <label for='password'>Password </label>
            <input id='password' type='password' maxlength='20' name='password' placeholder='Non superare i 20 caratteri.' required><br>

            <input type='hidden' type='text' name='dataiscrizione' id='dataiscrizione' value='$Dataattuale' />        
         
          </fieldset>
          
        <label for='termini' class='accettatermini'><input id='termini' type='checkbox' name='Accetta i termini del servizio?' 
          title='E' necessario accettare i termini del servizio per registrarsi'>Accetta i termini del servizio?</label>


        <canvas id='drawingCanvas' class='bordercaptcha'></canvas>          
       
        <span id='captcha' class='captcha'></span>
           			
        <h1 class='labelcaptcha'>CODICE</h1>

        <h1 class='cambiacaptcha'>Cambi il CODICE se vuole</h1>
        <h1 id='cng-cptc' ><input type='button' value='Cambia'></h1>

	    <h1 class='inseriscicaptcha'>Scriva il CODICE che legge sopra<em>*</em></h1>
	    <input type='text' id='inputcaptcha' name='cpt'>
             
        <input id='Passwordclient' name='Passwordclient' type='hidden'>
             
        <h1 class='submittion'><input onclick='Passwordclient.value = hex_sha1(password.value)' type='submit' value='Salvi i tuoi dati' ></h1>
        
       </form>";

    echo("</div>");
         
	 ?>


    <div id="termini">	
    	
        <a href="Termini.pdf" target=”_blank” class="leggiTermini">Termini del servizio</a> 
	
	</div>
	

<script>
  
  function CAPTCHA()
    {
 
 // generare il background, generare la randomicità dell'angolo dei caratteri
 // rendere visibile il cod nel javascript iscrizionescripts e realizzare in esso il confronto tra il cod e cpt
 
       var car, min, max, dif, lun, inc;
       car  = "abcdefghijklmnopqrstuvwxyz";
       car += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       car += "1234567890";
       min =6;
       max =6;
       dif =max-min;
       lun = Math.round((Math.random() * dif) + min); inc =0;
       cod = "";
       
       while (inc < lun)
         {
           cod += car.charAt(Math.round(Math.random() * car.length));
          inc++; }
           
     return cod; }
          
     // Si valorizza il tag "span" con il codice generato, in modo da visualizzarlo:     
     document.getElementById("captcha").innerText = CAPTCHA();
     var outsidecaptcha = document.getElementById("captcha").innerText;
     
     var outsidestato = false;
		              
</script>

   
    <div id="notaregolamento">
   
       <h1 class="nota">
      	<! nota per regolare l'iscrizione>
     		Attenzione: L'adesione ai Termini del servizio &eacute un impegno reciproco ad una trasparente e responsabile partecipazione. 
 			Coerentemente con quanto previsto dai Termini del servizio, solo la conferma da un indirizzo e-mail precedentemente 
     		autorizzato dalla Direzione e la corrispondenza della matricola potranno validare l'iscrizione ed il conseguente accesso alla sua area riservata. 
     		Pu&ograve successivamente modificare i suoi dati attraverso la pagina di accesso.
       </h1>
       
	</div>       
       
       
 <script language="javascript" type="text/javascript"> 
  //genera lo script che attiva il cambio del CAPTCHA ---------------------------------------------------------------
  
  // invocazione di jquery() mediante $(document)
  $(document).ready(function(){


 
  	  // definisce la funzione di invio di messaggi dal client al server basato sull'invocazione di jquery() mediante $() ----------------

	  // Trova gli elementi nel 'document' che hanno la classe CSS “cng-cptc” (class selector) definita nel panel dei messaggi e registra un event handler per ognuno di essi
      // L'event handler è invocato quando l'utente clicca il button 'Cambia'
	
	  // associa al 'click' gli elementi che corrispondono al selettore 
	  $('#cng-cptc').click(function(){ //usa l'evento click del button Cambia
	     
	     $("#captcha").empty();
	     document.getElementById("captcha").innerText = CAPTCHA();
	     outsidecaptcha = document.getElementById("captcha").innerText;
		              	     
	   }); // termina la .click function
	
	// -------------------------------------------------------------------------------------------


	            // associa al 'submit' gli elementi che corrispondono al selettore 
	            $('#Iscriviti').submit(function(){ //usa l'evento di submit		


	             if (!outsidestato) {
                     return ;
                 }    

    			  
    			  var Nomeutente = $('#nome').val(); // acquisisce il Nome dell'utente 
    			  
    			  var Nazione = $('#cognome').val(); // acquisisce il Cognome

    			  var Email = $('#email').val(); // acquisisce la Email
    			  
    			  var Username = $('#username').val(); // acquisisce lo Username 
    			  var Passwordclient = $('#Passwordclient').val(); // acquisisce la password cifrata

    			  var Dataiscrizione = $('#dataiscrizione').val(); // acquisisce la data di iscrizione        

	         


	// connessione al server per scrittura nella tabella delle Utenti mediante XMLHttpRequest ------------------------------------

		     // variabile che definisce l'URL completo di query string
		     var url = "datiutente.php" + "?Nome=" + Nomeutente + "&Cognome=" + Cognome + "&Matricola=" + Matricola + "&Email=" + Email + "&UserName=" + Username + "&Passwordclient=" + Passwordclient;	
		  		 
        // connessione al server mediante XMLHttpRequest per la memorizzazione ------------------------------------
		  
		  // creazione dell'object javascript "messageobject"
		  if (window.XMLHttpRequest) {
              // codice per IE7+, Firefox, Chrome, Opera, Safari
              messageobject = new XMLHttpRequest();
          } else { // codice per IE6, IE5
              messageobject = new ActiveXObject("Microsoft.XMLHTTP");
          }
          
       
           messageobject.open("GET",url,true); // prepara la richiesta al server
           
           messageobject.setRequestHeader("Content-type", "text/plain; charset = UTF-8");
  
           messageobject.send(); // esegue la richiesta
   
          // funzione di trigger generato dalla eventuale risposta dal server---------
          messageobject.onreadystatechange=function() {
         
           if ((messageobject.readyState == 4) && (messageobject.status == 404)) {
             //document.getElementById("txtHint").innerHTML = messageobject.responseText;
             alert ("messaggio dal server:" + messageobject.responseText);
           }
           
           if ((messageobject.readyState == 4) && (messageobject.status == 200)) {
             //var result = messageobject.responseText;
             //document.getElementById("result").innerHTML = "Conferma: " + result + ".";
               alert ("Conferma:" + messageobject.responseText);
           }
         } // termina la .onreadystatechange function ---------------


      }); // termina la .submit function                 
	
	}); // termina la document function


   // ---------------------------------------------------------------------------------------------------------------
  
   
</script>       
   
	</body>
</html>