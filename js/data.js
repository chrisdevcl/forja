const CATEGORIES = [
  { id: 'todos',       label: 'Todos',      emoji: '⚡' },
  { id: 'mente',       label: 'Mente',       emoji: '🧠' },
  { id: 'relaciones',  label: 'Relaciones',  emoji: '🤝' },
  { id: 'crecimiento', label: 'Crecimiento', emoji: '🚀' },
];

const CONCEPTS = [
  // ── MENTE ────────────────────────────────────────────────
  {
    id: 'paciencia', emoji: '🐢', title: 'Paciencia', color: '#F59E0B', category: 'mente',
    tagline: 'Las cosas buenas toman tiempo',
    why: 'Cuando aprendes a esperar aunque tengas muchas ganas de que algo pase ya, puedes lograr cosas más grandes y sentirte tranquilo/a por dentro. Las personas pacientes no dejan de sentir, pero piensan antes de reaccionar.',
    examples: [
      { icon: '🚲', text: 'Aprender a andar en bicicleta. No sale a la primera, ¡y eso está bien!' },
      { icon: '🍰', text: 'Esperar que el pastel se hornee en lugar de abrirlo antes de tiempo.' },
      { icon: '🎮', text: 'Esperar tu turno cuando juegas con amigos y amigas.' },
    ],
    exercise: { title: 'La Respiración Tortuga', steps: [
      { text: 'Piensa en algo que estás esperando ahora mismo y que te pone impaciente.', input: { placeholder: 'Estoy esperando...' } },
      { text: 'Ahora respira muy despacio 4 veces, contando en tu cabeza. Hazlo de verdad antes de continuar.' },
      { text: 'Imagina que eres una tortuga que va sin apuro. No hay ningún problema con ir despacio.' },
      { text: '¿Cómo te sientes después de respirar así?', input: { placeholder: 'Me siento...' } },
    ]},
  },
  {
    id: 'autocontrol', emoji: '🧘', title: 'Autocontrol', color: '#0F766E', category: 'mente',
    tagline: 'Tú decides cómo reaccionar',
    why: 'Las emociones fuertes como el enojo o las ganas de gritar son normales, pero actuar sin pensar puede empeorar las cosas. El autocontrol no es esconder lo que sientes, sino elegir cómo reaccionar para no hacerte daño ni hacérselo a otros.',
    examples: [
      { icon: '😤', text: 'Sentir rabia porque perdiste un juego y respirar antes de reaccionar.' },
      { icon: '🍫', text: 'Tener muchas ganas de comer toda la torta y decidir esperar tu turno.' },
      { icon: '📱', text: 'Querer seguir en el celular y parar cuando dijiste que pararías.' },
    ],
    exercise: { title: 'El Semáforo Interior', steps: [
      { text: 'Piensa en algo que pasó hace poco que te hizo querer reaccionar mal.', input: { placeholder: '¿Qué pasó?' } },
      { text: '🔴 ROJO: ¿Qué quisiste hacer o decir en ese momento?', input: { placeholder: 'Quise...' } },
      { text: '🟡 AMARILLO: ¿Qué podrías haber hecho para pausar? (respirar, contar, alejarte un momento)', input: { placeholder: 'Podría haber...' } },
      { text: '🟢 VERDE: Practica ahora en voz alta cómo reaccionarías diferente. ¿Cómo te suena decirlo?', input: { placeholder: 'Practicando, diría...' } },
    ]},
  },
  {
    id: 'resiliencia', emoji: '🌊', title: 'Resiliencia', color: '#0EA5E9', category: 'mente',
    tagline: 'Caerse no es el final',
    why: 'Todas las personas se equivocan, se caen y tienen días difíciles. La resiliencia es levantarse, sacudirse y seguir adelante. No significa no sentirse mal, sino no quedarse atascado/a en eso para siempre.',
    examples: [
      { icon: '🏅', text: 'No quedar en el equipo y seguir entrenando igual.' },
      { icon: '📉', text: 'Sacar una mala nota y decidir estudiar diferente la próxima vez.' },
      { icon: '💬', text: 'Tener un problema con un amigo/a y buscar la forma de hablarlo.' },
    ],
    exercise: { title: 'El Rebote', steps: [
      { text: 'Piensa en algo que salió mal hace poco.', input: { placeholder: '¿Qué pasó?' } },
      { text: 'Escribe cómo te sentiste cuando pasó. No tienes que tapar lo que sentiste.', input: { placeholder: 'Me sentí...' } },
      { text: '¿Qué aprendiste de lo que pasó, aunque sea una cosa pequeña?', input: { placeholder: 'Aprendí que...' } },
      { text: 'Escribe UNA cosa que harías diferente si volviera a pasar algo parecido.', input: { placeholder: 'La próxima vez voy a...' } },
    ]},
  },
  {
    id: 'confianza', emoji: '🌟', title: 'Confianza', color: '#EAB308', category: 'mente',
    tagline: 'Creer en ti cambia todo',
    why: 'Cuando confías en ti, te atreves a intentar cosas nuevas. Los errores no te dan tanto miedo porque sabes que puedes mejorar. La confianza no es creer que siempre ganarás, sino creer que puedes intentarlo.',
    examples: [
      { icon: '✋', text: 'Levantar la mano en clase aunque no estés 100% seguro/a de la respuesta.' },
      { icon: '⚽', text: 'Probar un deporte nuevo aunque no sepas jugarlo bien todavía.' },
      { icon: '👋', text: 'Presentarte a alguien que no conoces en el recreo.' },
    ],
    exercise: { title: 'El Espejo Valiente', steps: [
      { text: 'Cierra los ojos y piensa en UNA cosa que hiciste bien hoy o ayer, aunque sea muy pequeña.', input: { placeholder: 'Hice bien...' } },
      { text: 'Ahora dilo en voz alta, mirándote las manos o al espejo si tienes uno cerca. Dilo de verdad.' },
      { text: 'Repítelo una vez más, pero más fuerte y con seguridad.' },
      { text: '¿Cómo te sentiste al decirlo en voz alta?', input: { placeholder: 'Me sentí...' } },
    ]},
  },
  {
    id: 'curiosidad', emoji: '🔭', title: 'Curiosidad', color: '#10B981', category: 'mente',
    tagline: 'Las preguntas abren puertas',
    why: 'Quienes hacen preguntas aprenden más y encuentran cosas que otros no ven. La curiosidad es como un motor: te lleva a descubrir cosas increíbles sobre el mundo y sobre ti mismo/a.',
    examples: [
      { icon: '🐛', text: 'Ver un insecto en el patio y querer saber cómo se llama y qué come.' },
      { icon: '🌍', text: 'Escuchar una palabra nueva y querer saber qué significa.' },
      { icon: '🧪', text: 'Preguntarse por qué el cielo es azul o cómo funcionan los aviones.' },
    ],
    exercise: { title: 'La Pregunta del Día', steps: [
      { text: 'Escribe UNA cosa que no entiendes del todo y que te da curiosidad.', input: { placeholder: 'Me pregunto por qué / cómo...' } },
      { text: 'Inventa 3 explicaciones posibles, aunque no estén bien. ¡Usa tu imaginación!', input: { placeholder: 'Quizás es porque...\nTal vez...\nO a lo mejor...' } },
      { text: '¿Cuál de tus explicaciones te parece la más posible y por qué?', input: { placeholder: 'Creo que es... porque...' } },
      { text: '¿A quién le harías esta pregunta para saber la respuesta de verdad?', input: { placeholder: 'Se la preguntaría a...' } },
    ]},
  },
  {
    id: 'creatividad', emoji: '🎨', title: 'Creatividad', color: '#F43F5E', category: 'mente',
    tagline: 'Ver soluciones donde otros no las ven',
    why: 'La creatividad no es solo dibujar o hacer música. Es pensar de forma diferente y encontrar soluciones nuevas a los problemas. Las personas creativas se adaptan mejor cuando las cosas no salen como esperaban.',
    examples: [
      { icon: '🎁', text: 'No tener dinero para un regalo y crear algo hecho a mano con mucho cariño.' },
      { icon: '🌧️', text: 'Un día de lluvia que arruina tus planes y inventar un juego nuevo en casa.' },
      { icon: '🧩', text: 'Buscar una forma distinta de resolver un problema de matemáticas.' },
    ],
    exercise: { title: 'El Juego de los ¿Y si...?', steps: [
      { text: 'Piensa en un problema o algo que te gustaría mejorar.', input: { placeholder: 'El problema es...' } },
      { text: 'Escribe 3 ideas distintas para solucionarlo, aunque parezcan locas o graciosas.', input: { placeholder: 'Idea 1: ...\nIdea 2: ...\nIdea 3: ...' } },
      { text: 'Elige la que más te gusta y escribe por qué.', input: { placeholder: 'Elijo la idea... porque...' } },
      { text: '¿Hay algo de esa idea que puedas hacer ahora mismo, aunque sea una parte pequeña?', input: { placeholder: 'Puedo hacer ahora...' } },
    ]},
  },

  // ── RELACIONES ───────────────────────────────────────────
  {
    id: 'empatia', emoji: '💛', title: 'Empatía', color: '#EC4899', category: 'relaciones',
    tagline: 'Ver el mundo con los ojos de otra persona',
    why: 'Cuando entiendes cómo se sienten los demás, puedes ayudarlos mejor y hacer amistades más fuertes. La empatía es como un superpoder que hace que quienes te rodean se sientan menos solos.',
    examples: [
      { icon: '😢', text: 'Notar que alguien está triste y preguntarle cómo está, sin esperar que te lo pida.' },
      { icon: '🪑', text: 'Ceder tu lugar a alguien mayor o que lo necesite más.' },
      { icon: '🤐', text: 'No reírte cuando alguien se equivoca o le pasa algo que le da vergüenza.' },
    ],
    exercise: { title: 'Los Zapatos de Otra Persona', steps: [
      { text: 'Piensa en alguien que está pasando un momento difícil.', input: { placeholder: '¿Quién es y qué le pasa?' } },
      { text: 'Imagina que eres esa persona por un momento. ¿Qué estarías sintiendo?', input: { placeholder: 'Creo que estaría sintiendo...' } },
      { text: 'Escribe qué le dirías o harías si estuviera aquí contigo ahora mismo.', input: { placeholder: 'Le diría / haría...' } },
      { text: '¿Cómo crees que se sentiría esa persona si hicieras eso?', input: { placeholder: 'Creo que se sentiría...' } },
    ]},
  },
  {
    id: 'comunicacion', emoji: '💬', title: 'Comunicación', color: '#D97706', category: 'relaciones',
    tagline: 'Decir lo que piensas y escuchar de verdad',
    why: 'Saber decir lo que sientes y escuchar de verdad a los demás evita muchos malentendidos y peleas. Una buena comunicación ayuda a resolver problemas, hacer amistades y pedir ayuda cuando la necesitas.',
    examples: [
      { icon: '😟', text: 'Decirle a un/a amigo/a que algo que hizo te molestó, en vez de quedarte callado/a.' },
      { icon: '👂', text: 'Escuchar sin interrumpir cuando alguien te está contando algo importante.' },
      { icon: '🙋', text: 'Pedir ayuda cuando no entiendes algo, en vez de hacer como que sí.' },
    ],
    exercise: { title: 'Practica Decirlo', steps: [
      { text: 'Piensa en algo difícil que necesitas decirle a alguien.', input: { placeholder: '¿A quién y sobre qué?' } },
      { text: "Escribe lo que quieres decir empezando con 'Yo siento...' o 'Yo necesito...'", input: { placeholder: 'Yo siento / necesito...' } },
      { text: 'Léelo en voz alta ahora mismo, como si esa persona estuviera frente a ti. ¿Cómo suena?' },
      { text: '¿Cambiarías algo de lo que escribiste? Escribe la versión final.', input: { placeholder: 'Lo dejaría igual / Lo cambiaría a...' } },
    ]},
  },
  {
    id: 'trabajo-en-equipo', emoji: '🤝', title: 'Trabajo en equipo', color: '#2563EB', category: 'relaciones',
    tagline: 'Juntos llegamos más lejos',
    why: 'Hay cosas que no puedes hacer solo/a, y está bien. Saber trabajar con otras personas, escuchar sus ideas y aportar las tuyas es muy importante en el colegio, los deportes y la vida entera.',
    examples: [
      { icon: '🏫', text: 'Repartir tareas en un trabajo grupal para que cada uno/a aporte algo.' },
      { icon: '⚽', text: 'Pasar la pelota aunque quieras hacer tú el gol, porque otro/a tiene mejor posición.' },
      { icon: '🎭', text: 'Ceder en una idea tuya cuando la del grupo es mejor para todos.' },
    ],
    exercise: { title: 'El Mapa de Mi Equipo', steps: [
      { text: 'Elige un grupo del que formas parte.', input: { placeholder: '¿Cuál grupo? (familia, curso, equipo...)' } },
      { text: 'Escribe en qué es buena cada persona de ese grupo.', input: { placeholder: 'Nombre: es bueno/a en...\nNombre: es bueno/a en...\nNombre: es bueno/a en...' } },
      { text: '¿Y en qué eres tú bueno/a para ese grupo?', input: { placeholder: 'Yo soy bueno/a en...' } },
      { text: 'Imagina que el grupo está aquí ahora. ¿Cómo les contarías lo que aporta cada uno?', input: { placeholder: 'Les diría...' } },
    ]},
  },
  {
    id: 'generosidad', emoji: '🎁', title: 'Generosidad', color: '#7C3AED', category: 'relaciones',
    tagline: 'Dar sin esperar nada a cambio',
    why: 'Cuando das algo de ti —tiempo, ayuda o atención— sin esperar que te devuelvan nada, las dos personas se sienten bien. La generosidad crea amistades fuertes y hace el mundo más agradable.',
    examples: [
      { icon: '🍎', text: 'Compartir tu merienda con alguien que olvidó la suya.' },
      { icon: '⏱️', text: 'Ayudar a un compañero/a a entender algo que tú ya sabes.' },
      { icon: '💌', text: 'Hacer un dibujo o carta para alegrarle el día a alguien sin ninguna razón especial.' },
    ],
    exercise: { title: 'El Gesto Secreto', steps: [
      { text: 'Piensa en alguien a quien podrías hacerle algo bueno sin que lo espere.', input: { placeholder: '¿Quién es?' } },
      { text: '¿Qué harías exactamente? Sé muy específico/a.', input: { placeholder: 'Le haría / le diría...' } },
      { text: 'Imagina que ya lo hiciste. ¿Cómo crees que reaccionaría esa persona?', input: { placeholder: 'Creo que reaccionaría...' } },
      { text: '¿Cómo te sentirías tú al verlo?', input: { placeholder: 'Me sentiría...' } },
    ]},
  },
  {
    id: 'honestidad', emoji: '🪞', title: 'Honestidad', color: '#F97316', category: 'relaciones',
    tagline: 'La verdad te hace libre',
    why: 'Cuando eres honesto/a, las personas saben que pueden confiar en ti, y tú puedes mirarte al espejo con orgullo. Decir la verdad a veces cuesta, pero siempre vale la pena.',
    examples: [
      { icon: '📖', text: 'Decir que no hiciste la tarea en vez de inventar una excusa.' },
      { icon: '💰', text: 'Devolver el vuelto o algo que encontraste y no es tuyo.' },
      { icon: '🤝', text: 'Reconocer cuando te equivocaste, aunque duela un poco.' },
    ],
    exercise: { title: 'La Prueba del Espejo', steps: [
      { text: 'Piensa en algo que no has dicho con total honestidad.', input: { placeholder: '¿Qué fue?' } },
      { text: 'Escribe cómo sería decirlo honestamente.', input: { placeholder: 'La verdad es...' } },
      { text: 'Hazte estas tres preguntas: ¿Es verdad? ¿Es necesario decirlo? ¿Ayuda a alguien?', input: { placeholder: 'Las respuestas son...' } },
      { text: 'Practica decirlo en voz alta ahora, como si esa persona estuviera frente a ti. ¿Cómo te sientes al decirlo?', input: { placeholder: 'Me siento...' } },
    ]},
  },

  // ── CRECIMIENTO ──────────────────────────────────────────
  {
    id: 'independencia', emoji: '🦅', title: 'Independencia', color: '#3B82F6', category: 'crecimiento',
    tagline: '¡Puedes más de lo que crees!',
    why: 'Poder hacer cosas por tu cuenta te hace sentir capaz y muy orgulloso/a. No siempre habrá alguien para ayudarte, y eso no es un problema, ¡porque tú ya sabes hacerlo!',
    examples: [
      { icon: '🎒', text: 'Preparar tu mochila para el colegio sin que te lo recuerden.' },
      { icon: '👕', text: 'Elegir tú mismo/a qué ropa ponerte cada mañana.' },
      { icon: '📚', text: 'Empezar tus tareas sin esperar que te lo digan.' },
    ],
    exercise: { title: 'Yo Puedo Solo/a', steps: [
      { text: 'Escribe 3 cosas que normalmente haces con ayuda de alguien.', input: { placeholder: '1. ...\n2. ...\n3. ...' } },
      { text: 'Elige UNA que podrías intentar solo/a.', input: { placeholder: 'Voy a intentar solo/a...' } },
      { text: '¿Cuál sería el primer paso para hacerlo? Descríbelo con detalle.', input: { placeholder: 'El primer paso sería...' } },
      { text: 'Imagina que ya lo lograste sin ayuda. ¿Cómo te sentirías?', input: { placeholder: 'Me sentiría...' } },
    ]},
  },
  {
    id: 'responsabilidad', emoji: '🌱', title: 'Responsabilidad', color: '#22C55E', category: 'crecimiento',
    tagline: 'Las personas confían en ti',
    why: 'Cuando cumples lo que prometes, las personas saben que pueden contar contigo. Ser responsable no significa ser perfecto/a, sino hacer tu parte aunque cueste.',
    examples: [
      { icon: '🐾', text: 'Darle agua y comida a tu mascota todos los días.' },
      { icon: '📝', text: 'Entregar tus trabajos del colegio en la fecha que acordaste.' },
      { icon: '💔', text: 'Decir la verdad cuando rompes algo, en lugar de inventar excusas.' },
    ],
    exercise: { title: 'Mi Promesa', steps: [
      { text: 'Piensa en algo que depende de ti y que a veces olvidas o dejas para después.', input: { placeholder: 'Eso es...' } },
      { text: '¿Por qué es importante que lo hagas? ¿A quién afecta si no lo haces?', input: { placeholder: 'Es importante porque...' } },
      { text: 'Escribe una promesa hacia ti mismo/a sobre ese compromiso.', input: { placeholder: 'Me comprometo a...' } },
      { text: '¿Cómo te sentirías si lo cumplieras todos los días?', input: { placeholder: 'Me sentiría...' } },
    ]},
  },
  {
    id: 'perseverancia', emoji: '🏔️', title: 'Perseverancia', color: '#8B5CF6', category: 'crecimiento',
    tagline: 'Seguir aunque sea difícil',
    why: 'Nada importante se logra en el primer intento. Seguir intentando, aunque sea difícil o te canses, es lo que hace que las personas lleguen a dominar algo. Cada intento te enseña algo nuevo.',
    examples: [
      { icon: '🎸', text: 'Practicar un instrumento musical aunque al principio suene raro.' },
      { icon: '➗', text: 'Intentar una multiplicación difícil una y otra vez hasta entenderla.' },
      { icon: '🏊', text: 'Seguir practicando natación aunque al principio tragues agua.' },
    ],
    exercise: { title: 'El Diario de los Intentos', steps: [
      { text: 'Elige algo difícil que estás intentando aprender o lograr.', input: { placeholder: 'Estoy intentando...' } },
      { text: '¿Cuál es la parte más difícil hasta ahora?', input: { placeholder: 'Lo más difícil es...' } },
      { text: 'Inténtalo ahora mismo durante unos minutos, aunque sea en papel o en tu cabeza. Vuelve aquí cuando termines.' },
      { text: '¿Qué salió mejor que antes? Aunque sea algo muy pequeño.', input: { placeholder: 'Mejoré en...' } },
    ]},
  },
  {
    id: 'valentia', emoji: '🦁', title: 'Valentía', color: '#DC2626', category: 'crecimiento',
    tagline: 'Actuar aunque tengas miedo',
    why: 'La valentía no es no tener miedo. Es hacer algo importante aunque sientas miedo. Todas las personas valientes sienten miedo, pero eligen actuar de todas formas. Eso es lo que las hace valientes.',
    examples: [
      { icon: '🎤', text: 'Hablar frente a toda la clase aunque te tiemblen las piernas.' },
      { icon: '🤚', text: 'Defender a alguien que están molestando, aunque sea difícil.' },
      { icon: '🆕', text: 'Probar algo completamente nuevo aunque no sepas si te va a gustar.' },
    ],
    exercise: { title: 'Mi Momento Valiente', steps: [
      { text: 'Piensa en algo que quieres hacer pero que te da miedo o vergüenza.', input: { placeholder: 'Quiero... pero me da miedo...' } },
      { text: '¿Qué es lo peor que podría pasar? ¿Y qué tan probable es que eso pase de verdad?', input: { placeholder: 'Lo peor sería... Pero en realidad es probable que...' } },
      { text: 'Cierra los ojos e imagínate haciéndolo. Visualízalo completo. ¿Cómo se siente en tu imaginación?', input: { placeholder: 'En mi imaginación me siento...' } },
      { text: 'Escribe una frase de ánimo que te dirías justo antes de hacerlo.', input: { placeholder: 'Me diría...' } },
    ]},
  },
  {
    id: 'gratitud', emoji: '🌈', title: 'Gratitud', color: '#06B6D4', category: 'crecimiento',
    tagline: 'Ver lo bueno que ya tienes',
    why: 'Notar las cosas buenas que tienes te hace más feliz. No porque todo sea perfecto, sino porque aprendes a verlas. Las personas agradecidas tienen más ganas de hacer cosas y hacen que los demás se sientan bien.',
    examples: [
      { icon: '🙏', text: 'Dar las gracias de corazón, mirando a los ojos, no solo de rutina.' },
      { icon: '📄', text: 'Escribirle una nota a alguien que te ayudó, aunque sea en papel.' },
      { icon: '☀️', text: 'Notar y apreciar un día soleado o una comida rica.' },
    ],
    exercise: { title: 'Mis 3 Cosas Buenas', steps: [
      { text: 'Escribe 3 cosas buenas que pasaron hoy o ayer, aunque sean muy pequeñas.', input: { placeholder: '1. ...\n2. ...\n3. ...' } },
      { text: 'Elige una. ¿Hay alguien a quien puedas agradecérsela?', input: { placeholder: 'Se la agradezco a...' } },
      { text: 'Escribe aquí mismo lo que le dirías o le escribirías a esa persona.', input: { placeholder: 'Le diría / escribiría...' } },
      { text: '¿Cómo te sentiste al escribir eso?', input: { placeholder: 'Me sentí...' } },
    ]},
  },
  {
    id: 'compartir', emoji: '🤲', title: 'Compartir', color: '#EC4899', category: 'relaciones',
    tagline: 'Lo que das vuelve multiplicado',
    why: 'Compartir no significa quedarte sin nada. Significa que valoras la amistad más que el objeto. Las personas que comparten tienen amistades más fuertes y se sienten felices porque hacen sentir bien a otros.',
    examples: [
      { icon: '🍕', text: 'Ofrecer parte de tu merienda a alguien sin que te lo pida.' },
      { icon: '🎮', text: 'Ceder el control o el turno aunque estés ganando.' },
      { icon: '📚', text: 'Prestar algo tuyo que sabes que le va a gustar a alguien.' },
    ],
    exercise: { title: 'El Regalo Sin Envoltura', steps: [
      { text: 'Piensa en algo tuyo que podrías compartir con alguien.', input: { placeholder: '¿Qué puedes compartir y con quién?' } },
      { text: 'Imagina que ya lo compartiste. ¿Cómo crees que reaccionaría esa persona?', input: { placeholder: 'Creo que reaccionaría...' } },
      { text: '¿Cómo te sentirías tú al hacerlo?', input: { placeholder: 'Me sentiría...' } },
      { text: '¿Por qué crees que compartir hace que las amistades sean más fuertes?', input: { placeholder: 'Creo que es porque...' } },
    ]},
  },
  {
    id: 'respeto', emoji: '🤍', title: 'Respeto', color: '#6366F1', category: 'relaciones',
    tagline: 'Tratar a todos como merecen',
    why: 'El respeto no es obedecer o estar de acuerdo con todo. Es reconocer que cada persona tiene valor, aunque sea diferente a ti. Cuando respetas, las personas confían en ti y se sienten seguras a tu lado.',
    examples: [
      { icon: '🙋', text: 'Escuchar sin interrumpir cuando alguien habla, aunque no estés de acuerdo.' },
      { icon: '🎭', text: 'No burlarte de los gustos, forma de ser o errores de alguien.' },
      { icon: '🏠', text: 'Cuidar las cosas de los demás como si fueran tuyas.' },
    ],
    exercise: { title: 'Los Zapatos del Respeto', steps: [
      { text: 'Piensa en alguien que es muy diferente a ti en gustos o forma de ser.', input: { placeholder: '¿Quién es y en qué es diferente?' } },
      { text: 'Escribe UNA cosa buena o interesante que tiene esa persona.', input: { placeholder: 'Lo bueno de esa persona es...' } },
      { text: 'Imagina que te burlas de algo de esa persona. ¿Cómo crees que se sentiría?', input: { placeholder: 'Se sentiría...' } },
      { text: 'Ahora imagina que le muestras respeto. ¿Qué harías o dirías exactamente?', input: { placeholder: 'Le mostraría respeto...' } },
    ]},
  },
  {
    id: 'amabilidad', emoji: '🌸', title: 'Amabilidad', color: '#F472B6', category: 'relaciones',
    tagline: 'Los gestos pequeños importan mucho',
    why: 'Ser amable no cuesta nada y puede cambiar el día de alguien. Una palabra, una sonrisa o una pequeña ayuda pueden hacer que una persona se sienta mucho mejor. Y además a ti también te hace sentir bien.',
    examples: [
      { icon: '😊', text: 'Saludar con una sonrisa aunque tengas un día difícil.' },
      { icon: '🚪', text: 'Ayudar a alguien sin esperar nada a cambio.' },
      { icon: '✏️', text: 'Decirle a alguien algo bueno cuando sabes que lo está pasando mal.' },
    ],
    exercise: { title: 'El Día Amable', steps: [
      { text: 'Escribe el nombre de alguien que fue amable contigo alguna vez.', input: { placeholder: 'Esa persona es...' } },
      { text: '¿Qué hizo exactamente que fue amable?', input: { placeholder: 'Lo que hizo fue...' } },
      { text: '¿Cómo te hizo sentir eso?', input: { placeholder: 'Me hizo sentir...' } },
      { text: 'Escribe aquí un mensaje de agradecimiento para esa persona, como si se lo estuvieras enviando ahora.', input: { placeholder: 'Querido/a... Quiero decirte que...' } },
    ]},
  },
  {
    id: 'perdon', emoji: '🕊️', title: 'Perdón', color: '#A78BFA', category: 'relaciones',
    tagline: 'Dejar de cargar con lo que duele',
    why: 'Perdonar no es decir que lo que pasó estuvo bien. Es decidir no seguir pensando en eso todo el tiempo. Seguir enojado/a cansa mucho. Pedir perdón o perdonar a alguien es una señal de fuerza, no de debilidad.',
    examples: [
      { icon: '😔', text: 'Decir "lo siento" de verdad cuando hiciste algo que lastimó a alguien.' },
      { icon: '🤝', text: 'Hacer las paces con un amigo/a después de una pelea, aunque haya costado.' },
      { icon: '💭', text: 'Decidir no seguir enojado/a con alguien aunque no te hayan pedido perdón.' },
    ],
    exercise: { title: 'La Carta que Libera', steps: [
      { text: 'Piensa en alguien con quien quedó algo sin resolver: una disculpa que no diste o un enojo que sigues teniendo.', input: { placeholder: '¿Qué pasó y con quién?' } },
      { text: 'Escribe lo que sientes sin filtros. Esto es solo para ti.', input: { placeholder: 'Lo que siento es...' } },
      { text: 'Ahora escribe aquí lo que le dirías a esa persona si estuviera frente a ti ahora mismo.', input: { placeholder: 'Lo que le diría es...' } },
      { text: '¿Cómo te sentiste al escribirlo, aunque no lo hayas dicho aún?', input: { placeholder: 'Me sentí...' } },
    ]},
  },
  {
    id: 'autocuidado', emoji: '🌿', title: 'Autocuidado', color: '#34D399', category: 'mente',
    tagline: 'Cuidarte para poder dar lo mejor de ti',
    why: 'Cuidarte no es egoísta, es necesario. Dormir bien, comer, descansar y hacer cosas que te gustan te ayudan a sentirte bien por dentro. Cuando te cuidas, tienes más ganas y energía para todo lo demás.',
    examples: [
      { icon: '😴', text: 'Dormir las horas que necesitas aunque quieras seguir viendo algo.' },
      { icon: '🏃', text: 'Moverse y hacer algo físico cada día, aunque sea caminar un rato.' },
      { icon: '📴', text: 'Darte un tiempo sin celular para hacer algo que te guste de verdad.' },
    ],
    exercise: { title: 'Lo Que Me Hace Bien', steps: [
      { text: 'Escribe 3 cosas que te cansan mucho o te ponen de mal humor.', input: { placeholder: '1. ...\n2. ...\n3. ...' } },
      { text: 'Ahora escribe 3 cosas que te hacen sentir bien y con más energía.', input: { placeholder: '1. ...\n2. ...\n3. ...' } },
      { text: 'Elige UNA de las cosas que te hacen sentir bien y descríbela: ¿dónde, cuándo, cómo la haces?', input: { placeholder: 'Me gusta... porque...' } },
      { text: '¿Por qué crees que es importante darte tiempo para hacer cosas que te hacen sentir bien?', input: { placeholder: 'Creo que es importante porque...' } },
    ]},
  },
  {
    id: 'concentracion', emoji: '🎯', title: 'Concentración', color: '#0891B2', category: 'mente',
    tagline: 'Una cosa a la vez, bien hecha',
    why: 'Vivimos rodeados de cosas que nos distraen. Saber enfocarse en una sola cosa durante un rato es cada vez más difícil, pero también más valioso. Cuando te concentras, haces mejor las cosas y terminas más rápido.',
    examples: [
      { icon: '📖', text: 'Leer o estudiar sin el celular cerca, aunque sea 15 minutos.' },
      { icon: '🎨', text: 'Trabajar en algo creativo sin pausar para ver videos o mensajes.' },
      { icon: '🍽️', text: 'Comer sin pantalla, prestando atención a la comida y a quien está contigo.' },
    ],
    exercise: { title: 'El Bloque Sin Distracciones', steps: [
      { text: '¿Cuál es la cosa que más te cuesta ignorar cuando intentas concentrarte?', input: { placeholder: 'Lo que más me distrae es...' } },
      { text: 'Elige una tarea pequeña, pon un cronómetro en 10 minutos y aleja o apaga lo que te distrae. ¡Empieza ahora y vuelve aquí cuando termine el tiempo!' },
      { text: '¿Pudiste mantenerte concentrado/a los 10 minutos? ¿Qué pasó?', input: { placeholder: 'Lo que pasó fue...' } },
      { text: '¿Qué harías diferente la próxima vez para distraerte menos?', input: { placeholder: 'La próxima vez...' } },
    ]},
  },
  {
    id: 'aceptacion', emoji: '☀️', title: 'Aceptación', color: '#D97706', category: 'mente',
    tagline: 'No todo se puede cambiar, y está bien',
    why: 'Hay cosas que podemos cambiar y cosas que no. Saber cuál es cuál te ahorra mucho tiempo y frustración. Aceptar no es rendirse: es elegir dónde poner tus ganas para que de verdad sirvan.',
    examples: [
      { icon: '🌧️', text: 'Que llueva el día de tus planes: no puedes cambiarlo, pero sí qué haces con el tiempo libre.' },
      { icon: '📏', text: 'Tener características que no elegiste, pero que son parte de ti.' },
      { icon: '👥', text: 'Que alguien a tu alrededor sea diferente a como quisieras que fuera.' },
    ],
    exercise: { title: 'Lo que Puedo y Lo que No', steps: [
      { text: 'Piensa en algo que te preocupa o te molesta ahora.', input: { placeholder: 'Me preocupa o molesta...' } },
      { text: '¿Qué parte de eso SÍ puedes cambiar o hacer diferente tú solo/a?', input: { placeholder: 'Lo que sí puedo hacer es...' } },
      { text: '¿Qué parte NO puedes cambiar, aunque quieras?', input: { placeholder: 'Lo que no puedo cambiar es...' } },
      { text: 'En la parte que SÍ puedes cambiar: ¿qué harías primero ahora mismo?', input: { placeholder: 'Primero haría...' } },
    ]},
  },
  {
    id: 'humildad', emoji: '🌾', title: 'Humildad', color: '#92400E', category: 'crecimiento',
    tagline: 'Siempre hay algo nuevo por aprender',
    why: 'Las personas humildes no se creen menos que los demás, sino que saben que siempre hay algo por aprender. La humildad te abre puertas: te permite pedir ayuda, escuchar consejos y mejorar.',
    examples: [
      { icon: '🏆', text: 'Ganar un juego o prueba y no presumirlo delante de quien perdió.' },
      { icon: '❓', text: 'Decir "no sé" cuando no sabes algo, en vez de inventar una respuesta.' },
      { icon: '👂', text: 'Escuchar la opinión de alguien más pequeño porque igual puede tener razón.' },
    ],
    exercise: { title: 'El Mapa de Lo que No Sé', steps: [
      { text: 'Piensa en algo que haces bien. ¿Hay alguien que lo haga mejor o diferente a ti?', input: { placeholder: 'Lo que hago bien es... / Lo hace diferente...' } },
      { text: '¿Qué crees que podrías aprender de esa persona?', input: { placeholder: 'Podría aprender...' } },
      { text: 'Si esa persona estuviera aquí ahora mismo, ¿qué le preguntarías exactamente?', input: { placeholder: 'Le preguntaría...' } },
      { text: '¿Cómo crees que te sentirías si aprendieras eso?', input: { placeholder: 'Me sentiría...' } },
    ]},
  },
  {
    id: 'organizacion', emoji: '🗂️', title: 'Organización', color: '#B45309', category: 'crecimiento',
    tagline: 'Un lugar para cada cosa',
    why: 'Cuando tienes tus cosas y tu tiempo ordenados, gastas menos tiempo buscando y puedes concentrarte en lo que importa. La organización no es ser perfecto/a: es tener un sistema que funcione para ti.',
    examples: [
      { icon: '🎒', text: 'Preparar la mochila la noche anterior para no salir apurado/a.' },
      { icon: '📅', text: 'Saber cuándo tienes pruebas o actividades importantes con tiempo.' },
      { icon: '🛏️', text: 'Tener tu espacio ordenado para encontrar las cosas cuando las necesitas.' },
    ],
    exercise: { title: 'El Sistema que Me Funciona', steps: [
      { text: '¿Qué parte de tu vida está más desordenada ahora?', input: { placeholder: 'Lo más desordenado es...' } },
      { text: 'Elige UNA cosa pequeña que puedas ordenar ahora mismo: tu mochila, tu escritorio, tu carpeta.' },
      { text: '¡Ordénala ahora y vuelve aquí! ¿Cuánto tiempo te tomó?', input: { placeholder: 'Me tomó... / Lo que hice fue...' } },
      { text: '¿Cómo te sientes ahora que está ordenado?', input: { placeholder: 'Me siento...' } },
    ]},
  },
];

