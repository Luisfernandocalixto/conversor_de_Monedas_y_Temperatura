/*  */

let valorEnDolar = 155.5;   // cantidad
let cotizacionEnPesos = 18.12; // Valor del dolar => pesos mexicanos
let valorEnPesos = valorEnDolar * cotizacionEnPesos;
valorEnPesos = valorEnPesos.toFixed(2);

let dolar = document.getElementById("dolar");
dolar.style.fontWeight = 600;
dolar.style.fontSize = '20px';
dolar.style.color = '#fff';
dolar.textContent = "Dolares: " + "$" + valorEnPesos;

/*  */

let valorEnEuro = 100; // cantidad
let cotizacionM = 19.37;  // Valor del euro => pesos mexicanos
let valorEnPesosM = valorEnEuro * cotizacionM;
valorEnPesosM = valorEnPesosM.toFixed(2);

let euro = document.getElementById("euro");
euro.style.fontWeight = 600;
euro.style.fontSize = '20px';
euro.style.color = '#fff';
euro.textContent = "Euro: " + "$" + valorEnPesosM;

/*  */

let valorEnLibraEsterlina = 100; // cantidad
let cotizacionLE = 22.23;  // Valor del euro => pesos mexicanos
let valorEnPesosMe = valorEnLibraEsterlina * cotizacionLE;
valorEnPesosMe = valorEnPesosMe.toFixed(2);

let libraE = document.getElementById("libraEsterlina");
libraE.style.fontWeight = 600;
libraE.style.fontSize = '20px';
libraE.style.color = '#fff';
libraE.textContent = "Libra Esterlina: " + "$" + valorEnPesosMe;

/*  */

let gradosC = 5;
let gradosF = (gradosC * 1.8) + 32;
let gradosK = gradosC - 273.15;

let temperatura = document.getElementById("temperatura");
temperatura.style.fontWeight = 600;
temperatura.style.fontSize = '20px';
temperatura.style.color = 'Orange';
temperatura.innerHTML = `Grados °C son: ${gradosC} <br> Grados °F son: ${gradosF} <br> Grados °K son: ${gradosK}`

/*  */

alert("Bienvenido: \nLuis Fernando Peña Calixtro")

/*  */
