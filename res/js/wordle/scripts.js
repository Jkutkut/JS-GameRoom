var db;
const KEYS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Nombres de 5 letras", "Lugares de 5 letras", "Animales de 5 letras"];

window.onload = () => {
    fetch('../res/db/wordle/wordle.json')
        .then(response => response.json())
        .then((json) => {db = json;init()});
}

function init() {
    crearCuadrados();

    var word = obtenerNuevaPalabra();

    function crearCuadrados() {
        const tablero = document.getElementById("tablero");

        for (let i = 0; i < 25; i++) {
            let cuadrado = document.createElement("div");

            cuadrado.classList.add("cuadrado");

            cuadrado.classList.add("animate__animated");

            cuadrado.setAttribute("id", i + 1);
            
            tablero.appendChild(cuadrado);
        }
    }

    let palabrasIntentos = [[]];
    let espacioDisponible = 1;

    let contPalabras = 0;

    let abecedario = document.querySelectorAll(".teclado button");

    
    function obtenerNuevaPalabra(){
        let indKeys = Math.floor(Math.random() * (KEYS.length));
        let valor = KEYS[indKeys];
        let palabraIndex = Math.floor(Math.random() * (db[valor].length));
      
        pal = (db[valor][palabraIndex]).toLowerCase();
        
        return pal;
    }

    function cambiarColor(letra, index){
        const letraCorrecta = word.includes(letra);

        if (!letraCorrecta) {
            return "rgb(60, 60, 60)";
          }
      
          const posicionLetra = word.charAt(index);
          const posicionCorrecta = letra === posicionLetra;
      
          if (posicionCorrecta) {
            return "rgb(85, 140, 80)";
          }
      
          return "rgb(180, 160, 60)";
    }

    function introducirPalabra() {
        const palabra = obtenerPalabra();

        if (palabra.length != 5) {
            window.alert("La palabra debe tener más de 5 letras");
        }
        else{
            const palabraCreada = palabra.join('');

            const idPrimeraLetra = contPalabras * 5 + 1;
            const intervalo = 200;
                
             palabra.forEach((letra, index) =>{
                 setTimeout(() =>{
                     const color = cambiarColor(letra, index);
                     
                     const idLetra = idPrimeraLetra + index;
                     const letraEl = document.getElementById(idLetra);
                     letraEl.classList.add("animate__flipInX");
                     letraEl.style = `background-color:${color};border-color:${color}`;
                    
                 }, intervalo * index);
             });
         
             contPalabras += 1;
         
            if (palabraCreada == word) {
                setTimeout(() => {
                    window.alert("¡¡¡ Felicidades, has acertado la palabra !!!");
                    reiniciar();
                }, 1000);
            }        
            else if (palabrasIntentos.length == 5) {
                setTimeout(() => {
                    window.alert("¡¡¡ Te has quedado sin intentos !!!" + "\nLa palabra es ¡¡¡ " + word + " !!!");
                    reiniciar();
                }, 1000);
            }
        
            if (palabra.length == 5) {
                palabrasIntentos.push([]);
            }
        }
    }

    function reiniciar(){
        setTimeout(function(){location.reload()}, 1250);
    }

    function borrarLetra() {
        const palabra = obtenerPalabra();
        const letraBorrada = palabra.pop();

        palabrasIntentos[palabrasIntentos.length - 1] = palabra;

        const ultimaLetra = document.getElementById(String(espacioDisponible - 1));

        ultimaLetra.textContent = "";

        espacioDisponible = espacioDisponible - 1;
      }

    for (let i = 0; i < abecedario.length; i++) {
        abecedario[i].onclick = ({target}) => {
            const letra = target.getAttribute("letra");

            if(letra == "enter"){
                introducirPalabra();
                return;
            }

            if (letra === "del") {
                if(poderBorrar() == true){
                    borrarLetra();
                }
                return;
            }

            actualizarletras(letra);
        }
        
    };

    function poderBorrar(){
        var bool = true;

        if (espacioDisponible == 1 || (palabrasIntentos.length == 2 && espacioDisponible == 6) || (palabrasIntentos.length == 3 && espacioDisponible == 11) || (palabrasIntentos.length == 4 && espacioDisponible == 16) || (palabrasIntentos.length == 5 && espacioDisponible == 21))  {
            bool = false;
        }

        return bool;
    }

    function obtenerPalabra(){
        const totalPalabras = palabrasIntentos.length;

        return palabrasIntentos[totalPalabras - 1];
    };

    function actualizarletras(letra){
        const palabra = obtenerPalabra();

        if (palabra && palabra.length < 5) {
            palabra.push(letra);

            const espacioDisponibleL = document.getElementById(String(espacioDisponible));

            espacioDisponible = espacioDisponible + 1;

            espacioDisponibleL.textContent = letra;
        }
    };
};