SubAlgoritmo _Numero(V1 Por referencia, V2 Por referencia)
	Escribir "Ingrese numero 1";leer V1
	Escribir "Ingrese numero 2";leer V2
	Captura(V1,V2);
FinSubAlgoritmo
SubAlgoritmo Captura(V1 Por referencia, V2 Por referencia)
	Escribir "Ingrese la opci�n a realizar"
	Escribir "(M) Multiplicar";
	Escribir "(S) Sumar";
	Escribir "Opci�n " Sin Saltar;
	Definir resp como caracter
	Leer resp;
	Limpiar Pantalla
	Segun resp Hacer
		'S','s': suma(V1,V2)
		'M','m': Multiplicar(V1,V2)
		De Otro Modo:
			Escribir "Digito invalido"
	Fin Segun
	Limpiar Pantalla
FinSubAlgoritmo
SubAlgoritmo suma(V1 Por referencia, V2 Por referencia)
	Definir resp Como Caracter;
	Escribir "/// la sumatoria es ",V1+V2; sin saltar; Escribir " ///";
	Escribir "**Busca otra operaci�n**"
	Escribir "(M) Multiplicar";
	Escribir "(S) Sumar";
	Escribir "**Escriba una opci�n O "; Sin saltar; Escribir "Presione enter para finalizar**" ;Leer resp
	Limpiar Pantalla
	Segun resp Hacer
		'S','s': suma(V1,V2)
		'M','m': Multiplicar(V1,V2)	
		De Otro Modo:
			Escribir "Digito Invalido"			
	FinSegun
	Limpiar Pantalla
FinSubAlgoritmo
SubAlgoritmo Multiplicar(V1 Por referencia, V2 Por referencia)
	Escribir "///La multiplicaci�n es ", V1*V2; Sin saltar; Escribir " ///";
	Escribir "**Busca otra operaci�n**"
	escribir "(M) Multiplicar";
	Escribir "(S) Sumar";
	Escribir "**Escriba una opci�n O "; Sin saltar; Escribir "Presione enter para finalizar**" ;Leer resp
	Limpiar Pantalla
	Segun resp Hacer
		'S','s': suma(V1,V2)
		'M','m': Multiplicar(V1,V2)	
		De Otro Modo:
			Escribir "Digito Invalido"			
	FinSegun
FinSubAlgoritmo
Algoritmo Elecci�n
	_Numero(V1,V2);
FinAlgoritmo