const NOCIVOS = [
  {
    id: 'envidia', emoji: '😒', title: 'Envidia', color: '#78716C',
    tagline: '¿Por qué me molesta que a otros les vaya bien?',
    why: 'La envidia hace que el éxito de otros te genere rabia en vez de alegría. Te hace estar todo el tiempo pensando en lo que no tienes y te impide ver lo que sí tienes. Cuanto más la alimentas, más difícil se vuelve alegrarse por lo que le pasa bien a los demás, y eso daña las amistades.',
    examples: [
      { icon: '📝', text: 'Ver que un compañero/a sacó mejor nota y sentir rabia en vez de alegrarse por él o ella.' },
      { icon: '👟', text: 'Querer exactamente lo que tiene otro/a sin valorar lo que ya tienes tú.' },
      { icon: '🎉', text: 'Que te cueste alegrarte cuando a tus amigos les pasan cosas buenas.' },
    ],
    exercise: { title: 'De la Envidia a las Ganas', steps: [
      { text: 'Piensa en algo que tiene otra persona y que te genera envidia.', input: { placeholder: '¿Qué es y de quién?' } },
      { text: 'Escribe 2 cosas buenas que tienes TÚ y que esa persona quizás no tiene.', input: { placeholder: 'Yo tengo...\nTambién tengo...' } },
      { text: '¿Qué te dice esa envidia sobre algo que tú también quieres? ¿Puedes trabajar para lograrlo?', input: { placeholder: 'Creo que quiero... Podría...' } },
      { text: 'Ahora di en voz alta: "Me alegra que le vaya bien." ¿Cómo se siente decirlo?', input: { placeholder: 'Se siente...' } },
    ]},
  },
  {
    id: 'egoismo', emoji: '🫙', title: 'Egoísmo', color: '#78716C',
    tagline: '¿Estoy pensando solo en mí?',
    why: 'El egoísmo es poner siempre tus ganas por encima de las de los demás. Cuando una persona actúa así todo el tiempo, las amistades se rompen porque nadie quiere estar con alguien que nunca piensa en los otros. Hace que quienes te rodean se sientan ignorados.',
    examples: [
      { icon: '🎮', text: 'Querer siempre elegir el juego, la película o el lugar, sin preguntar a los demás.' },
      { icon: '🍰', text: 'Tomar la parte más grande sin pensar si otros también quieren.' },
      { icon: '🙉', text: 'Hablar mucho de uno mismo sin preguntar cómo está la otra persona.' },
    ],
    exercise: { title: 'El Turno de los Demás', steps: [
      { text: '¿Hubo alguna situación reciente donde pusiste tus ganas por encima de las de todos?', input: { placeholder: '¿Qué pasó?' } },
      { text: '¿Cómo crees que se sintió la otra persona en ese momento?', input: { placeholder: 'Creo que se sintió...' } },
      { text: 'Imagina la misma situación, pero esta vez siendo más generoso/a. ¿Qué harías diferente?', input: { placeholder: 'Haría diferente...' } },
      { text: '¿Cómo crees que te sentirías si actuaras así?', input: { placeholder: 'Me sentiría...' } },
    ]},
  },
  {
    id: 'agresividad', emoji: '💢', title: 'Agresividad', color: '#78716C',
    tagline: '¿Reacciono de formas que lastiman?',
    why: 'La agresividad daña a las personas que la reciben y rompe la confianza que habían puesto en ti. Gritar, insultar o golpear no resuelve nada: empeora todo y aleja a quienes te importan. Las emociones fuertes son normales, pero reaccionar así no es una forma aceptable de expresarlas.',
    examples: [
      { icon: '😤', text: 'Gritar o insultar cuando algo no sale como querías.' },
      { icon: '👊', text: 'Empujar, golpear o romper cosas cuando estás frustrado/a.' },
      { icon: '💬', text: 'Decir cosas hirientes en el momento de rabia que después lamentas.' },
    ],
    exercise: { title: 'La Válvula de Escape', steps: [
      { text: '¿Cuándo fue la última vez que reaccionaste de forma agresiva? ¿Qué lo provocó?', input: { placeholder: '¿Qué pasó y cómo reaccioné?' } },
      { text: '¿Qué emoción había detrás de esa reacción? (rabia, miedo, tristeza...)', input: { placeholder: 'Lo que sentía en realidad era...' } },
      { text: 'Escribe 2 cosas que podrías hacer en vez de reaccionar así: (respirar, alejarte, contar hasta 10, apretar un cojín...)', input: { placeholder: 'Podría... o podría...' } },
      { text: 'Practica una de esas alternativas ahora mismo: hazla de verdad y escribe cómo te sientes.', input: { placeholder: 'Lo que hice fue... / Me sentí...' } },
    ]},
  },
  {
    id: 'mentira', emoji: '🎭', title: 'Mentira', color: '#78716C',
    tagline: '¿Digo lo que no es verdad?',
    why: 'Mentir nunca está bien, aunque en el momento parezca la salida más fácil. Cuando mientes, las personas dejan de saber qué creer de lo que dices, y recuperar esa confianza es muy difícil. Si quieres evitar algo incómodo, lo mejor es no decir nada, cambiar el tema o decir "prefiero no responder". El silencio siempre es mejor que una mentira.',
    examples: [
      { icon: '📚', text: 'Decir que hiciste la tarea cuando no la hiciste, en vez de reconocerlo.' },
      { icon: '🤕', text: 'Inventar excusas o culpar a otros cuando eres tú quien se equivocó.' },
      { icon: '🗣️', text: 'Cambiar los detalles de lo que pasó para quedar mejor parado/a.' },
    ],
    exercise: { title: 'La Mejor Alternativa', steps: [
      { text: '¿Hubo alguna vez que dijiste algo que no era verdad? ¿Qué pasó después?', input: { placeholder: '¿Qué no dije bien y qué pasó?' } },
      { text: 'Escribe ahora la verdad que deberías haber dicho en ese momento.', input: { placeholder: 'La verdad era...' } },
      { text: 'Imagina que le dices esa verdad a esa persona ahora. ¿Cómo crees que reaccionaría?', input: { placeholder: 'Creo que reaccionaría...' } },
      { text: '¿Cómo te sentirías después de decir la verdad?', input: { placeholder: 'Me sentiría...' } },
    ]},
  },
  {
    id: 'exclusion', emoji: '🚪', title: 'Exclusión', color: '#78716C',
    tagline: '¿Dejo a alguien fuera a propósito?',
    why: 'Dejar fuera a alguien es hacerle daño sin necesidad de golpear. Quien lo sufre puede sentirse invisible y triste por mucho tiempo. Aunque parezca algo pequeño, tiene consecuencias reales en quien lo recibe.',
    examples: [
      { icon: '👥', text: 'Decirle a alguien "este grupo es solo para nosotros, tú no puedes estar".' },
      { icon: '🤫', text: 'Hablar en secreto o reírse de algo frente a alguien para que se sienta fuera.' },
      { icon: '📵', text: 'Ignorar a alguien en el grupo de mensajes o en el recreo como si no existiera.' },
    ],
    exercise: { title: 'El Lugar de Quien Queda Afuera', steps: [
      { text: '¿Hubo alguna vez que dejaste fuera a alguien o lo viste pasar sin hacer nada?', input: { placeholder: '¿Qué pasó?' } },
      { text: 'Imagina que eres la persona que quedó fuera. ¿Cómo te habrías sentido?', input: { placeholder: 'Me habría sentido...' } },
      { text: '¿Hay alguien en tu colegio o vecindario que queda fuera a menudo?', input: { placeholder: 'Esa persona es...' } },
      { text: 'Escribe qué le dirías o harías para incluirla si la vieras ahora mismo.', input: { placeholder: 'Le diría / haría...' } },
    ]},
  },
  {
    id: 'rencor', emoji: '🪨', title: 'Guardar el Enojo', color: '#78716C',
    tagline: '¿Sigo enojado/a por algo que ya pasó?',
    why: 'Quedarse enojado/a con alguien durante mucho tiempo por algo que ya pasó te hace sentir mal por dentro y te impide seguir adelante. Seguir pensando en eso no cambia lo que pasó ni hace que sea más justo. Solo te hace sentir peor a ti.',
    examples: [
      { icon: '😠', text: 'Seguir enojado/a con alguien semanas o meses después de algo que pasó.' },
      { icon: '🔁', text: 'Volver a pensar una y otra vez en situaciones pasadas que te hicieron daño.' },
      { icon: '🚫', text: 'No querer hablar con alguien porque "lo que hizo no tiene perdón".' },
    ],
    exercise: { title: 'Soltar el Peso', steps: [
      { text: '¿Hay alguien con quien sigues enojado/a por algo que pasó?', input: { placeholder: '¿Qué pasó y cuánto tiempo llevas pensando en eso?' } },
      { text: '¿Cómo te hace sentir por dentro seguir pensando en eso?', input: { placeholder: 'Me hace sentir...' } },
      { text: 'Imagina que ya no piensas más en eso. ¿Cómo estarías diferente?', input: { placeholder: 'Estaría...' } },
      { text: '¿Qué necesitarías para poder dejar de pensar tanto en eso?', input: { placeholder: 'Necesitaría...' } },
    ]},
  },
  {
    id: 'compararse', emoji: '⚖️', title: 'Compararse', color: '#78716C',
    tagline: '¿Me mido siempre contra otros?',
    why: 'Mirarse siempre contra los demás hace que te sientas mal contigo mismo/a. Siempre habrá alguien más rápido, más hábil o más popular, así que usarlos como medida de tu valor hace que nunca sea suficiente. Además te impide ver lo mucho que tú mismo/a has mejorado.',
    examples: [
      { icon: '📊', text: 'Ver las notas de otros y sentir que eres "menos" si las tuyas son más bajas.' },
      { icon: '📱', text: 'Ver fotos o videos de otros y sentir que tu vida es aburrida o peor.' },
      { icon: '🏃', text: 'Desanimarte cuando alguien hace algo mejor que tú en vez de fijarte en tu propio progreso.' },
    ],
    exercise: { title: 'Mi Propio Marcador', steps: [
      { text: '¿Con quién te comparas seguido? ¿En qué?', input: { placeholder: 'Me comparo con... en...' } },
      { text: '¿Qué logros propios estás ignorando cuando lo haces?', input: { placeholder: 'Estoy ignorando que yo...' } },
      { text: 'Escribe 3 cosas en las que has mejorado TÚ, comparado con como eras antes.', input: { placeholder: 'Mejoré en...\nMejoré en...\nMejoré en...' } },
      { text: '¿Cómo te sientes al mirar tu propio progreso?', input: { placeholder: 'Me siento...' } },
    ]},
  },
  {
    id: 'impulsividad', emoji: '⚡', title: 'Impulsividad', color: '#78716C',
    tagline: '¿Actúo antes de pensar?',
    why: 'Reaccionar antes de pensar arruina situaciones que podrían haberse resuelto bien. Las palabras o acciones sin pensar dañan a otras personas y rompen la confianza, y después es difícil reparar ese daño. Tomarse un segundo antes de reaccionar marca la diferencia.',
    examples: [
      { icon: '🗣️', text: 'Decir lo primero que se te viene a la mente aunque lastime a alguien.' },
      { icon: '🏃', text: 'Salir corriendo de una situación difícil en vez de quedarte a resolverla.' },
      { icon: '📲', text: 'Enviar un mensaje enojado y arrepentirte después de enviarlo.' },
    ],
    exercise: { title: 'El Segundo Antes', steps: [
      { text: '¿Cuándo fue la última vez que actuaste sin pensar y lo lamentaste?', input: { placeholder: '¿Qué pasó?' } },
      { text: '¿Qué habrías hecho diferente si hubieras tenido 10 segundos para pensar primero?', input: { placeholder: 'Con más tiempo habría...' } },
      { text: 'Practica ahora: piensa en una situación difícil y cuenta lentamente hasta 10 antes de "responder". ¿Qué cambió?', input: { placeholder: 'Al contar hasta 10, pensé...' } },
      { text: '¿Cómo te sientes cuando logras pausar antes de reaccionar?', input: { placeholder: 'Me siento...' } },
    ]},
  },
];

