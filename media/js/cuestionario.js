function valuap(respuest){ //recibe un entero que indica la respuesta seleccionada
	var reto;
	if(parseInt(respuest)==this.correcta){
		// var reto;
		alert("Es correcta");
		reto=true;
		return reto;
	}else{
		alert("Es false");
		return reto;
	}
}

function pregunta(pregun,respuesta1,respuesta2,respuesta3,respuesta4,correcta){
	this.pregun=pregun;
	this.respuestas=[];
	this.respuestas[0]=respuesta1;
	this.respuestas[1]=respuesta2;
	this.respuestas[2]=respuesta3;
	this.respuestas[3]=respuesta4;
	this.correcta=parseInt(correcta);
	this.ocupado=false;
	this.valuap=valuap;
}

var retorno=[];
var preguntas=[];

preguntas[0]=new pregunta("¿Cuál de los siguientes no es un tipo de representación de la información mencionado?","Símbolos","Gráfos", "Algoritmos", "Diseño",2);
preguntas[1]=new pregunta("¿Qué tipo de elementos de información operan principalmente las computadoras?", "Gráficos y datos","Instrucciones y gráficos","Instrucciones y datos", "Datos y símbolos",2);
preguntas[2]=new pregunta("¿Quién introdujo la aritmética modular?","Fibonacci","Jackson","Gauss","Arquimedes",2);
preguntas[3]=new pregunta("¿Cómo se llama la obra en la que Gauss introdujo una demostración de la aritmética modular?","Disquisitiones Arithmeticae","Acta Sanctorum in Sello","Philosophia naturalis principia Mathematica","Popol Vuh",0);
preguntas[4]=new pregunta("¿En qué año se publicó Disquisitiones Arithmeticae?","1923","1801","1746","1798",1);
preguntas[5]=new pregunta("¿Con qué número se obtiene un residuo de 0 al dividir entre 17?","69","84","1001","357",3);
preguntas[6]=new pregunta("¿Cuál es el propósito del estudio de los sistemas de representación de información?","Mejorar la estética de los datos","Aumentar la velocidad de procesamiento","Comprender los procesos de tratamiento de datos","Reducir el tamaño de los archivos",2);
preguntas[7]=new pregunta("¿Qué elemento es fundamental para la codificación de cantidades en la arquitectura de la máquina?","Representaciones gráficas","Representaciones numéricas","Representaciones de texto","Representaciones de audio",1);
preguntas[8]=new pregunta("¿Qué tipo de sistemas numéricos se han explorado como alternativas a los sistemas posicionales?","Sistemas gráficos","Aritmética modular","Representaciones textuales","Sistemas binarios",1);
preguntas[9]=new pregunta("¿Qué tipo de cifrado es RSA?","Cifrado simétrico","Cifrado asimétrico","Cifrado básico","Cifrado de flujo",1);
preguntas[10]=new pregunta("¿Sobre qué tema se está hablando en el tutorial?","La división","La aritmética residual","La variable compleja","La aritmética de los números naturales",1);
preguntas[11]=new pregunta("¿Cuántos sistemas numéricos existen?","1","3","2","5",1);
preguntas[12]=new pregunta("¿Cuáles son los tipos de sistemas numéricos?","Posicional, semi-posicional y no posicionales","Dirigidos y no dirigidos","Negativos y positivos","Naturales, primos y compuestos",0);
preguntas[13]=new pregunta("¿Para qué sirve la operación mod?","Para obtener un módulo de un vector","Para obtener el residuo de una división","Para obtener el valor de una constante de integración","Para obtener los valores de x",1);
preguntas[14]=new pregunta("Con base a la información del tutorial, ¿cuál es método más seguro de criptografía?","César","RSA","DSA","El Gamal",1);
preguntas[15]=new pregunta("En el mundo de la criptografía pasamos de texto simple a...","Texto compuesto","Texto descifrado","Texto cifrado","Texto normal",2);
preguntas[16]=new pregunta("¿Cuál de las siguientes características de los sistemas numéricos posicionales los hacen complejos?","Mejoran significativamente la velocidad de procesamiento","Generan acarreos durante algunas operaciones","Son tolerantes a fallos","No añaden complejidad al hardware",1);
preguntas[17]=new pregunta("¿Qué se busca evitar con la exploración de sistemas numéricos no posicionales?","La generación de símbolos","La creación de gráficos","La generación de acarreos","La administración de datos",2);
preguntas[18]=new pregunta("¿Por qué el cifrado César NO se usa tanto?","Porque es muy difícil","Porque no hace nada","Porque era muy fácil descifrar un mensaje","Porque es muy fácil cifrar un mensaje",2);
preguntas[19]=new pregunta("¿Qué se ha revelado sobre los sistemas numéricos posicionales en investigaciones recientes?","Mejoran significativamente la productividad","No aumentan significativamente la velocidad de procesamiento","Simplifican la estructura del hardware","Aumentan la tolerancia a fallos",1);
preguntas[20]=new pregunta("¿Qué conocimiento se necesita para el cifrado RSA?","Modular","Bibliográfico","Imaginario","Superior",0);
preguntas[21]=new pregunta("¿De dónde provienen las siglas RSA?","Son las siglas de una agencia","Son las siglas de los programas","Son las reglas del nombre de la presa","Son las siglas de los autores",3);
preguntas[22]=new pregunta("¿Cuándo se desarrolló el cifrado RSA?","1994","1984","1960","1977",3);
preguntas[23]=new pregunta("¿Qué operaciones aritméticas no tienen acarreo en el sistema numérico residual?","Suma","Resta","Multiplicación","Todas las anteriores",3);
preguntas[24]=new pregunta("¿Cómo es la representación de la operación mod?","a mod b","a modulo b","a / b","a*b",0);
preguntas[25]=new pregunta("¿En qué libro se encuentra el indicio más antiguo del teorema chino?","Sin-Tzuk","Sun-tu","Sun-Tzu","Sugon-Tzu",2);
preguntas[26]=new pregunta("¿Actualmente para qué se usa la criptografía?","Enviar mensajes de texto","Enviar información privada a través de canales electrónicos","Rastrear mediante GPS","Solicitar información",1);
preguntas[27]=new pregunta("¿Cómo se escribiría en formato modular,  módulo de 63 entre la base 5 con residuo 3?","3=63 mod 5","63=3 mod 5","63=5 mod 3","5=63 mod 3",0);
preguntas[28]=new pregunta("¿Quién expuso el problema en el que se basa el teorema Chino de los restos en el siglo III d.C.?","Sun-Tzu","Fibonacci","Euclides","Pitágoras",0);
preguntas[29]=new pregunta("¿Cuál es el problema planteado por Sun-Tzu en el siglo III d.C. en relación con el teorema Chino de los restos?","Contar de tres en tres","Contar de cinco en cinco","Contar de siete en siete","Todas las anteriores",3);
preguntas[30]=new pregunta("¿En qué consiste el Teorema Chino de los restos?","Resolver ecuaciones cuadráticas","Resolver congruencias lineales simultáneamente","Encontrar la raíz cuadrada de un número","Resolver ecuaciones exponenciales",1);
preguntas[31]=new pregunta("¿Qué propiedad es fundamental en el Teorema Chino de los restos para que se puedan resolver simultáneamente las congruencias lineales?","Propiedad conmutativa","Propiedad de linealidad","Propiedad asociativa","Propiedad distributiva",1);
preguntas[32]=new pregunta("¿Qué concepto fundamental se utiliza en la aritmética residual?","Resolver ecuaciones de segundo grado","Suma","Congruencia"," Inverso",2);
preguntas[33]=new pregunta("¿Qué indica a≡b (mod m)?","a y b tienen el mismo valor","a es mayor que b","a y b tienen el mismo residuo cuando se dividen por m","a es menor que b",2);
preguntas[34]=new pregunta("¿Qué resultado obtenemos si calculamos 27 mod 5?"
,"1","2","3","4",1);
preguntas[35]=new pregunta("¿En qué consiste la contribución principal del Teorema Chino de los restos en la matemática?","Resolver problemas de geometría","Facilitar la manipulación de números grandes","Descubrir nuevos números primos","Demostrar teoremas sobre funciones trigonométricas",1);
preguntas[36]=new pregunta("¿Qué números se necesitan para ejecutar la operación mod?","Que sean enteros","Que sean irracionales","Que sean imaginarios","Que sean negativos",0);
preguntas[37]=new pregunta("¿En qué consiste el cifrado César en la criptografía?","Uso de claves asimétricas","Sustitución de letras por desplazamiento","Cifrado de bloque","Encriptación cuántica",1);
preguntas[38]=new pregunta("¿Cuál es un ejemplo de información que se protege mediante criptografía?","Receta de cocina","Datos personales","Horario de trenes ","La Matrix",1);
preguntas[39]=new pregunta("¿Qué representan las clases de congruencia en la aritmética modular?","Números con el mismo residuo cuando se dividen por m","Números que son múltiplos de m","Números que son primos entre sí","Números que suman cero",0);
preguntas[40]=new pregunta("¿Cómo se encuentra el valor de las demás soluciones una vez encontrado x0?","{x0 + km}","{x0 - km}","{x0 + km/d}","{x0 - km/d}",2);
preguntas[41]=new pregunta("¿Qué hace difícil el sistema numérico residual?","Sumar números","Comparar números","Representar números negativos","Usar números fraccionarios",1);
preguntas[42]=new pregunta("¿Cómo se define el residuo en aritmética residual?","Como el sobrante de dividir dos números","Como la diferencia de dos números","Como el producto de dos números","Como la suma de dos números",0);
preguntas[43]=new pregunta("¿Cuál es una característica del cifrado RSA?","Usa una sola clave para cifrar y descifrar","Usa una clave pública y otra privada","Basado en el cifrado César","No utiliza la aritmética modular",1);
preguntas[44]=new pregunta("¿Qué no es un ejemplo de aplicación de criptografía?","Protección de datos personales","Enviar mensajes secretos","Enviar cosas no cifradas","Seguridad en transacciones bancarias",2);
preguntas[45]=new pregunta("¿Por qué no existe el inverso modular de 2 (mod 4)?","Porque 2 es mayor que 4","Porque 2 es menor que 4","Porque 2 y 4 no son primos relativos","Porque 2 y 4 son múltiplos",2);
preguntas[46]=new pregunta("¿Cómo se denota la congruencia entre dos números enteros en la aritmética modular?","a ≡ b modm","a ≅ b modm","a ≡ b (modm)","a ≅b(modm)",2);
preguntas[47]=new pregunta("¿Qué teorema es crucial en la aritmética modular?","Teorema de pitágoras","Teorema chino de los restos","Teorema de Fermat","Teorema de Euler",1);
preguntas[48]=new pregunta("¿Cómo se denota la congruencia entre dos números enteros en la aritmética modular?","a ≡ b modm","a ≅ b modm","a ≡ b (modm)","a ≅b(modm)",2);
preguntas[49]=new pregunta("¿Cuál es una característica de los sistemas numéricos posicionales?","No usan el número 0","Usan una base fija","El valor de un símbolo depende de su posición","Representan cantidades negativas únicamente",2);
preguntas[50]=new pregunta("¿Con qué otro nombre se le conoce a la Aritmética de Residuos?","Aritmética de sobras","Aritmética Modular o de Congruencia","Aritmética Algebraica","Aritmética Proposicional",1);
preguntas[51]=new pregunta("¿Cómo se denota la congruencia entre dos números enteros en la aritmética modular?","a ≡ b modm","a ≅ b modm","a ≡ b (modm)","a ≅b(modm)",2);
preguntas[52]=new pregunta("¿Qué números encontró Sun Zi que son múltiplos de 57, de 37 y de 3*5 respectivamente para resolver el problema?","50, 21, 15","70, 21, 15","70, 27, 35","35, 42, 15",1);
