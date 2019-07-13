class Humano extends Figura
{
	constructor(id,n,e,an,al,c,x,y,vel)
	{
		super(id,an,al,c,x,y,vel);
		this.Nombre=n;
		this.Edad=e;
		//this.Velocidad=vel;
		this.Partes = new Array();

		
	}	
	Agregar(parte)
	{
		this.Partes.push(parte);
	}
	Dibujar(contextoDeDibujar)
	{
			super.Dibujar(contextoDeDibujar);

			this.Partes.forEach(function(element){
				element.Dibujar(contextoDeDibujar);
			})
	}

	

	Mover(Direccion)
	{
		var C=5;
		switch(Direccion)
		{
			case "Derecha":
			this.Partes.forEach(function(element){element.X+=C;});
				
				break;

			case "Izquierda":
			this.Partes.forEach(function(element){element.X-=C;});
				
				break;

			case "Arriba":
			this.Partes.forEach(function(element){element.Y-=C;});
				
				break;
			
			case "Abajo":
			this.Partes.forEach(function(element){element.Y+=C;});
				
				break;
		}
	}
}	