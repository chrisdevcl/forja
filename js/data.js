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
    why: 'Cuando aprendes a esperar aunque sientas impaciencia o frustración, puedes lograr cosas más grandes y sentirte tranquilo/a por dentro. Las personas pacientes no dejan de sentir, pero piensan antes de reaccionar.',
    examples: [
      { icon: '🚲', text: 'Aprender a andar en bicicleta. No sale a la primera, ¡y eso está bien!' },
      { icon: '🍰', text: 'Esperar que el pastel se hornee en lugar de abrirlo antes de tiempo.' },
      { icon: '🎮', text: 'Esperar tu turno cuando juegas con amigos y amigas.' },
    ],
    exercise: { title: 'La Respiración Tortuga', steps: [
      { text: 'Cuando quieras algo YA y te frustres, para completamente.' },
      { text: 'Respira despacio 4 veces, como una tortuga que va sin apuro.' },
      { text: 'Cuenta hasta 10 en tu cabeza y solo entonces responde o haz lo que necesitas.' },
      { text: 'Después de esperar: ¿cómo te sentiste al actuar con calma?', input: { placeholder: 'Me sentí...' } },
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
      { text: 'Rojo: ¿cómo reaccionaste o quisiste reaccionar en ese momento?', input: { placeholder: '¿Qué hiciste o estuviste a punto de hacer?' } },
      { text: 'Amarillo: ¿qué podrías haber hecho para pausar antes de reaccionar?', input: { placeholder: 'Podría haber...' } },
      { text: 'Verde: ¿cómo vas a reaccionar diferente la próxima vez?', input: { placeholder: 'Mi plan es...' } },
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
      { text: 'Di en voz alta lo que escribiste, mientras te miras al espejo.' },
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
      { text: 'Escribe 3 ideas para resolverlo de forma diferente, aunque parezcan locas.', input: { placeholder: 'Idea 1: ...\nIdea 2: ...\nIdea 3: ...' } },
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
      { text: 'Léelo en voz alta. ¿Usarías estas palabras cuando hablas normalmente?' },
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
      { text: 'Escribe en qué es buena cada persona de ese grupo.', input: { placeholder: 'Nombre: aporta...\nNombre: aporta...\nNombre: aporta...' } },
      { text: 'Piensa en algo donde podrían ayudarse entre todos esta semana.', input: { placeholder: 'Podríamos...' } },
      { text: 'Hoy cuéntale tu idea al grupo y pregúntales si quieren hacerlo juntos.' },
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
      { text: 'Hazte tres preguntas: ¿Es verdad? ¿Es necesario? ¿Ayuda a alguien?', input: { placeholder: 'Las tres respuestas son sí / La que no cumple es...' } },
      { text: 'Si las tres respuestas son sí, esta semana dile la verdad a esa persona.' },
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
      { text: 'Piensa en 3 cosas que normalmente pides ayuda para hacer.', input: { placeholder: '1. ...\n2. ...\n3. ...' } },
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
      { text: '¿La cumpliste todos los días? Escribe cómo fue la experiencia.', input: { placeholder: 'La cumplí / No la cumplí porque... Lo que aprendí fue...' } },
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
      { text: 'Decide cuándo exactamente lo harás esta semana.', input: { placeholder: 'Lo haré el día...' } },
      { text: '¿Cómo te sientes ANTES de hacerlo? Rellena esto justo antes de actuar.', input: { placeholder: 'Ahora mismo siento...' } },
      { text: '¿Qué pasó y cómo te sentiste DESPUÉS? Vuelve aquí una vez que lo hayas hecho.', input: { placeholder: 'Pasó... / Me sentí...' } },
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
      { text: 'Elige una y escribe: ¿a quién podrías agradecérsela?', input: { placeholder: 'Se la agradezco a...' } },
      { text: 'Dísela o escríbesela hoy.', input: { placeholder: '¿A quién y qué le dijiste o escribiste?' } },
      { text: '¿Cómo reaccionó esa persona?', input: { placeholder: 'Reaccionó...' } },
    ]},
  },
    {
        id: 'compartir', emoji: '🤲', title: 'Compartir', color: '#EC4899', category: 'relaciones',
        tagline: 'Lo que das vuelve multiplicado',
        why: 'Compartir no significa quedarte sin nada. Significa que valoras la relación más que el objeto. Las personas que comparten construyen amistades más fuertes y se sienten más felices porque hacen sentir bien a otros.',
        examples: [
            { icon: '🍕', text: 'Ofrecer parte de tu merienda a alguien sin que te lo pida.' },
            { icon: '🎮', text: 'Ceder el control o el turno aunque estés ganando.' },
            { icon: '📚', text: 'Prestar algo tuyo que sabes que le va a gustar a alguien.' },
        ],
        exercise: { title: 'El Regalo Sin Envoltura', steps: [
                { text: 'Piensa en algo tuyo que podrías compartir hoy con alguien.', input: { placeholder: '¿Qué puedes compartir y con quién?' } },
                { text: 'Compártelo sin esperar que te lo devuelvan ni que te agradezcan.' },
                { text: '¿Cómo reaccionó la otra persona?', input: { placeholder: 'Reaccionó...' } },
                { text: '¿Cómo te sentiste tú al hacerlo?', input: { placeholder: 'Me sentí...' } },
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
                { text: '¿Hubo alguna vez que no lo trataste con respeto? Sé honesto/a.', input: { placeholder: 'Lo que pasó fue...' } },
                { text: '¿Qué podrías hacer diferente si vuelve a pasar algo parecido?', input: { placeholder: 'La próxima vez podría...' } },
                { text: 'Hoy haz algo concreto para mostrarle respeto a esa persona.' },
            ]},
    },
    {
        id: 'amabilidad', emoji: '🌸', title: 'Amabilidad', color: '#F472B6', category: 'relaciones',
        tagline: 'Los gestos pequeños importan mucho',
        why: 'Ser amable no cuesta nada y puede cambiar el día de alguien. Una palabra, una sonrisa o una pequeña ayuda pueden transformar completamente cómo se siente una persona. La amabilidad también te hace sentir bien a ti.',
        examples: [
            { icon: '😊', text: 'Saludar con una sonrisa aunque tengas un día difícil.' },
            { icon: '🚪', text: 'Ceder el paso o ayudar a alguien sin esperar nada a cambio.' },
            { icon: '✏️', text: 'Escribirle a alguien "espero que estés bien" cuando sabes que lo está pasando mal.' },
        ],
        exercise: { title: 'El Día Amable', steps: [
                { text: 'Hoy proponte hacer 3 gestos amables con personas distintas.' },
                { text: '¿Qué hiciste? Describe los tres gestos.', input: { placeholder: 'Gesto 1: ...\nGesto 2: ...\nGesto 3: ...' } },
                { text: '¿Cuál fue el que más te costó hacer?', input: { placeholder: 'El más difícil fue...' } },
                { text: '¿Cómo te sentiste al final del día?', input: { placeholder: 'Al terminar el día me sentí...' } },
            ]},
    },
    {
        id: 'perdon', emoji: '🕊️', title: 'Perdón', color: '#A78BFA', category: 'relaciones',
        tagline: 'Soltar lo que duele te libera',
        why: 'Perdonar no es decir que lo que pasó estuvo bien. Es decidir no cargar con ese peso. Guardar rencor cansa y ocupa espacio. El perdón, tanto pedirlo como darlo, es un acto de fuerza, no de debilidad.',
        examples: [
            { icon: '😔', text: 'Decir "lo siento" de verdad cuando hiciste algo que lastimó a alguien.' },
            { icon: '🤝', text: 'Hacer las paces con un amigo/a después de una pelea, aunque haya costado.' },
            { icon: '💭', text: 'Decidir no seguir enojado/a con alguien aunque no te hayan pedido perdón.' },
        ],
        exercise: { title: 'La Carta que Libera', steps: [
                { text: 'Piensa en alguien con quien quedó algo pendiente: una disculpa que no diste o un enojo que sigues cargando.', input: { placeholder: '¿Qué pasó y con quién?' } },
                { text: 'Escribe lo que sientes sin filtros (esta parte es solo para ti).', input: { placeholder: 'Lo que siento es...' } },
                { text: '¿Qué necesitarías para poder soltar ese peso?', input: { placeholder: 'Para perdonar o pedir perdón necesitaría...' } },
                { text: 'Da un pequeño paso esta semana: un mensaje, una conversación o simplemente decidir soltarlo internamente.' },
            ]},
    },
    {
        id: 'autocuidado', emoji: '🌿', title: 'Autocuidado', color: '#34D399', category: 'mente',
        tagline: 'Para cuidar a otros, primero cuídate',
        why: 'Cuidarte no es egoísta, es necesario. Dormir bien, comer, descansar y hacer cosas que te gustan recarga tu energía. Una persona que se cuida tiene más para dar a los demás.',
        examples: [
            { icon: '😴', text: 'Dormir las horas que necesitas aunque quieras seguir viendo algo.' },
            { icon: '🏃', text: 'Moverse y hacer algo físico cada día, aunque sea caminar un rato.' },
            { icon: '📴', text: 'Darte un tiempo sin pantallas para hacer algo que genuinamente disfrutes.' },
        ],
        exercise: { title: 'Mi Carga y Mi Recarga', steps: [
                { text: '¿Qué cosas te agotan durante la semana?', input: { placeholder: 'Me agota...' } },
                { text: '¿Qué cosas te recargan y te hacen sentir bien?', input: { placeholder: 'Me recarga...' } },
                { text: 'Elige UNA cosa que te recarga y comprométete a hacerla esta semana.', input: { placeholder: 'Esta semana voy a...' } },
                { text: '¿La hiciste? ¿Cómo te sentiste después?', input: { placeholder: 'La hice / No la hice porque... Me sentí...' } },
            ]},
    },
    {
        id: 'concentracion', emoji: '🎯', title: 'Concentración', color: '#0891B2', category: 'mente',
        tagline: 'Una cosa a la vez, bien hecha',
        why: 'Vivimos rodeados de distracciones. Saber enfocarse en una sola cosa durante un rato es una habilidad cada vez más difícil y más valiosa. Cuando te concentras, haces mejor las cosas y terminas más rápido.',
        examples: [
            { icon: '📖', text: 'Leer o estudiar sin el celular cerca, aunque sea 20 minutos.' },
            { icon: '🎨', text: 'Trabajar en algo creativo sin interrumpirte para ver notificaciones.' },
            { icon: '🍽️', text: 'Comer sin pantalla, prestando atención a la comida y a quien está contigo.' },
        ],
        exercise: { title: 'El Bloque Sin Distracciones', steps: [
                { text: '¿Cuál es tu distracción más difícil de ignorar?', input: { placeholder: 'Mi mayor distracción es...' } },
                { text: 'Elige una tarea y pon un cronómetro en 15 minutos. Apaga o aleja todo lo que distrae.' },
                { text: '¿Pudiste mantenerte enfocado/a los 15 minutos? ¿Qué pasó?', input: { placeholder: 'Lo que pasó fue...' } },
                { text: 'Repítelo mañana sumando 5 minutos más. ¿Cuánto aguantaste?', input: { placeholder: 'Aguanté... minutos y...' } },
            ]},
    },
    {
        id: 'aceptacion', emoji: '☀️', title: 'Aceptación', color: '#D97706', category: 'mente',
        tagline: 'No todo se puede cambiar, y está bien',
        why: 'Hay cosas que podemos cambiar y cosas que no. Saber cuál es cuál ahorra mucha energía y frustración. Aceptar no es resignarse: es elegir dónde poner tu esfuerzo para que realmente sirva de algo.',
        examples: [
            { icon: '🌧️', text: 'Que llueva el día de tus planes: no puedes cambiarlo, pero sí qué haces con el tiempo libre.' },
            { icon: '📏', text: 'Tener un cuerpo o características que no elegiste, pero que son tuyas.' },
            { icon: '👥', text: 'Que alguien a tu alrededor sea diferente a como quisieras que fuera.' },
        ],
        exercise: { title: 'Lo que Puedo y Lo que No', steps: [
                { text: 'Piensa en algo que te preocupa o frustra últimamente.', input: { placeholder: 'Me frustra o preocupa...' } },
                { text: '¿Qué parte de eso SÍ puedes cambiar o hacer diferente?', input: { placeholder: 'Lo que sí puedo hacer es...' } },
                { text: '¿Qué parte NO puedes cambiar?', input: { placeholder: 'Lo que no puedo cambiar es...' } },
                { text: '¿En qué parte vas a enfocar tu energía esta semana?', input: { placeholder: 'Voy a enfocarme en...' } },
            ]},
    },
    {
        id: 'humildad', emoji: '🌾', title: 'Humildad', color: '#92400E', category: 'crecimiento',
        tagline: 'Siempre hay algo nuevo por aprender',
        why: 'Las personas humildes no se creen menos que los demás, sino que reconocen que siempre hay algo por aprender. La humildad te abre puertas que el orgullo cierra: te permite pedir ayuda, aceptar consejos y mejorar.',
        examples: [
            { icon: '🏆', text: 'Ganar un juego o prueba y no presumirlo delante de quien perdió.' },
            { icon: '❓', text: 'Decir "no sé" cuando no sabes algo, en vez de inventar una respuesta.' },
            { icon: '👂', text: 'Escuchar la opinión de alguien más joven porque igual puede tener razón.' },
        ],
        exercise: { title: 'El Mapa de Lo que No Sé', steps: [
                { text: 'Piensa en algo que haces bien. ¿Hay alguien que lo hace mejor que tú?', input: { placeholder: 'Lo que hago bien es... / Lo hace mejor...' } },
                { text: '¿Qué podrías aprender de esa persona si le preguntaras?', input: { placeholder: 'Podría aprender...' } },
                { text: 'Esta semana pídele a alguien un consejo sobre algo en lo que quieres mejorar.', input: { placeholder: '¿A quién le pediste consejo y sobre qué?' } },
                { text: '¿Qué aprendiste de esa conversación?', input: { placeholder: 'Aprendí que...' } },
            ]},
    },
    {
        id: 'organizacion', emoji: '🗂️', title: 'Organización', color: '#B45309', category: 'crecimiento',
        tagline: 'Un lugar para cada cosa',
        why: 'Cuando tienes tus cosas y tu tiempo organizados, gastas menos energía buscando y puedes concentrarte en lo que importa. La organización no es perfección: es tener un sistema que funcione para ti.',
        examples: [
            { icon: '🎒', text: 'Preparar la mochila la noche anterior para no salir apurado/a.' },
            { icon: '📅', text: 'Saber cuándo tienes pruebas o actividades importantes con anticipación.' },
            { icon: '🛏️', text: 'Tener tu espacio ordenado para encontrar las cosas cuando las necesitas.' },
        ],
        exercise: { title: 'El Sistema que Me Funciona', steps: [
                { text: '¿Qué parte de tu vida está más desorganizada ahora?', input: { placeholder: 'Lo más desorganizado es...' } },
                { text: 'Elige UNA cosa pequeña que puedas organizar hoy (una mochila, carpeta o cajón).', input: { placeholder: 'Voy a organizar...' } },
                { text: 'Hazlo. ¿Cuánto tiempo te tomó?', input: { placeholder: 'Me tomó... / Lo que hice fue...' } },
                { text: '¿Cómo te sentiste después de haberlo hecho?', input: { placeholder: 'Me sentí...' } },
            ]},
    },
];

