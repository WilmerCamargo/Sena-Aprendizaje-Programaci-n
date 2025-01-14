SubAlgoritmo Hora(H Por Referencia, M Por Referencia, S Por Referencia)
	Escribir "Reloj Analógico en el cual se calcula e"; Escribir "imprime en pantala los grados ** Hora - Minuto **";
	Repetir
		Escribir "^Ingrese la Hora (12)^"; Leer H;
		si H <= 12 O H <= 0 Entonces
			Minuto(H, M, S);
		SiNo
			Escribir "//Hora No Permitida Ingrese una Hora Permitida\\"; 
		FinSi
	Hasta Que H <= 12 O H <= 0;
FinSubAlgoritmo
SubAlgoritmo Minuto(H Por Referencia, M Por Referencia, S Por Referencia)
	Repetir
		Escribir "^Ingrese los minutos^";
		Leer M;
		si	M <= 59 O M <= 0 Entonces
			Seg(H, M, S);
		SiNo
			Escribir "//Hora No Permitida Ingrese un Minuto Permitido\\";
		Fin Si	
	Hasta Que M <= 59 O M <= 0;
FinSubAlgoritmo
SubAlgoritmo Seg(H Por Referencia, M Por Referencia, S Por Referencia)
		Escribir "^Ingrese los Segundos^"; leer S;
		si	S <= 59 O S <= 0 Entonces
			Hora_Minuto(H, M, S);
		SiNo
			Escribir "//Hora No Permitida Ingrese un Segundo Permitido\\"; seg(H, M, S);
		Fin Si
FinSubAlgoritmo
SubAlgoritmo Hora_Minuto(H Por Referencia, M Por Referencia, S Por Referencia)
	Definir DesplazamientoHora, DesplazamientoMinuto, Grados Como Entero;
	DesplazamientoHora<- H * 30;
	DesplazamientoMinuto<- M * 6;
	Si (DesplazamientoMinuto >= DesplazamientoHora) Entonces
		Grados <- DesplazamientoMinuto - DesplazamientoHora;
	SiNo
		Grados<- 360 - (DesplazamientoHora - DesplazamientoMinuto);
	Fin Si
	Escribir "Grados entre Hora - Minuto es ",Grados, "°";
FinSubAlgoritmo
Algoritmo Reloj
	Hora(H,M,S);
FinAlgoritmo
