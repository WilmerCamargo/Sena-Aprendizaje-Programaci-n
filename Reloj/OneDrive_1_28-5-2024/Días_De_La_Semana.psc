Algoritmo Días_De_La_Semana
	Definir Codigodía Como entero
	Definir Día como cadena
	Repetir 
		Codigodía=1;Codigodía=2;Codigodía=3;Codigodía=4;Codigodía=5;Codigodía=6;Codigodía=2;
		Escribir "Ingrese Codigo del Día"; Sin saltar
	Leer Codigodía;
	si	(Codigodía=1) Entonces
		Día="El día semana es lunes";
	SiNO
		Si (Codigodía=2) Entonces
			Día="El día de la semana es Martes"
		SiNo
			Si (Codigodía=3) Entonces
				Día="El día de la semana es Miercoles"
			SiNo
				Si (Codigodía=4) Entonces
					Día="El día de la semana es Jueves"
				SiNo
					Si (Codigodía=5) Entonces
						Día="El día de la semana es Viernes"
					SiNo
						Si (Codigodía=6) Entonces
							Día="El día de la semana es Sabado"
						SiNo
							Si (Codigodía=7) Entonces
								Día="El día de la semana es Domingo"
							SiNo
								Escribir "Codigo de Día Incorrecto "; Escribir "Elige un día correcto";
							Fin Si
						Fin Si
					Fin Si
				Fin Si
			Fin Si
		Fin Si
	FinSi
	Escribir Día
Hasta Que Codigodía=7
FinAlgoritmo

//Se requiere imprimir el día de la semana segun el código ingresado. 
//lo scódigos son los siguientes: 1. Lunes 2. Martes 3. Miercoles 4. Jueves 5. Viernes 6. Sabado 7. Domingo