const NOCIVOS = [
  {
    id: 'envidia', emoji: '😒', title: 'Envidia', color: '#78716C',
    tagline: '¿Por qué me molesta que a otros les vaya bien?',
    why: 'La envidia hace que el éxito de otros te genere rabia en vez de alegría. Te mantiene enfocado/a en lo que no tienes y te impide ver lo que sí tienes. Cuanto más la alimentas, más difícil se vuelve celebrar lo bueno que le pasa a quienes te rodean, y eso daña las amistades.',
    examples: [
      { icon: '📝', text: 'Ver que un compañero/a sacó mejor nota y sentir rabia en vez de alegría por él o ella.' },
      { icon: '👟', text: 'Querer exactamente lo que tiene otro/a sin valorar lo que ya tienes tú.' },
      { icon: '🎉', text: 'Que te cueste celebrar los logros de tus amigos como si fueran propios.' },
    ],
    exercise: { title: 'De la Envidia a la Motivación', steps: [
      { text: 'Piensa en algo que tiene otra persona y que te genera envidia.', input: { placeholder: '¿Qué es y de quién?' } },
      { text: '¿Qué te dice eso sobre algo que tú quieres o valoras?', input: { placeholder: 'Creo que en realidad quiero...' } },
      { text: '¿Hay algo que puedas hacer para acercarte a lo que quieres?', input: { placeholder: 'Podría...' } },
      { text: 'Hoy felicita o reconoce a esa persona por lo que logró, aunque cueste.' },
    ]},
  },
  {
    id: 'egoismo', emoji: '🫙', title: 'Egoísmo', color: '#78716C',
    tagline: '¿Estoy pensando solo en mí?',
    why: 'El egoísmo pone tus ganas siempre por encima de las de los demás. Cuando una persona actúa así de forma constante, las relaciones se rompen porque nadie quiere estar cerca de alguien que nunca considera a los otros. Deja a quienes te rodean sintiéndose ignorados e irrelevantes.',
    examples: [
      { icon: '🎮', text: 'Querer siempre elegir el juego, la película o el lugar, sin preguntar a los demás.' },
      { icon: '🍰', text: 'Tomar la parte más grande sin pensar si otros también quieren.' },
      { icon: '🙉', text: 'Hablar mucho de uno mismo sin preguntar cómo está la otra persona.' },
    ],
    exercise: { title: 'El Turno de los Demás', steps: [
      { text: '¿Hubo alguna situación reciente donde pusiste tus ganas por encima de las de todos?', input: { placeholder: '¿Qué pasó?' } },
      { text: '¿Cómo crees que se sintió la otra persona?', input: { placeholder: 'Creo que se sintió...' } },
      { text: 'Esta semana, en una situación donde normalmente elegirías tú, deja que otro/a elija.', input: { placeholder: '¿En qué situación lo harás?' } },
      { text: '¿Cómo te sentiste al hacerlo?', input: { placeholder: 'Me sentí...' } },
    ]},
  },
  {
    id: 'agresividad', emoji: '💢', title: 'Agresividad', color: '#78716C',
    tagline: '¿Reacciono de formas que lastiman?',
    why: 'La agresividad daña a las personas que la reciben y destruye la confianza que habían depositado en ti. Golpear, gritar o insultar no resuelve nada: empeora la situación y aleja a quienes te importan. Las emociones fuertes son normales, pero reaccionar con agresividad no es una forma aceptable de expresarlas.',
    examples: [
      { icon: '😤', text: 'Gritar o insultar cuando algo no sale como querías.' },
      { icon: '👊', text: 'Empujar, golpear o romper cosas cuando estás frustrado/a.' },
      { icon: '💬', text: 'Decir cosas hirientes en el momento de rabia que después lamentas.' },
    ],
    exercise: { title: 'La Válvula de Escape', steps: [
      { text: '¿Cuándo fue la última vez que reaccionaste de forma agresiva? ¿Qué lo provocó?', input: { placeholder: '¿Qué pasó y cómo reaccioné?' } },
      { text: '¿Qué emoción había detrás de esa reacción?', input: { placeholder: 'Lo que sentía en realidad era...' } },
      { text: 'Piensa en 2 cosas que podrías hacer en vez de reaccionar agresivamente la próxima vez.', input: { placeholder: 'Podría... o podría...' } },
      { text: 'Practica una de esas alternativas esta semana cuando sientas que se acerca esa emoción.' },
    ]},
  },
  {
    id: 'mentira', emoji: '🎭', title: 'Mentira', color: '#78716C',
    tagline: '¿Digo lo que no es verdad?',
    why: 'Mentir nunca está bien, aunque en el momento parezca la salida más fácil. Cuando mientes, las personas dejan de saber qué creer de lo que dices, y recuperar esa confianza es muy difícil. Si quieres evitar una situación incómoda, la alternativa siempre es no decir nada, cambiar el tema o decir "prefiero no responder". El silencio siempre es mejor que una mentira.',
    examples: [
      { icon: '📚', text: 'Decir que hiciste la tarea cuando no la hiciste, en vez de reconocerlo.' },
      { icon: '🤕', text: 'Inventar excusas o culpar a otros cuando eres tú quien se equivocó.' },
      { icon: '🗣️', text: 'Cambiar los detalles de lo que pasó para quedar mejor parado/a.' },
    ],
    exercise: { title: 'La Mejor Alternativa', steps: [
      { text: '¿Hubo alguna vez que mentiste para evitar algo? ¿Qué pasó después?', input: { placeholder: '¿Qué mentiste y qué consecuencias tuvo?' } },
      { text: '¿Qué podrías haber dicho o hecho en vez de mentir? (Silencio, "prefiero no responder", o la verdad directa.)', input: { placeholder: 'La mejor alternativa habría sido...' } },
      { text: 'Piensa en algo difícil que tienes pendiente de decir. ¿Hay una forma honesta de manejarlo sin mentir?', input: { placeholder: 'Lo que podría hacer es...' } },
      { text: 'Da un paso esta semana hacia esa alternativa honesta.' },
    ]},
  },
  {
    id: 'exclusion', emoji: '🚪', title: 'Exclusión', color: '#78716C',
    tagline: '¿Dejo a alguien fuera a propósito?',
    why: 'Excluir a alguien es una forma de hacerle daño sin necesidad de golpear. Quien lo sufre puede sentirse invisible, indigno e incapaz de encajar en ningún lugar. Ese daño puede durar mucho tiempo. Dejar a alguien fuera a propósito, aunque parezca algo pequeño, tiene consecuencias reales en quien lo recibe.',
    examples: [
      { icon: '👥', text: 'Decirle a alguien "este grupo es solo para nosotros, tú no puedes estar".' },
      { icon: '🤫', text: 'Hablar en secreto o reírse de algo frente a alguien para que se sienta fuera.' },
      { icon: '📵', text: 'Ignorar a alguien en el grupo de mensajes o en el recreo como si no existiera.' },
    ],
    exercise: { title: 'El Lugar de Quien Queda Afuera', steps: [
      { text: '¿Hubo alguna vez que excluiste a alguien o participaste en excluirlo?', input: { placeholder: '¿Qué pasó?' } },
      { text: 'Imagínate en el lugar de esa persona. ¿Cómo te habría sentido?', input: { placeholder: 'Me habría sentido...' } },
      { text: '¿Hay alguien en tu entorno que quede fuera seguido? ¿Qué podrías hacer?', input: { placeholder: 'Podría...' } },
      { text: 'Esta semana incluye activamente a alguien que normalmente no está en el grupo.' },
    ]},
  },
  {
    id: 'rencor', emoji: '🪨', title: 'Rencor', color: '#78716C',
    tagline: '¿Guardo lo que me hicieron para siempre?',
    why: 'El rencor te mantiene atado/a a algo que ya pasó e impide que sigas adelante. Mientras lo cargas, gastar energía en seguir enojado/a no cambia lo que ocurrió ni hace justicia. Solo te daña a ti y bloquea la posibilidad de sanar o reparar la relación.',
    examples: [
      { icon: '😠', text: 'Seguir enojado/a con alguien semanas o meses después de algo que pasó.' },
      { icon: '🔁', text: 'Revivir constantemente situaciones pasadas que te generaron rabia o tristeza.' },
      { icon: '🚫', text: 'Negarte a hablar o arreglar algo con alguien porque "lo que hizo no tiene perdón".' },
    ],
    exercise: { title: 'Soltar el Peso', steps: [
      { text: '¿Hay alguien con quien guardas rencor? ¿Qué pasó?', input: { placeholder: '¿Qué pasó y cuánto tiempo llevas cargando eso?' } },
      { text: '¿Cómo te afecta seguir pensando en eso?', input: { placeholder: 'Me afecta porque...' } },
      { text: 'Soltar no es decir que estuvo bien. ¿Qué necesitarías para no seguir cargando ese peso?', input: { placeholder: 'Necesitaría...' } },
      { text: 'Decide una cosa concreta que harás para empezar a soltarlo, aunque sea pequeña.' },
    ]},
  },
  {
    id: 'compararse', emoji: '⚖️', title: 'Compararse', color: '#78716C',
    tagline: '¿Me mido siempre contra otros?',
    why: 'Medirse constantemente con otros destruye la autoestima. Siempre habrá alguien más rápido, más inteligente o más popular, así que usarlos como medida de tu valor hace que nunca sea suficiente. Además te impide ver tu propio progreso, que es lo único que realmente importa.',
    examples: [
      { icon: '📊', text: 'Ver las notas de otros y sentir que eres "menos" si las tuyas son más bajas.' },
      { icon: '📱', text: 'Ver lo que publican otros en redes y sentir que tu vida es aburrida o peor.' },
      { icon: '🏃', text: 'Desmotivarte cuando alguien hace algo mejor que tú en vez de enfocarte en tu propio progreso.' },
    ],
    exercise: { title: 'Mi Propio Marcador', steps: [
      { text: '¿Con quién te comparas seguido? ¿En qué aspecto?', input: { placeholder: 'Me comparo con... en...' } },
      { text: '¿Qué logros propios estás ignorando cuando te comparas?', input: { placeholder: 'Estoy ignorando que yo...' } },
      { text: 'Escribe 3 cosas en las que has mejorado en el último mes, comparado con TI mismo/a.', input: { placeholder: 'Mejoré en...\nMejoré en...\nMejoré en...' } },
      { text: 'Esta semana, cuando notes que te comparas, vuelve a tu lista y léela.' },
    ]},
  },
  {
    id: 'impulsividad', emoji: '⚡', title: 'Impulsividad', color: '#78716C',
    tagline: '¿Actúo antes de pensar?',
    why: 'Reaccionar antes de pensar arruina situaciones que podrían haberse resuelto bien. Las palabras o acciones impulsivas dañan a otras personas y rompen la confianza, y después es difícil reparar ese daño. Tomar un segundo antes de reaccionar marca la diferencia entre resolver y empeorar las cosas.',
    examples: [
      { icon: '🗣️', text: 'Decir lo primero que se te viene a la mente aunque lastime a alguien.' },
      { icon: '🏃', text: 'Salir corriendo de una situación difícil en vez de quedarte a resolverla.' },
      { icon: '📲', text: 'Enviar un mensaje enojado y arrepentirte después de enviarlo.' },
    ],
    exercise: { title: 'El Segundo Antes', steps: [
      { text: '¿Cuándo fue la última vez que actuaste impulsivamente y lo lamentaste?', input: { placeholder: '¿Qué pasó?' } },
      { text: '¿Qué habrías hecho diferente si hubieras tenido 10 segundos para pensar?', input: { placeholder: 'Con más tiempo habría...' } },
      { text: 'Esta semana, cuando sientas que quieres reaccionar de inmediato, cuenta hasta 5 antes de hacerlo.' },
      { text: '¿Hubo alguna situación donde lo intentaste? ¿Cambió algo?', input: { placeholder: 'Lo intenté cuando... y pasó...' } },
    ]},
  },
];

