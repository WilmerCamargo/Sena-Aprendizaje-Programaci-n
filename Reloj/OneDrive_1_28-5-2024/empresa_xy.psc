Algoritmo Empresa_xy
	Definir N, ID como cadena;
	Definir Sueldo Como Real;
	Definir ST, Salario, DT, S Como Entero
	Escribir "Nombre de Empleado "; Sin Saltar
	Leer N;
	Escribir "Identificación"; Sin Saltar
	Leer ID;
	Escribir "Salario "; Sin Saltar
	Leer Salario;
	Escribir "Días trabajados" Sin Saltar
	Leer DT;
Si DT <= (31) Entonces
	Sueldo=(Salario/30*DT);
	Sueldo<-Redon(Sueldo*100)/100
		Escribir "Su sueldo es $" Sin Saltar
		Escribir Sueldo
		Si Salario>=(2600000) Entonces
			escribir "No tiene Subsidio"
		SiNo
			Escribir "Si tiene Subsidio"
			Escribir "Valor del Subsidio es $ "Sin Saltar
			S=(162000/30*DT);
			Escribir S
			ST=(Salario+S);
			Escribir "Valor total $ "; Sin saltar
			Escribir ST
		FinSi
	SiNo
		Escribir "Días no Permitidos"
	FinSi
FinAlgoritmo
