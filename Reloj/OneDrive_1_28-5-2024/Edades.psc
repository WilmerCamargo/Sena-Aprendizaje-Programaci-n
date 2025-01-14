Algoritmo Edades
	Definir Edad, AcumEdad Como Entero;
	Definir Promedio Como Real;
	AcumEdad=0
	Para J = 1 Hasta 5 Hacer
		Segun J Hacer
			1 : E = " la Primer "
			2 : E = " la Segunda "
			3 : E = " la Tercera "
			4 :	E = " la Cuarta "
			De Otro Modo:
				E = " la Quinta "
		Fin Segun
		Escribir "Escribir",E ,"edad"
		Leer Edad;
		AcumEdad = AcumEdad + Edad
	FinPara
	Promedio = AcumEdad / 5
	Escribir "El Promedio real de las edades es ", Promedio;
	Escribir "El Promedio de las edades es " redon(Promedio);
	
FinAlgoritmo
