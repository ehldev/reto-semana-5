let L = +prompt("Cuantos litros de ha producido?");
let PG = +prompt("ingrese el precio de 1 galon");

let TG = L / 3.785;
let GA = TG * PG;

alert(`Su ganancia por ${TG} galones es S/. ${GA}`);
