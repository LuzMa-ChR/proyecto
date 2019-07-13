class Brazo extends Figura{
	constructor(id,an,al,c,x,y,vel){
		super(id,an,al,c,x,y,vel);
		this.radio=this.Ancho/2;
		
	}

	Dibujar(contextoDeDibujar)
	{
		//Brazos
		contextoDeDibujar.beginPath();
		contextoDeDibujar.fillStyle=this.Color
		contextoDeDibujar.arc(this.X-0.02*this.radio,this.Y+2.7*this.radio,this.radio/2.7,0,2*Math.PI,"true");
		contextoDeDibujar.moveTo(this.X-0.3*this.radio,this.Y+2.4*this.radio);
		contextoDeDibujar.lineTo(this.X-1.1*this.radio,this.Y+5*this.radio);
		contextoDeDibujar.lineTo(this.X-0.5*this.radio,this.Y+5*this.radio);	
		contextoDeDibujar.lineTo(this.X-0.015*this.radio,this.Y+3.1*this.radio);
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();

		contextoDeDibujar.beginPath();
		contextoDeDibujar.fillStyle=this.Color;
		contextoDeDibujar.arc(this.X-0.8*this.radio,this.Y+5*this.radio,this.radio/3.5,3.3,2*Math.PI,"true");
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();
		
		//BrazoDs
		contextoDeDibujar.beginPath();
		contextoDeDibujar.fillStyle=this.Color;
		contextoDeDibujar.moveTo(this.X+2.28*this.radio,this.Y+2.4*this.radio);
		contextoDeDibujar.lineTo(this.X+3.1*this.radio,this.Y+5*this.radio);
		contextoDeDibujar.lineTo(this.X+2.5*this.radio,this.Y+5*this.radio);
		contextoDeDibujar.lineTo(this.X+2.015*this.radio,this.Y+3.1*this.radio);
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();

		contextoDeDibujar.beginPath();
		contextoDeDibujar.fillStyle=this.Color;
		contextoDeDibujar.arc(this.X+2.8*this.radio,this.Y+5*this.radio,this.radio/3.5,3.3,2*Math.PI,"true");
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();

		contextoDeDibujar.beginPath();
		contextoDeDibujar.fillStyle=this.Color;
		contextoDeDibujar.arc(this.X+2.02*this.radio,this.Y+2.7*this.radio,this.radio/2.7,0,2*Math.PI,"true");
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