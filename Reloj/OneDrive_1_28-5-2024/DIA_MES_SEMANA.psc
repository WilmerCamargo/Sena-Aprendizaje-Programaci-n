Algoritmo DIA_MES_SEMANA
	Definir  Mensaje como cadena
	Definir CodigoDiaSemana Como Entero
	Escribir "Ingrese C�digo del D�a de la Semana"
	Leer CodigoDiaSemana
	Segun CodigoDiaSemana hacer
		1:Mensaje="Lunes"
		2:Mensaje="Martes"
		3:Mensaje="Mi�rcoles"
		4:Mensaje="Jueves"
		5:Mensaje="Viernes"
		6:Mensaje="S�bado"
		7:Mensaje="Domingo"
		De Otro Modo:Mensaje="C�digo Inv�lido"
	FinSegun
	Escribir Mensaje
FinAlgoritmo