class Torax extends Figura{
	constructor(id,an,al,c,x,y,vel){
		super(id,an,al,c,x,y,vel);
		this.radio=this.Ancho/2;
		
	}
	Dibujar(contextoDeDibujar)
	{
		contextoDeDibujar.beginPath();
		contextoDeDibujar.fillStyle="Purple";
		contextoDeDibujar.moveTo(this.X-0.020*this.radio,this.Y+2.3*this.radio);
		contextoDeDibujar.lineTo(this.X+2.02*this.radio,this.Y+2.3*this.radio);
		contextoDeDibujar.lineTo(this.X+1.8*this.radio,this.Y+4.3*this.radio);
		contextoDeDibujar.lineTo(this.X+0.2*this.radio,this.Y+4.3*this.radio);
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();

		contextoDeDibujar.beginPath();
		contextoDeDibujar.fillStyle="Purple";
		contextoDeDibujar.moveTo(this.X+0.2*this.radio,this.Y+4.5*this.radio);
		contextoDeDibujar.lineTo(this.X+1.8*this.radio,this.Y+4.5*this.radio);
		contextoDeDibujar.lineTo(this.X+2.5*this.radio,this.Y+7*this.radio);
		contextoDeDibujar.lineTo(this.X-0.5*this.radio,this.Y+7*this.radio);
		contextoDeDibujar.lineTo(this.X+0.2*this.radio,this.Y+4.5*this.radio);
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();
	}
}