const EMOCIONES = [
  {
    id: 'preocupacion', emoji: '😟', title: 'Preocupación',
    tagline: 'Mi cabeza no para de pensar',
    what: 'Preocuparte es imaginar que algo malo podría pasar. El cerebro lo hace para intentar protegerte, pero a veces se queda dando vueltas sin parar aunque no haya ningún peligro real.',
    tools: [
      { title: 'El tiempo de preocupación', steps: ['Dite a ti mismo: "Me preocuparé de esto a las [hora específica], no ahora."', 'Cuando llegue esa hora, pregúntate: ¿sigue siendo un problema real?', 'Si sí, piensa en UNA cosa concreta que puedas hacer. Si no, ciérralo.'] },
      { title: 'La pregunta del 1 al 10', steps: ['Ponle nota a tu preocupación del 1 al 10 según qué tan probable es que pase realmente.', 'Luego pregúntate: ¿qué es lo peor que podría pasar? ¿Y qué tan seguido pasa realmente eso?'] },
      { title: 'Respiración 4-7-8', steps: ['Inhala contando hasta 4.', 'Aguanta el aire contando hasta 7.', 'Suelta lentamente contando hasta 8.', 'Repite 3 veces.'] },
    ],
  },
  {
    id: 'ansiedad', emoji: '😰', title: 'Ansiedad',
    tagline: 'Me late fuerte el corazón sin razón',
    what: 'La ansiedad es cuando tu cuerpo reacciona como si hubiera un peligro, aunque no haya ninguno visible. Puedes sentir el corazón acelerado, el estómago apretado o ganas de escapar. Es incómodo pero no es peligroso.',
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
      { title: 'Reformula el problema', steps: ['Escribe o di en voz alta qué es exactamente lo que no está saliendo.', 'Pregúntate: ¿qué he intentado hasta ahora?', 'Piensa en UNA forma diferente de abordarlo.'] },
      { title: 'El límite de hoy', steps: ['Reconoce que hoy tienes un límite de energía y está bien llegar a él.', 'Dite: "Lo dejé aquí por hoy y mañana lo intento de nuevo."', 'Haz algo que te recargue antes de volver a intentarlo.'] },
    ],
  },
  {
    id: 'miedo', emoji: '😨', title: 'Miedo',
    tagline: 'Hay algo que me da pánico',
    what: 'El miedo es una emoción que te avisa de un posible peligro. A veces el peligro es real, a veces es solo imaginado. En los dos casos, lo que sientes en el cuerpo es igual de intenso. El miedo no significa que seas cobarde.',
    tools: [
      { title: 'Separa real de imaginado', steps: ['Pregúntate: ¿el peligro está pasando ahora mismo o es algo que podría pasar?', 'Si es ahora: busca a un adulto de confianza.', 'Si es imaginado: dite "mi cerebro está tratando de protegerme, pero estoy a salvo ahora mismo."'] },
      { title: 'Exposición pequeña', steps: ['Identifica qué es exactamente lo que te da miedo.', 'Piensa en el paso MÁS PEQUEÑO posible hacia enfrentarlo.', 'Da solo ese paso. Nada más por hoy.'] },
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
    what: 'La rabia es una emoción fuerte que te avisa que algo no está bien: que te trataron injustamente, que cruzaron un límite tuyo, o que algo te importa mucho. Sentir rabia está bien. Lo importante es lo que haces con ella.',
    tools: [
      { title: 'Primero el cuerpo', steps: ['La rabia necesita salida física: camina rápido, aprieta fuerte un cojín, sacúdete.', 'NO la saques sobre personas o cosas.', 'Espera a que el cuerpo se calme antes de hablar o decidir.'] },
      { title: 'La temperatura del agua', steps: ['Pon las manos bajo agua fría por 30 segundos.', 'El frío activa la respuesta de calma del sistema nervioso.'] },
      { title: 'Pon en palabras', steps: ['Cuando estés más calmado/a, di o escribe qué fue exactamente lo que te enojó.', 'Diferencia: ¿qué pasó? (hecho) vs. ¿cómo lo interpreté? (pensamiento).', 'Decide si hay algo que quieras decir o hacer al respecto.'] },
    ],
  },
  {
    id: 'salud', emoji: '🤒', title: 'Miedo a estar enfermo/a',
    tagline: 'Creo que algo grave me pasa',
    what: 'A veces el cuerpo siente cosas raras y el cerebro las convierte en "algo grave". Eso se llama hipocondría y es muy común en los niños. Casi siempre lo que sientes tiene una explicación simple y no es peligroso, pero es importante hablarlo con un adulto.',
    tools: [
      { title: 'Habla con un adulto primero', steps: ['Antes de buscar en internet o de asustarte más, cuéntale a un adulto de confianza lo que sientes.', 'Describe el síntoma concreto: dónde, cuándo empieza, cuánto dura.', 'Deja que un adulto o médico evalúe. Tu trabajo no es diagnosticarte.'] },
      { title: 'El ciclo del miedo a la enfermedad', steps: ['Revisa: ¿estás buscando síntomas en internet? Eso empeora el miedo, no lo calma.', 'Cada vez que buscas, tu cerebro encuentra algo nuevo que temer.', 'Decide no buscar y en cambio escribe tus síntomas para contárselos a un adulto.'] },
      { title: 'Chequeo de realidad', steps: ['Pregúntate: ¿cuándo empezó esto a preocuparme?', '¿Estaba estresado/a o asustado/a por algo más en ese momento?', 'El estrés y la ansiedad causan síntomas físicos reales. No es imaginación, pero tampoco es enfermedad grave.'] },
    ],
  },
  {
    id: 'soledad', emoji: '🫂', title: 'Soledad',
    tagline: 'Siento que nadie me entiende',
    what: 'Sentirse solo/a no siempre significa estar sin personas alrededor. Puedes estar rodeado/a de gente y igual sentirte solo/a si sientes que nadie te entiende de verdad. Es una de las cosas más difíciles de sentir, y le pasa a mucha más gente de lo que parece.',
    tools: [
      { title: 'Da el primer paso pequeño', steps: ['Esperar a que alguien venga es muy difícil. Toma tú la iniciativa con algo pequeño.', 'Un mensaje, un "¿cómo estás?" o sentarte cerca de alguien ya es un paso.'] },
      { title: 'Conéctate contigo', steps: ['Haz algo que disfrutes solo/a: dibujar, escuchar música, leer.', 'Estar a gusto contigo mismo/a hace que la soledad duela menos.'] },
      { title: 'Habla con un adulto', steps: ['Si llevas mucho tiempo sintiéndote así, cuéntaselo a alguien de confianza.', 'La soledad prolongada necesita apoyo, no solo estrategias.'] },
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
    id: 'abrumamiento', emoji: '🌊', title: 'Abrumamiento',
    tagline: 'Tengo demasiadas cosas encima',
    what: 'El abrumamiento aparece cuando sientes que tienes más cosas de las que puedes manejar. El cerebro entra en modo de bloqueo y a veces se paraliza en vez de actuar. No es flojera, es sobrecarga.',
    tools: [
      { title: 'Volcado de cerebro', steps: ['Escribe TODO lo que tienes en la cabeza, sin orden.', 'Solo sacarlo del cerebro al papel ya alivia.', 'Luego elige UNA sola cosa para hacer ahora.'] },
      { title: 'La regla de los 2 minutos', steps: ['Mira tu lista y busca algo que tome menos de 2 minutos.', 'Hazlo ahora mismo.', 'El cerebro necesita una pequeña victoria para arrancar.'] },
      { title: 'Divide en trozos', steps: ['Toma la tarea más grande y divídela en 3 pasos concretos.', 'Haz solo el primero.', 'El resto lo haces después. Un trozo a la vez.'] },
    ],
  },
];
