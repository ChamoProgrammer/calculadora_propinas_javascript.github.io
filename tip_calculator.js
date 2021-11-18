//Calculate Tip
function calculadora_propinas() {
    let billAmt = document.getElementById("billamt").value;
    let serviceQual = document.getElementById("serviceQual").value;
    let numOfPeople = document.getElementById("peopleamt").value;
  
    //validate input----validar entrada
    if (billAmt === "" || serviceQual == 0) {
      alert("Porfavor ingrese valores...😒");
      return;
    }
    //Check to see if this input is empty or less than or equal to 1--------- Verifique si esta entrada está vacía o es menor o igual a 1
    if (numOfPeople === "" || numOfPeople <= 1) {
      numOfPeople = 1;
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "block";
    }
  
    //Calculate tip
    let total = (billAmt * serviceQual) / numOfPeople;
    //round to two decimal places----redondear a dos decimales
    total = Math.round(total * 100) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
    //Display the tip-----Mostrar la sugerencia
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
  
  }
  
  //Hide the tip amount on load-------Ocultar el monto de la propina en la carga
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";
  
  //click to call function----hacer clic para llamar a la función
  document.getElementById("calculate").onclick = function() {
    calculadora_propinas();
  
  };