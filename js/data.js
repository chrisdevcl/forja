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
    why: 'Cuando aprendes a esperar sin enojarte, puedes lograr cosas más grandes y sentirte tranquilo/a por dentro. Las personas pacientes cometen menos errores porque piensan antes de actuar.',
    examples: [
      { icon: '🚲', text: 'Aprender a andar en bicicleta. No sale a la primera, ¡y eso está bien!' },
      { icon: '🍰', text: 'Esperar que el pastel se hornee en lugar de abrirlo antes de tiempo.' },
      { icon: '🎮', text: 'Esperar tu turno cuando juegas con amigos y amigas.' },
    ],
    exercise: { title: 'La Respiración Tortuga', steps: [
      { text: 'Cuando quieras algo YA y te frustres, para completamente.' },
      { text: 'Respira despacio 4 veces, como una tortuga que va sin apuro.' },
      { text: 'Cuenta hasta 10 en tu cabeza antes de reaccionar.' },
      { text: 'Ahora actúa.', input: { placeholder: '¿Cómo te sentiste después de esperar?' } },
    ]},
  },
  {
    id: 'autocontrol', emoji: '🧘', title: 'Autocontrol', color: '#0F766E', category: 'mente',
    tagline: 'Tú decides cómo reaccionar',
    why: 'Las emociones fuertes como el enojo o la frustración son normales, pero actuar sin pensar puede empeorar las cosas. El autocontrol no es esconder lo que sientes, sino elegir cómo expresarlo sin hacerte daño ni hacérselo a otros.',
    examples: [
      { icon: '😤', text: 'Sentir rabia porque perdiste un juego y respirar antes de reaccionar.' },
      { icon: '🍫', text: 'Tener ganas de comer toda la torta y decidir esperar tu turno.' },
      { icon: '📱', text: 'Querer seguir en el celular y parar cuando acordaste que pararías.' },
    ],
    exercise: { title: 'El Semáforo Interior', steps: [
      { text: 'Piensa en una situación reciente donde quisiste reaccionar mal.', input: { placeholder: '¿Qué pasó?' } },
      { text: 'Rojo: describe qué sentiste en ese momento.', input: { placeholder: '¿Qué emoción tenías?' } },
      { text: 'Amarillo: ¿qué podrías haber hecho para pausar y pensar antes de actuar?' },
      { text: 'Verde: ¿cómo podrías reaccionar diferente la próxima vez?', input: { placeholder: 'Mi plan para la próxima vez...' } },
    ]},
  },
  {
    id: 'resiliencia', emoji: '🌊', title: 'Resiliencia', color: '#0EA5E9', category: 'mente',
    tagline: 'Caerse no es el final',
    why: 'Todas las personas se equivocan, se caen y tienen días difíciles. La resiliencia es la capacidad de levantarse, sacudirse y seguir adelante. No significa no sentirse mal, sino no quedarse atascado/a en eso.',
    examples: [
      { icon: '🏅', text: 'No quedar seleccionado/a en un equipo y seguir entrenando igual.' },
      { icon: '📉', text: 'Sacar una mala nota y decidir estudiar diferente la próxima vez.' },
      { icon: '💬', text: 'Tener un problema con un amigo/a y buscar la forma de hablarlo.' },
    ],
    exercise: { title: 'El Rebote', steps: [
      { text: 'Piensa en algo que salió mal recientemente.', input: { placeholder: '¿Qué pasó?' } },
      { text: 'Date permiso para sentirte mal un momento. Escribe cómo te sentiste.', input: { placeholder: 'Me sentí...' } },
      { text: '¿Qué puedes aprender de lo que pasó?', input: { placeholder: 'Aprendí que...' } },
      { text: 'Escribe UNA cosa que harías diferente la próxima vez.', input: { placeholder: 'La próxima vez voy a...' } },
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
      { text: 'Párate frente a un espejo.' },
      { text: 'Escribe UNA cosa que hiciste bien ayer, aunque sea pequeña.', input: { placeholder: 'Ayer hice bien...' } },
      { text: 'Dítela en voz alta mirándote al espejo.' },
      { text: '¿Cómo te sentiste al decirlo?', input: { placeholder: 'Me sentí...' } },
    ]},
  },
  {
    id: 'curiosidad', emoji: '🔭', title: 'Curiosidad', color: '#10B981', category: 'mente',
    tagline: 'Las preguntas abren puertas',
    why: 'Quienes hacen preguntas aprenden más y encuentran soluciones que otros no ven. La curiosidad es el motor del aprendizaje: te lleva a descubrir cosas increíbles sobre el mundo y sobre ti mismo/a.',
    examples: [
      { icon: '🐛', text: 'Ver un insecto en el patio y querer saber cómo se llama y qué come.' },
      { icon: '🌍', text: 'Escuchar una palabra nueva y buscar qué significa.' },
      { icon: '🧪', text: 'Preguntarse por qué el cielo es azul o cómo funcionan los aviones.' },
    ],
    exercise: { title: 'La Pregunta del Día', steps: [
      { text: 'Elige UNA cosa que no entiendes del todo.', input: { placeholder: 'Me pregunto por qué / cómo...' } },
      { text: 'Busca la respuesta: en un libro, preguntando a alguien, o investigando.' },
      { text: 'Escribe lo que descubriste.', input: { placeholder: 'Descubrí que...' } },
      { text: 'Cuéntaselo a alguien hoy.' },
    ]},
  },
  {
    id: 'creatividad', emoji: '🎨', title: 'Creatividad', color: '#F43F5E', category: 'mente',
    tagline: 'Ver soluciones donde otros no las ven',
    why: 'La creatividad no es solo dibujar o hacer música. Es la capacidad de pensar de forma diferente y encontrar soluciones nuevas a los problemas. Las personas creativas se adaptan mejor a los cambios.',
    examples: [
      { icon: '🎁', text: 'No tener dinero para un regalo y crear algo hecho a mano con mucho cariño.' },
      { icon: '🌧️', text: 'Un día de lluvia que arruina tus planes y inventar un juego nuevo en casa.' },
      { icon: '🧩', text: 'Buscar una forma distinta de resolver un problema de matemáticas.' },
    ],
    exercise: { title: 'El Juego de los ¿Y si...?', steps: [
      { text: 'Piensa en un problema o situación que tienes ahora.', input: { placeholder: 'El problema es...' } },
      { text: 'Escribe 3 ideas para resolverlo de forma diferente, aunque parezcan locas.', input: { placeholder: 'Idea 1: ...' } },
      { text: 'Elige la más interesante y escribe cómo la aplicarías.', input: { placeholder: 'La aplicaría así...' } },
      { text: 'Intenta aplicarla esta semana.' },
    ]},
  },

  // ── RELACIONES ───────────────────────────────────────────
  {
    id: 'empatia', emoji: '💛', title: 'Empatía', color: '#EC4899', category: 'relaciones',
    tagline: 'Ver el mundo con los ojos de otra persona',
    why: 'Cuando entiendes cómo se sienten los demás, puedes ayudarlos mejor y hacer amistades más profundas. La empatía es como un superpoder que hace que quienes te rodean se sientan menos solos.',
    examples: [
      { icon: '😢', text: 'Notar que alguien está triste y preguntarle cómo está, sin esperar que te lo pida.' },
      { icon: '🪑', text: 'Ceder tu lugar a alguien mayor o que lo necesite más.' },
      { icon: '🤐', text: 'No reírte cuando alguien se equivoca o le pasa algo vergonzoso.' },
    ],
    exercise: { title: 'Los Zapatos de Otra Persona', steps: [
      { text: 'Piensa en alguien que tuvo un día difícil.', input: { placeholder: '¿Quién es y qué le pasó?' } },
      { text: 'Imagina que eres esa persona. ¿Qué estarías sintiendo?', input: { placeholder: 'Creo que estaría sintiendo...' } },
      { text: 'Piensa en UNA cosa que podrías hacer o decirle para ayudarla.', input: { placeholder: 'Podría...' } },
      { text: 'Hazlo hoy si puedes.' },
    ]},
  },
  {
    id: 'comunicacion', emoji: '💬', title: 'Comunicación', color: '#D97706', category: 'relaciones',
    tagline: 'Decir lo que piensas y escuchar de verdad',
    why: 'Saber expresar lo que sientes y escuchar de verdad a los demás evita muchos malentendidos y conflictos. Una buena comunicación ayuda a resolver problemas, hacer amistades y pedir ayuda cuando la necesitas.',
    examples: [
      { icon: '😟', text: 'Decirle a un/a amigo/a que algo que hizo te molestó, en vez de quedarte callado/a.' },
      { icon: '👂', text: 'Escuchar sin interrumpir cuando alguien te está contando algo importante.' },
      { icon: '🙋', text: 'Pedir ayuda cuando no entiendes algo, en vez de hacer como que sí.' },
    ],
    exercise: { title: 'Habla con Yo', steps: [
      { text: 'Piensa en algo difícil que necesitas decirle a alguien.', input: { placeholder: '¿A quién y sobre qué?' } },
      { text: "Escribe lo que quieres decir empezando con 'Yo siento...' o 'Yo necesito...'", input: { placeholder: 'Yo siento / necesito...' } },
      { text: 'Léelo en voz alta. ¿Suena como tú?' },
      { text: 'Díselo a esa persona esta semana.' },
    ]},
  },
  {
    id: 'trabajo-en-equipo', emoji: '🤝', title: 'Trabajo en equipo', color: '#2563EB', category: 'relaciones',
    tagline: 'Juntos llegamos más lejos',
    why: 'Hay cosas que no puedes hacer solo/a, y está bien. Saber trabajar con otras personas, escuchar sus ideas y aportar las tuyas es una habilidad clave en el colegio, los deportes y la vida entera.',
    examples: [
      { icon: '🏫', text: 'Repartir tareas en un trabajo grupal para que cada uno/a aporte algo.' },
      { icon: '⚽', text: 'Pasar la pelota aunque quieras hacer tú el gol, porque otro/a tiene mejor posición.' },
      { icon: '🎭', text: 'Ceder en una idea tuya cuando la del grupo es mejor para todos.' },
    ],
    exercise: { title: 'El Mapa de Mi Equipo', steps: [
      { text: 'Elige un grupo del que formas parte.', input: { placeholder: '¿Cuál grupo? (familia, curso, equipo...)' } },
      { text: 'Escribe en qué es buena cada persona de ese grupo.', input: { placeholder: 'Cada persona aporta...' } },
      { text: 'Piensa en algo donde podrían ayudarse entre todos esta semana.', input: { placeholder: 'Podríamos...' } },
      { text: 'Propónselo al grupo hoy.' },
    ]},
  },
  {
    id: 'generosidad', emoji: '🎁', title: 'Generosidad', color: '#7C3AED', category: 'relaciones',
    tagline: 'Dar sin esperar nada a cambio',
    why: 'Cuando das algo de ti —tiempo, ayuda o atención— sin esperar que te devuelvan nada, las dos personas se sienten bien. La generosidad crea lazos fuertes y hace el mundo más amable.',
    examples: [
      { icon: '🍎', text: 'Compartir tu merienda con alguien que olvidó la suya.' },
      { icon: '⏱️', text: 'Ayudar a un compañero/a a entender algo que tú ya sabes.' },
      { icon: '💌', text: 'Hacer un dibujo o carta para alegrarle el día a alguien sin ninguna razón especial.' },
    ],
    exercise: { title: 'El Gesto Secreto', steps: [
      { text: 'Decide UN gesto generoso que harás sin decirle a nadie que fuiste tú.', input: { placeholder: '¿Qué harás y para quién?' } },
      { text: 'Hazlo sin esperar un "gracias".' },
      { text: '¿Cómo te sentiste al hacerlo?', input: { placeholder: 'Me sentí...' } },
      { text: '¿Lo harías de nuevo? ¿Por qué?', input: { placeholder: 'Creo que...' } },
    ]},
  },
  {
    id: 'honestidad', emoji: '🪞', title: 'Honestidad', color: '#F97316', category: 'relaciones',
    tagline: 'La verdad te hace libre',
    why: 'Cuando eres honesto/a, las personas saben que pueden creer en ti, y tú puedes mirarte al espejo con orgullo. Decir la verdad a veces cuesta, pero siempre vale la pena.',
    examples: [
      { icon: '📖', text: 'Decir que no hiciste la tarea en vez de inventar una excusa.' },
      { icon: '💰', text: 'Devolver el vuelto o algo que encontraste y no es tuyo.' },
      { icon: '🤝', text: 'Reconocer cuando te equivocaste, aunque duela un poco.' },
    ],
    exercise: { title: 'La Prueba del Espejo', steps: [
      { text: 'Piensa en algo que no has dicho con total honestidad recientemente.', input: { placeholder: '¿Qué fue?' } },
      { text: 'Escribe cómo sería decirlo honestamente.', input: { placeholder: 'La verdad es...' } },
      { text: 'Hazte tres preguntas: ¿Es verdad? ¿Es necesario? ¿Ayuda a alguien?' },
      { text: 'Si las tres respuestas son sí, dilo esta semana.' },
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
    exercise: { title: 'Mis Superpoderes de Esta Semana', steps: [
      { text: 'Piensa en 3 cosas que normalmente pides ayuda para hacer.' },
      { text: 'Elige UNA que harás por tu cuenta esta semana.', input: { placeholder: 'Esta semana haré solo/a...' } },
      { text: 'Hazla sin pedir ayuda.' },
      { text: '¿Cómo te sentiste al lograrlo?', input: { placeholder: 'Me sentí...' } },
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
    exercise: { title: 'Mi Compromiso de la Semana', steps: [
      { text: 'Elige UNA responsabilidad nueva que quieras asumir esta semana.', input: { placeholder: 'Mi responsabilidad será...' } },
      { text: 'Dísela a alguien de tu familia para que lo sepa.' },
      { text: 'Cúmplela cada día sin que te lo recuerden.' },
      { text: '¿La cumpliste? ¿Cómo te sentiste?', input: { placeholder: 'Lo que aprendí fue...' } },
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
      { text: 'Elige algo difícil que estás intentando lograr.', input: { placeholder: 'Estoy intentando...' } },
      { text: 'Inténtalo hoy aunque cueste.' },
      { text: '¿Qué salió bien y qué fue difícil?', input: { placeholder: 'Salió bien... / Fue difícil...' } },
      { text: '¿Qué intentarás diferente la próxima vez?', input: { placeholder: 'La próxima vez probaré...' } },
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
    exercise: { title: 'Un Pequeño Acto Valiente', steps: [
      { text: 'Piensa en algo que quieres hacer pero que te da miedo o vergüenza.', input: { placeholder: 'Quiero... pero me da miedo...' } },
      { text: 'Decide hacerlo esta semana, solo una vez.' },
      { text: '¿Cómo te sentiste antes de hacerlo?', input: { placeholder: 'Antes me sentía...' } },
      { text: '¿Cómo te sentiste después?', input: { placeholder: 'Después me sentí...' } },
    ]},
  },
  {
    id: 'gratitud', emoji: '🌈', title: 'Gratitud', color: '#06B6D4', category: 'crecimiento',
    tagline: 'Ver lo bueno que ya tienes',
    why: 'Notar las cosas buenas que tienes te hace más feliz. No porque sean perfectas, sino porque aprendes a verlas. Las personas agradecidas tienen más energía y hacen que los demás se sientan bien.',
    examples: [
      { icon: '🙏', text: 'Dar las gracias de corazón, mirando a los ojos, no solo de rutina.' },
      { icon: '📄', text: 'Escribirle una nota a alguien que te ayudó, aunque sea en papel.' },
      { icon: '☀️', text: 'Notar y apreciar un día soleado o una comida rica.' },
    ],
    exercise: { title: 'Mis 3 Cosas Buenas', steps: [
      { text: 'Escribe 3 cosas buenas que pasaron hoy, aunque sean pequeñas.', input: { placeholder: '1. ...\n2. ...\n3. ...' } },
      { text: 'Elige una y piensa: ¿a quién podrías agradecérsela?' },
      { text: 'Dísela o escríbesela hoy.', input: { placeholder: '¿A quién y qué le dijiste o escribiste?' } },
      { text: '¿Cómo reaccionó esa persona?', input: { placeholder: 'Reaccionó...' } },
    ]},
  },
];
