
    function fibonacci(){
    var x = 0;
    var valorfinal=0;
    var valor1 = document.getElementById('Numero 1').value;
    var valor2 = document.getElementById('Numero 2').value;
    var repet = document.getElementById('Repeticiones').value;
	
	valor = parseInt(valor1);
	for (x; x<repet; x++){
		if(repet==0){
			valorfinal.push(valor1)
		}
		else if(repet==1){
            valorfinal.push(valor1+valor2)
            valorfinal=valor1+valor2
            valor1=valor2
            valor2=valorfinal
		}
		else{
            
			valorfinal.push(valorfinal)
            valorfinal=valor1+valor2
            valor1=valor2
            valor2=valorfinal
		}
	}
	document.getElementById("resultado").innerHTML ="<h3>"+valorfinal+"</h3>";
}
