

//  function Limpar() {
//      const total = document.querySelector("input_field")
//     input_field.value = " ";
//  }
  
document.getElementById('calculate').addEventListener('click', function(){
    const value = document.getElementById('value').value;
    const fee = (document.getElementById('fee').value) / 100;
    const time = document.getElementById('time').value;

//  fórmula do juros compostos :  
//  M = C.(1 + N) ^ t
    const total = value * (1 + fee)**time;

    document.getElementById('total').innerHTML = ("R$ " + total.toFixed(2).replace('.', ','));
 

  
});



    function Limpar()  {
      
          value.value = " ";
          fee.value = " ";
          time.value = " ";
         
        
    }
    