function prueba1(){
let n = prompt("Dame un número.");

for(let i=1;i<=n;i++){

   document.write(i + " ");
   document.write(i*i + " ");
   document.write(i*i*i + " <br>");

	}
}

function prueba2(){
	let x = Math.floor((Math.random() * 101));
	let y = Math.floor((Math.random() * 101));
	let d1 = new Date();
	let t1 = d1.getTime();
	let suma = prompt("Dame la suma de "+x +" y "+y);
	let res = x + y;
	if(res == suma){
		document.write("Correcto!<br><br>");
	}
	else{
		document.write("Incorrecto<br>");
		document.write("La respuesta era: "+res+"<br><br>");
	}
	let d2 = new Date();
	let t2 = d2.getTime();
	let t=(t2-t1)/1000;
	document.write("Te tardaste "+t +" segundos");
}

function prueba3(){
	let x = Math.floor((Math.random() * 11)+5);
	let arr = [];
	let pos = 0;
	let neg = 0;
	let cero = 0;
	for(let i=0;i<x;i++){
		arr[i] = Math.floor((Math.random() * 21)-10);
		document.write(arr[i] +" ");
		if(arr[i] < 0){
			neg++;
		}
		else if(arr[i] > 0){
			pos++;
		}
		else if(arr[i] == 0){
			cero++;
		}
	}
	document.write("<br><br>");
	document.write("Numeros en el arreglo: " +x +"<br>");
	document.write("Numeros mayores a 0: " +pos +"<br>");
	document.write("Numeros menores a 0: " +neg +"<br>");
	document.write("Numeros iguales a 0: " +cero +"<br>");
}

function prueba4(){
	let prom = [0,0,0,0,0];
	var mat = [row1 = [5], row2 =[5], row3 = [5], row4 = [5], row5 = [5]];
	for(let i = 0; i<5; i++){
		row1[i] = Math.floor((Math.random()*10));
		prom[i] = prom[i] + row1[i];
	}
	for(let i = 0; i<5; i++){
		row2[i] = Math.floor((Math.random()*10));
		prom[i] = prom[i] + row2[i];
	}
	for(let i = 0; i<5; i++){
		row3[i] = Math.floor((Math.random()*10));
		prom[i] = prom[i] + row3[i];
	}
	for(let i = 0; i<5; i++){
		row4[i] = Math.floor((Math.random()*10));
		prom[i] = prom[i] + row4[i];
	}
	for(let i = 0; i<5; i++){
		row5[i] = Math.floor((Math.random()*10));
		prom[i] = prom[i] + row5[i];
	}
	for(let i = 0; i<5;i++){
			prom[i] = prom[i] / 5;
			document.write(mat[i] + " Promedio: " +prom[i]);
			document.write("<br>");
	}
}

function prueba5(){
	let n = prompt("Dame un numero para invertir: ");
	let inv = 0;
	document.write("Numero: " +n +"<br>");
	while(n > 0){
		inv = inv*10 + n%10;
		n = Math.floor(n / 10);
	}
	document.write("Inverso: " +inv);
}



function preguntas(){
    document.write("1. ¿Qué diferencias y semejanzas hay entre Java y JavaScript?<br><br>")
    document.write("2. ¿Qué métodos tiene el objeto Date? (Menciona al menos 5*)<br><br>")
    document.write("3. ¿Qué métodos tienen los arreglos? (Menciona al menos 5*)<br><br>")
    document.write("4. ¿Cómo se declara una variable con alcance local dentro de una función?<br><br>")
    document.write("5. ¿Qué implicaciones tiene utilizar variables globales dentro de funciones?<br><br>")
    document.write("6. ¿Qué método de String se puede utilizar para buscar patrones con expresiones regulares? ¿Para qué podrías utilizar esto en una aplicación web?<br><br>")
}