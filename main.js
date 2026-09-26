// ==========================================
// INICIAR ANIMACIONES
// ==========================================

onload = () => {
    document.body.classList.remove("container");
};


// ==========================================
// FRASES DEL CARRUSEL
// ==========================================

const frases = [
    "Cuando tú quieras, ahi estaré, esperando por ti",
    "Incluso cuando te enojas conmigo, estoy queriendote",
    "Discúlpame por aveces molestarte, trataré de seguir mejorando para ti",
    "Solo quiero que estés bien y siempre la pases bonito :D",
    "Quizas ya lo sepas, pero te extraño cada vez que no estás conmigo, aún si solo sean por unos minutos jsjs",
    "Y si te pasa lo mismo, recuerda que no existe un momento del día en que pueda apartarme de ti",
    "Siempre hay un pedacito de mi día que termina llevándome a ti y eso me encanta",
    "Y aunque no siempre pueda estar ahí, siempre estás presente en mis pensamientos",
    "Y sobretodo, siempre ando pidiendole a Dios que te cuide, diciendo tu lindo nombre al rezar <3"
];

let index = 0;

const texto = document.getElementById("carouselText");


// Cambiar frase cada 10 segundos
setInterval(() => {

    index = (index + 1) % frases.length;

    texto.style.animation = "none";

    void texto.offsetWidth;

    texto.textContent = frases[index];

    texto.style.animation = "";

}, 10000);


// ==========================================
// CARTAS
// ==========================================

const cartas = {

    1: {
        titulo: "Para cuando me extrañes, mi Alondrita",
        texto: `
            Si estás leyendo esto porque me extrañas, primero quiero que sepas algo: yo probablemente también te estoy extrañando.

Quizás en ese momento no pueda estar contigo, abrazarte, molestarte con alguna de mis tonterías o simplemente pasar el rato contigo haciendo cualquier cosa. Pero quiero que recuerdes que, aunque no esté a tu lado físicamente, siempre hay una parte de mí pensando en ti.

A veces me pongo a recordar nuestras conversaciones, nuestras bromas, las veces que nos quedamos hablando hasta tarde y hasta esas pequeñas cosas que parecen insignificantes, pero que conmigo se quedan. Porque contigo aprendí que no necesito que pase algo enorme para sentirme feliz. A veces simplemente hablar contigo, jugar juntos, saber cómo amaneciste o preguntarte si ya comiste es suficiente para alegrarme el día.

Así que cuando me extrañes, no pienses que estás sola en ese sentimiento. Piensa en mí, en todas las veces que te he dicho que te quiero, en nuestros “amol”, nuestros “amolcito”, nuestros “muak muak” y en todas las veces que nos hemos prometido volver a encontrarnos.

Y si pudiera estar ahí en ese momento, te daría un abrazo bien fuerte y me quedaría contigo un ratito más.

Hasta que podamos volver a estar juntos, guarda esta carta como un pedacito de mí.

Te quiero muchototototote, Alondrita.

Y recuerda mi promesa:

Siempre voy a volver a tu lado, pase lo que pase, cuando tú me quieras ahi estaré.
        `
    },

    2: {
        titulo: "Para que nunca olvides lo que siento por ti",
        texto: `
            Mi amolcito:

Hay muchas cosas que te digo todos los días: que te quiero, que te amo, que descanses, que comas, que tomes awita, que tengas cuidado... Pero siento que ninguna de esas palabras alcanza para explicar todo lo que realmente siento por ti.

Por eso quería dejarte esto escrito.

Quiero que sepas que no eres solamente alguien con quien hablo todos los días. Eres alguien que se fue convirtiendo poquito a poquito en una parte muy importante de mi vida.

Me gusta saber de ti. Me gusta preguntarte cómo amaneciste, qué hiciste, qué soñaste, cómo te fue, si comiste, si estás cansada. Me gusta escucharte contarme tus cosas, aun si seas solo cosas pequeñas, me encanta saber todo de ti y lo que haces toooooodo el tiempo.

Me gusta nuestra manera de querernos.

Me gusta que podamos pasar de decirnos alguna tontería a decirnos “te amo” en cuestión de segundos. Me gusta que podamos molestarnos, reírnos, jugar, hablar hasta tarde y luego despedirnos deseándonos bonitos sueños.

Y aunque muchas veces te moleste, detrás de todo eso hay muchísimo cariño.

Quiero que nunca confundas mis bromas con falta de amor.

Porque si hay algo que tengo claro es que te amo muchísimo.

Y si algún día dudas de lo que siento, vuelve a leer esto.

No quiero que recuerdes solamente mis palabras. Quiero que recuerdes todas las pequeñas cosas que hago por ti, incluso aquellas que quizá pasan desapercibidas.

Porque muchas veces mi forma de decirte “te amo” no es repetir esas palabras.

A veces es preguntarte si ya comiste.

A veces es decirte que tomes agua.

A veces es preocuparme porque llegaste cansada.

A veces es querer pasar un rato contigo.

A veces es simplemente quedarme despierto un poquito más porque todavía quiero hablar contigo.

Y otras veces simplemente es pensarte.

Así que, mi Alondrita, si algún día se te olvida cuánto te amo, recuerda esto:

En mi corazón tienes un lugar que nadie más ocupa.

Y mientras yo pueda, voy a seguir cuidando ese lugar.

Te amo muuuuuuuuuuucho, mi Alondrita.
        `
    },

    3: {
        titulo: "Para cuando necesites recordar todo lo que no te digo",
        texto: `
            Mi Alondrita:

Hay cosas que probablemente nunca te digo directamente.

No porque no las sienta, sino porque muchas veces no sé cómo decirlas o no encuentre las palabras perfectas.

A veces estoy hablando contigo o jugando contigo, mientras por dentro, simplemente estoy pensando en lo mucho que me gusta tenerte en mi vida.

A veces te pregunto si comiste o si tomaste agua y parece una pregunta cualquiera.

Pero detrás de ese “¿desayunas siiii?” hay un:

“Cuídate, por favor. Me importas demasiado.”

Cuando te digo que descanses, muchas veces significa:

“Quiero que estés bien.”

Cuando te pregunto cómo amaneciste significa:

“Me importa cómo te sientes.”

Cuando quiero jugar contigo significa:

“Quiero compartir un pedacito de mi día contigo.”

Y cuando te digo que te extraño significa mucho más que simplemente extrañar tu presencia.

Extraño tus mensajes.

Extraño tus ocurrencias.

Extraño nuestras conversaciones.

Extraño molestarte.

Extraño que me molestes.

Extraño esas cosas que solo tienes tú, esas conversaciones que empiezan sin ningún sentido y terminan haciéndome sonreír como un tonto.

Hay algo más que quiero que sepas.

Quizás no siempre encuentre las palabras perfectas. Quizás a veces no te diga todo lo que tengo en mi corazón. Quizás incluso haga bromas cuando en realidad quiero decirte algo bonito.

Pero nunca quiero que pienses que por eso siento menos.

Porque siento muchísimo.

Te quiero cuando estamos hablando.

Te quiero cuando estamos juntos.

Te quiero cuando estamos lejos.

Te quiero incluso en esos momentos en los que simplemente estoy haciendo mis cosas y, de repente, apareces en mi pensamiento.

Y sobre todo, quiero que recuerdes que no tienes que hacer nada extraordinario para que yo te quiera.

Me gustas siendo tú.

Con tus ocurrencias, tus dramas, tus bromas, tus historias , tus días buenos y también tus días malos.

Te quiero completa.

Y si algún día no encuentro la manera de decírtelo, espero que esta carta lo haga por mí.

Porque hay sentimientos que uno no siempre sabe explicar...

pero que están presentes todos los días en el corazón.

Y tú, mi Alondrita, estás ahí.

Te amo <3
        `
    }

};


