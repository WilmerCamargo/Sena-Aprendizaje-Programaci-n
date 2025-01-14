SubProceso  suma
	Definir Resp Como Caracter
	Definir n1,n2 Como Entero;
	Repetir
	Escribir "Numero Uno"Sin Saltar; Leer n1;
	Escribir "Numero Dos"Sin Saltar; Leer n2;
	Escribir "La sumatoria es ",n1+n2;
	Escribir "Desea continuar con la suma S/N"; Sin saltar
	Leer Resp
	Limpiar Pantalla
Hasta Que Resp= 'N' o Resp= 'n'
	Limpiar Pantalla
	menu;
FinSubProceso
SubProceso Multiplicar
	Definir Resp Como Caracter
	Definir n1,n2 Como Entero;
	Repetir
	Escribir "Numero Uno" Sin Saltar; Leer n1;
	Escribir "Numero Dos" Sin Saltar; Leer n2;
	Escribir "La Multiplicación es ",n1 * n2;
	Escribir "Desea continuar con la Multiplición S/N"; Sin Saltar
	Leer Resp
	Limpiar Pantalla
Hasta Que Resp= 'N' o Resp= 'n'
	Limpiar Pantalla
	menu;
FinSubProceso
SubProceso Dividir
	Definir Resp Como Caracter
	Definir n1,n2 Como Entero;
	Repetir
	Escribir "Numero Uno" Sin Saltar; Leer n1;
	Escribir "Numero Dos" Sin Saltar; Leer n2;
	Si n1=0 o n2=0 Entonces
		Limpiar Pantalla
		Escribir "El valor #0 No se puede Dividir";
		Escribir "Coloque un valor correcto";
	SiNo
		Escribir "La Divición es ",n1 / n2;
	Escribir "Desea continuar con la División S/N"; Sin Saltar
	Leer Resp
	Limpiar Pantalla
FinSi
Hasta Que Resp= 'N' o Resp= 'n'
	Limpiar Pantalla
	menu;
FinSubProceso
SubProceso Diferencia
	Definir Resp Como Caracter
	Definir n1, n2 Como Entero;
	Repetir
	Escribir "Numero Uno" Sin Saltar; Leer n1;
	Escribir "Numero Dos" Sin Saltar; Leer n2;
	Escribir "La Diferencia es ",n1 - n2;
	Escribir "Desea continuar con la Resta S/N"; Sin Saltar
	Leer Resp
	Limpiar Pantalla
Hasta Que Resp= 'N' o Resp= 'n'
	Limpiar Pantalla
	menu;
	
FinSubProceso
SubProceso Menu
	Escribir "(S) Suma";
	Escribir "(M) Multiplicar";
	Escribir "(D) Dividir";
	Escribir "(R) Diferencia";
	Escribir "(A) Abandonar";
	Definir Var Como Caracter;
	Escribir "Ingrese el Proceso a realizar";
	Leer Var;
	Limpiar Pantalla;
	Segun Var Hacer
		'S','s': suma 
		'M','m': Multiplicar
		'D','d': Dividir
		'R','r': Diferencia
		'A','a': Abandonar
		De Otro Modo:
			Limpiar Pantalla
			Escribir "*****Escoja una parametro correcto*****"
			menu;
	FinSegun
FinSubProceso
SubProceso Abandonar
	Escribir "Programa finalizado"
FinSubProceso
Algoritmo _Menu
	Definir N como cadena
	Escribir "Escribe tu Nombre " Sin Saltar; Leer N
	Escribir "Bienvenido ", N
	menu;
FinAlgoritmo
