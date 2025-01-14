SubProceso Datos 
	Limpiar Pantalla
	Definir  Hora,Minutos,Seg como entero 
	Escribir "Ingrese La hora ";
	Leer Hora;
	Escribir "Ingrese Minutos ";
	Leer Minutos;
	Escribir "Ingrese Segundos ";
	Leer Seg;
	Menu(Hora,Minutos,Seg)
FinSubProceso
SubProceso Menu (Hora Por Referencia, Minutos Por Referencia, Seg Por Referencia)
	Limpiar Pantalla
	Definir P Como Caracter
	Escribir "Selecione que grados desea ver entre" 
	Escribir "(HM) Hora entre minutero "
	Escribir "(MS) Minutero entre segundos "
	Escribir "(HS) Hora entre segundos"
	Escribir "Pulsar enter para finalizar"
	Leer P 
	Segun P Hacer
		'HM','hm': 
			Hora_Minutero(Hora,Minutos,Seg)
		'MS','ms':
			Minutero_Segundo(Hora,Minutos,Seg)
		'HS','hs':
			Hora_Segundos(Hora,Minutos,Seg)
	FinSegun
FinSubProceso
SubProceso Hora_Minutero (Hora Por Referencia, Minutos Por Referencia, Seg Por Referencia)
	Limpiar Pantalla
	Definir DesplazamientoHora, DesplazamientoMinuto,Grados como Entero;
	Definir E Como Caracter
	DesplazamientoHora<-Hora*30;
	DesplazamientoMinuto<-Minutos*6;
	si (DesplazamientoMinuto>=DesplazamientoHora) Entonces
		Grados<-DesplazamientoMinuto-DesplazamientoHora;
	SiNo
		Grados<-360-(DesplazamientoHora-DesplazamientoMinuto);
	FinSi
	Escribir "Reloj"
	Escribir Hora ":" Minutos ":" Seg
	Escribir "Grados entre la hora y minutero ",Grados, "°";
	Escribir "Pulse enter para volver al menu "
	Leer E
	Menu(Hora,Minutos,Seg)
FinSubProceso
SubProceso Minutero_Segundo(Hora Por Referencia, Minutos Por Referencia, Seg Por Referencia)
	Limpiar Pantalla
	Definir DesplazamientoSegundo, DesplazamientoMinuto,Grados como Entero;
	Definir E Como Caracter
	DesplazamientoSegundo<-Seg*6;
	DesplazamientoMinuto<-Minutos*6;
	si (DesplazamientoSegundo>=DesplazamientoMinuto) Entonces
		Grados<-DesplazamientoSegundo-DesplazamientoMinuto;
	SiNo
		Grados<-360-(DesplazamientoMinuto-DesplazamientoSegundo);
	FinSi
	Escribir "Reloj"
	Escribir Hora ":" Minutos ":" Seg
	Escribir "Grados entre minutero entre segundos ",Grados, "°";
	Escribir "Pulse enter para volver al menu "
	Leer E
	Menu(Hora,Minutos,Seg)
FinSubProceso
SubProceso Hora_Segundos (Hora Por Referencia, Minutos Por Referencia, Seg Por Referencia)
	Limpiar Pantalla
	Definir DesplazamientoHora, DesplazamientoSegundo,Grados como Entero;
	Definir E Como Caracter
	DesplazamientoHora<-Hora*30;
	DesplazamientoSegundo<-Seg*6;
	si (DesplazamientoSegundo>=DesplazamientoHora) Entonces
		Grados<-DesplazamientoSegundo-DesplazamientoHora;
	SiNo
		Grados<-360-(DesplazamientoHora-DesplazamientoSegundo);
	FinSi
	Escribir "Reloj"
	Escribir Hora ":" Minutos ":" Seg
	Escribir "Grados entre la hora y segundos ",Grados, "°";
	Escribir "Pulse enter para volver al menu "
	Leer E
	Menu(Hora,Minutos,Seg)
FinSubProceso
Proceso Entrada
	Definir E como caracter
	Escribir "Este algortimo calcula los grados de desplazamiento ";	
	Escribir "Entre la hora, minutos y segundos ";
	Escribir "Horario de 12 horas" 
	Escribir "Pulse enter para continuar"
    Leer E
	Datos 
FinProceso