const EMOCIONES = [
  {
    id: 'preocupacion', emoji: '😟', title: 'Preocupación',
    tagline: 'Mi cabeza no para de pensar',
    what: 'Preocuparte es imaginar que algo malo podría pasar. Tu cerebro lo hace para intentar protegerte, pero a veces se queda dando vueltas sin parar aunque no haya ningún peligro real.',
    tools: [
      { title: 'El tiempo de preocupación', steps: ['Dite a ti mismo: "Me preocuparé de esto a las [hora específica], no ahora."', 'Cuando llegue esa hora, pregúntate: ¿sigue siendo un problema real?', 'Si sí, piensa en UNA cosa concreta que puedas hacer. Si no, ciérralo.'] },
      { title: 'La pregunta del 1 al 10', steps: ['Ponle nota a tu preocupación del 1 al 10 según qué tan probable es que pase de verdad.', 'Luego pregúntate: ¿qué es lo peor que podría pasar? ¿Y qué tan seguido pasa realmente eso?'] },
      { title: 'Respiración 4-7-8', steps: ['Inhala contando hasta 4.', 'Aguanta el aire contando hasta 7.', 'Suelta lentamente contando hasta 8.', 'Repite 3 veces.'] },
    ],
  },
  {
    id: 'ansiedad', emoji: '😰', title: 'Ansiedad',
    tagline: 'Me late fuerte el corazón sin razón',
    what: 'La ansiedad es cuando tu cuerpo reacciona como si hubiera un peligro, aunque no haya ninguno visible. Puedes sentir el corazón acelerado, el estómago apretado o ganas de escapar. Es incómodo pero no es peligroso: tu cuerpo solo está siendo demasiado cuidadoso.',
    tools: [
      { title: 'El 5-4-3-2-1', steps: ['Nombra 5 cosas que puedes VER ahora mismo.', 'Nombra 4 cosas que puedes TOCAR.', 'Nombra 3 cosas que puedes OÍR.', 'Nombra 2 cosas que puedes OLER.', 'Nombra 1 cosa que puedes SABOREAR.'] },
      { title: 'Respiración cuadrada', steps: ['Inhala 4 segundos.', 'Aguanta 4 segundos.', 'Exhala 4 segundos.', 'Espera 4 segundos.', 'Repite hasta que el cuerpo se calme.'] },
      { title: 'Habla con tu cuerpo', steps: ['Identifica dónde sientes la ansiedad en tu cuerpo (pecho, estómago, garganta).', 'Pon tu mano ahí.', 'Respira hacia ese lugar y dite: "Esto es incómodo pero va a pasar."'] },
    ],
  },
  {
    id: 'frustracion', emoji: '😤', title: 'Frustración',
    tagline: 'Nada sale como quiero',
    what: 'La frustración aparece cuando algo no sale como esperabas o cuando sientes que no puedes con algo. Es una señal de que te importa lo que estás haciendo, no de que eres incapaz.',
    tools: [
      { title: 'Pausa activa', steps: ['Para completamente lo que estás haciendo.', 'Haz algo físico por 2 minutos: camina, salta, sacúdete.', 'Vuelve con los ojos frescos.'] },
      { title: 'Nombra el problema', steps: ['Di en voz alta qué es exactamente lo que no está saliendo.', 'Pregúntate: ¿qué he intentado hasta ahora?', 'Piensa en UNA forma diferente de abordarlo.'] },
      { title: 'El límite de hoy', steps: ['Reconoce que hoy llegaste a tu límite y está bien.', 'Dite: "Lo dejo aquí por hoy."', 'Haz algo que te guste antes de volver a intentarlo.'] },
    ],
  },
  {
    id: 'miedo', emoji: '😨', title: 'Miedo',
    tagline: 'Hay algo que me da pánico',
    what: 'El miedo es una emoción que te avisa de un posible peligro. A veces el peligro es real, a veces es solo imaginado. En los dos casos, lo que sientes en el cuerpo es igual de intenso. El miedo no significa que seas cobarde.',
    tools: [
      { title: 'Separa real de imaginado', steps: ['Pregúntate: ¿el peligro está pasando ahora mismo o es algo que podría pasar?', 'Si es ahora: busca a un adulto de confianza.', 'Si es imaginado: dite "mi cerebro está tratando de protegerme, pero estoy a salvo ahora mismo."'] },
      { title: 'Un paso pequeño', steps: ['Identifica qué es exactamente lo que te da miedo.', 'Piensa en el paso MÁS PEQUEÑO posible hacia enfrentarlo.', 'Da solo ese paso. Nada más por hoy.'] },
      { title: 'El objeto ancla', steps: ['Elige un objeto que puedas tocar (una piedra, un llavero, una goma).', 'Cuando sientas miedo, tócalo y concéntrate en cómo se siente.', 'Eso le dice a tu cerebro que estás en el presente y a salvo.'] },
    ],
  },
  {
    id: 'tristeza', emoji: '😢', title: 'Tristeza',
    tagline: 'No tengo ganas de nada',
    what: 'La tristeza aparece cuando pierdes algo importante, cuando te sientes solo/a o cuando algo duele. Sentirse triste es completamente normal y necesario. No hay que apurarse a que pase.',
    tools: [
      { title: 'Permítete sentirla', steps: ['No intentes tapar la tristeza con distracciones.', 'Dale un tiempo fijo: "Voy a sentir esto 10 minutos."', 'Llora si necesitas. El cuerpo lo necesita a veces.'] },
      { title: 'Muévete', steps: ['Sal a caminar aunque sea 10 minutos.', 'No es para olvidarte, es para que tu cuerpo libere lo que está cargando.'] },
      { title: 'Conéctate con alguien', steps: ['No tienes que explicar todo. Solo di "hoy estoy triste" a alguien de confianza.', 'Estar con otra persona, aunque sea en silencio, ayuda.'] },
    ],
  },
  {
    id: 'rabia', emoji: '😡', title: 'Rabia',
    tagline: 'Estoy muy enojado/a',
    what: 'La rabia es una emoción fuerte que te avisa que algo no está bien: que te trataron injustamente o que algo te importa mucho. Sentir rabia está bien. Lo importante es lo que haces con ella.',
    tools: [
      { title: 'Primero el cuerpo', steps: ['La rabia necesita salida física: camina rápido, aprieta fuerte un cojín, sacúdete.', 'NO la saques sobre personas o cosas.', 'Espera a que el cuerpo se calme antes de hablar o decidir.'] },
      { title: 'El agua fría', steps: ['Pon las manos bajo agua fría por 30 segundos.', 'El frío ayuda a tu cuerpo a calmarse más rápido.'] },
      { title: 'Pon en palabras', steps: ['Cuando estés más calmado/a, di o escribe qué fue exactamente lo que te enojó.', 'Diferencia: ¿qué pasó? vs. ¿cómo lo interpreté?', 'Decide si hay algo que quieras decir o hacer al respecto.'] },
    ],
  },
  {
    id: 'salud', emoji: '🤒', title: 'Miedo a estar enfermo/a',
    tagline: 'Creo que algo grave me pasa',
    what: 'A veces el cuerpo siente cosas raras y el cerebro empieza a imaginar que es algo grave. Esto es muy común en los niños. Casi siempre lo que sientes tiene una explicación simple y no es peligroso. Lo más importante es hablarlo con un adulto en vez de asustarte solo/a.',
    tools: [
      { title: 'Habla con un adulto primero', steps: ['Antes de asustarte más, cuéntale a un adulto de confianza lo que sientes.', 'Describe el síntoma concreto: dónde, cuándo empieza, cuánto dura.', 'Deja que un adulto evalúe. Tu trabajo no es descubrir qué tienes.'] },
      { title: 'No busques en internet', steps: ['Buscar síntomas en internet empeora el miedo, no lo calma.', 'Cada vez que buscas, tu cerebro encuentra algo nuevo que temer.', 'En vez de buscar, escribe tus síntomas para contárselos a un adulto.'] },
      { title: 'El estrés duele de verdad', steps: ['Pregúntate: ¿cuándo empezó esto a preocuparme?', '¿Estaba nervioso/a o asustado/a por algo más en ese momento?', 'El miedo y los nervios pueden causar dolores reales en el cuerpo. No es imaginación, pero tampoco es enfermedad grave.'] },
    ],
  },
  {
    id: 'soledad', emoji: '🫂', title: 'Soledad',
    tagline: 'Siento que nadie me entiende',
    what: 'Sentirse solo/a no siempre significa estar sin personas alrededor. Puedes estar rodeado/a de gente y igual sentirte solo/a si sientes que nadie te entiende de verdad. Es una de las cosas más difíciles de sentir, y le pasa a mucha más gente de lo que parece.',
    tools: [
      { title: 'Da el primer paso pequeño', steps: ['Esperar a que alguien venga es muy difícil. Toma tú la iniciativa con algo pequeño.', 'Un mensaje, un "¿cómo estás?" o sentarte cerca de alguien ya es un paso.'] },
      { title: 'Conéctate contigo', steps: ['Haz algo que disfrutes solo/a: dibujar, escuchar música, leer.', 'Estar a gusto contigo mismo/a hace que la soledad duela menos.'] },
      { title: 'Habla con un adulto', steps: ['Si llevas mucho tiempo sintiéndote así, cuéntaselo a alguien de confianza.', 'La soledad que dura mucho tiempo necesita apoyo, no solo estrategias.'] },
    ],
  },
  {
    id: 'verguenza', emoji: '😳', title: 'Vergüenza',
    tagline: 'Quisiera que la tierra me tragara',
    what: 'La vergüenza es esa sensación de querer desaparecer cuando crees que hiciste algo ridículo o que los demás te están juzgando. Casi siempre, los demás no le dan tanta importancia como tú crees.',
    tools: [
      { title: 'El foco imaginario', steps: ['La vergüenza hace que sientas que todos te están mirando.', 'Recuerda: cada persona está principalmente ocupada pensando en sí misma.', 'Dite: "Esto me importa más a mí que a cualquier otra persona aquí."'] },
      { title: 'Ríete de ti mismo/a', steps: ['Si puedes encontrar algo gracioso en lo que pasó, úsalo.', 'Reírte primero quita el poder a la situación.', 'No es minimizar lo que sientes, es no darle más poder del que merece.'] },
      { title: 'Actúa igual que antes', steps: ['La tentación es esconderte o evitar el lugar.', 'Vuelve a hacer lo mismo lo antes posible, con calma.', 'Cada vez que lo evitas, la vergüenza crece. Cada vez que actúas normal, decrece.'] },
    ],
  },
  {
    id: 'abrumamiento', emoji: '🌊', title: 'Cuando es demasiado',
    tagline: 'Tengo demasiadas cosas encima',
    what: 'A veces tienes tantas cosas que hacer o pensar que no sabes por dónde empezar y tu cabeza se bloquea. Eso no es flojera: es que hay demasiado a la vez y tu cerebro se satura.',
    tools: [
      { title: 'Sácalo todo a un papel', steps: ['Escribe TODO lo que tienes en la cabeza, sin orden.', 'Solo sacarlo del cerebro al papel ya ayuda a sentirse mejor.', 'Luego elige UNA sola cosa para hacer ahora.'] },
      { title: 'La regla de los 2 minutos', steps: ['Mira tu lista y busca algo que tome menos de 2 minutos.', 'Hazlo ahora mismo.', 'El cerebro necesita una pequeña victoria para arrancar.'] },
      { title: 'Divide en trozos', steps: ['Toma la tarea más grande y divídela en 3 pasos pequeños y concretos.', 'Haz solo el primero.', 'El resto lo haces después. Un trozo a la vez.'] },
    ],
  },
];

