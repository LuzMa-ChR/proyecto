class Pierna extends Figura{
	constructor(id,an,al,c,x,y,vel){
		super(id,an,al,c,x,y,vel);
		this.radio=this.Ancho/2;
	
		
	}

	Dibujar(contextoDeDibujar)
	{
		contextoDeDibujar.beginPath();
		contextoDeDibujar.fillStyle=this.Color;
		contextoDeDibujar.fillRect(this.X+0.5,this.Y+7*this.radio,this.radio/1.6,this.radio*2);
		contextoDeDibujar.fillRect(this.X+1.09*this.radio,this.Y+7*this.radio,this.radio/1.6,2*this.radio);
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();

		contextoDeDibujar.beginPath();	
		contextoDeDibujar.fillStyle="black";
		contextoDeDibujar.arc(this.X+1.4*this.radio,this.Y+9*this.radio,this.radio/3.5,3.3,2*Math.PI,"true");
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();
		
		contextoDeDibujar.beginPath();	
		contextoDeDibujar.fillStyle="black";
		contextoDeDibujar.arc(this.X+0.35*this.radio,this.Y+9*this.radio,this.radio/3.5,3.3,2*Math.PI,"true");
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