Algoritmo Pares_mientras
	Definir ri,rf, Sumadepares, Sumadeimpares Como Entero
	Definir Pares, Impares Como cadena;
	escribir "ingrese el rango inicial"; leer ri
	escribir "ingrese el rango final"; leer rf
	Sumadepares=0
	Sumadeimpares=0
	Mientras ri<=rf hacer
		si (ri % 2=0) Entonces
			Pares=Pares+" "+ConvertirATexto(ri);
			Sumadepares=Sumadepares+ri;
		SiNo
			imPares=imPares+" "+ConvertirATexto(ri);
			Sumadeimpares=Sumadeimpares+ri
		finsi
		ri=ri+1
	fin mientras
	Escribir "* Conteo Original"
	Escribir  "Los Pares son ", Pares " " ; sin Saltar;
	Escribir  "-- La Sumatoria es ", Sumadepares " ";
	Escribir  "Los Impares son ", imPares " " ; sin Saltar;
	Escribir  "-- La Sumatoria es ", Sumadeimpares " ";
FinAlgoritmo
