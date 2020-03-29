export const state = () => ({
  showPastDays: false,
  subjects: [
    {
      name: 'Arts',
      svg: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
      slug: 'arts',
      tasks: {
        '2020-03-27': {
          tasks: [
            { description: 'Dibuja en un folio el aparato digestivo y el excretor, indicando con una flecha el nombre de cada una de sus partes. EN INGLÉS. Puedes usar los colores que tengas en casa o los materiales que prefieras, como por ejemplo materiales reciclados. Todo dependiendo de lo que tengas en casa.' }
          ]
        }
      },
      resources: [
        { description: 'Además, aquí os dejo algunas ideas para que hagáis estos días en casa, si queréis:', image: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/arts/1.png' },
        { description: 'Ya sabéis que si no tenemos cartulina, podemos usar folios que coloreemos nosotros.', image: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/arts/2.png' },
        { description: '', url: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/arts/3.png' },
        { description: '', url: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/arts/4.png' },
        { description: '', url: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/arts/5.png' },
      ]
    },
    {
      name: 'Educación Física',
      svg: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      slug: 'educacion-fisica',
      tasks: {},
      resources: [
        { description: 'Intentad que se muevan dentro de lo posible. Como a la vuelta trataremos los contenidos relacionados con los bailes, os dejo distintos enlaces para que vayan practicando en casa.', video: 'https://www.youtube.com/embed/jiLUvXUJa48'},
        { video: 'https://www.youtube.com/embed/lQxj2JcHEso' },
        { video: 'https://www.youtube.com/embed/SWHS4HsgnUk' },
        { description: 'Derivados de estos tenéis muchos más.' },
        { description: 'Podéis jugar en familia a “LA OCA DEL ANITA ARNAO”. Pinchando en estos enlaces podéis descargaros el tablero y las instrucciones para jugar.', links: [ { title: 'Tablero', url: 'https://drive.google.com/file/d/1ZB7RKHnGusKNRtH_LsWzLgOlQQ0kihVN/view?usp=sharing'}, { title: 'Instrucciones', url: 'https://drive.google.com/file/d/1n1V7pCf66D4ASrFaYZ8Bx4p50OwNGBY-/view?usp=sharing'}] },
      ]
    },
    {
      name: 'Inglés',
      svg: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129',
      slug: 'ingles',
      tasks: {
        '2020-03-16': {
          tasks: [
            { description: 'Página 60 del Class Book. Leer y hacer el ejercicio que aparece, en la libreta. Si podéis, meter el código que aparece al final del libro en la página que aparece también para poder hacer los audios que estén en el libro. Si no entiendes algunas cosas, no te preocupes. Apúntalas en la libreta y a la vuelta hablaremos del significado. Con ayuda de esta hoja, abre el Activity Book, página 59, e intenta hacerla entera. En el ejercicio dos, tienes que calcular mirando la hora de Londres.' },
            { description: 'Lee tres veces las frases del ejercicio 3 de la página 61, una lento, otra un poco más rápido y la última muy rápido.' },
            { description: 'Escribe estas horas en la libreta y ponlas CON LETRA: 20:00, 14:30, 15:15, 12:45' }
          ],
        },
        '2020-03-17': {
          tasks: [
            { description: 'Lee página 62 del Class Book y piensa cuál de ellos te gusta más y por qué.' },
            { description: 'Haz la página 61 del Activity Book, mirando la página 62 del otro libro.' },
            { description: 'En el apartado de ARTS te dejo unas cosas sobre St Patrick, para que hagas, sólo si tienes los materiales en casa. ' }
          ],
        },
        '2020-03-23': {
          tasks: [
            { description: 'Haz los ejercicios 2 y 3 de la página 64.' },
            { description: 'Haz página 62 del Activity Book, sólo el ejercicio 1. De la página 63, el 1 también.' },
            { description: 'Escribe las siguientes horas en tu libreta, CON LETRA: 18:15,19:00, 23:45, 17:30' }
          ],
        },
        '2020-03-24': {
          tasks: [
            { description: 'Hacer ficha de repaso que os di el último día en clase.' },
          ],
        },
        '2020-03-27': {
          tasks: [
            { description: 'Haz actividades de Google Classroom. Las que tú prefieras.' },
            { description: 'Escribe estas horas en la libreta: 3:00, 4:30, 5:15, 7:45' },
          ],
        },
      },
      resources: [],
      description: 'Hola, chicos. A continuación os voy a ir poniendo las tareas que vamos a hacer estos días que estaremos en casa. Además de trabajar con el libro, también realizaremos algunas actividades y juegos desde Google Classroom. Si tenéis la oportunidad de llamar a algún compañero, intentad preguntarles cosas en inglés para que así sigamos teniendo un súper nivel para cuando volvamos al cole :).  Os dejo mi correo, por si tenéis alguna duda: gloriamaria.mengual@murciaeduca.es '
    },
    {
      name: 'Lectura Comprensiva',
      svg: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      slug: 'lectura-comprensiva',
      resources: [],
      tasks: {
        '2020-03-16': {
          tasks: [
            { description : 'LECTURA DEL CUENTO EULATO, DE SU LIBRO DE LENGUA.PG.164 Y 165.' },
            { description : 'PONTE A PRUEBA: hacer ejercicios a,b,c y d. PAG. 167 DE SU LIBRO LENGUA.' },
          ],
          resources: [
            { title: 'Libro de Lengua. Página 164', url: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/lengua/164.pdf' },
            { title: 'Libro de Lengua. Página 165', url: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/lengua/165.pdf' },
            { title: 'Libro de Lengua. Página 167', url: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/lengua/167.pdf' },
          ]
        },
        '2020-04-01': {
          tasks: [
            { description : 'Página 84 libro de sociales: LEER CON ATENCIÓN INTERPRETAR EL PLANO DE UNA LOCALIDAD.' },
            { description : 'LEER CON ATENCIÓN INTERPRETAR EL PLANO DE UNA LOCALIDAD.' },
            { description : 'Hacer en su libreta de lengua los ejercicios 1,2,3 y 4.' },
          ],
          resources: [
            { title: 'Libro de Sociales. Página 84', url: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/sociales/84.pdf' },
          ]
        },
        '2020-04-03': {
          tasks: [
            { description : 'VE A LA PAGINA 89 DE TU LIBRO DE SOCIALES, LEE EL TEXTO Y HAZ LAS ACTIVIDADES.' },
          ],
          resources: [
            { title: 'Libro de Sociales. Página 89', url: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/sociales/89.pdf' },
          ]
        },
      }
    },
    {
      name: 'Lengua',
      svg: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
      slug: 'lengua',
      tasks: {
        '2020-03-16': {
          tasks: [
            { description : 'PÁG.162-163 responder oralmente las preguntas sobre la imagen El mejor amigo, escribir en su cuaderno de lengua una redacción que describa la imagen y utilice las palabras del vocabulario sobre animales que tienen ahí.' },
            { description : 'Hacer la fotocopia de los gentilicios, solo esta cara.' },
          ],
          resources: [
            { title: 'Libro de Lengua. Página 162', url: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/lengua/162.pdf' },
            { title: 'Libro de Lengua. Página 163', url: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/lengua/163.pdf' },
          ]
        },
        '2020-03-17': {
          tasks: [
            { description : 'Leer en voz alta lectura de EULATO,pag.164-165. Hacer en libreta los ejercicios 3-5-6- y 7.' },
          ],
          resources: [
            { title: 'Libro de Lengua. Página 162', url: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/lengua/164.pdf' },
            { title: 'Libro de Lengua. Página 163', url: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/lengua/165.pdf' },
          ]
        },
        '2020-03-18': {
          tasks: [
            { description : 'Estudiar que son las palabras colectivas, página 167, copiar recuerda, y hacer ejerc. 9-10 y 11.' },
            { description : 'Hacer fotocopia de los posesivos.' },
          ],
          resources: [
            { title: 'Libro de Lengua. Página 167', url: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/lengua/167.pdf' },
          ]
        },
        '2020-03-23': {
          tasks: [
            { description : 'Estudiar los demostrativos, pág 168. Copiar cuadro de los demostrativos, ejerc. 1-3-4-7.' },
          ],
          resources: [
            { title: 'Libro de Lengua. Página 168', url: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/lengua/168.pdf' },
          ]
        },
        '2020-03-24': {
          tasks: [
            { description : 'Palabras terminadas en -illo ,-illa, pág 170-171, copiar recuerda y ejercicios 1-2-3-4.' },
          ],
          resources: [
            { title: 'Libro de Lengua. Página 170', url: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/lengua/170.pdf' },
            { title: 'Libro de Lengua. Página 171', url: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/lengua/171.pdf' },
          ]
        },
        '2020-03-25': {
          tasks: [
            { description : 'Pág. 171 ,ejercicios 5-6-7.  Fotocopia sobre las palabras colectivas.' },
          ],
          resources: [
            { title: 'Libro de Lengua. Página 171', url: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/lengua/171.pdf' },
          ]
        },
        '2020-03-26': {
          tasks: [
            { description : 'Pag. 172 escribir un cuento de animales. hacer ejerc. 3 y 4.' },
          ],
          resources: [
            { title: 'Libro de Lengua. Página 172', url: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/lengua/172.pdf' },
          ]
        },
        '2020-03-27': {
          tasks: [
            { description : 'Repaso de los demostrativos. Hacer fotocopia de los demostrativos.' },
            { description : 'Buscar en la lectura Eulato de su libro cinco demostrativos y decir de qué tipo son escribiéndolo en su cuaderno.' },
          ],
        },
        '2020-03-30': {
          tasks: [
            { image : 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/lengua/30-03_1.png' },
            { image : 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/lengua/30-03_2.png' },
          ],
        },
        '2020-04-01': {
          tasks: [
            { image : 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/lengua/01-04_1.png' },
            { image : 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/lengua/01-04_2.png' },
          ],
        },
        '2020-04-02': {
          tasks: [
            { image : 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/lengua/02-04_1.png' },
          ],
        },
        '2020-04-03': {
          tasks: [
            { image : 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/lengua/03-04_1.png' },
            { image : 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/lengua/03-04_2.png' },
            { image : 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/lengua/03-04_3.png' },
          ],
        },
      },
      resources: []
    },
    {
      name: 'Matemáticas',
      slug: 'matematicas',
      svg: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
      tasks: {
        '2020-03-16': {
          tasks: [
            { description : 'Repaso pág. 150-151; ejercicios 1,2,6,7 y 9.' },
          ],
        },
        '2020-03-17': {
          tasks: [
            { description : 'pág. 152 calcular el precio de una compra. ejerc. 1.' },
            { description : 'pág. 153 , ejercicios de repaso:1,2,3,4,6.' },
          ],
        },
        '2020-03-18': {
          tasks: [
            { description : 'Repaso trimestral, pág. 154 y 155, ejercicios 1,2,3,4,5,8,del 8 los dos primeros problemas.' },
          ],
        },
        '2020-03-23': {
          tasks: [
            { description : 'Comenzar unidad 11, libro del tercer trimestre, pág. 156 y 157' },
            { description : 'Hacer lectura un trabajo de artesanía y ejercicios 1,2,3 y el que sabes ya? 1 y 2.' },
            { description : 'Hacer multiplicaciones y restas de la fotocopia que está detrás de la lectura del viernes pasado, sobre la interpretación de mapas.' },
          ],
        },
        '2020-03-24': {
          tasks: [
            { description : 'Libro tercer trimestre, pág 158 y 159. Leer explicación sobre el metro ,el decímetro y el centímetro. copiar el recuadro azul oscuro en su libreta de mates, hacer ejerc. 1-2-3. y el cálculo mental.' },
          ],
        },
        '2020-03-25': {
          tasks: [
            { description : 'Pag. 159, ejercicios 4 y 5.' },
          ],
        },
        '2020-03-26': {
          tasks: [
            { description : 'Tomar medidas con la cinta métrica a diferentes objetos y partes de cuerpo  y anotarlas.', },
            { description : 'Terminar cualquier actividad que haya quedado pendiente dias atrás', },
          ],
        },
        '2020-03-30': {
          tasks: [
            { description : 'Continuamos conociendo las unidades de medida. Usando la cinta métrica de mama o la regla, fijate en las rayas más pequeñas que hay entre los centímetros, la distancia entre ellas es un milímetro. Cada milímetro es el resultado de dividir un metro en ….¡MIL PARTES! Por eso es tan pequeñito.', },
            { description : 'Practica midiendo objetos o midiendo partes de tu cuerpo en milímetros y anótalo en tu libreta de mates. También puedes dibujar en grande tu propio cuerpo, usando una página completa de la libreta, y ahí sobre tu dibujo ir anotando la medida de tu pie, de tu pierna,mano, contorno de cadera… todas las que tu quieras', },
            { description : 'Haz ejercicios de la página 160: 1, 2 y 3.' },
          ],
          resources: [
            { title: 'Libro de Matemáticas. Página 160', url: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/matematicas/160.pdf' },
          ]
        },
        '2020-03-31': {
          tasks: [
            { description : 'Ve a la página 161, ejercicio 4, fijate bien y copia el HAZLO ASI, después expresa en milímetros los cuatro primeros puntos de cada columna. ¡o todos, si te animas!' },
            { description : 'Ejercicio 5. Copia y dibuja los cuadrados de los datos de este ejercicio . Después copia y resuelve cada uno de los tres puntos. RAZONAMIENTO. Los gnomos son tan pequeños que casi no se ven. Averigua la altura en mm del gnomo Jorrik.' },
          ],
          resources: [
            { title: 'Libro de Matemáticas. Página 161', url: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/matematicas/161.pdf' },
          ]
        },
        '2020-04-01': {
          tasks: [
            { description : 'Vamos hoy a conocer las unidades de medida mayores que un metro. Están en la página 162. Lee detenidamente el recuadro azul donde te explica el decametro, el hectómetro y el kilometro. Puede ser necesario leerlo más de una vez! Es un poco lioso, ¿no?' },
            { description : 'Copia y memoriza el rectángulo azul mas oscuro.' },
            { description : 'Realiza en tu cuaderno de mates el ejercicio 1, los tres primeros puntos de cada columna, o todos, si lo prefieres.' },
            { description : 'Ejercicio 2: tienes que pasar a metros estas longitudes, multiplicando por 10,decametros, por 100 si son hectómetros o por 1000, si son kilometros.' },
          ],
          resources: [
            { title: 'Libro de Matemáticas. Página 162', url: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/matematicas/162.pdf' },
          ]
        },
        '2020-04-02': {
          tasks: [
            { description : 'PÁGINA 163 EJERCICIO 3, Copia el HAZLO ASÍ, puedes hacer los dos primeros de cada columna o todos ya que estas. EJERCICIO 4, copia cada punto y contesta la pregunta. EJERCICIO 5, si dibujas el plano de este ejercicio te será más fácil de realizar. Copia y contesta los dos puntos que lleva.' },
            { description : 'CÁLCULO MENTAL: realiza estas divisiones de cabeza , escribiendolas en horizontal , solo tienes que ir poniendo la mitad de cada número .' },
          ],
          resources: [
            { title: 'Libro de Matemáticas. Página 163', url: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/matematicas/163.pdf' },
          ]
        },
      },
      resources: {}
    },
    {
      name: 'Música',
      svg: 'M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z',
      slug: 'musica',
      tasks: {},
      resources: [
        { description: 'Escucha la siguiente pieza musical con los ojos cerrados y después escribe en una cara de un folio lo que te sugiera la música o lo que se te pase por la cabeza cuando la oyes. Puedes escucharla tantas veces como quieras. Recuerda darle a “Saltar el anuncio”.', video: 'https://www.youtube.com/embed/2WfaotSK3mI'},
        { description: 'Ensaya durante todos los días la siguiente pieza para flauta. A la vuelta al cole, la preguntaré con nota de forma individual.', video: 'https://www.youtube.com/embed/MhRcl-Xjeyk' },
        { description: 'Escucha la siguiente pieza y describe al músico que conozcas. Hazlo en un folio y guárdalo porque luego deberás traer a clase.', video: 'https://www.youtube.com/embed/3MpJS1U3aRo?start=77' },
      ]
    },
    {
      name: 'Religión',
      svg: 'M8 17a5 5 0 01-.916-9.916 5.002 5.002 0 019.832 0A5.002 5.002 0 0116 17m-7-5l3-3m0 0l3 3m-3-3v12',
      slug: 'religion',
      tasks: {},
      resources: [
        { description: 'Colorear la ficha de la última cena de Jesús' }
      ]
    },
    {
      name: 'Science',
      svg: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
      slug: 'science',
      tasks: {
        '2020-03-17': {
          tasks: [
            { description: 'Coge el libro y los esquemas y repásalos. Si se los quieres contar a alguien, será más divertido para repasar.' },
            { description: 'Piensa en 5 alimentos que te comiste ayer. Escríbelos en la libreta y di si son FATS, PROTEINS, CARBOHYDRATES OR VITAMINS.' },
            { description: 'Si no lo tienes hecho, haz el ejercicio 6 de la página 25.' },
          ]
        },
        '2020-03-24': {
          tasks: [
            { description: 'Lee las páginas 26 y 27. Haz el ejercicio 3 de la página 27. Tienes que poner carita sonriente si es un buen hábito, y carita triste, si crees que es un mal hábito. Además, añade dos hábitos más. El ejercicio 4 de esta página es opcional. Si queréis hacerlo, tendríais que escribir una carta a un amigo que no se cuida mucho diciéndole qué cosas tiene que hacer para tener una mejor salud.' },
          ]
        },
        '2020-03-26': {
          tasks: [
            { description: 'Páginas 30 y 31. Ejercicios 1 y 2, que sabéis cómo se hacen. Ejercicio 5, donde tendréis que cambiar la palabra que esté mal en cada frase.' },
            { description: 'Repasad las hojas de repaso que os di, porque a la vuelta no tardaremos en hacer el examen.' },
          ]
        }
      },
      resources: []
    },
    {
      name: 'Sociales',
      svg: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      slug: 'sociales',
      tasks: {
        '2020-03-18': {
          tasks: [
            { description: 'Leer en voz alta como son los pueblos, pagina 76 y 77, tipos de pueblos. Hacer oral el trabaja con la imagen. Estudiar cómo es la vida en un pueblo y realizar en su cuaderno de sociales un resumen de este punto, más las actividades 1-2-3.' },
          ]
        },
        '2020-03-25': {
          tasks: [
            { description: 'Página 78 y 79, estudiar cómo son las ciudades, las zonas de ciudad y la vida en la ciudad. Copiar y memorizar los recuerdas.' },
            { description: 'Hacer los ejercicios 1-2-3.' },
            { description: 'Ver algún video explicativo sobre las ciudades para primaria.' },
          ]
        },
        '2020-03-27': {
          tasks: [
            { description: 'El gobierno del municipio. Estudiar que es el Ayuntamiento y como funciona el ayuntamiento. Copiar y memorizar recuerda. Dibujar el ayuntamiento de Mula y el escudo que representa a Mula, nuestra ciudad.' },
          ]
        },
        '2020-04-01': {
          tasks: [
            { description: 'Ahora que ya  sabes como se organiza el ayuntamiento de un municipio, vas a conocer los servicios municipales que estan gestionados por nuestro ayuntamiento. Ve a la pagina 82 de tu libro y lee en voz alta ¿QUE SON LOS SERVICIOS MUNICIPALES? Y ¿QUE TIPOS DE SERVICIOS MUNICIPALES HAY?' },
            { description: 'Leelo al menos dos veces para comprenderlo bien. Haz de forma oral el trabaja con la imagen.' },
            { description: 'Después en tu libreta haz un resumen o un esquema, lo que prefieras, sobre cada uno de esos dos apartados. Usa mayúsculas y varios colores para que el resultado sea más claro y atractivo.' },
          ],
          resources: [
            { title: 'Libro de Sociales. Página 82', url: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/sociales/82.pdf' },
          ]
        },
        '2020-04-03': {
          tasks: [
            { description: 'Ve a la pagina 83 de tu libro de sociales. Lee en voz alta el saber mas.' },
            { description: 'Pon la fecha en tu cuaderno de sociales, y realiza las actividades 1,2,3 y 4.' },
            { description: 'En el ejercicio 4 dibuja los recuadros de cada tipo de señales.' },
          ],
          resources: [
            { title: 'Libro de Sociales. Página 83', url: 'https://javi-school-project.s3.eu-west-3.amazonaws.com/resources/sociales/83.pdf' },
          ]
        },
      },
      resources: []
    },
  ]
})

export const actions = {
  setShowPastDays({ commit }, value) {
    commit('SET_SHOW_PAST_DAYS', value)
  }
}

export const mutations = {
  SET_SHOW_PAST_DAYS(state, value) {
    state.showPastDays = value
  }
}

export const getters = {
  days: state => {
    let days = new Set()
    state.subjects.forEach(subject => {
      Object.keys(subject.tasks).forEach(date => {
        days.add(date)
      })
    })
    return [...days].sort()
  },

  subjectsByDay: state => day => state.subjects.filter(subject => !!subject.tasks[day])
}
