Algoritmo _Repetir
	Definir Ri,Rf,Sup,Sui Como Entero;
	Definir P, I como Cadena;
	escribir "ingrese el rango inicial"; Sin Saltar ; leer Ri;
	escribir "ingrese el rango final"; Sin Saltar; leer Rf;
	Sup<-0;
	SuI<-0;
	Repetir 
		Si	(Ri % 2=0) Entonces
			P<-P+" "+ConvertirATexto(Ri);
			Sup<-Sup+Ri;
		SiNo
			I<-I+" "+ConvertirATexto(Ri);
			Sui<-Sui+Ri;
		FinSi
		Ri<-Ri+1;
	Hasta Que Ri<-Rf;
	Escribir "* Conteo Original";
	Escribir  "Los Pares son ", P " " ; sin Saltar;
	Escribir  "-- La Sumatoria es ", Sup " ";
	Escribir  "Los Impares son ", I " " ; sin Saltar;
	Escribir  "-- La Sumatoria es ", Sui " ";
FinAlgoritmo