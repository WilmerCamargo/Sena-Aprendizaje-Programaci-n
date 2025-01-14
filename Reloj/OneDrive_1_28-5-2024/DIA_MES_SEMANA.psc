Algoritmo DIA_MES_SEMANA
	Definir  Mensaje como cadena
	Definir CodigoDiaSemana Como Entero
	Escribir "Ingrese Código del Día de la Semana"
	Leer CodigoDiaSemana
	Segun CodigoDiaSemana hacer
		1:Mensaje="Lunes"
		2:Mensaje="Martes"
		3:Mensaje="Miércoles"
		4:Mensaje="Jueves"
		5:Mensaje="Viernes"
		6:Mensaje="Sábado"
		7:Mensaje="Domingo"
		De Otro Modo:Mensaje="Código Inválido"
	FinSegun
	Escribir Mensaje
FinAlgoritmo