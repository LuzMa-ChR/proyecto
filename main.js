var objGalaxia1,objHumano1;

function main(){
	objGalaxia1=new Galaxia(1,"Perro",1000,50,50,"deepskyblue",1000,150,100,10);
	
	objHumano1=new Humano(1,"Pedro",13,35,30,"lightsalmon",50,50,50);
	objHumano1.Agregar(new Cabeza(1,35,30,"lightsalmon",50,50,50));
	objHumano1.Agregar(new Brazo(1,35,30,"lightsalmon",50,50,50));
	objHumano1.Agregar(new Torax(1,35,30,"lightsalmon",50,50,50));
	objHumano1.Agregar(new Pierna(1,35,30,"lightsalmon",50,50,50));

		var myCanvas=document.getElementById("myCanvas");
		var	context=myCanvas.getContext("2d");
		objGalaxia1.Dibujar(context);
		objHumano1.Dibujar(context);
}

function onkeyup_event(){
	switch(event.keyCode){
		case 37:
			console.log("Izquierda");
			objGalaxia1.Mover("Izquierda");	
			break;
		case 38:
			console.log("Arriba");
			objGalaxia1.Mover("Arriba");
			break;
		case 39:
			console.log("Derecha");	
			objGalaxia1.Mover("Derecha");	
			break;
		case 40:
			console.log("Abajo");	
			objGalaxia1.Mover("Abajo");
			break;

		//Humano
		case 87:
			console.log("Arriba");	
			objHumano1.Mover("Arriba");
			break;
		case 83:
			console.log("Abajo");	
			objHumano1.Mover("Abajo");
			break;
		case 65:
			console.log("Izquierda");	
			objHumano1.Mover("Izquierda");
			break;
		case 68:
			console.log("Derecha");	
			objHumano1.Mover("Derecha");
			break;
	}
}

var id1;
var t=0;

function iniciarAnimacion(){
 	id1=setInterval(animacion,42);
 }
function animacion(){

	var myCanvas=document.getElementById("myCanvas");
	var	context=myCanvas.getContext("2d");
	context.fillStyle = "white";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);

	if(objGalaxia1!='undefined')
		objGalaxia1.Dibujar(context);
	
	if(objHumano1!='undefined')
		objHumano1.Dibujar(context);
	t+=42;

}

function detenerAnimacion(){
	if(id1!=null)
		clearInterval(id1);
}