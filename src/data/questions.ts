/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed (0 to 3)
  category: string;
}

export const QUESTION_BANK: Question[] = [
  // ==========================================
  // BLOQUE 1: Mecánica Básica (Preguntas 1 a 54)
  // ==========================================
  {
    id: 1,
    question: "Si al revisar la varilla de medición del aceite del motor nota un color lechoso o espumoso (similar al café con leche), esto indica generalmente que:",
    options: [
      "Hay una filtración de líquido refrigerante hacia el sistema de lubricación por daño en el empaque de la culata.",
      "El aceite ha alcanzado su periodo máximo de vida útil y requiere cambio.",
      "La viscosidad del aceite es demasiado alta para el clima actual.",
      "El filtro de aceite se encuentra totalmente obstruido por hollín."
    ],
    correctAnswer: 0,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 2,
    question: "¿Qué componente del sistema eléctrico se encarga de transformar la energía mecánica del motor en energía eléctrica para recargar la batería mientras el vehículo marcha?",
    options: [
      "El motor de arranque.",
      "La bobina de encendido.",
      "El alternador.",
      "El distribuidor de corriente."
    ],
    correctAnswer: 2,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 3,
    question: "Cuando el pedal de freno se siente demasiado \"esponjoso\" al pisarlo y el carro tarda más en detenerse, la causa más probable es:",
    options: [
      "Desgaste total en los resortes de la suspensión trasera.",
      "Que las llantas delanteras tienen una presión de inflado muy baja.",
      "Descalibración en la guaya del freno de estacionamiento.",
      "Presencia de burbujas de aire o humedad en las líneas del líquido de frenos."
    ],
    correctAnswer: 3,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 4,
    question: "¿Cuál es la función principal del termostato en el sistema de refrigeración de un automóvil?",
    options: [
      "Regular el flujo de líquido refrigerante entre el motor y el radiador para mantener la temperatura óptima de operación.",
      "Encender de forma automática el ventilador eléctrico del radiador.",
      "Medir la cantidad de anticongelante que queda en el tanque de expansión.",
      "Enfriar los gases calientes antes de salir por el múltiple de escape."
    ],
    correctAnswer: 0,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 5,
    question: "Si nota que las llantas de su vehículo presentan un desgaste acelerado únicamente en la banda central de la rodadura, esto se debe a:",
    options: [
      "Circular habitualmente con una presión de inflado superior a la recomendada por el fabricante.",
      "Problemas graves de alineación (divergencia excesiva) en el eje delantero.",
      "Conducir frecuentemente por carreteras con curvas muy pronunciadas.",
      "Llevar el vehículo con exceso de carga en el baúl de forma continua."
    ],
    correctAnswer: 0,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 6,
    question: "El sistema de suspensión de un automóvil tiene como propósito fundamental:",
    options: [
      "Transmitir la potencia del motor directamente a las ruedas motrices.",
      "Controlar de forma electrónica el bloqueo de las ruedas en frenadas de emergencia.",
      "Absorber las irregularidades del terreno para garantizar la estabilidad del vehículo y el confort de los ocupantes.",
      "Mantener las ruedas perfectamente paralelas entre sí durante el frenado."
    ],
    correctAnswer: 2,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 7,
    question: "¿Cada cuánto tiempo o kilometraje se recomienda, por norma general y buenas prácticas preventivas, revisar el nivel de los fluidos del motor (aceite, refrigerante, frenos)?",
    options: [
      "Únicamente cada vez que se realice la Revisión Técnico-Mecánica obligatoria.",
      "Cada 10.000 kilómetros o cuando el vehículo pierda fuerza en pendientes.",
      "Solamente cuando se encienda algún testigo rojo en el tablero de instrumentos.",
      "Semanalmente o antes de emprender un viaje largo por carretera."
    ],
    correctAnswer: 3,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 8,
    question: "¿Qué significa que un neumático para carro particular tenga un labrado con una profundidad inferior a 1.6 mm?",
    options: [
      "Que la llanta está desgastada más allá del límite legal en Colombia y representa un peligro de hidroplaneo.",
      "Que la llanta se encuentra en su punto óptimo de adherencia para asfalto seco.",
      "Que el vehículo consumirá menos combustible debido a la reducción de la fricción.",
      "Que es necesario realizar un balanceo urgente pero no un cambio de llanta."
    ],
    correctAnswer: 0,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 9,
    question: "La función del embrague o clutch en un vehículo con transmisión mecánica es:",
    options: [
      "Multiplicar la fuerza de frenado hidráulico en las ruedas delanteras.",
      "Regular de manera automática las revoluciones del motor cuando el carro está detenido.",
      "Conectar y desconectar temporalmente la fuerza del motor hacia la caja de cambios para permitir el cambio de marcha.",
      "Evitar que el vehículo se ruede hacia atrás al iniciar la marcha en pendientes."
    ],
    correctAnswer: 2,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 10,
    question: "Si por el tubo de escape de un vehículo a gasolina sale humo azul de forma constante, esto es un síntoma claro de:",
    options: [
      "Una mezcla de combustión con exceso de gasolina (mezcla rica).",
      "Presencia de agua en el tanque de combustible o condensación en el escape.",
      "Falla en el catalizador que impide la correcta filtración de los gases residuales.",
      "Desgaste en los anillos de los pistones o sellos de válvulas, lo que hace que el motor queme aceite lubricante."
    ],
    correctAnswer: 3,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 11,
    question: "¿Qué componente del motor se encarga de sellar la parte superior de los cilindros evitando fugas de compresión y de fluidos?",
    options: [
      "El empaque de la culata.",
      "El cárter del aceite.",
      "El bloque de cilindros.",
      "El retén del cigüeñal."
    ],
    correctAnswer: 0,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 12,
    question: "El líquido de frenos debe cambiarse de forma periódica debido a que:",
    options: [
      "Se evapora rápidamente con las altas temperaturas de la fricción.",
      "Tiende a espesar y obstruir la bomba de vacío.",
      "Pierde su coloración característica impidiendo revisar el nivel.",
      "Es un compuesto higroscópico que absorbe humedad del aire, lo que baja su punto de ebullición y genera burbujas."
    ],
    correctAnswer: 3,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 13,
    question: "¿Qué consecuencia grave puede traer para el motor circular con un nivel de aceite lubricante por debajo del mínimo recomendado?",
    options: [
      "Fricción excesiva entre las piezas móviles internas que puede derivar en que el motor se funda.",
      "Rotura instantánea de la correa de distribución.",
      "Cortocircuito en el motor de arranque por sobrecarga eléctrica.",
      "Perforación inmediata del radiador por alta temperatura."
    ],
    correctAnswer: 0,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 14,
    question: "En los vehículos modernos, el sistema ABS (Anti-lock Braking System) tiene como función principal:",
    options: [
      "Detener el vehículo en una distancia menor de manera instantánea.",
      "Aumentar la potencia de frenado hidráulico mediante el uso del vacío.",
      "Evitar el bloqueo de las ruedas durante un frenado de emergencia para mantener el control direccional del vehículo.",
      "Activar de manera automática las luces de estacionamiento traseras."
    ],
    correctAnswer: 2,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 15,
    question: "El radiador forma parte esencial del sistema de:",
    options: [
      "Alimentación de combustible.",
      "Escape y filtración de gases.",
      "Dirección asistida.",
      "Refrigeración del motor."
    ],
    correctAnswer: 3,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 16,
    question: "Si nota una vibración fuerte en el volante al alcanzar velocidades superiores a 80 km/h, la acción preventiva correcta es:",
    options: [
      "Realizar un balanceo de las ruedas del vehículo.",
      "Cambiar inmediatamente los amortiguadores delanteros.",
      "Efectuar una alineación del eje trasero.",
      "Rellenar el depósito del líquido de la dirección."
    ],
    correctAnswer: 0,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 17,
    question: "¿Por qué no se debe utilizar agua corriente para rellenar de forma constante el depósito de refrigeración del motor?",
    options: [
      "Porque el agua corriente se evapora inmediatamente sin absorber nada de calor.",
      "Porque genera óxido, sedimentos calcáreos que obstruyen los conductos y carece de propiedades anticongelantes/anti-ebullición.",
      "Porque aumenta drásticamente el consumo de combustible del alternador.",
      "Porque puede derretir las mangueras de caucho del sistema debido a su acidez."
    ],
    correctAnswer: 1,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 18,
    question: "¿Qué elemento del sistema de escape se encarga de reducir la toxicidad de los gases resultantes de la combustión?",
    options: [
      "El múltiple de admisión.",
      "El silenciador trasero.",
      "El sensor de oxígeno primario.",
      "El convertidor catalítico."
    ],
    correctAnswer: 3,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 19,
    question: "El cárter es una pieza metálica situada en la parte inferior del bloque del motor que sirve para:",
    options: [
      "Almacenar el aceite lubricante del motor y permitir su enfriamiento pasivo.",
      "Proteger la caja de cambios contra golpes directos del suelo.",
      "Soportar los cilindros del motor evitando fugas térmicas.",
      "Filtrar las impurezas gruesas presentes en el aire exterior."
    ],
    correctAnswer: 0,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 20,
    question: "¿Qué se conoce técnicamente como la correa de distribución en un motor?",
    options: [
      "La correa que conecta el cigüeñal con el alternador y el compresor de aire.",
      "El cableado de alta tensión que suministra chispa a las bujías.",
      "La correa que sincroniza el movimiento del cigüeñal con el eje de levas para regular la apertura de válvulas.",
      "El mecanismo hidráulico encargado de accionar la caja de velocidades."
    ],
    correctAnswer: 2,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 21,
    question: "Si al aplicar los frenos del vehículo escucha un chirrido metálico agudo constante, esto indica por lo general:",
    options: [
      "Que las pastillas de freno están desgastadas y el indicador de desgaste roza con el disco metálico.",
      "Que el pedal del freno requiere lubricación con grasa mineral.",
      "Que los discos de freno están excesivamente calientes por el clima.",
      "Que hay una fuga masiva de presión en la bomba auxiliar."
    ],
    correctAnswer: 0,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 22,
    question: "¿Cuál es el propósito del convertidor de par en un vehículo con transmisión automática?",
    options: [
      "Sincronizar mecánicamente los piñones de la primera y segunda marcha.",
      "Acoplar de manera hidráulica la potencia del motor con la caja de transmisión, reemplazando al embrague manual.",
      "Distribuir la fuerza de frenado entre el eje delantero y trasero de manera autónoma.",
      "Regular la salida de corriente alterna del sistema eléctrico central."
    ],
    correctAnswer: 1,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 23,
    question: "La dirección asistida del vehículo tiene como finalidad principal:",
    options: [
      "Reducir el esfuerzo físico que realiza el conductor sobre el volante al maniobrar a bajas velocidades o estacionar.",
      "Bloquear la dirección de manera automática cuando el vehículo se apaga.",
      "Alinear por sí sola la trayectoria del automóvil en carreteras rectas.",
      "Evitar que las llantas delanteras patinen al acelerar bruscamente en mojado."
    ],
    correctAnswer: 0,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 24,
    question: "Si nota que el motor se apaga repentinamente al detenerse en un semáforo (marcha mínima o ralentí), la causa puede ser:",
    options: [
      "Una falla en el alternador que sobrecarga el acumulador de energía.",
      "Falta de presión de inflado en las ruedas motrices delanteras.",
      "Desgaste prematuro en los resortes de las pastillas de freno.",
      "Obstrucción en la válvula IAC (válvula de control de ralentí) o filtro de aire muy sucio."
    ],
    correctAnswer: 3,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 25,
    question: "¿Qué componente une el volante de dirección con la caja de engranajes de la dirección?",
    options: [
      "La rótula de dirección delantera.",
      "El brazo de acoplamiento de suspensión.",
      "La columna de dirección.",
      "La barra estabilizadora."
    ],
    correctAnswer: 2,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 26,
    question: "El fenómeno conocido como aquaplaning o hidroplaneo se produce debido a:",
    options: [
      "La acumulación de una película de agua entre el neumático y la carretera, provocando la pérdida total de tracción y control.",
      "Una presión excesiva de frenado sobre pavimentos totalmente secos.",
      "La filtración de agua dentro del cárter de aceite del motor.",
      "El recalentamiento repentino de los neumáticos por circular en clima húmedo."
    ],
    correctAnswer: 0,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 27,
    question: "¿Qué función cumplen los amortiguadores en el sistema de suspensión de un automóvil?",
    options: [
      "Alinear la posición de los neumáticos con respecto al eje direccional.",
      "Mantener la altura constante del chasis en superficies irregulares.",
      "Soportar todo el peso dinámico del motor y de la cabina.",
      "Controlar y disipar las oscilaciones de los resortes o espirales para mantener las ruedas pegadas al asfalto."
    ],
    correctAnswer: 3,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 28,
    question: "En un envase de aceite de motor, las siglas SAE (Society of Automotive Engineers) seguidas de una nomenclatura como \"10W-40\" indican:",
    options: [
      "La clasificación de la viscosidad del aceite y su comportamiento frente al cambio de temperatura.",
      "La procedencia sintética o mineral del lubricante sellado.",
      "El número máximo de revoluciones permitidas para ese lubricante.",
      "La fecha de vencimiento y de envasado seguro del producto."
    ],
    correctAnswer: 0,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 29,
    question: "El componente mecánico encargado de transmitir el giro del motor a las ruedas en un vehículo de tracción trasera se conoce como:",
    options: [
      "Barra de torsión delantera.",
      "Semieje direccional.",
      "Caja de transferencia lateral.",
      "Cardán."
    ],
    correctAnswer: 3,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 30,
    question: "¿Qué se debe hacer de inmediato si el testigo indicador de temperatura del motor en el tablero se enciende en la zona roja?",
    options: [
      "Detener el vehículo de forma segura en un lugar nivelado, apagar el motor y esperar a que se enfríe de forma natural antes de revisar.",
      "Abrir inmediatamente la tapa del radiador para agregar agua fría con el motor aún caliente.",
      "Acelerar a fondo para forzar el paso de aire frío por el ventilador.",
      "Continuar conduciendo lentamente hasta llegar al taller mecánico más cercano."
    ],
    correctAnswer: 0,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 31,
    question: "El filtro de combustible tiene como función esencial:",
    options: [
      "Evitar que los vapores tóxicos de gasolina ingresen a la cabina.",
      "Regular de manera autónoma la mezcla de aire y combustible del sistema.",
      "Aumentar el octanaje del combustible antes de la inyección.",
      "Retener impurezas, partículas sólidas y agua presentes en el combustible para proteger la bomba e inyectores."
    ],
    correctAnswer: 3,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 32,
    question: "Si un vehículo cuenta con \"tracción delantera\", esto significa que:",
    options: [
      "La fuerza motriz generada por el motor se transmite directamente a las ruedas del eje delantero.",
      "La fuerza del motor se transmite por igual a las cuatro ruedas permanentemente.",
      "El vehículo es más inestable al tomar curvas pronunciadas en mojado.",
      "La dirección del auto se controla mediante el eje trasero."
    ],
    correctAnswer: 0,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 33,
    question: "¿Qué parte del motor aloja los pistones, cilindros, bielas y cigüeñal?",
    options: [
      "El bloque de cilindros.",
      "La culata o cabezote.",
      "El distribuidor principal.",
      "El cárter de aceite primario."
    ],
    correctAnswer: 0,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 34,
    question: "El servo freno es un componente que aprovecha la fuerza del vacío para:",
    options: [
      "Hacer girar la bomba de dirección de manera uniforme.",
      "Mantener las pastillas de freno en su posición de reposo.",
      "Regular de manera electrónica los sensores de velocidad ABS.",
      "Multiplicar el esfuerzo del conductor sobre el pedal de freno para lograr una frenada más suave y potente."
    ],
    correctAnswer: 3,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 35,
    question: "¿Qué tipo de desgaste genera una mala alineación de las ruedas delanteras en las llantas?",
    options: [
      "Un desgaste excesivo e irregular en los hombros o bordes (interno o externo) de la llanta.",
      "Un desgaste severo en el centro exacto de la banda de rodamiento.",
      "Desgastes aislados en forma de parches o zonas planas a lo largo de la llanta.",
      "Ningún desgaste físico apreciable si se mantienen las llantas bien infladas."
    ],
    correctAnswer: 0,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 36,
    question: "Si los bornes de la batería de su vehículo se encuentran sulfatados (cubiertos de sarro blanco o verdoso), la consecuencia es:",
    options: [
      "Un incremento injustificado en el desgaste mecánico de las bujías.",
      "Un recalentamiento severo en el sistema de escape interno.",
      "El derretimiento del fusible del motor de arranque.",
      "Una mala conducción de la corriente eléctrica que puede impedir que el auto encienda o descargue la batería."
    ],
    correctAnswer: 3,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 37,
    question: "El eje de levas es un componente del motor responsable de:",
    options: [
      "Controlar la apertura y el cierre preciso de las válvulas de admisión y escape.",
      "Convertir el movimiento lineal de los pistones en movimiento rotatorio continuo.",
      "Transferir el giro del cigüeñal hacia la correa de accesorios.",
      "Transmitir la chispa de encendido de forma uniforme a cada cilindro."
    ],
    correctAnswer: 0,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 38,
    question: "¿Qué sistema del carro se encarga de acoplar y desacoplar de manera suave la transmisión de fuerza entre el motor y las ruedas?",
    options: [
      "El sistema de frenos asistido.",
      "El sistema de embrague (clutch) o convertidor hidráulico.",
      "El sistema de escape catalizado.",
      "El sistema de dirección de cremallera."
    ],
    correctAnswer: 1,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 39,
    question: "El freno de estacionamiento (o freno de mano) actúa mecánicamente sobre:",
    options: [
      "Las cuatro ruedas del automóvil simultáneamente por presión hidráulica.",
      "La caja de velocidades para bloquear la salida del diferencial.",
      "El eje de transmisión longitudinal para evitar giros mecánicos.",
      "Las ruedas del eje trasero de forma mecánica e independiente del sistema hidráulico del pedal."
    ],
    correctAnswer: 3,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 40,
    question: "Si el testigo con el símbolo de una aceitera se enciende en color rojo en el tablero mientras conduce, esto significa:",
    options: [
      "Que el aceite ha alcanzado la temperatura óptima de operación.",
      "Falta de presión de aceite lubricante en el motor, por lo que debe detenerse de inmediato.",
      "Que debe realizar la alineación y el balanceo preventivo del vehículo.",
      "Que hay presencia de sedimentos gruesos en el filtro de gasolina principal."
    ],
    correctAnswer: 1,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 41,
    question: "Los frenos de disco detienen el movimiento de la rueda mediante:",
    options: [
      "La fricción generada al presionar unas pastillas contra un disco metálico que gira solidario con la rueda.",
      "El ensanchamiento de unas zapatas contra un tambor giratorio interno.",
      "El bloqueo electromecánico directo del árbol del cigüeñal del motor.",
      "La aplicación directa de presión neumática sobre la banda de rodamiento del neumático."
    ],
    correctAnswer: 0,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 42,
    question: "¿Por qué es fundamental cambiar periódicamente el filtro de aire del motor?",
    options: [
      "Para garantizar el flujo constante de aire limpio a la cámara de combustión, previniendo el desgaste prematuro de cilindros y un consumo elevado.",
      "Para evitar que la cabina de pasajeros se inunde con partículas contaminantes de hollín.",
      "Para mantener la presión constante dentro del alternador eléctrico principal.",
      "Para regular la presión interna de los neumáticos motrices delanteros."
    ],
    correctAnswer: 0,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 43,
    question: "Los elementos encargados de transferir la fuerza de torsión desde el diferencial hacia las ruedas delanteras en vehículos con tracción delantera se denominan:",
    options: [
      "Horquillas superiores de suspensión.",
      "Barras tensoras cruzadas.",
      "Amortiguadores telescópicos dobles.",
      "Semiejes (o juntas homocinéticas)."
    ],
    correctAnswer: 3,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 44,
    question: "En la geometría de la suspensión, el ángulo de inclinación vertical de las ruedas con respecto a una línea perpendicular al suelo se conoce como:",
    options: [
      "Caster (avance).",
      "Convergencia.",
      "Divergencia.",
      "Cámber (caída de rueda)."
    ],
    correctAnswer: 3,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 45,
    question: "¿Cuál es el propósito del múltiple de escape de un vehículo a motor?",
    options: [
      "Inyectar una cantidad controlada de aire comprimido a los pistones.",
      "Recolectar los gases quemados salientes de las válvulas de los cilindros y conducirlos en un solo tubo hacia el silenciador.",
      "Filtrar las impurezas químicas y partículas sólidas del combustible fósil.",
      "Enfriar el refrigerante recirculado desde el cárter primario."
    ],
    correctAnswer: 1,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 46,
    question: "Las siglas DOT impresas en los recipientes de líquido de frenos (ejemplo: DOT 3, DOT 4) hacen referencia a:",
    options: [
      "La dosificación recomendada de aditivos por galón de combustible.",
      "La dureza física del compuesto de las pastillas del sistema de freno.",
      "La densidad de sellado del empaque del cilindro principal.",
      "El punto de ebullición del fluido certificado por el Departamento de Transporte."
    ],
    correctAnswer: 3,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 47,
    question: "Si al soltar el pedal del embrague (clutch) nota que el carro tarda mucho en arrancar y revoluciona en vacío, se dice comúnmente que:",
    options: [
      "El embrague está patinando por desgaste grave en las caras de fricción de su disco.",
      "El líquido hidráulico de frenos de disco está contaminado por humedad.",
      "La dirección asistida del auto está descalibrada de manera electrónica.",
      "Los bornes de conexión rápida de la batería están sueltos o sulfatados."
    ],
    correctAnswer: 0,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 48,
    question: "La bomba de agua del sistema de refrigeración del motor cumple la función de:",
    options: [
      "Impulsar la circulación constante del refrigerante a través de todo el motor para mantener una temperatura uniforme y segura.",
      "Suministrar agua líquida a presión para el lavado de los faros de luces delanteras.",
      "Inyectar vapor de agua condensado a la cámara de combustión del motor.",
      "Separar las moléculas de agua mineralizada presentes en el tanque de combustible."
    ],
    correctAnswer: 0,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 49,
    question: "¿Qué característica principal diferencia a los neumáticos sin cámara o sellomáticos (tubeless) de los neumáticos tradicionales?",
    options: [
      "No requieren una presión de inflado mínima o un balanceo regular.",
      "Están hechos de un caucho sintético totalmente inmune al desgaste natural.",
      "Se inflan exclusivamente con gases inertes purificados de nitrógeno.",
      "Tienen una capa interna de goma autosellante que elimina el uso de un neumático de caucho interior suelto."
    ],
    correctAnswer: 3,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 50,
    question: "Está estrictamente prohibido por razones de seguridad técnica descender una pendiente prolongada con la caja de velocidades en neutro debido a:",
    options: [
      "La pérdida del freno de motor que obliga a abusar de los frenos de servicio, lo que genera recalentamiento y posible fallo total.",
      "El incremento incontrolado de consumo de gasolina por el ralentí del alternador.",
      "La detención instantánea de la lubricación pasiva de la caja de velocidades.",
      "El desgaste severo e irreversible de las juntas homocinéticas de la dirección."
    ],
    correctAnswer: 0,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 51,
    question: "Si el testigo con el símbolo de una batería se enciende en color rojo mientras el auto marcha, esto indica directamente:",
    options: [
      "Que el alternador no está generando suficiente carga para alimentar el sistema y recargar el acumulador.",
      "Que el líquido electrolito del acumulador se ha evaporado por completo.",
      "Que hay un cortocircuito activo en la computadora central del motor.",
      "Que la vida útil de las celdas de litio de la batería ha llegado a su límite."
    ],
    correctAnswer: 0,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 52,
    question: "¿Qué filtro es el responsable directo de evitar que las impurezas y partículas sólidas suspendidas en el aire ingresen a la cámara de combustión del motor?",
    options: [
      "El filtro de aceite primario.",
      "El filtro de combustible sellado.",
      "El filtro de aire de motor.",
      "El filtro del aire acondicionado de cabina."
    ],
    correctAnswer: 2,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 53,
    question: "Un desgaste irregular de las llantas en forma de \"escalones\" o marcas planas continuas a lo largo de la banda de rodamiento suele ser causado por:",
    options: [
      "Amortiguadores defectuosos u otros componentes de la suspensión dañados que hacen rebotar la rueda.",
      "Problemas constantes de baja presión de inflado en las ruedas del eje trasero.",
      "Conducir continuamente a velocidades por encima de los límites legales permitidos.",
      "Usar llantas que no han sido balanceadas dinámicamente en un taller certificado."
    ],
    correctAnswer: 0,
    category: "Bloque 1: Mecánica Básica"
  },
  {
    id: 54,
    question: "El componente del sistema de encendido encargado de elevar la baja tensión de la batería para generar la chispa en la cámara de combustión se denomina:",
    options: [
      "El alternador principal.",
      "El acumulador eléctrico central.",
      "El interruptor del cigüeñal.",
      "La bobina de encendido."
    ],
    correctAnswer: 3,
    category: "Bloque 1: Mecánica Básica"
  },

  // ==========================================
  // BLOQUE 2: Situaciones y Seguridad Vial (Preguntas 55 a 108)
  // ==========================================
  {
    id: 55,
    question: "Si usted conduce en carretera y observa que el vehículo que va adelante enciende sus luces estacionarias (de emergencia), la conducta correcta es:",
    options: [
      "Disminuir la velocidad de manera progresiva y mantener una distancia de seguridad prudente ante una posible detención o riesgo inminente.",
      "Aumentar inmediatamente la marcha para adelantar al vehículo antes de que se detenga por completo.",
      "Utilizar la bocina o pito de forma insistente para exigir que continúe su marcha normal.",
      "Encender de igual manera sus luces estacionarias y orillarse sin disminuir la velocidad."
    ],
    correctAnswer: 0,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 56,
    question: "Ante un semáforo que parpadea intermitentemente en color amarillo, ¿qué conducta debe asumir el conductor?",
    options: [
      "Detener el vehículo por completo y esperar a que el semáforo cambie a color verde.",
      "Continuar la marcha manteniendo la velocidad máxima del carril de forma constante.",
      "Acelerar para cruzar la intersección lo más rápido posible ante el cambio de fase del semáforo.",
      "Avanzar con precaución, disminuyendo la velocidad y estando atento a ceder el paso a peatones u otros vehículos con prelación."
    ],
    correctAnswer: 3,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 57,
    question: "Al conducir de noche bajo una lluvia intensa o niebla espesa, la iluminación más eficaz para la visibilidad general y de seguridad es:",
    options: [
      "Mantener únicamente las luces de cruce encendidas e incrementar la velocidad constante.",
      "Encender los faros de luces de carretera (luces altas) para iluminar a gran distancia.",
      "Apagar los faros de luces bajas y avanzar guiándose por los reflectores de la vía.",
      "Utilizar las luces de cruce (luces bajas) acompañadas de los faros antiniebla si el vehículo dispone de ellos, evitando deslumbramientos."
    ],
    correctAnswer: 3,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 58,
    question: "De acuerdo con las normas de tránsito de Colombia, al aproximarse a una intersección vial donde no hay señalización de prioridad, ¿quién tiene la prelación de paso?",
    options: [
      "El vehículo que se aproxima por el costado derecho del conductor.",
      "El vehículo de mayor tamaño o peso de carga que transite por la vía principal.",
      "Aquel conductor que use primero la bocina y realice señales de luces altas.",
      "El vehículo que continúe recto sin importar el costado por donde venga cruzando."
    ],
    correctAnswer: 0,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 59,
    question: "¿En qué consiste la denominada \"distancia de reacción\" durante la conducción de un vehículo?",
    options: [
      "El espacio que recorre el automóvil desde que el conductor detiene el motor hasta el frenado completo.",
      "La distancia que avanza el auto desde que el conductor percibe el peligro u obstáculo hasta que pisa el pedal de freno.",
      "El tramo de vía que recorre el vehículo una vez que los frenos ya han bloqueado las llantas motrices.",
      "La distancia física que debe mantener de forma obligatoria con respecto al vehículo delantero."
    ],
    correctAnswer: 1,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 60,
    question: "Si la parte trasera de su automóvil derrapa (pierde tracción) hacia la derecha sobre una calzada mojada, ¿cómo debe actuar sobre el volante?",
    options: [
      "Girar el volante suave y progresivamente hacia el mismo lado del derrape (hacia la derecha) y evitar frenar bruscamente.",
      "Aplicar el freno de mano de inmediato para enderezar la trayectoria del chasis.",
      "Girar el volante con fuerza y rapidez hacia la izquierda para contrarrestar el desvío.",
      "Pisar el embrague y el acelerador al mismo tiempo para recuperar la velocidad motriz."
    ],
    correctAnswer: 0,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 61,
    question: "Ante la presencia de un peatón invidente (que utiliza bastón blanco o va acompañado de un perro guía), ¿cómo debe reaccionar el conductor?",
    options: [
      "Usar de forma constante la bocina para indicarle de manera rápida que debe apartarse de la vía.",
      "Hacer cambios repetitivos de luces altas y bajas para captar su atención en el cruce.",
      "Detener completamente el vehículo de forma oportuna para permitirle cruzar la calzada de manera segura.",
      "Continuar con la marcha normal esquivándolo por el carril opuesto de manera progresiva."
    ],
    correctAnswer: 2,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 62,
    question: "Al aproximarse a una glorieta o rotonda de un solo carril, ¿quién tiene la prioridad o prelación de paso legal?",
    options: [
      "El vehículo que pretenda ingresar primero a la glorieta por el acceso derecho.",
      "El vehículo de servicio público o de carga que venga por una avenida de dos carriles.",
      "Aquel vehículo que transite a mayor velocidad media dentro de la vía de aproximación.",
      "El vehículo que ya se encuentra circulando dentro de la glorieta con respecto a los que pretenden ingresar."
    ],
    correctAnswer: 3,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 63,
    question: "Si se ve obligado por una emergencia o falla técnica a detener el vehículo a un costado de una carretera nacional de noche, debe:",
    options: [
      "Encender las luces de estacionamiento y colocar los dispositivos de señalización (triángulos o conos) a las distancias reglamentarias.",
      "Apagar todas las luces del vehículo para ahorrar energía y evitar descargar la batería.",
      "Colocar los triángulos de señalización encima del capó y del techo del carro.",
      "Permanecer dentro del vehículo con las puertas abiertas esperando auxilio vial pasivo."
    ],
    correctAnswer: 0,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 64,
    question: "En el protocolo internacional PAS para la atención de accidentes de tránsito en la vía, las siglas representan la secuencia correcta de:",
    options: [
      "Parar el vehículo, Advertir al tránsito trasero, Socorrer a las víctimas heridas.",
      "Prevenir nuevos choques, Auxiliar de inmediato, Sancionar al responsable legal.",
      "Pedir ayuda médica, Avisar a las autoridades viales, Salvar las pertenencias materiales.",
      "Proteger el lugar del accidente, Avisar a los servicios de emergencia, Socorrer a los lesionados."
    ],
    correctAnswer: 3,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 65,
    question: "El fenómeno del \"microsueño\" al conducir se caracteriza principalmente por:",
    options: [
      "Pérdidas de atención de apenas unos segundos durante las cuales el conductor viaja dormido sin percibir el entorno ni el rumbo.",
      "Un estado continuo de pesadez que solo afecta la velocidad de reacción muscular.",
      "Pérdida de la visión periférica debido al cansancio físico extremo.",
      "Un síntoma propio únicamente de personas con problemas crónicos de insomnio."
    ],
    correctAnswer: 0,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 66,
    question: "El consumo de bebidas alcohólicas, incluso en dosis mínimas inferiores a las sancionadas penalmente:",
    options: [
      "Afecta únicamente la percepción visual de noche sin alterar la toma de decisiones.",
      "Ayuda a relajar la tensión muscular disminuyendo la fatiga física del conductor.",
      "Aumenta la distancia de reacción, reduce el campo de visión (efecto túnel) y disminuye de forma grave la precisión de maniobra.",
      "No altera las capacidades psicomotoras del conductor si se consumen alimentos antes de marchar."
    ],
    correctAnswer: 2,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 67,
    question: "Al ingresar a una autopista a través de un carril de incorporación (carril de aceleración), el conductor debe:",
    options: [
      "Avanzar lentamente y detenerse al inicio del carril esperando que no transite ningún auto.",
      "Acelerar a fondo cruzándose de forma rápida sin mirar los espejos retrovisores.",
      "Ingresar inmediatamente tocando la bocina para exigir que le abran el paso prioritario.",
      "Evaluar la velocidad del tránsito por los retrovisores, acelerar adecuadamente para igualar la velocidad e incorporarse sin entorpecer."
    ],
    correctAnswer: 3,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 68,
    question: "De acuerdo con el Código Nacional de Tránsito, es obligatorio el uso del cinturón de seguridad en los asientos traseros:",
    options: [
      "En todos los vehículos fabricados a partir del año 2004 en cualquier calzada nacional, departamental o municipal.",
      "Únicamente cuando se transite por carreteras nacionales o autopistas nacionales de alta velocidad.",
      "Solamente si viajan personas de la tercera edad o mujeres en estado de gestación.",
      "En ningún caso el uso del cinturón en asientos traseros es sancionable en zonas urbanas."
    ],
    correctAnswer: 0,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 69,
    question: "¿Cuál es el límite máximo de velocidad permitido para vehículos particulares que transitan por carreteras nacionales o autopistas en Colombia?",
    options: [
      "90 km/h de forma generalizada sin importar las condiciones del clima.",
      "100 km/h en todas las autopistas nacionales de manera uniforme.",
      "140 km/h si la vía cuenta con doble calzada y barreras físicas medianas.",
      "120 km/h siempre que las condiciones de seguridad vial y la señalización reglamentaria lo permitan."
    ],
    correctAnswer: 3,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 70,
    question: "En la conducción de un automóvil, se conoce técnicamente como el \"punto ciego\" a:",
    options: [
      "Una zona muerta en la parte delantera baja que impide ver obstáculos pequeños.",
      "Aquellas áreas alrededor del vehículo que no pueden ser observadas de forma directa mediante el uso de los espejos retrovisores.",
      "El espacio de vía situado directamente detrás del vehículo de carga pesado.",
      "La pérdida momentánea de visibilidad por deslumbramiento de luces altas contrarias."
    ],
    correctAnswer: 1,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 71,
    question: "Si transita detrás de un camión de gran tamaño en una carretera de un solo carril, debe aumentar la distancia de seguimiento debido a:",
    options: [
      "Que el camión tiene una aceleración media muy superior en pendientes pronunciadas.",
      "Evitar que la carga transportada golpee directamente el parabrisas del auto.",
      "Poder adelantarlo de forma rápida sin utilizar el carril de sentido contrario.",
      "Mejorar su propio campo de visión hacia adelante y evitar los puntos ciegos del conductor del camión."
    ],
    correctAnswer: 3,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 72,
    question: "El peligro principal de circular con una presión de inflado en los neumáticos inferior a la recomendada por el fabricante es:",
    options: [
      "Aumento en el riesgo de sufrir un reventón del neumático por deformación térmica excesiva de los flancos y pérdida de control.",
      "Un incremento inmediato en las emisiones tóxicas del catalizador de escape.",
      "Que el sistema hidráulico de frenado ABS sufra descalibración grave.",
      "La pérdida total de lubricación en las juntas de la columna de dirección."
    ],
    correctAnswer: 0,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 73,
    question: "Cuando se conduce con fatiga, el comportamiento del conductor suele verse afectado por:",
    options: [
      "Un aumento en la capacidad física de reacción muscular en curvas.",
      "La reducción voluntaria de la velocidad de marcha para mayor seguridad.",
      "Un incremento de las conductas de distracción, somnolencia, irritabilidad y pérdida del sentido de la orientación.",
      "Una mejor visibilidad lateral en condiciones adversas de clima."
    ],
    correctAnswer: 2,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 74,
    question: "Al aproximarse a un cruce ferroviario a nivel (paso de tren) sin barreras físicas instaladas, el conductor debe:",
    options: [
      "Cruzar lo más rápido posible tocando insistentemente la bocina para advertir.",
      "Encender las luces de parqueo y continuar la marcha sin detenerse.",
      "Detener el vehículo por completo a una distancia prudente, apagar el radio, escuchar y mirar en ambos sentidos antes de avanzar.",
      "Avanzar despacio de forma diagonal para evitar golpes en el chasis."
    ],
    correctAnswer: 2,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 75,
    question: "¿Cuál es la función del apoyacabezas instalado en el respaldo de los asientos del vehículo?",
    options: [
      "Brindar comodidad ergonómica exclusiva en viajes de larga distancia.",
      "Aumentar el soporte lumbar de la columna durante aceleraciones bruscas.",
      "Prevenir lesiones cervicales graves (efecto latigazo) en caso de sufrir una colisión o impacto trasero.",
      "Sujetar la cabeza del conductor en maniobras de giros pronunciados."
    ],
    correctAnswer: 2,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 76,
    question: "El uso prolongado del embrague (mantener pisado el pedal del clutch) en un descenso largo genera:",
    options: [
      "Un calentamiento excesivo en las mangueras hidráulicas delanteras.",
      "Fuga rápida de compresión mecánica por las válvulas de admisión.",
      "Mayor estabilidad en la trayectoria direccional del chasis trasero.",
      "Desgaste innecesario y prematuro del mecanismo interno de embrague y pérdida de control del frenado por motor."
    ],
    correctAnswer: 3,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 77,
    question: "Ante la pérdida total de frenos hidráulicos en plena marcha de un carro mecánico, la conducta más segura consiste en:",
    options: [
      "Apagar el motor de inmediato y retirar la llave para bloquear la dirección.",
      "Colocar la caja en neutro y aplicar el freno de mano de manera violenta.",
      "Disminuir la velocidad de manera escalonada bajando marchas de la caja de cambios (freno de motor) y aplicar suavemente el freno de mano al final.",
      "Lanzar el vehículo hacia la berma lateral sin frenar para que se detenga por fricción."
    ],
    correctAnswer: 2,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 78,
    question: "La \"visión de túnel\", que consiste en la reducción drástica del campo visual lateral, es provocada habitualmente por:",
    options: [
      "Conducir de manera constante bajo las horas de mayor radiación solar.",
      "Una alineación deficiente de los faros halógenos delanteros.",
      "El consumo de sustancias psicoactivas, el alcohol y la conducción a velocidades muy elevadas.",
      "Tener los espejos retrovisores laterales descalibrados hacia adentro."
    ],
    correctAnswer: 2,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 79,
    question: "Para realizar un adelantamiento seguro en una vía de doble sentido de circulación, ¿qué señalización es obligatoria?",
    options: [
      "Usar de forma intermitente la bocina para alertar al auto delantero.",
      "Efectuar cambios de luces altas y bajas de manera continua.",
      "Girar bruscamente la dirección para sorprender al flujo vehicular opuesto.",
      "Activar la luz direccional izquierda con anticipación, verificar retrovisores y realizar la maniobra en zona permitida con línea discontinua."
    ],
    correctAnswer: 3,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 80,
    question: "¿Qué indica la presencia de una luz roja intermitente instalada en un paso a nivel ferroviario o puente móvil?",
    options: [
      "Que el paso está habilitado avanzando con máxima precaución.",
      "Que el semáforo se encuentra fuera de servicio de forma indefinida.",
      "Prohibición de paso inminente; equivale a un Pare obligatorio debido a la aproximación de un tren o maniobra de puente.",
      "Un aviso reglamentario exclusivo para vehículos de carga pesada."
    ],
    correctAnswer: 2,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 81,
    question: "En conducción, se define como \"distancia de parada\" a la suma de:",
    options: [
      "La distancia de frenado y la longitud total del chasis del vehículo.",
      "La distancia recorrida en ralentí y el espacio de frenado auxiliar.",
      "La distancia de reacción del conductor más la distancia de frenado mecánico del vehículo.",
      "La distancia con respecto al vehículo trasero más el espacio de seguridad delantero."
    ],
    correctAnswer: 2,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 82,
    question: "¿Cuál es la principal función de los sistemas de seguridad activa instalados en un automóvil?",
    options: [
      "Minimizar la gravedad de las lesiones de los ocupantes una vez ocurrido el impacto.",
      "Facilitar la comodidad térmica y auditiva de las personas a bordo.",
      "Evitar de manera proactiva que se produzca un accidente de tránsito en condiciones adversas.",
      "Registrar de forma continua la velocidad y el historial de viajes del auto."
    ],
    correctAnswer: 2,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 83,
    question: "Al realizar una maniobra de retroceso (dar reversa) con el vehículo, la velocidad y distancia máximas permitidas son:",
    options: [
      "Exclusivamente a velocidad mínima por estricta necesidad de maniobra o estacionamiento, sin superar los límites físicos de seguridad.",
      "Hasta 50 metros en zonas urbanas manteniendo luces de emergencia encendidas.",
      "Acelerando de forma constante para evitar bloquear el tráfico de la calzada.",
      "Únicamente bajo supervisión expresa de un agente de tránsito o auxiliar de vía."
    ],
    correctAnswer: 0,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 84,
    question: "El mantenimiento preventivo periódico de la presión de inflado de las llantas debe realizarse:",
    options: [
      "Únicamente en época de verano por evaporación térmica del nitrógeno.",
      "Solo cuando se note visualmente que una llanta ha perdido volumen.",
      "En frío, por lo menos una vez cada quince días, siguiendo las especificaciones técnicas del manual del fabricante.",
      "Durante la Revisión Técnico-Mecánica obligatoria cada año calendario."
    ],
    correctAnswer: 2,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 85,
    question: "¿Cómo influye circular a velocidades elevadas sobre el campo visual útil del conductor?",
    options: [
      "No tiene ninguna influencia medible sobre la capacidad de ver a los costados.",
      "Aumenta la capacidad de captación visual de señales de tránsito a corta distancia.",
      "Facilita la lectura direccional de obstáculos dinámicos en las curvas.",
      "Reduce drásticamente el ángulo de visión lateral (se produce el llamado efecto túnel) limitando la visión de costados."
    ],
    correctAnswer: 3,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 86,
    question: "Si transita por una vía urbana y nota que un vehículo escolar se detiene a orilla de la calzada para el ascenso/descenso de estudiantes:",
    options: [
      "Debe acelerar para pasarlo rápidamente antes de que los estudiantes desciendan.",
      "Usar la bocina de forma continua para alertar a los niños de su presencia.",
      "Disminuir la velocidad y detenerse si es necesario, cediendo prioridad y esperando a que reanude la marcha con seguridad.",
      "Esquivarlo cruzando al carril opuesto de manera ágil sin detener su marcha."
    ],
    correctAnswer: 2,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 87,
    question: "Para garantizar una correcta visibilidad trasera al conducir, el espejo retrovisor interior debe ser regulado de forma que:",
    options: [
      "Refleje de manera prioritaria el hombro derecho de la persona que conduce.",
      "Muestre la mayor cantidad posible de la ventanilla lateral trasera del auto.",
      "Encuadre perfectamente toda la luneta (vidrio) trasera del automóvil con la menor distorsión posible.",
      "Refleje el techo interior del vehículo para controlar la comodidad de cabina."
    ],
    correctAnswer: 2,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 88,
    question: "El exceso de equipaje o carga transportada sobre el techo del vehículo produce:",
    options: [
      "Un mejor agarre mecánico de las ruedas traseras en curvas cerradas.",
      "Una disminución apreciable de la temperatura interna de cabina.",
      "Un aumento en la potencia útil de frenado dinámico por peso del auto.",
      "Inestabilidad, aumento de resistencia al aire y elevación del centro de gravedad, elevando el riesgo de vuelco e incrementando el consumo."
    ],
    correctAnswer: 3,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 89,
    question: "Al encontrarse con un retén o puesto de control de la Policía de Tránsito en la vía, el conductor debe:",
    options: [
      "Acelerar para evitar demoras innecesarias si tiene toda su documentación vigente.",
      "Encender de inmediato luces altas y bocinas cruzándose de carril de forma ágil.",
      "Orillarse lentamente y salir corriendo a entregar los papeles al oficial de guardia.",
      "Disminuir la velocidad de manera progresiva, seguir las indicaciones del oficial, detenerse de forma segura y colaborar con la autoridad."
    ],
    correctAnswer: 3,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 90,
    question: "Si observa acumulaciones severas de barro o fango sobre la banda de rodadura de sus neumáticos, debe retirarlas debido a:",
    options: [
      "Que el fango reseca drásticamente las fibras sintéticas laterales del neumático.",
      "Evitar que se ensucie la carrocería del automóvil durante la marcha rápida.",
      "Que el barro reduce el peso neto útil del auto facilitando la estabilidad trasera.",
      "Que el fango adherido altera el balanceo de la rueda, genera vibraciones fuertes en la marcha y anula el agarre mecánico sobre asfalto."
    ],
    correctAnswer: 3,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 91,
    question: "El uso indebido del teléfono celular (enviar mensajes de texto o hablar sin manos libres) al conducir equivale a:",
    options: [
      "Una distracción menor que no influye de manera apreciable sobre la seguridad.",
      "Una conducta permitida siempre que se realice a velocidades inferiores a 30 km/h.",
      "Multiplicar el riesgo de colisión al anular la atención visual, cognitiva, física y auditiva del conductor frente a imprevistos.",
      "Una infracción meramente administrativa que no genera accidentes reales."
    ],
    correctAnswer: 2,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 92,
    question: "Ante una situación imprevista de frenado de pánico con un sistema ABS instalado, ¿cómo debe actuar el conductor sobre el pedal?",
    options: [
      "Bombear el pedal de freno soltándolo y pisándolo de manera intermitente y rápida.",
      "Pisar el freno muy suavemente y activar de inmediato el freno de mano manual.",
      "Presionar el pedal de freno a fondo con máxima firmeza de manera continua sin soltarlo hasta detener el vehículo.",
      "Pisar con fuerza únicamente el pedal del embrague esperando que el motor retenga."
    ],
    correctAnswer: 2,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 93,
    question: "Los sistemas de retención infantil (sillas de seguridad para bebés y niños pequeños) deben ser instalados:",
    options: [
      "En el asiento delantero si va acompañado por una persona adulta responsable.",
      "Encima de las piernas del copiloto asegurados con el cinturón primario.",
      "En el asiento trasero central únicamente utilizando cinturones de dos puntos.",
      "Obligatoriamente en los asientos traseros del vehículo, fijados de manera segura mediante sistemas ISOFIX o el cinturón de seguridad de tres puntos."
    ],
    correctAnswer: 3,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 94,
    question: "Al aproximarse a una glorieta de dos carriles, si usted tiene la intención de tomar la tercera salida (giro a la izquierda), debe:",
    options: [
      "Ingresar por el carril derecho de aproximación y mantenerse por fuera de la rotonda.",
      "Avanzar recto cortando camino por la zona central ajardinada de la glorieta.",
      "Ingresar por el carril izquierdo, circular por la zona interna de la glorieta y pasar con cuidado al carril externo antes de salir.",
      "Hacer señales con la bocina y cruzar de manera transversal sin importar carriles."
    ],
    correctAnswer: 2,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 95,
    question: "La conducción defensiva se basa en el principio fundamental de:",
    options: [
      "Imponer su prioridad de paso legal sobre los demás conductores en cualquier cruce.",
      "Mantener una posición pasiva cediendo el paso únicamente a transportes de carga.",
      "Utilizar todas las capacidades del motor para esquivar rápidamente los imprevistos viales.",
      "Anticiparse a los posibles errores de los demás usuarios de la vía y reaccionar de forma segura previniendo colisiones."
    ],
    correctAnswer: 3,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 96,
    question: "Si nota que un vehículo que viene en sentido contrario circula con las luces altas encendidas provocándole deslumbramiento, debe:",
    options: [
      "Encender sus luces altas de igual manera para obligar al conductor a bajarlas.",
      "Cerrar momentáneamente los ojos hasta pasar el vehículo por completo.",
      "Frenar de golpe en seco y encender sus luces estacionarias en el carril.",
      "Disminuir la velocidad y desviar su mirada ligeramente hacia el borde derecho de la calzada (línea de demarcación de la berma) para guiarse."
    ],
    correctAnswer: 3,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 97,
    question: "La distancia mínima de seguridad que se debe mantener con el vehículo delantero al transitar a 80 km/h en asfalto seco debe ser de aproximadamente:",
    options: [
      "10 metros para evitar que otros automóviles se crucen en su trayectoria.",
      "La longitud física de un autobús convencional en zonas rurales.",
      "Al menos la distancia correspondiente a aplicar la regla de los tres segundos de separación prudente de seguimiento.",
      "Cincuenta metros constantes sin importar la velocidad de la vía."
    ],
    correctAnswer: 2,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 98,
    question: "Ante la presencia de ciclistas en la calzada, al realizar una maniobra para adelantarlos, el conductor debe:",
    options: [
      "Tocar de forma insistente la bocina a corta distancia para exigir que se orillen.",
      "Pasarlos lo más cerca posible para evitar invadir el carril de sentido opuesto.",
      "Mantener la misma velocidad del ciclista de forma indefinida detrás de él.",
      "Disminuir velocidad, cambiarse de carril respetando la separación mínima de 1.5 metros de distancia lateral con respecto al ciclista para su seguridad."
    ],
    correctAnswer: 3,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 99,
    question: "Al circular por una calzada urbana con pavimentos mojados, el espacio de frenado mecánico de un automóvil:",
    options: [
      "Se mantiene exactamente igual si cuenta con neumáticos nuevos de gran calidad.",
      "Se reduce debido a la refrigeración hidráulica natural de los discos de freno.",
      "Puede duplicarse o aumentar drásticamente debido a la reducción de fricción entre el caucho y la superficie asfáltica.",
      "Varía únicamente de noche por el cansancio físico acumulado del conductor."
    ],
    correctAnswer: 2,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 100,
    question: "Si usted sufre una avería mecánica menor en autopista y debe descender del vehículo para colocar la señalización, es obligatorio:",
    options: [
      "Descender por la puerta del copiloto sin usar señalización reflectiva alguna.",
      "Encender luces altas y bocinas corriendo rápidamente por la calzada principal.",
      "Ponerse de forma obligatoria un chaleco reflectivo visible de seguridad vial antes de bajar del auto para garantizar que los demás lo vean.",
      "Llevar un triángulo de seguridad metálico en cada una de sus manos como escudo."
    ],
    correctAnswer: 2,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 101,
    question: "La maniobra correcta para descender de forma segura una pendiente muy pronunciada en carretera de alta montaña con un auto automático es:",
    options: [
      "Colocar la palanca de cambios en posición N (Neutro) y abusar del freno de pedal.",
      "Apagar el motor de manera intermitente para enfriar los discos de freno traseros.",
      "Seleccionar un modo manual de marchas bajas (como L, 1, 2 o secuencial) para aprovechar la retención del motor y dosificar frenos.",
      "Mantener pisado de manera constante el pedal de freno acelerando progresivamente."
    ],
    correctAnswer: 2,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 102,
    question: "El cinturón de seguridad de tres puntos cumple con la finalidad de:",
    options: [
      "Evitar que el conductor adopte posturas inapropiadas que afecten la columna lumbar.",
      "Sujetar la cabeza del ocupante previniendo impactos fuertes contra los vidrios de costados.",
      "Asegurar de manera firme el chasis interno de los asientos deportivos especiales.",
      "Retener de forma segura el torso y la pelvis del ocupante ante un impacto, distribuyendo la fuerza de retención en partes sólidas del cuerpo."
    ],
    correctAnswer: 3,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 103,
    question: "Si nota que un conductor que marcha adelante circula haciendo zig-zag constante y de forma agresiva en la vía, la conducta recomendada es:",
    options: [
      "Adelantarlo rápidamente cortando su trayectoria de marcha para exigir respeto.",
      "Usar de forma constante la bocina y hacer cambios rápidos de luces altas.",
      "Mantener una distancia prudente de seguimiento retrasando su posición, evitar confrontaciones viales y reportar a las autoridades.",
      "Seguirlo de cerca bloqueándole los adelantamientos para calmar su ritmo."
    ],
    correctAnswer: 2,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 104,
    question: "El tiempo necesario para eliminar por completo el alcohol del torrente sanguíneo depende principalmente de:",
    options: [
      "El consumo de duchas de agua fría, café amargo o medicamentos estimulantes.",
      "La agilidad física de transpiración y la cantidad de ejercicio realizado después.",
      "La metabolización lenta y constante realizada por el hígado, la cual no se puede acelerar mediante remedios caseros.",
      "La cantidad de agua pura ingerida inmediatamente después del consumo alcohólico."
    ],
    correctAnswer: 2,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 105,
    question: "La distancia mínima de parqueo permitida por la reglamentación colombiana con respecto a un hidrante de bomberos es de:",
    options: [
      "Dos (2) metros constantes en calzadas secundarias urbanas.",
      "Un (1) metro siempre que el conductor permanezca dentro de la cabina.",
      "Cinco (5) metros libres para garantizar el acceso rápido de emergencia en incendios.",
      "Diez (10) metros en cualquier tipo de vía principal o autopista nacional."
    ],
    correctAnswer: 2,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 106,
    question: "¿Qué indica la presencia de una línea continua blanca pintada sobre el borde derecho de la calzada de asfalto?",
    options: [
      "Delimita el borde exterior transitable de la vía, separando la calzada de la berma o zona exterior.",
      "Prohibición estricta de adelantar por el costado izquierdo de la vía.",
      "Un carril exclusivo para el uso de transportes masivos de servicio público.",
      "Zonas habilitadas exclusivamente para estacionar vehículos particulares."
    ],
    correctAnswer: 0,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 107,
    question: "Al realizar una maniobra de adelantamiento en carretera, ¿cuándo es seguro retornar de forma completa al carril derecho?",
    options: [
      "Cuando pueda ver la parte delantera completa del vehículo adelantado reflejada en su espejo retrovisor interior.",
      "Inmediatamente después de pasar el parachoques delantero del otro auto.",
      "Cuando el conductor del auto adelantado le haga señales sonoras de bocina.",
      "Al alcanzar una distancia de separación de al menos tres metros del auto."
    ],
    correctAnswer: 0,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },
  {
    id: 108,
    question: "La velocidad máxima permitida para transitar por zonas residenciales, escolares y comerciales congestionadas en Colombia es de:",
    options: [
      "30 km/h por razones obvias de seguridad técnica de protección a peatones vulnerables.",
      "40 km/h manteniendo luces de estacionamiento encendidas de forma constante.",
      "50 km/h en vías residenciales amplias y autopistas internas urbanas.",
      "20 km/h únicamente durante el horario laboral o escolar reglamentario."
    ],
    correctAnswer: 0,
    category: "Bloque 2: Situaciones y Seguridad Vial"
  },

  // ==========================================
  // BLOQUE 3: Leyes, Sanciones y Normas de Tránsito (Preguntas 109 a 147)
  // ==========================================
  {
    id: 109,
    question: "La vigencia de la licencia de conducción para vehículos de servicio particular para personas entre 60 y 80 años de edad es de:",
    options: [
      "Cinco (5) años.",
      "Diez (10) años contados a partir de la expedición.",
      "Tres (3) años reglamentarios.",
      "Anual con examen de aptitud física obligatorio."
    ],
    correctAnswer: 0,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 110,
    question: "La vigencia de la licencia de conducción para servicio público para personas mayores de 60 años de edad es de:",
    options: [
      "Un (1) año por razones de control de aptitud psicométrica.",
      "Tres (3) años reglamentarios.",
      "Cinco (5) años contados a partir de la expedición.",
      "Dos (2) años obligatorios."
    ],
    correctAnswer: 0,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 111,
    question: "Las licencias de conducción para motocicletas de cilindraje superior a 125 c.c. corresponden a la categoría:",
    options: [
      "A1 de manera general.",
      "B1 de conducción liviana.",
      "A2 de conducción de motocicletas de mediano y gran cilindraje.",
      "C1 de servicio público particular."
    ],
    correctAnswer: 2,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 112,
    question: "La Revisión Técnico-Mecánica obligatoria para vehículos particulares nuevos debe realizarse por primera vez:",
    options: [
      "A los dos (2) años contados a partir de su matrícula inicial.",
      "Anualmente a partir de la fecha de entrega por el concesionario.",
      "A los cinco (5) años contados a partir de la fecha de su matrícula.",
      "A los seis (6) años contados a partir de la fecha de matrícula inicial."
    ],
    correctAnswer: 2,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 113,
    question: "El Seguro Obligatorio de Accidentes de Tránsito (SOAT) cubre principalmente:",
    options: [
      "Los daños mecánicos y materiales sufridos por los vehículos implicados en el siniestro.",
      "El robo total o parcial del vehículo y los perjuicios civiles a terceros.",
      "Únicamente los gastos médicos de la persona que conducía el auto asegurado.",
      "Los gastos médicos, quirúrgicos, farmacéuticos, indemnizaciones por incapacidad y transporte de todas las personas lesionadas en el siniestro."
    ],
    correctAnswer: 3,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 114,
    question: "Circular con la Revisión Técnico-Mecánica o el SOAT vencidos genera la siguiente sanción reglamentaria:",
    options: [
      "Una amonestación escrita con obligación de asistir a un curso de seguridad.",
      "Inmovilización inmediata del vehículo sin multa económica aplicable.",
      "Multa equivalente a 15 salarios mínimos diarios legales vigentes sin inmovilizar.",
      "Multa equivalente a 30 salarios mínimos diarios legales vigentes (SMDLV) e inmovilización obligatoria del vehículo."
    ],
    correctAnswer: 3,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 115,
    question: "¿Qué sanción se aplica a un conductor que sea sorprendido conduciendo bajo la influencia del alcohol en Grado 1 por primera vez?",
    options: [
      "Suspensión de la licencia de conducción por un (1) año y multa mínima de 45 SMDLV.",
      "Cancelación definitiva de la licencia y arresto preventivo de 72 horas.",
      "Suspensión de la licencia por tres (3) años, multa de 180 SMDLV, inmovilización del vehículo y 30 horas de servicio comunitario.",
      "Retención de documentos por quince días calendario sin sanción pecuniaria."
    ],
    correctAnswer: 2,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 116,
    question: "La velocidad máxima permitida para vehículos de servicio público y escolar en zonas urbanas es de:",
    options: [
      "80 km/h en calzadas secundarias urbanas.",
      "60 km/h en todas las avenidas principales congestionadas.",
      "40 km/h en zonas de aproximación escolar residenciales.",
      "50 km/h en vías urbanas de manera generalizada según normatividad vigente."
    ],
    correctAnswer: 3,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 117,
    question: "Conducir un vehículo sin haber obtenido previamente la respectiva licencia de conducción da lugar a:",
    options: [
      "Amonestación verbal permitiendo continuar el viaje con un conductor habilitado.",
      "Multa equivalente a 30 salarios mínimos diarios legales vigentes (SMDLV) e inmovilización del vehículo.",
      "Retención del automóvil por 24 horas sin cobro de multas administrativas.",
      "Citación judicial para comparecer ante un juez de tránsito en zona rural."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 118,
    question: "El desacato a las señales de tránsito de los agentes de tránsito se sanciona con multa equivalente a:",
    options: [
      "Cinco (5) salarios mínimos diarios legales vigentes.",
      "Diez (10) salarios mínimos diarios legales vigentes.",
      "Quince (15) salarios mínimos diarios legales vigentes (SMDLV).",
      "Treinta (30) salarios mínimos diarios legales vigentes con curso obligatorio."
    ],
    correctAnswer: 2,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 119,
    question: "El adelantamiento en curvas, pendientes prolongadas o puentes de un solo carril constituye una infracción codificada como de tipo:",
    options: [
      "Infracción leve con sanción de amonestación preventiva simple.",
      "Infracción gravísima, con multa de 30 SMDLV y posible inmovilización.",
      "Infracción administrativa simple que no amerita comparendo físico.",
      "Infracción penal con arresto inmediato de 24 horas de reclusión."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 120,
    question: "¿Cuántos años de suspensión de licencia corresponden a Grado 2 de alcoholemia por primera vez?",
    options: [
      "Dos (2) años obligatorios.",
      "Cinco (5) años de suspensión de la licencia.",
      "Tres (3) años con inmovilización simple.",
      "Diez (10) años de suspensión y cancelación definitiva."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 121,
    question: "El valor del comparendo electrónico puede reducirse en un 50% si el infractor realiza el pago y el curso obligatorio dentro de:",
    options: [
      "Los tres (3) días hábiles siguientes a la notificación oficial física.",
      "Los once (11) días hábiles siguientes a la notificación de la infracción.",
      "Los treinta (30) días calendario posteriores al registro fotográfico.",
      "Cualquier momento antes de la fecha de citación a audiencia formal."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 122,
    question: "¿Qué entidad en Colombia se encarga de expedir y regular las licencias de conducción a través del RUNT?",
    options: [
      "La Policía Nacional de Carreteras.",
      "El Organismo de Tránsito Municipal de la jurisdicción habilitado por el Ministerio de Transporte.",
      "El Ministerio de Educación Nacional de forma directa.",
      "La Superintendencia de Puertos y Transporte terrestre."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 123,
    question: "Circular en contravía (en sentido contrario al señalado para la vía) es sancionado con:",
    options: [
      "Amonestación verbal simple obligando a dar la vuelta.",
      "Multa equivalente a 30 salarios mínimos diarios legales vigentes (SMDLV).",
      "Retención de la licencia de conducción por un periodo de seis meses.",
      "Multa de 15 salarios mínimos diarios sin inmovilización del auto."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 124,
    question: "El nivel de alcoholemia denominado \"Grado 0\" de tolerancia para conductores particulares se sitúa entre:",
    options: [
      "0.1 y 0.19 mg de etanol por litro de sangre.",
      "20 y 39 mg de etanol por cada 100 ml de sangre.",
      "40 y 99 mg de etanol por cada 100 ml de sangre.",
      "100 mg o superior por cada 100 ml de sangre."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 125,
    question: "Un conductor que acumule dos o más infracciones de tránsito en un periodo menor a seis meses se considera:",
    options: [
      "Infractor pasivo con derecho a descuentos sucesivos ilimitados.",
      "Reincidente, lo que faculta a la autoridad para suspender la licencia de conducción por seis meses.",
      "Un infractor menor exento de sanciones de inmovilización.",
      "Sujeto de multas dobles automáticas sin derecho a descargos."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 126,
    question: "Está estrictamente prohibido estacionar vehículos en las siguientes zonas urbanas:",
    options: [
      "Calles secundarias con ancho de calzada superior a seis metros.",
      "Vías principales, autopistas, curvas, puentes, zonas peatonales o frente a garajes activos.",
      "Zonas residenciales autorizadas por las juntas de vecinos.",
      "Bahías de parqueo debidamente señalizadas por la alcaldía."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 127,
    question: "La edad mínima requerida en Colombia para obtener una licencia de conducción de servicio público es de:",
    options: [
      "Dieciséis (16) años cumplidos.",
      "Dieciocho (18) años de edad cumplidos de acuerdo con la normatividad legal.",
      "Veintiún (21) años de edad obligatorios.",
      "Veinticinco (25) años de edad con experiencia certificada."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 128,
    question: "El comparendo físico de tránsito se define legalmente en Colombia como:",
    options: [
      "Una condena inmediata de culpabilidad que exige el pago de la multa.",
      "Una orden formal de notificación para que el presunto infractor comparezca ante la autoridad de tránsito competente.",
      "Un documento meramente informativo sin valor legal pecuniario posterior.",
      "Una solicitud de retención preventiva de documentos del vehículo."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 129,
    question: "No portar el kit de carretera completo obligatorio regulado por el CNT acarrea una sanción de:",
    options: [
      "Una multa equivalente a cinco salarios mínimos diarios vigentes.",
      "Multa equivalente a quince salarios mínimos diarios legales vigentes (SMDLV).",
      "La inmovilización inmediata del vehículo en grúa autorizada.",
      "Curso de seguridad vial de dos horas sin cobro pecuniario alguno."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 130,
    question: "La licencia de conducción en Colombia se cancela de forma definitiva en el siguiente caso:",
    options: [
      "Por acumular tres comparendos de velocidad en un año de calendario.",
      "Por conducir bajo estado de embriaguez por tercera vez (reincidencia) o provocar muertes culposas.",
      "Por negarse a portar el chaleco reflectivo reglamentario nocturno.",
      "Por el vencimiento del término legal de renovación física."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 131,
    question: "¿Qué tipo de señalización vial tiene la mayor jerarquía o prioridad legal de obediencia?",
    options: [
      "Las señales de tránsito reglamentarias de color rojo.",
      "Las indicaciones y órdenes impartidas directamente por los Agentes de Tránsito en la vía.",
      "Los semáforos instalados en cruces o intersecciones congestionadas.",
      "Las señales horizontales pintadas directamente sobre el pavimento seco."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 132,
    question: "Transitar con las luces delanteras apagadas en el horario comprendido entre las 6:00 p.m. y las 6:00 a.m. se sanciona con multa de:",
    options: [
      "Cinco (5) salarios mínimos diarios legales vigentes.",
      "Quince (15) salarios mínimos diarios legales vigentes (SMDLV).",
      "Treinta (30) salarios mínimos diarios legales vigentes con inmovilización.",
      "Amonestación escrita simple de seguridad vial."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 133,
    question: "La inmovilización de un vehículo en parqueaderos oficiales autorizados consiste en:",
    options: [
      "El retiro preventivo de la licencia física del conductor.",
      "La suspensión temporal de la circulación del vehículo en la vía pública por una presunta infracción de tránsito grave.",
      "La confiscación permanente de la propiedad del automóvil por deudas.",
      "Un proceso de revisión mecánica forzosa ordenada por la alcaldía."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 134,
    question: "El término máximo legal para interponer recursos de reposición contra una sanción de tránsito dictada en audiencia es de:",
    options: [
      "Veinticuatro horas posteriores a la notificación de la sanción.",
      "Dentro de los cinco (5) días hábiles siguientes a la notificación del fallo en audiencia.",
      "Diez días calendario contados desde la imposición física del parte.",
      "No existe recurso administrativo ordinario contra fallos de tránsito."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 135,
    question: "La placa del vehículo es un elemento público que cumple con la función legal de:",
    options: [
      "Acreditar el pago de los impuestos de rodamiento municipal anual.",
      "Identificar de manera única, pública e inequívoca al vehículo a nivel nacional.",
      "Autorizar la libre circulación del automóvil en vías de otros países.",
      "Registrar de forma directa el historial de propietarios del chasis."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 136,
    question: "Circular con un vehículo particular prestando un servicio público no autorizado da lugar a:",
    options: [
      "Multa equivalente a 15 SMDLV sin retención del vehículo.",
      "Compandendo de 30 SMDLV, inmovilización del vehículo por primera vez por 5 días e incrementándose en reincidencia.",
      "Suspensión definitiva de la matrícula del vehículo de forma automática.",
      "Curso de capacitación vial de diez horas sin cobros monetarios."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 137,
    question: "La licencia de tránsito (tarjeta de propiedad) del vehículo se define legalmente como:",
    options: [
      "El contrato de seguro obligatorio contra todo riesgo suscrito por el propietario.",
      "El documento público que autoriza a transitar a un vehículo específico por el territorio nacional identificándolo de forma completa.",
      "El certificado físico aprobatorio de la Revisión Técnico-Mecánica obligatoria.",
      "La autorización legal para que una persona natural pueda conducir el auto."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 138,
    question: "El comparendo impuesto por no realizar la transferencia de propiedad (traspaso) dentro del término legal genera multas a cargo de:",
    options: [
      "El comprador únicamente de forma exclusiva.",
      "El vendedor y comprador de forma solidaria de acuerdo con la ley.",
      "El organismo de tránsito que registró la matrícula original.",
      "La aseguradora que expidió la póliza SOAT del vehículo."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 139,
    question: "La sanción pecuniaria aplicable por arrojar basuras, residuos o escombros a la vía pública desde un vehículo en marcha es de:",
    options: [
      "Cinco (5) salarios mínimos diarios legales vigentes.",
      "Treinta (30) salarios mínimos diarios legales vigentes (SMDLV).",
      "Quince (15) salarios mínimos diarios legales vigentes.",
      "Amonestación de servicio de limpieza urbana por diez horas continuas."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 140,
    question: "El conductor que se niegue a la realización de las pruebas de alcoholemia ordenadas por la autoridad de tránsito incurrirá en:",
    options: [
      "Multa de 15 SMDLV y curso correctivo al día hábil siguiente.",
      "La sanción más severa de multa (hasta 1440 SMDLV), cancelación de la licencia e inmovilización definitiva del vehículo.",
      "Una citación simple para descargos en la oficina municipal de tránsito.",
      "No se puede sancionar debido a la presunción de inocencia constitucional."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 141,
    question: "Transitar con un vehículo que presente vidrios polarizados o entintados sin contar con la respectiva autorización legal genera multa de:",
    options: [
      "Cinco (5) salarios mínimos diarios legales vigentes.",
      "Quince (15) salarios mínimos diarios legales vigentes (SMDLV).",
      "Treinta (30) salarios mínimos diarios con retención del vehículo.",
      "Amonestación de retiro físico de la película plástica reflectiva."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 142,
    question: "La inmovilización del vehículo por transitar en las horas prohibidas por la medida de \"Pico y Placa\" dura un periodo mínimo de:",
    options: [
      "Doce horas continuas en parqueaderos oficiales autorizados.",
      "El tiempo necesario para que finalice la restricción de ese día específico y se cancele la multa correspondiente.",
      "Veinticuatro horas calendario sin opción de retiro anticipado por ley.",
      "El Pico y Placa no da lugar a inmovilización sino únicamente a sanción de multa."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 143,
    question: "¿Qué vigencia tiene la Revisión Técnico-Mecánica obligatoria para vehículos de servicio público nuevos?",
    options: [
      "Se debe realizar de manera obligatoria cada año calendario a partir del primer año de matrícula.",
      "Cada dos años contados desde la expedición de la tarjeta de operaciones.",
      "A los cinco años de su matrícula inicial en el organismo de tránsito.",
      "Cada seis meses de forma preventiva en talleres autorizados."
    ],
    correctAnswer: 0,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 144,
    question: "El traspaso de un vehículo a un tercero exige obligatoriamente estar a paz y salvo por concepto de:",
    options: [
      "Únicamente impuestos de rodamiento departamentales anuales.",
      "Multas por infracciones de tránsito registradas ante el SIMIT a nivel nacional e impuestos locales del vehículo.",
      "Pólizas de seguro todo riesgo contra robo y responsabilidad civil.",
      "Exámenes médicos de aptitud psicofísica del comprador del bien."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 145,
    question: "El Seguro Obligatorio de Accidentes de Tránsito (SOAT) tiene una vigencia generalizada de:",
    options: [
      "Dos años contados desde su expedición electrónica.",
      "Un (1) año calendario contado desde la fecha y hora de su expedición.",
      "Indefinida mientras el vehículo mantenga la matrícula activa.",
      "Semestral obligatoria para vehículos de servicio público."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 146,
    question: "La velocidad máxima permitida para vehículos particulares en vías urbanas principales en Colombia (ej. autopistas urbanas) es de:",
    options: [
      "50 km/h de acuerdo con el límite general establecido por la Ley de Seguridad Vial (Ley 2251 de 2022).",
      "60 km/h en todas las autopistas internas de manera uniforme.",
      "80 km/h si las condiciones de visibilidad y el asfalto seco lo permiten.",
      "30 km/h constantes por razones obvias de cruces de peatones vulnerables."
    ],
    correctAnswer: 0,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  },
  {
    id: 147,
    question: "El desacato o no comparecer ante la citación de tránsito dentro de los términos hábiles establecidos da lugar a:",
    options: [
      "La anulación automática de la infracción por caducidad procesal.",
      "La continuación del proceso sancionatorio declarándolo contraventor y cargando la multa definitiva de forma coactiva.",
      "Una nueva citación física con cobro de intereses dobles automáticos.",
      "La inmovilización preventiva inmediata de las cuentas bancarias del citado."
    ],
    correctAnswer: 1,
    category: "Bloque 3: Leyes, Sanciones y Normas de Tránsito"
  }
];
