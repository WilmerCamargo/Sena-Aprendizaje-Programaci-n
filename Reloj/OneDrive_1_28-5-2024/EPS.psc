Algoritmo EPS
	Definir Categoria como cadena
	Definir N, ID como cadena;
	Definir ST, Salario, DT,Sueldo, S Como Real;
	Escribir "Bienvenido a Famisanar"
	Escribir "Nombre de Empleado "; Sin Saltar
	Leer N;
	Escribir "Identificación"; Sin Saltar
	Leer ID;
	Escribir "Ingrese su Rango de Ingreso"
	Leer salario
si (salario>=1300000 y salario<2600001) Entonces
	Escribir "Su Categoria es A su pago por una consulta es $4.500"
SiNo
	
FinSi
	
si (salario>=2600001 y salario<6500001) Entonces
	Escribir "Su Categoria es B su pago por una consulta es $18.200"
SiNo
	
FinSi
	
si	(salario>6500000) Entonces
	Escribir "Su categoria es C su pago por una consulta es $47.700"
SiNo
	
FinSi
	
	
	
FinAlgoritmo


//Desarrollar un algoritmo que imprima el valor a pagar por una consulta según su categoría.
//Se debe determinar cuales son los rangos de ingresos para establecer una categoría.	
//Rangos de Ingreso:  Menos de 2 smlmv - A:$4.500 Entre 2 y 5 smlmv - B:$18.200
//Mayor a 5 smlmv - C:47.700