// Declaracion de variables

let lastKM = 37104;
let diferenciaKM = 0;
let kilometrajeAnterior;
let KmActual = 0;
let almacenarKilometrosVariable = 0;
let SiguienteCambioAceite = 0;

function phpTest(){
var responseConsulta = "<?php echo $sql; ?>";
console.log(responseConsulta);

}

function modHTML (htmlID,innerData){
  htmlID.innerHTML = innerData;
}

updateCambioAceite();

function updateCambioAceite() {
modHTML(ActualKMHTML,`Kilometraje actual: ${lastKM} KM`);
modHTML(kilometrajeAnteriorHTML,`Kilometraje anterior: ${kilometrajeAnterior} KM`);
modHTML(DiferenciaKMHTML,`Recorrido: ${diferenciaKM} KM`);
modHTML(SiguienteCambioAceiteHTMLID,`Siguiente cambio: ${SiguienteCambioAceite} KM`);
}

//////////////////////////////////////////////
                                            //
function joker(){                           //
    console.log("Llamada a joker")          //
    phpTest();                                //
      console.log("Fin de joker")           //
};                                          //
                                            //
//////////////////////////////////////////////


function LlamadaMaster(){
    console.log("Arranque de LLamada Master");
    let KmActual = document.getElementById("kmCambioDeAceite").value;
    console.log(`KmActual: ${KmActual}`);
    almacenarKM(KmActual);
    
}

function almacenarKM (almacenarKilometrosVariable){
    console.log("Variables:",lastKM,kilometrajeAnterior,diferenciaKM,almacenarKilometrosVariable)
    
    if (almacenarKilometrosVariable > lastKM) {
    kilometrajeAnterior = lastKM
    diferenciaKM =  almacenarKilometrosVariable - lastKM
    lastKM = almacenarKilometrosVariable
    SiguienteCambioAceite = Math.floor(lastKM) + Math.floor(2500);
    console.log(lastKM,kilometrajeAnterior,diferenciaKM,SiguienteCambioAceite)
    return {
      localStorage.setItem('username', username);
      //kilometrajeAnterior,diferenciaKM,SiguienteCambioAceite,updateCambioAceite)
}}
else {
  alert("Ingresa un kilometraje superior al ultimo reportado");
}}

localStorage.setItem('username', username);