// ==========================================
// ELEMENTOS DE LA CARTA
// ==========================================

const overlay = document.getElementById("letterOverlay");
const letter = document.getElementById("letter");

const letterTitle = document.getElementById("letterTitle");
const letterText = document.getElementById("letterText");

const closeLetter = document.getElementById("closeLetter");


// ==========================================
// ABRIR CARTA
// ==========================================

function abrirCarta(numeroFlor) {

    const carta = cartas[numeroFlor];

    if (!carta) return;

    letterTitle.textContent = carta.titulo;

    // Mantiene los saltos de línea del texto
    letterText.textContent = carta.texto.trim();

    overlay.classList.add("show");

    // Pequeño efecto de entrada
    setTimeout(() => {
        letter.classList.add("open");
    }, 50);
}


// ==========================================
// CERRAR CARTA
// ==========================================

function cerrarCarta() {

    letter.classList.remove("open");

    setTimeout(() => {
        overlay.classList.remove("show");
    }, 350);
}


// ==========================================
// CLICK EN LAS FLORES
// ==========================================

const flower1 = document.querySelector(".flower--1");
const flower2 = document.querySelector(".flower--2");
const flower3 = document.querySelector(".flower--3");

flower1.addEventListener("click", () => {
    abrirCarta(1);
});

flower2.addEventListener("click", () => {
    abrirCarta(2);
});

flower3.addEventListener("click", () => {
    abrirCarta(3);
});


// ==========================================
// BOTÓN CERRAR
// ==========================================

closeLetter.addEventListener("click", cerrarCarta);


// ==========================================
// CERRAR TOCANDO FUERA DE LA CARTA
// ==========================================

overlay.addEventListener("click", (event) => {

    if (event.target === overlay) {
        cerrarCarta();
    }

});


// ==========================================
// CERRAR CON ESC
// ==========================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        cerrarCarta();
    }

});

// ===== MÚSICA DE FONDO =====

const bgMusic = document.getElementById("bgMusic");

bgMusic.volume = 0.35;

function iniciarMusica() {
    bgMusic.play().catch(() => {});
    
    document.removeEventListener("click", iniciarMusica);
    document.removeEventListener("touchstart", iniciarMusica);
}

document.addEventListener("click", iniciarMusica);
document.addEventListener("touchstart", iniciarMusica);