class Figura
{
	constructor(id,an,al,c,x,y,vel)
	{
		this._Id=id;
		this._Ancho=an;
		this._Altura=al;
		this._Color=c;
		this._X=x;
		this._Y=y;
		this._Velocidad=vel;
	}
	set Id(Id){this._Id=Id}
	get Id(){return this._Id}

	set Ancho(Ancho){this._Ancho=Ancho}
	get Ancho(){return this._Ancho}

	set Altura(Altura){this._Altura=Altura}
	get Altura(){return this._Altura}

	set Color(Color){this._Color=Color}
	get Color(){return this._Color}

	set X(X){this._X=X}
	get X(){return this._X}

	set Y(Y){this._Y=Y}
	get Y(){return this._Y}

	//pluma
	Dibujar(contextoDeDibujar)
	{
		//Pluma
		contextoDeDibujar.strokeStyle=this.Color;

		contextoDeDibujar.beginPath();
		contextoDeDibujar.rect(this.X,this.Y,this.Ancho,this.Altura);
		//contextoDeDibujar.stroke();

		//console.log("dibujando contorno");
	}
}