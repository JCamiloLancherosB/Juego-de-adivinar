const intentos = document.querySelector("#difficulty").firstChild, rango = document.querySelector("#difficulty").firstChild.nextSibling, numeroRecibido = document.getElementById("options"), play = document.getElementById("play");

let intentosD = 1, intentosU = 1, numeroSecreto = Math.floor(Math.random()*10)+1, adivina = 0;

intentos.addEventListener("change", function(){
    if(intentos.value === "first") intentosD = 1;
    if(intentos.value === "second") intentosD = 2;
    if(intentos.value === "third") intentosD = 3;
    if(intentos.value === "fourth") intentosD = 4;
    if(intentos.value === "fifth") intentosD = 5;
    if(intentos.value === "sixth") intentosD = 6;
    if(intentos.value === "seventh") intentosD = 7;
    if(intentos.value === "eighth") intentosD = 8;
    if(intentos.value === "nineth") intentosD = 9;
    if(intentos.value === "tenth") intentosD = 10;
});

rango.addEventListener("change", function(){
    if(rango.value === "ten") numeroSecreto = Math.floor(Math.random()*10)+1;
    if(rango.value === "twenty") numeroSecreto = Math.floor(Math.random()*20)+1;
    if(rango.value === "fifty") numeroSecreto = Math.floor(Math.random()*50)+1;
    if(rango.value === "hundred") numeroSecreto = Math.floor(Math.random()*100)+1;
})
console.log(typeof 5)
console.log(numeroRecibido.value)
// if(numeroSecreto > 100) numeroSecreto = Math.floor(Math.random()*1000)+1;
const aviso = function() {
    if(intentosD == 0) return 0
    
    
    let numeroUsuario = parseInt(numeroRecibido.value);
    // let numeroUsuario = parseFloat(prompt(`Tienes que adivinar un número del 1 al 10. Ahora tienes ${intentosD} intentos.`)), adivina = 0;
    // let numeroUsuario = parseFloat(numeroRecibido.value);
    //Si acierta el número ingresado simplemente daremos el aviso, será un poco más especial el aviso si se logra al primer intento.
    if(!isNaN(numeroUsuario)) {
    if(numeroUsuario == numeroSecreto) {
        if(intentosU == 0) alert(`Felicidades, ha encontrado el número ${numeroSecreto} con tan solo un intento, ¡enhorabuena!`)
        if(intentosU >= 1) alert(`Bien hecho, es el número ${numeroSecreto}. \nHas acertado en ${intentosU} intentos.`);
        adivina = 1;
    }

    if(adivina == 0 && intentosD > 1) {
        intentosD -= 1;
        intentosU += 1;
        //Variables simplemente para controlar si se habla en plural o en singular (con respecto al número de intentoS)
        let letraS, letraN;
        if(intentosD > 1) {
            letraS = "s";
            letraN = "n"
        }
        
        if(intentosD == 1) {
            letraS = "";
            letraN = "";
        }

        //Si aún le quedan oportunidades al usuario, le avisaremos con la cantidad de oportunidades disponibles.
        // if(numeroUsuario > numeroSecreto) alert(`Sigue intentándolo, te queda${letraN} ${intentosD} intento${letraS}.\nPista: el número es menor.`);
        // if(numeroUsuario < numeroSecreto) alert(`Sigue intentándolo, te queda${letraN} ${intentosD} intento${letraS}.\nPista: el número es mayor.`);
        
        //Utilizando operador ternario para abreviar el código ("un poco")
        numeroUsuario > numeroSecreto ? alert(`Sigue intentándolo, te queda${letraN} ${intentosD} intento${letraS}.\nPista: el número es menor.`) : alert(`Sigue intentándolo, te queda${letraN} ${intentosD} intento${letraS}.\nPista: el número es mayor.`);
        
        aviso();
    }
    //Debemos restar 1 a las oportunidades cuando estas se nos acaben para poder dar nuestro aviso en 0 y no en 1.
    if(intentosD > 0){
        intentosD -= 1;
    //Diremos que el usuario ha perdido el juego cuando se le acaben las oportunidades.
    if(intentosD < 1 && adivina !== 1) {
        console.log(intentosD)
        alert("Se te acabaron las oportunidades de adivinar, lo siento.");
    }}
    }

    if(isNaN(numeroUsuario) && intentosD >= 1) {
        alert("¡SOLO NÚMEROS!");
        intentosU += 1;
        intentosD -= 1;
        if(intentosD < 1 && adivina !== 1) {
            alert("Se te acabaron las oportunidades de adivinar, lo siento.");
        }
    }
    // aviso();
};
// aviso();
play.addEventListener("click", aviso);