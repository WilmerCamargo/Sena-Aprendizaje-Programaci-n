Algoritmo D�as_De_La_Semana
	Definir Codigod�a Como entero
	Definir D�a como cadena
	Repetir 
		Codigod�a=1;Codigod�a=2;Codigod�a=3;Codigod�a=4;Codigod�a=5;Codigod�a=6;Codigod�a=2;
		Escribir "Ingrese Codigo del D�a"; Sin saltar
	Leer Codigod�a;
	si	(Codigod�a=1) Entonces
		D�a="El d�a semana es lunes";
	SiNO
		Si (Codigod�a=2) Entonces
			D�a="El d�a de la semana es Martes"
		SiNo
			Si (Codigod�a=3) Entonces
				D�a="El d�a de la semana es Miercoles"
			SiNo
				Si (Codigod�a=4) Entonces
					D�a="El d�a de la semana es Jueves"
				SiNo
					Si (Codigod�a=5) Entonces
						D�a="El d�a de la semana es Viernes"
					SiNo
						Si (Codigod�a=6) Entonces
							D�a="El d�a de la semana es Sabado"
						SiNo
							Si (Codigod�a=7) Entonces
								D�a="El d�a de la semana es Domingo"
							SiNo
								Escribir "Codigo de D�a Incorrecto "; Escribir "Elige un d�a correcto";
							Fin Si
						Fin Si
					Fin Si
				Fin Si
			Fin Si
		Fin Si
	FinSi
	Escribir D�a
Hasta Que Codigod�a=7
FinAlgoritmo

//Se requiere imprimir el d�a de la semana segun el c�digo ingresado. 
//lo sc�digos son los siguientes: 1. Lunes 2. Martes 3. Miercoles 4. Jueves 5. Viernes 6. Sabado 7. Domingo
