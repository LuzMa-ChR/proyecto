class Galaxia extends Figura
{
	constructor (id,n,ce,an,al,c,d,x,y,vel)
	{
		super(id,an,al,c,x,y,vel);
		this.Nombre=n;
		this.CantidadE=ce;
		this.Distancia=d;
		//this.Velocidad=vel;
	}

	Dibujar(contextoDeDibujar)
	{
		var radio=this.Ancho/2;
		//Pluma
		contextoDeDibujar.strokeStyle=this.Color;

		//DATOS//
		/*Nombre
		contextoDeDibujar.beginPath();
		contextoDeDibujar.fillText(this.Nombre,this.X,this.Y+150);
		contextoDeDibujar.closePath();
		contextoDeDibujar.stroke();

		//Cant. Estrella
		contextoDeDibujar.beginPath();
		contextoDeDibujar.fillText(this.CantidadE,this.X,this.Y+190);

		contextoDeDibujar.stroke();*/
		


		//Circulo D
		contextoDeDibujar.beginPath();
		contextoDeDibujar.arc(this.X+2*radio,this.Y+radio,radio,0,-1.1*3.1416,"true");
		contextoDeDibujar.moveTo(this.X+radio,this.Y+radio);
		contextoDeDibujar.closePath();
		contextoDeDibujar.stroke();

		//CirculoI
		contextoDeDibujar.beginPath();
		contextoDeDibujar.arc(this.X,this.Y+radio,radio,2.9,2*3.1416,"true");
		contextoDeDibujar.stroke();
		
		//Pequeños Circulo 
		contextoDeDibujar.beginPath();
		contextoDeDibujar.arc(this.X+0.8*radio,this.Y+1.5*radio,radio/9,0,2*3.1416,"true");
		contextoDeDibujar.fillStyle="black";
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();

		contextoDeDibujar.beginPath();
		contextoDeDibujar.arc(this.X,this.Y+2*radio,radio/9.9,0,2*3.1416,"true");
		contextoDeDibujar.fillStyle="black";
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();
		
		contextoDeDibujar.beginPath();
		contextoDeDibujar.arc(this.X+2*radio,this.Y+0.06*radio,radio/9,0,2*3.1416,"true");
		contextoDeDibujar.fillStyle="black";
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();

		contextoDeDibujar.beginPath();
		contextoDeDibujar.arc(this.X+3*radio,this.Y+0.8*radio,radio/9,0,2*3.1416,"true");
		contextoDeDibujar.fillStyle="black";
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();

		//circulitos sueltos
		//1
		contextoDeDibujar.beginPath();
		contextoDeDibujar.arc(this.X+0.8*radio,this.Y+2.2*radio,radio/20,0,2*3.1416,"true");
		contextoDeDibujar.fillStyle="black";
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();

		//2
		contextoDeDibujar.beginPath();
		contextoDeDibujar.arc(this.X+1.4*radio,this.Y+0.5*radio,radio/30,0,2*3.1416,"true");
		contextoDeDibujar.fillStyle="black";
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();

		//3
		contextoDeDibujar.beginPath();
		contextoDeDibujar.arc(this.X+1.5*radio,this.Y+1.5*radio,radio/20,0,2*3.1416,"true");
		contextoDeDibujar.fillStyle="black"; 
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();

		//4
		contextoDeDibujar.beginPath();
		contextoDeDibujar.arc(this.X+3*radio,this.Y+0.5*radio,radio/20,0,2*3.1416,"true");
		contextoDeDibujar.fillStyle="black";
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();

		//5
		contextoDeDibujar.beginPath();
		contextoDeDibujar.arc(this.X+0.7*radio,this.Y+0.5*radio,radio/20,0,2*3.1416,"true");
		contextoDeDibujar.fillStyle="black";
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();

		//6
		contextoDeDibujar.beginPath();
		contextoDeDibujar.arc(this.X+0.2*radio,this.Y+1.5*radio,radio/20,0,2*3.1416,"true");
		contextoDeDibujar.fillStyle="black";
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();

		//7
		contextoDeDibujar.beginPath();
		contextoDeDibujar.arc(this.X+0.8*radio,this.Y+2.2*radio,radio/20,0,2*3.1416,"true");
		contextoDeDibujar.fillStyle="black"; 
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();


		//CirculoCentro
		contextoDeDibujar.beginPath();
		contextoDeDibujar.arc(this.X + radio, this.Y + radio, radio/3,0,2*3.1416,"true");
		contextoDeDibujar.fillStyle=this.Color;
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();
	}

	Mover(Direccion)
	{
		var C=5;
		switch(Direccion)
		{
			case "Derecha":
				this.X +=C;
				break;
			case "Izquierda":
				this.X-=C;
			break;

			case "Arriba":
				this.Y-=C;
			break;
			case "Abajo":
				this.Y+=C;
			break;
			
		}
	}
	
}