
document.getElementById('calculate').addEventListener('click', function(){

    const value = parseFloat( document.getElementById('value').value);
    const fee =parseFloat(document.getElementById('fee').value );
    const valorfinal =parseFloat( document.getElementById('valorfinal').value);

    
//  fórmula dos juros compostos :  
//  M = C.(1 + i) ^ t

//   Fórmula para descobrir o tempo com o logaritmo :
// log M / C = log (1 + i)
const time = Math.log(valorfinal/value) / Math.log(1+fee);

 
const anos = Math.floor(time);
const meses = Math.floor((time - anos) * 12);
const dias = Math.floor(((time - anos) * 12 - meses) * 30);


document.getElementById("tempo").innerHTML = "O valor inicial de R$  " + value + " é aplicado a uma taxa de " + fee + "%, gerando um montante de R$ "+ valorfinal+ "<br>"+ ", ao final de um período de: " + "<br>"+"<b>"+ anos  +" ano(os)," + meses +" mes(es) e "+ dias + "  dia(s)." +"<b>";
  

});

    function Limpar()  {
      
          value.value = " ";
          fee.value = " ";
         valorfinal.value = " ";
         
              
    }
    
   
