$(document).ready(function(){
	var $internalCircle = $('.internal-circle');
	$internalCircle.hover(function(){
		$('.external-circle').toggleClass('active');
		$('.circle-text-default').toggleClass('hidden');
		$('.circle-text-hover').toggleClass('hidden');
	});
	var $empresa1a2 = $('#empresa_1_2');
	$empresa1a2.click(function(){
		$('#empresa-2').slideToggle();
	});
	//dptos by Alejandro
  $("#departamento").on("change", function() {
    var value = $(this).val();
    switch(value){
    // 1. provincias de Amazonas 
    	case "Amazonas":
				$("#provincia").html('<option value="Bagua">Bagua</option><option value="Bongara">Bongara</option><option value="Chachapoyas">Chachapoyas</option><option value="Condorcanqui">Condorcanqui</option><option value="Luya">Luya</option><option value="Rodriguez de Mendoza">Rodriguez de Mendoza</option><option value="Utcubamba">Utcubamba</option>');
    		break;
    // 2. provincias de Amazonas 
    	case "Ancash":
      	$("#provincia").html('<option value="Aija">Aija</option><option value="Antonio Raymondi">Antonio Raymondi</option><option value="Asuncion">Asuncion</option><option value="Bolognesi">Bolognesi</option><option value="Carhuaz">Carhuaz</option><option value="Carlos Fermin Fitzcarrald">Carlos Fermin Fitzcarrald</option><option value="Casma">Casma</option><option value="Corongo">Corongo</option><option value="Huaraz">Huaraz</option><option value="Huari">Huari</option><option value="Huarmey">Huarmey</option><option value="Huaylas">Huaylas</option><option value="Mariscal Luzuriaga">Mariscal Luzuriaga</option><option value="Ocros">Ocros</option><option value="Pallasca">Pallasca</option><option value="Pomabamba">Pomabamba</option><option value="Recuay">Recuay</option><option value="Santa">Santa</option><option value="Sihuas">Sihuas</option><option value="Yungay">Yungay</option>');
      	break;
    // 3. provincias de Apurimac          	
    	case "Apurimac":
      	$("#provincia").html('<option value="Abancay">Abancay</option><option value="Andahuaylas">Andahuaylas</option><option value="Antabamba">Antabamba</option><option value="Aymaraes">Aymaraes</option><option value="Chincheros">Chincheros</option><option value="Cotabambas">Cotabambas</option><option value="Grau">Grau</option>');          	
      	break;
    // 4. provincias de Arequipa          	
    	case "Arequipa":
      	$("#provincia").html('<option value="Arequipa">Arequipa</option><option value="Camana">Camana</option><option value="Caraveli">Caraveli</option><option value="Castilla">Castilla</option><option value="Caylloma">Caylloma</option><option value="Condesuyos">Condesuyos</option><option value="Islay">Islay</option><option value="La Union">La Union</option>');          	
      	break;
    // 5. provincias de Ayacucho         	
     	case "Ayacucho":
				$("#provincia").html('<option value="Cangallo">Cangallo</option><option value="Huamanga">Huamanga</option><option value="Huanca Sancos">Huanca Sancos</option><option value="Huanta">Huanta</option><option value="La Mar">La Mar</option><option value="Lucanas">Lucanas</option><option value="Parinacochas">Parinacochas</option><option value="Paucar del Sara">Paucar del Sara</option><option value="Sucre">Sucre</option><option value="Victor Fajardo">Victor Fajardo</option><option value="Vilcas Huaman">Vilcas Huaman</option>');
      	break;
    // 6. provincias de Cajamarca          	
    	case "Cajamarca":
				$("#provincia").html('<option value="Cajabamba">Cajabamba</option><option value="Cajamarca">Cajamarca</option><option value="Celendin">Celendin</option><option value="Chota">Chota</option><option value="Contumaza">Contumaza</option><option value="Cutervo">Cutervo</option><option value="Hualgayoc">Hualgayoc</option><option value="Jaen">Jaen</option><option value="San Ignacio">San Ignacio</option><option value="San Marcos">San Marcos</option><option value="San Miguel">San Miguel</option><option value="San Pablo">San Pablo</option><option value="Santa Cruz">Santa Cruz</option>');          	
      	break;
    // 7. provincias de Cusco         
    	case "Cusco":
				$("#provincia").html('<option value="Acomayo">Acomayo</option><option value="Anta">Anta</option><option value="Calca">Calca</option><option value="Canas">Canas</option><option value="Canchis">Canchis</option><option value="Chumbivilcas">Chumbivilcas</option><option value="Cusco">Cusco</option><option value="Espinar">Espinar</option><option value="La Convencion">La Convencion</option><option value="Paruro">Paruro</option><option value="Paucartambo">Paucartambo</option><option value="Quispicanchi">Quispicanchi</option><option value="Urubamba">Urubamba</option>');           	
      	break;
    // 8. provincias de Huancavelica      
    	case "Huancavelica":
				$("#provincia").html('<option value="Acobamba">Acobamba</option><option value="Angaraes">Angaraes</option><option value="Castrovirreyna">Castrovirreyna</option><option value="Churcampa">Churcampa</option><option value="Huancavelica">Huancavelica</option><option value="Huaytara">Huaytara</option><option value="Tayacaja">Tayacaja</option>');           	
      	break;
    // 9. provincias de Huanuco      
    	case "Huanuco":
				$("#provincia").html('<option value="Ambo">Ambo</option><option value="Dos de Mayo">Dos de Mayo</option><option value="Huacaybamba">Huacaybamba</option><option value="Huamalies">Huamalies</option><option value="Huanuco">Huanuco</option><option value="Lauricocha">Lauricocha</option><option value="Leoncio Prado">Leoncio Prado</option><option value="Marañon">Marañon</option><option value="Pachitea">Pachitea</option><option value="Puerto Inca">Puerto Inca</option><option value="Yarowilca">Yarowilca</option>');           	
      	break;
    // 10. provincias de Ica       
    	case "Ica":
				$("#provincia").html('<option value="Chincha">Chincha</option><option value="Ica">Ica</option><option value="Nazca">Nazca</option><option value="Palpa">Palpa</option><option value="Pisco">Pisco</option>');           	
      	break;
    // 11. provincias de Junin        
    	case "Junin":
				$("#provincia").html('<option value="Chanchamayo">Chanchamayo</option><option value="Chupaca">Chupaca</option><option value="Concepcion">Concepcion</option><option value="Huancayo">Huancayo</option><option value="Jauja">Jauja</option><option value="Junin">Junin</option><option value="Satipo">Satipo</option><option value="Tarma">Tarma</option><option value="Yauli">Yauli</option>');           	
      	break;
    // 12. provincias de La Libertad                	
    	case "La Libertad":
				$("#provincia").html('<option value="Ascope">Ascope</option><option value="Bolivar">Bolivar</option><option value="Chepen">Chepen</option><option value="Gran Chimu">Gran Chimu</option><option value="Julcan">Julcan</option><option value="Otuzco">Otuzco</option><option value="Pacasmayo">Pacasmayo</option><option value="Pataz">Pataz</option><option value="Sanchez Carrion">Sanchez Carrion</option><option value="Santiago de Chuco">Santiago de Chuco</option><option value="Trujillo">Trujillo</option><option value="Viru">Viru</option>');           	
      	break;
    // 13. provincias de Lambayeque                 	
    	case "Lambayeque":
				$("#provincia").html('<option value="Chiclayo">Chiclayo</option><option value="Ferreñafe">Ferreñafe</option><option value="Lambayeque">Lambayeque</option>');           	
      	break;
    // 14. provincias de Lima                 	
    	case "Lima":
      	$("#provincia").html('<option value="Barranca">Barranca</option><option value="Cajatambo">Cajatambo</option><option value="Callao">Callao</option><option value="Canta">Canta</option><option value="Cañete">Cañete</option><option value="Huaral">Huaral</option><option value="Huarochiri">Huarochiri</option><option value="Huaura">Huaura</option><option value="Lima" selected="selected">Lima</option><option value="Oyon">Oyon</option><option value="Yauyos">Yauyos</option>');
      	break;
    // 15. provincias de Loreto       	          	
     	case "Loreto":
				$("#provincia").html('<option value="Alto Amazonas">Alto Amazonas</option><option value="Datem del Marañon">Datem del Marañon</option><option value="Loreto">Loreto</option><option value="Mariscal Ramon Castilla">Mariscal Ramon Castilla</option><option value="Maynas">Maynas</option><option value="Requena">Requena</option><option value="Ucayali">Ucayali</option>');           	
      	break;
    // 16. provincias de Madre de Dios                	
    	case "Madre de Dios":
				$("#provincia").html('<option value="Manu">Manu</option><option value="Tahuamanu">Tahuamanu</option><option value="Tambopata">Tambopata</option>');           	
      	break;
    // 17. provincias de Moquegua     	
    	case "Moquegua":
				$("#provincia").html('<option value="General Sanchez Cerro">General Sanchez Cerro</option><option value="Ilo">Ilo</option><option value="Mariscal Nieto">Mariscal Nieto</option>');          	
      	break;
    // 18. provincias de Pasco                   	
    	case "Pasco":
				$("#provincia").html('<option value="Daniel Alcides Carrion">Daniel Alcides Carrion</option><option value="Oxapampa">Oxapampa</option><option value="Pasco">Pasco</option>');           	
      	break;
    // 19. provincias de Piura         
    	case "Piura":
				$("#provincia").html('<option value="Ayabaca">Ayabaca</option><option value="Huancabamba">Huancabamba</option><option value="Morropon">Morropon</option><option value="Paita">Paita</option><option value="Piura">Piura</option><option value="Sechura">Sechura</option><option value="Sullana">Sullana</option><option value="Talara">Talara</option>');           	
      	break;
    // 20. provincias de Puno         
    	case "Puno":
				$("#provincia").html('<option value="Azangaro">Azangaro</option><option value="Carabaya">Carabaya</option><option value="Chucuito">Chucuito</option><option value="El Collao">El Collao</option><option value="Huancane">Huancane</option><option value="Lampa">Lampa</option><option value="Melgar">Melgar</option><option value="Moho">Moho</option><option value="Puno">Puno</option><option value="San Antonio de Putina">San Antonio de Putina</option><option value="San Roman">San Roman</option><option value="Sandia">Sandia</option><option value="Yunguyo">Yunguyo</option>');           	
      	break;
    // 21. provincias de San Martin         
    	case "San Martin":
				$("#provincia").html('<option value="Bellavista">Bellavista</option><option value="El Dorado">El Dorado</option><option value="Huallaga">Huallaga</option><option value="Lamas">Lamas</option><option value="Mariscal Caceres">Mariscal Caceres</option><option value="Moyobamba">Moyobamba</option><option value="Picota">Picota</option><option value="Rioja">Rioja</option><option value="San Martin">San Martin</option><option value="Tocache">Tocache</option>');           	
      	break;
    // 22. provincias de Tacna      
    	case "Tacna":
				$("#provincia").html('<option value="Candarave">Candarave</option><option value="Jorge Basadre">Jorge Basadre</option><option value="Tacna">Tacna</option><option value="Tarata">Tarata</option>');           	
      	break;
    // 23. provincias de Tumbes   
    	case "Tumbes":
				$("#provincia").html('<option value="Contralmirante Villar">Contralmirante Villar</option><option value="Tumbes">Tumbes</option><option value="Zarumilla">Zarumilla</option>');           	
      	break;
    // 24. provincias de Ucayali  
    	case "Ucayali":
				$("#provincia").html('<option value="Atalaya">Atalaya</option><option value="Coronel Portillo">Coronel Portillo</option><option value="Padre Abad">Padre Abad</option><option value="Purus">Purus</option>');           	
      	break;
    }
  });
//
  $("#departamento-1").on("change", function() {
    var value = $(this).val();
    switch(value){
    // 1. provincia-1s de Amazonas 
    	case "Amazonas":
				$("#provincia-1").html('<option value="Bagua">Bagua</option><option value="Bongara">Bongara</option><option value="Chachapoyas">Chachapoyas</option><option value="Condorcanqui">Condorcanqui</option><option value="Luya">Luya</option><option value="Rodriguez de Mendoza">Rodriguez de Mendoza</option><option value="Utcubamba">Utcubamba</option>');
    		break;
    // 2. provincia-1s de Amazonas 
    	case "Ancash":
      	$("#provincia-1").html('<option value="Aija">Aija</option><option value="Antonio Raymondi">Antonio Raymondi</option><option value="Asuncion">Asuncion</option><option value="Bolognesi">Bolognesi</option><option value="Carhuaz">Carhuaz</option><option value="Carlos Fermin Fitzcarrald">Carlos Fermin Fitzcarrald</option><option value="Casma">Casma</option><option value="Corongo">Corongo</option><option value="Huaraz">Huaraz</option><option value="Huari">Huari</option><option value="Huarmey">Huarmey</option><option value="Huaylas">Huaylas</option><option value="Mariscal Luzuriaga">Mariscal Luzuriaga</option><option value="Ocros">Ocros</option><option value="Pallasca">Pallasca</option><option value="Pomabamba">Pomabamba</option><option value="Recuay">Recuay</option><option value="Santa">Santa</option><option value="Sihuas">Sihuas</option><option value="Yungay">Yungay</option>');
      	break;
    // 3. provincia-1s de Apurimac          	
    	case "Apurimac":
      	$("#provincia-1").html('<option value="Abancay">Abancay</option><option value="Andahuaylas">Andahuaylas</option><option value="Antabamba">Antabamba</option><option value="Aymaraes">Aymaraes</option><option value="Chincheros">Chincheros</option><option value="Cotabambas">Cotabambas</option><option value="Grau">Grau</option>');          	
      	break;
    // 4. provincia-1s de Arequipa          	
    	case "Arequipa":
      	$("#provincia-1").html('<option value="Arequipa">Arequipa</option><option value="Camana">Camana</option><option value="Caraveli">Caraveli</option><option value="Castilla">Castilla</option><option value="Caylloma">Caylloma</option><option value="Condesuyos">Condesuyos</option><option value="Islay">Islay</option><option value="La Union">La Union</option>');          	
      	break;
    // 5. provincia-1s de Ayacucho         	
     	case "Ayacucho":
				$("#provincia-1").html('<option value="Cangallo">Cangallo</option><option value="Huamanga">Huamanga</option><option value="Huanca Sancos">Huanca Sancos</option><option value="Huanta">Huanta</option><option value="La Mar">La Mar</option><option value="Lucanas">Lucanas</option><option value="Parinacochas">Parinacochas</option><option value="Paucar del Sara">Paucar del Sara</option><option value="Sucre">Sucre</option><option value="Victor Fajardo">Victor Fajardo</option><option value="Vilcas Huaman">Vilcas Huaman</option>');
      	break;
    // 6. provincia-1s de Cajamarca          	
    	case "Cajamarca":
				$("#provincia-1").html('<option value="Cajabamba">Cajabamba</option><option value="Cajamarca">Cajamarca</option><option value="Celendin">Celendin</option><option value="Chota">Chota</option><option value="Contumaza">Contumaza</option><option value="Cutervo">Cutervo</option><option value="Hualgayoc">Hualgayoc</option><option value="Jaen">Jaen</option><option value="San Ignacio">San Ignacio</option><option value="San Marcos">San Marcos</option><option value="San Miguel">San Miguel</option><option value="San Pablo">San Pablo</option><option value="Santa Cruz">Santa Cruz</option>');          	
      	break;
    // 7. provincia-1s de Cusco         
    	case "Cusco":
				$("#provincia-1").html('<option value="Acomayo">Acomayo</option><option value="Anta">Anta</option><option value="Calca">Calca</option><option value="Canas">Canas</option><option value="Canchis">Canchis</option><option value="Chumbivilcas">Chumbivilcas</option><option value="Cusco">Cusco</option><option value="Espinar">Espinar</option><option value="La Convencion">La Convencion</option><option value="Paruro">Paruro</option><option value="Paucartambo">Paucartambo</option><option value="Quispicanchi">Quispicanchi</option><option value="Urubamba">Urubamba</option>');           	
      	break;
    // 8. provincia-1s de Huancavelica      
    	case "Huancavelica":
				$("#provincia-1").html('<option value="Acobamba">Acobamba</option><option value="Angaraes">Angaraes</option><option value="Castrovirreyna">Castrovirreyna</option><option value="Churcampa">Churcampa</option><option value="Huancavelica">Huancavelica</option><option value="Huaytara">Huaytara</option><option value="Tayacaja">Tayacaja</option>');           	
      	break;
    // 9. provincia-1s de Huanuco      
    	case "Huanuco":
				$("#provincia-1").html('<option value="Ambo">Ambo</option><option value="Dos de Mayo">Dos de Mayo</option><option value="Huacaybamba">Huacaybamba</option><option value="Huamalies">Huamalies</option><option value="Huanuco">Huanuco</option><option value="Lauricocha">Lauricocha</option><option value="Leoncio Prado">Leoncio Prado</option><option value="Marañon">Marañon</option><option value="Pachitea">Pachitea</option><option value="Puerto Inca">Puerto Inca</option><option value="Yarowilca">Yarowilca</option>');           	
      	break;
    // 10. provincia-1s de Ica       
    	case "Ica":
				$("#provincia-1").html('<option value="Chincha">Chincha</option><option value="Ica">Ica</option><option value="Nazca">Nazca</option><option value="Palpa">Palpa</option><option value="Pisco">Pisco</option>');           	
      	break;
    // 11. provincia-1s de Junin        
    	case "Junin":
				$("#provincia-1").html('<option value="Chanchamayo">Chanchamayo</option><option value="Chupaca">Chupaca</option><option value="Concepcion">Concepcion</option><option value="Huancayo">Huancayo</option><option value="Jauja">Jauja</option><option value="Junin">Junin</option><option value="Satipo">Satipo</option><option value="Tarma">Tarma</option><option value="Yauli">Yauli</option>');           	
      	break;
    // 12. provincia-1s de La Libertad                	
    	case "La Libertad":
				$("#provincia-1").html('<option value="Ascope">Ascope</option><option value="Bolivar">Bolivar</option><option value="Chepen">Chepen</option><option value="Gran Chimu">Gran Chimu</option><option value="Julcan">Julcan</option><option value="Otuzco">Otuzco</option><option value="Pacasmayo">Pacasmayo</option><option value="Pataz">Pataz</option><option value="Sanchez Carrion">Sanchez Carrion</option><option value="Santiago de Chuco">Santiago de Chuco</option><option value="Trujillo">Trujillo</option><option value="Viru">Viru</option>');           	
      	break;
    // 13. provincia-1s de Lambayeque                 	
    	case "Lambayeque":
				$("#provincia-1").html('<option value="Chiclayo">Chiclayo</option><option value="Ferreñafe">Ferreñafe</option><option value="Lambayeque">Lambayeque</option>');           	
      	break;
    // 14. provincia-1s de Lima                 	
    	case "Lima":
      	$("#provincia-1").html('<option value="Barranca">Barranca</option><option value="Cajatambo">Cajatambo</option><option value="Callao">Callao</option><option value="Canta">Canta</option><option value="Cañete">Cañete</option><option value="Huaral">Huaral</option><option value="Huarochiri">Huarochiri</option><option value="Huaura">Huaura</option><option value="Lima" selected="selected">Lima</option><option value="Oyon">Oyon</option><option value="Yauyos">Yauyos</option>');
      	break;
    // 15. provincia-1s de Loreto       	          	
     	case "Loreto":
				$("#provincia-1").html('<option value="Alto Amazonas">Alto Amazonas</option><option value="Datem del Marañon">Datem del Marañon</option><option value="Loreto">Loreto</option><option value="Mariscal Ramon Castilla">Mariscal Ramon Castilla</option><option value="Maynas">Maynas</option><option value="Requena">Requena</option><option value="Ucayali">Ucayali</option>');           	
      	break;
    // 16. provincia-1s de Madre de Dios                	
    	case "Madre de Dios":
				$("#provincia-1").html('<option value="Manu">Manu</option><option value="Tahuamanu">Tahuamanu</option><option value="Tambopata">Tambopata</option>');           	
      	break;
    // 17. provincia-1s de Moquegua     	
    	case "Moquegua":
				$("#provincia-1").html('<option value="General Sanchez Cerro">General Sanchez Cerro</option><option value="Ilo">Ilo</option><option value="Mariscal Nieto">Mariscal Nieto</option>');          	
      	break;
    // 18. provincia-1s de Pasco                   	
    	case "Pasco":
				$("#provincia-1").html('<option value="Daniel Alcides Carrion">Daniel Alcides Carrion</option><option value="Oxapampa">Oxapampa</option><option value="Pasco">Pasco</option>');           	
      	break;
    // 19. provincia-1s de Piura         
    	case "Piura":
				$("#provincia-1").html('<option value="Ayabaca">Ayabaca</option><option value="Huancabamba">Huancabamba</option><option value="Morropon">Morropon</option><option value="Paita">Paita</option><option value="Piura">Piura</option><option value="Sechura">Sechura</option><option value="Sullana">Sullana</option><option value="Talara">Talara</option>');           	
      	break;
    // 20. provincia-1s de Puno         
    	case "Puno":
				$("#provincia-1").html('<option value="Azangaro">Azangaro</option><option value="Carabaya">Carabaya</option><option value="Chucuito">Chucuito</option><option value="El Collao">El Collao</option><option value="Huancane">Huancane</option><option value="Lampa">Lampa</option><option value="Melgar">Melgar</option><option value="Moho">Moho</option><option value="Puno">Puno</option><option value="San Antonio de Putina">San Antonio de Putina</option><option value="San Roman">San Roman</option><option value="Sandia">Sandia</option><option value="Yunguyo">Yunguyo</option>');           	
      	break;
    // 21. provincia-1s de San Martin         
    	case "San Martin":
				$("#provincia-1").html('<option value="Bellavista">Bellavista</option><option value="El Dorado">El Dorado</option><option value="Huallaga">Huallaga</option><option value="Lamas">Lamas</option><option value="Mariscal Caceres">Mariscal Caceres</option><option value="Moyobamba">Moyobamba</option><option value="Picota">Picota</option><option value="Rioja">Rioja</option><option value="San Martin">San Martin</option><option value="Tocache">Tocache</option>');           	
      	break;
    // 22. provincia-1s de Tacna      
    	case "Tacna":
				$("#provincia-1").html('<option value="Candarave">Candarave</option><option value="Jorge Basadre">Jorge Basadre</option><option value="Tacna">Tacna</option><option value="Tarata">Tarata</option>');           	
      	break;
    // 23. provincia-1s de Tumbes   
    	case "Tumbes":
				$("#provincia-1").html('<option value="Contralmirante Villar">Contralmirante Villar</option><option value="Tumbes">Tumbes</option><option value="Zarumilla">Zarumilla</option>');           	
      	break;
    // 24. provincia-1s de Ucayali  
    	case "Ucayali":
				$("#provincia-1").html('<option value="Atalaya">Atalaya</option><option value="Coronel Portillo">Coronel Portillo</option><option value="Padre Abad">Padre Abad</option><option value="Purus">Purus</option>');           	
      	break;
    }
  });
});