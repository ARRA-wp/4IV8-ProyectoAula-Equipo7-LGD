
function suma() {
    /*
    let Cant_A = document.getElementById('Cant_A');
    let Cal_A = document.getElementById('Cal_A');
    //let parar = document.getElementById('Suma_A');
    let Cant_B = document.getElementById('Cant_B');
     let Cal_B = document.getElementById('Cal_B');
     //let parar = document.getElementById('Suma_B');
    let Cant_C = document.getElementById('Cant_C');
    let Cal_C = document.getElementById('Cal_C');
    //let parar = document.getElementById('Suma_C');
*/
    let Cant_A = document.querySelector('#Cant_A').value;
    let Cal_A = document.querySelector('#Cal_A').value;
    let Cant_B = document.querySelector('#Cant_B').value;
    let Cal_B = document.querySelector('#Cal_B').value;
    let Cant_C = document.querySelector('#Cant_C').value;
    let Cal_C = document.querySelector('#Cal_C').value;

    var ResA=Cal_A*Cant_A;
    var ResB=Cal_B*Cant_B;
    var ResC=Cal_C*Cant_C;

    var total=ResA+ResB+ResC;
     
     document.table.SumaTotal.value= total ;





}