// ── Logros globales ────────────────────────────────────────
const ACHIEVEMENTS = [
  { id: 'primera',    label: 'Primera chispa',     desc: 'Completaste tu primera práctica',        icon: '🔥', condition: s => s.total >= 1   },
  { id: 'cinco',      label: 'En marcha',           desc: '5 prácticas completadas en total',        icon: '⚡', condition: s => s.total >= 5   },
  { id: 'diez',       label: 'Forjador/a',          desc: '10 prácticas completadas en total',       icon: '🔨', condition: s => s.total >= 10  },
  { id: 'veinticinco',label: 'Curtido/a',           desc: '25 prácticas completadas en total',       icon: '🏅', condition: s => s.total >= 25  },
  { id: 'cincuenta',  label: 'Maestro/a',           desc: '50 prácticas completadas en total',       icon: '🏆', condition: s => s.total >= 50  },
  { id: 'racha3',     label: '3 días seguidos',     desc: 'Practicaste 3 días consecutivos',         icon: '📅', condition: s => s.streak >= 3  },
  { id: 'racha7',     label: 'Semana completa',     desc: 'Practicaste 7 días consecutivos',         icon: '🗓️', condition: s => s.streak >= 7  },
  { id: 'variedad5',  label: 'Explorador/a',        desc: 'Practicaste 5 conceptos diferentes',      icon: '🧭', condition: s => s.explored >= 5  },
  { id: 'variedad10', label: 'Curioso/a imparable', desc: 'Practicaste 10 conceptos diferentes',     icon: '🌍', condition: s => s.explored >= 10 },
  { id: 'variedad25', label: 'Completo/a',          desc: 'Practicaste todos los conceptos',         icon: '🌟', condition: s => s.explored >= 25 },
  { id: 'nocivo1',    label: 'Me reconozco',        desc: 'Practicaste un ejercicio de qué evitar',  icon: '🪞', condition: s => s.nocivos >= 1  },
  { id: 'emocion1',   label: 'Me entiendo',         desc: 'Usaste una herramienta de emociones',     icon: '💙', condition: s => s.emociones >= 1 },
];

