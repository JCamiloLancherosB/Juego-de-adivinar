const intentos = document.querySelector("#difficulty").firstChild, rango = document.querySelector("#difficulty").firstChild.nextSibling, numeroRecibido = document.getElementById("options"), play = document.getElementById("play"), anuncio = document.getElementById("anuncio");

let intentosD = 1, intentosU = 1, numeroSecreto = Math.floor(Math.random()*10)+1, adivina = 0, intentosNumber = 0;

const show = () => {
    anuncio.innerHTML = "Se ha cambiado el nivel del juego";
    anuncio.style.opacity = 1;
    setTimeout(() => {
        anuncio.style.opacity = 0;
    }, "1000");
    setTimeout(() => {
        anuncio.style.opacity = 1;
    }, "2000");
    setTimeout(() => {
        anuncio.style.opacity = 0;
    }, "3000");
}

intentos.addEventListener("change", function(){
    intentosU = 1;
    if(intentos.value === "first") intentosNumber = 1;
    if(intentos.value === "second") intentosNumber = 2;
    if(intentos.value === "third") intentosNumber = 3;
    if(intentos.value === "fourth") intentosNumber = 4;
    if(intentos.value === "fifth") intentosNumber = 5;
    if(intentos.value === "sixth") intentosNumber = 6;
    if(intentos.value === "seventh") intentosNumber = 7;
    if(intentos.value === "eighth") intentosNumber = 8;
    if(intentos.value === "nineth") intentosNumber = 9;
    if(intentos.value === "tenth") intentosNumber = 10;
    intentosD = intentosNumber;
    show();
});

rango.addEventListener("change", function(){
    intentosU = 1;
    intentosD = intentosNumber;
    if(rango.value === "ten") numeroSecreto = Math.floor(Math.random()*10)+1;
    if(rango.value === "twenty") numeroSecreto = Math.floor(Math.random()*20)+1;
    if(rango.value === "fifty") numeroSecreto = Math.floor(Math.random()*50)+1;
    if(rango.value === "hundred") numeroSecreto = Math.floor(Math.random()*100)+1;
    show();
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

    if(adivina == 0 && intentosD >= 1) {
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
        //Avisar que se acabaron las oportunidades y cortar el código.
        if(intentosD < 1 && adivina !== 1) {
            alert("Se te acabaron las oportunidades de adivinar, lo siento.");
            return 0
        }

        //Si aún le quedan oportunidades al usuario, le avisaremos con la cantidad de oportunidades disponibles.
        // if(numeroUsuario > numeroSecreto) alert(`Sigue intentándolo, te queda${letraN} ${intentosD} intento${letraS}.\nPista: el número es menor.`);
        // if(numeroUsuario < numeroSecreto) alert(`Sigue intentándolo, te queda${letraN} ${intentosD} intento${letraS}.\nPista: el número es mayor.`);
        
        //Utilizando operador ternario para abreviar el código ("un poco")
        numeroUsuario > numeroSecreto ? alert(`Sigue intentándolo, te queda${letraN} ${intentosD} intento${letraS}.\nPista: el número es menor.`) : alert(`Sigue intentándolo, te queda${letraN} ${intentosD} intento${letraS}.\nPista: el número es mayor.`);
    }
    }

    if(isNaN(numeroUsuario) && intentosD >= 1) {
        alert("¡SOLO NÚMEROS!");
        intentosU += 1;
        intentosD -= 1;
        if(intentosD < 1 && adivina !== 1) {
            alert("Se te acabaron las oportunidades de adivinar, lo siento.");
        }
    }
};

play.addEventListener("click", aviso);