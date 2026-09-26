onload = () => {
  document.body.classList.remove("container");
};

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

setInterval(() => {
  index = (index + 1) % frases.length;
  texto.style.animation = "none";
  void texto.offsetWidth; // reinicia animación
  texto.textContent = frases[index];
  texto.style.animation = "";
}, 7000);