// ── Glosario ───────────────────────────────────────────────
const GLOSSARY = [
  { word: 'Resiliencia',   conceptId: 'resiliencia',   def: 'Cuando algo sale mal o te caes, en vez de quedarte ahí, te levantas y sigues adelante. Como una pelota que rebota.' },
  { word: 'Empatía',       conceptId: 'empatia',       def: 'Entender cómo se siente otra persona, como si te pusieras en sus zapatos por un momento.' },
  { word: 'Autocontrol',   conceptId: 'autocontrol',   def: 'Poder elegir cómo reaccionar antes de hacerlo sin pensar. Como pausar antes de tomar una decisión.' },
  { word: 'Autocuidado',   conceptId: 'autocuidado',   def: 'Hacer cosas que te hacen sentir bien por dentro y por fuera: dormir bien, comer, descansar y hacer cosas que te gustan.' },
  { word: 'Perseverancia', conceptId: 'perseverancia', def: 'Seguir intentando cuando algo es difícil, aunque te den ganas de parar. Como seguir practicando aunque todavía no te salga.' },
  { word: 'Gratitud',      conceptId: 'gratitud',      def: 'Darse cuenta de las cosas buenas que tienes y agradecer a quienes te ayudan o te hacen sentir bien.' },
  { word: 'Humildad',      conceptId: 'humildad',      def: 'Saber que siempre hay algo nuevo por aprender, y que no pasa nada por pedir ayuda o reconocer que no sabes algo.' },
  { word: 'Aceptación',    conceptId: 'aceptacion',    def: 'Entender que hay cosas que no puedes cambiar, y en vez de frustrarte, poner tus ganas en lo que sí puedes.' },
  { word: 'Impulsividad',  conceptId: 'impulsividad',  def: 'Cuando actúas muy rápido sin pensar primero. Como enviar un mensaje enojado y luego arrepentirte.' },
  { word: 'Ansiedad',      conceptId: 'ansiedad',      def: 'Cuando tu cuerpo se pone nervioso y acelerado aunque no haya un peligro real cerca. Como si una alarma sonara sin razón.' },
  { word: 'Frustración',   conceptId: 'frustracion',   def: 'Lo que sientes cuando algo no te sale como esperabas o lo intentas muchas veces y no resulta.' },
  { word: 'Vergüenza',     conceptId: 'verguenza',     def: 'Querer esconderte o desaparecer cuando crees que todos te están mirando o juzgando.' },
  { word: 'Independencia', conceptId: 'independencia', def: 'Poder hacer cosas por tu cuenta, sin necesitar que alguien te lo diga o te ayude siempre.' },
  { word: 'Generosidad',   conceptId: 'generosidad',   def: 'Dar algo de ti (tiempo, ayuda, atención) sin esperar que te devuelvan nada a cambio.' },
  { word: 'Comunicación',  conceptId: 'comunicacion',  def: 'Decir lo que sientes o necesitas con palabras claras, y también escuchar de verdad lo que dicen los demás.' },
];

// ── Reto diario ────────────────────────────────────────────
// Rota cada día basado en el día del año. Usa solo CONCEPTS.
function getDailyChallenge() {
  const now     = new Date();
  const startOf = new Date(now.getFullYear(), 0, 1);
  const dayNum  = Math.floor((now - startOf) / (24 * 3600 * 1000));
  return CONCEPTS[dayNum % CONCEPTS.length];
}
