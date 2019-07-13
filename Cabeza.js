class Cabeza extends Figura{

	constructor(id,an,al,c,x,y,vel){
		super(id,an,al,c,x,y,vel);
		this.radio=this.Ancho/2;
	}
	Dibujar(contextoDeDibujar)
	{
		contextoDeDibujar.beginPath();
		contextoDeDibujar.arc(this.X+this.radio,this.Y+this.radio,this.radio,0,2*Math.PI,"true");
		contextoDeDibujar.fillStyle=this.Color;
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();

		//Ojos
		contextoDeDibujar.beginPath();
		contextoDeDibujar.fillStyle="write";
		//contextoDeDibujar.arc(this.X+1.5*this.radio,this.Y+this.radio,this.radio/15,0,2*Math.PI,"true");
		contextoDeDibujar.fill();
		contextoDeDibujar.fillStyle="black";
		contextoDeDibujar.arc(this.X+1.5*this.radio,this.Y+this.radio,this.radio/5,0,2*Math.PI,"true");
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke()

		contextoDeDibujar.beginPath();
		contextoDeDibujar.fillStyle="write";
		//contextoDeDibujar.arc(this.X+0.6*this.radio,this.Y+this.radio,this.radio/15,0,2*Math.PI,"true");
		contextoDeDibujar.fill();
		contextoDeDibujar.fillStyle="black";
		contextoDeDibujar.arc(this.X+0.6*this.radio,this.Y+this.radio,this.radio/5,0,2*Math.PI,"true");
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke()

		//Cabello
		contextoDeDibujar.beginPath();
		contextoDeDibujar.fillStyle="black";
		contextoDeDibujar.fillRect(this.X-0.2*this.radio,this.Y+0.5*this.radio,this.radio/2.5,this.radio*2);
		contextoDeDibujar.fillRect(this.X+1.8*this.radio,this.Y+0.5*this.radio,this.radio/2.5,2*this.radio);
		contextoDeDibujar.arc(this.X+this.radio,this.Y+0.5*this.radio,this.radio/0.8,0,5*Math.PI,"true");
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();
		
		//boca
		contextoDeDibujar.beginPath();
		contextoDeDibujar.fillStyle="#fff";		
		contextoDeDibujar.arc(this.X+this.radio,this.Y+1.6*this.radio,this.radio/5,3.3,2*Math.PI,"true");
		contextoDeDibujar.fill();
		contextoDeDibujar.stroke();
	}


}