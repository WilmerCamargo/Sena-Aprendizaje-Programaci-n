SubProceso Captura
	Definir N, ID como cadena;
	Escribir "Nombre de Empleado"; Sin saltar; Leer N;
	Escribir "Identificacion"; sin saltar; Leer ID;
	Operacion;
FinSubProceso
SubProceso Operacion
	Definir Su,S como real	
	Definir DT,ST,SL,Su,S Como entero;
		Escribir "Salario"; Sin saltar; Leer SL;
	Repetir
		Escribir "Días trabajados"; Sin Saltar; Leer DT;
	si DT < 31 Entonces
		Su=SL/30*DT;
		Su<-Redon(Su*100)/100
		Escribir "Su sueldo es $"; Sin Saltar; Escribir Su;
		si SL>(2600000) Entonces
			Escribir "No tiene Subsidio"
		SiNo
			Escribir "***Si tiene Subsidio***"; Escribir "Valor del Subsidio es $ ";S=(162000/30*DT); Escribir S;
			ST=(Su+S);Escribir "Valor Total $"; Sin Saltar; Escribir ST;
		FinSi
	FinSi
Hasta Que DT>=1 y DT<=30
	

FinSubProceso
Algoritmo Subsidio
	Captura;
FinAlgoritmo
