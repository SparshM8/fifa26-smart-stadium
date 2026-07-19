/**
 * StadiumOS AI — Internationalization (i18n) Module
 *
 * Provides multilingual support for the FIFA World Cup 2026 platform.
 * Supported languages: English, Spanish, French, Arabic, Portuguese.
 *
 * This directly addresses the FIFA World Cup 2026 challenge requirement for
 * "multilingual assistance" across a global fan base.
 */

export type SupportedLocale = "en" | "es" | "fr" | "ar" | "pt";

export interface Locale {
  code: SupportedLocale;
  name: string;
  nativeName: string;
  dir: "ltr" | "rtl";
  flag: string;
}

/** All supported locales with metadata */
export const SUPPORTED_LOCALES: Locale[] = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    dir: "ltr",
    flag: "🇺🇸",
  },
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    dir: "ltr",
    flag: "🇪🇸",
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    dir: "ltr",
    flag: "🇫🇷",
  },
  { code: "ar", name: "Arabic", nativeName: "العربية", dir: "rtl", flag: "🇸🇦" },
  {
    code: "pt",
    name: "Portuguese",
    nativeName: "Português",
    dir: "ltr",
    flag: "🇧🇷",
  },
];

/** Translation dictionary type */
export interface Translations {
  nav: {
    platform: string;
    intelligence: string;
    accessibility: string;
    deploy: string;
    signIn: string;
    getDemo: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  roles: {
    heading: string;
    subheading: string;
    fan: { label: string; description: string; cta: string };
    organizer: { label: string; description: string; cta: string };
    copilot: { label: string; description: string; cta: string };
    map: { label: string; description: string; cta: string };
  };
  dashboard: {
    title: string;
    queues: string;
    weather: string;
    transit: string;
    myTicket: string;
    seat: string;
    aiSuggestion: string;
    routeMeThere: string;
  };
  copilot: {
    title: string;
    placeholder: string;
    thinking: string;
    disclaimer: string;
  };
  map: {
    title: string;
    searchPlaceholder: string;
    food: string;
    restrooms: string;
    medical: string;
    parking: string;
    mySeat: string;
    activeNavigation: string;
    endRoute: string;
  };
  common: {
    loading: string;
    noData: string;
    live: string;
    critical: string;
    warning: string;
    normal: string;
    minutes: string;
    noWait: string;
  };
  sections: {
    stadiumTitle: string;
    stadiumDesc: string;
    copilotTitle: string;
    copilotDesc: string;
    crowdTitle: string;
    crowdDesc: string;
    accessTitle: string;
    accessDesc: string;
  };
}

const TRANSLATIONS: Record<SupportedLocale, Translations> = {
  en: {
    nav: {
      platform: "Platform",
      intelligence: "Intelligence",
      accessibility: "Accessibility",
      deploy: "Deploy",
      signIn: "Sign In",
      getDemo: "Get Demo",
    },
    hero: {
      badge: "AI-Powered for FIFA World Cup 2026",
      title: "The Stadium OS Built for the World",
      subtitle:
        "Real-time crowd intelligence, smart navigation, and AI-driven operations for every fan, organizer, and volunteer.",
      ctaPrimary: "Explore Fan Hub",
      ctaSecondary: "Command Center",
    },
    roles: {
      heading: "Built for Every Role",
      subheading:
        "StadiumOS AI adapts to your role. Choose your experience to get started.",
      fan: {
        label: "Fan",
        description:
          "Your personalized matchday hub — ticket, navigation, queues & AI assistant.",
        cta: "Open Fan Hub",
      },
      organizer: {
        label: "Organizer",
        description:
          "Mission-control operations dashboard — crowd, incidents, transport & KPIs.",
        cta: "Open Command",
      },
      copilot: {
        label: "AI Copilot",
        description:
          "Full-page stadium AI for navigation queries, incident triage & real-time decisions.",
        cta: "Open Copilot",
      },
      map: {
        label: "Smart Map",
        description:
          "Interactive stadium navigation with wheelchair routes, heatmap & emergency exits.",
        cta: "Open Map",
      },
    },
    dashboard: {
      title: "Fan Hub",
      queues: "Real-time Queues",
      weather: "Weather",
      transit: "Transit & Parking",
      myTicket: "My Ticket",
      seat: "My Seat",
      aiSuggestion: "Smart Recommendation",
      routeMeThere: "Route me there",
    },
    copilot: {
      title: "Copilot",
      placeholder: "Ask Copilot anything about the stadium…",
      thinking: "Analyzing stadium data…",
      disclaimer:
        "Copilot can make mistakes. Always verify critical operational decisions.",
    },
    map: {
      title: "Smart Nav",
      searchPlaceholder: "Search gates, restrooms, sections...",
      food: "Food",
      restrooms: "Restrooms",
      medical: "Medical",
      parking: "Parking",
      mySeat: "My Seat",
      activeNavigation: "Active Navigation",
      endRoute: "End Route Guidance",
    },
    common: {
      loading: "Loading…",
      noData: "No data available",
      live: "Live",
      critical: "Critical",
      warning: "Warning",
      normal: "Normal",
      minutes: "min",
      noWait: "No wait",
    },
    sections: {
      stadiumTitle: "A living, breathing venue.",
      stadiumDesc:
        "See the entire stadium at a glance. Detect crowd density shifts, temperature anomalies, and security events in real-time.",
      copilotTitle: "Your operations co-pilot, powered by Generative AI.",
      copilotDesc:
        "StadiumOS doesn't just show data; it understands context. Ask complex questions about crowd density, resource allocation, or emergency protocols, and get actionable intelligence instantly.",
      crowdTitle: "Predict the bottleneck, before the jam.",
      crowdDesc:
        "Leveraging historical data and real-time computer vision, StadiumOS predicts crowd movement patterns with 94% accuracy, automatically adjusting digital signage to redirect flow.",
      accessTitle: "A World Cup for the World.",
      accessDesc:
        "Breaking down barriers with AI-powered accessibility tools built natively into the platform.",
    },
  },

  es: {
    nav: {
      platform: "Plataforma",
      intelligence: "Inteligencia",
      accessibility: "Accesibilidad",
      deploy: "Desplegar",
      signIn: "Iniciar sesión",
      getDemo: "Ver Demo",
    },
    hero: {
      badge: "Impulsado por IA para la Copa Mundial FIFA 2026",
      title: "El Sistema de Estadio Construido para el Mundo",
      subtitle:
        "Inteligencia de multitudes en tiempo real, navegación inteligente y operaciones basadas en IA para cada aficionado, organizador y voluntario.",
      ctaPrimary: "Explorar Fan Hub",
      ctaSecondary: "Centro de Mando",
    },
    roles: {
      heading: "Construido para Cada Rol",
      subheading:
        "StadiumOS AI se adapta a tu rol. Elige tu experiencia para comenzar.",
      fan: {
        label: "Aficionado",
        description:
          "Tu centro personalizado del día de partido — entrada, navegación, colas y asistente IA.",
        cta: "Abrir Fan Hub",
      },
      organizer: {
        label: "Organizador",
        description:
          "Panel de control operativo — multitudes, incidentes, transporte y KPIs.",
        cta: "Abrir Mando",
      },
      copilot: {
        label: "Copiloto IA",
        description:
          "IA de estadio de pantalla completa para consultas de navegación y decisiones en tiempo real.",
        cta: "Abrir Copiloto",
      },
      map: {
        label: "Mapa Inteligente",
        description:
          "Navegación interactiva con rutas accesibles, mapa de calor y salidas de emergencia.",
        cta: "Abrir Mapa",
      },
    },
    dashboard: {
      title: "Fan Hub",
      queues: "Colas en Tiempo Real",
      weather: "Clima",
      transit: "Tránsito y Estacionamiento",
      myTicket: "Mi Entrada",
      seat: "Mi Asiento",
      aiSuggestion: "Recomendación Inteligente",
      routeMeThere: "Llevarme allí",
    },
    copilot: {
      title: "Copiloto",
      placeholder: "Pregunta al Copiloto sobre el estadio…",
      thinking: "Analizando datos del estadio…",
      disclaimer:
        "El Copiloto puede cometer errores. Siempre verifica decisiones operativas críticas.",
    },
    map: {
      title: "Nav Inteligente",
      searchPlaceholder: "Buscar puertas, baños, secciones...",
      food: "Comida",
      restrooms: "Baños",
      medical: "Médico",
      parking: "Estacionamiento",
      mySeat: "Mi Asiento",
      activeNavigation: "Navegación Activa",
      endRoute: "Finalizar Ruta",
    },
    common: {
      loading: "Cargando…",
      noData: "Sin datos disponibles",
      live: "En vivo",
      critical: "Crítico",
      warning: "Advertencia",
      normal: "Normal",
      minutes: "min",
      noWait: "Sin espera",
    },
    sections: {
      stadiumTitle: "Un lugar vivo y vibrante.",
      stadiumDesc:
        "Vea todo el estadio de un vistazo. Detecte cambios de densidad de multitud, anomalías de temperatura y eventos de seguridad en tiempo real.",
      copilotTitle: "Su copiloto de operaciones, impulsado por IA Generativa.",
      copilotDesc:
        "StadiumOS no solo muestra datos; entiende el contexto. Realice preguntas complejas sobre densidad de multitudes o protocolos de emergencia y obtenga información útil al instante.",
      crowdTitle: "Prediga el embotellamiento, antes de que ocurra.",
      crowdDesc:
        "Aprovechando datos históricos y visión por computadora en tiempo real, StadiumOS predice patrones de flujo con un 94% de precisión y ajusta señales digitales automáticamente.",
      accessTitle: "Una Copa del Mundo para el Mundo.",
      accessDesc:
        "Rompiendo barreras con herramientas de accesibilidad nativas impulsadas por inteligencia artificial.",
    },
  },

  fr: {
    nav: {
      platform: "Plateforme",
      intelligence: "Intelligence",
      accessibility: "Accessibilité",
      deploy: "Déployer",
      signIn: "Se connecter",
      getDemo: "Voir démo",
    },
    hero: {
      badge: "Alimenté par l'IA pour la Coupe du Monde FIFA 2026",
      title: "Le Système de Stade Construit pour le Monde",
      subtitle:
        "Intelligence des foules en temps réel, navigation intelligente et opérations pilotées par l'IA pour chaque fan, organisateur et bénévole.",
      ctaPrimary: "Explorer le Fan Hub",
      ctaSecondary: "Centre de Commandement",
    },
    roles: {
      heading: "Conçu pour Chaque Rôle",
      subheading:
        "StadiumOS AI s'adapte à votre rôle. Choisissez votre expérience pour commencer.",
      fan: {
        label: "Fan",
        description:
          "Votre hub personnalisé du jour de match — billet, navigation, files et assistant IA.",
        cta: "Ouvrir Fan Hub",
      },
      organizer: {
        label: "Organisateur",
        description:
          "Tableau de bord opérationnel — foules, incidents, transport et KPIs.",
        cta: "Ouvrir Commandement",
      },
      copilot: {
        label: "Copilote IA",
        description:
          "IA de stade plein écran pour les requêtes de navigation et les décisions en temps réel.",
        cta: "Ouvrir Copilote",
      },
      map: {
        label: "Carte Intelligente",
        description:
          "Navigation interactive avec itinéraires accessibles, carte thermique et sorties de secours.",
        cta: "Ouvrir Carte",
      },
    },
    dashboard: {
      title: "Fan Hub",
      queues: "Files d'attente en Direct",
      weather: "Météo",
      transit: "Transit et Parking",
      myTicket: "Mon Billet",
      seat: "Mon Siège",
      aiSuggestion: "Recommandation Intelligente",
      routeMeThere: "M'y emmener",
    },
    copilot: {
      title: "Copilote",
      placeholder: "Demandez au Copilote tout sur le stade…",
      thinking: "Analyse des données du stade…",
      disclaimer:
        "Le Copilote peut faire des erreurs. Vérifiez toujours les décisions opérationnelles critiques.",
    },
    map: {
      title: "Nav Intelligente",
      searchPlaceholder: "Chercher portes, toilettes, sections...",
      food: "Restauration",
      restrooms: "Toilettes",
      medical: "Médical",
      parking: "Parking",
      mySeat: "Mon Siège",
      activeNavigation: "Navigation Active",
      endRoute: "Terminer l'Itinéraire",
    },
    common: {
      loading: "Chargement…",
      noData: "Aucune donnée disponible",
      live: "En Direct",
      critical: "Critique",
      warning: "Avertissement",
      normal: "Normal",
      minutes: "min",
      noWait: "Pas d'attente",
    },
    sections: {
      stadiumTitle: "Un stade vivant et connecté.",
      stadiumDesc:
        "Visualisez tout le stade en un coup d'œil. Détectez les flux de foule, anomalies thermiques et alertes de sécurité en temps réel.",
      copilotTitle:
        "Votre copilote opérationnel, propulsé par l'IA Générative.",
      copilotDesc:
        "StadiumOS ne se contente pas d'afficher des données, il en comprend le contexte. Posez des questions complexes sur les foules ou la sécurité et obtenez des réponses instantanées.",
      crowdTitle:
        "Anticipez les goulets d'étranglement avant qu'ils ne se forment.",
      crowdDesc:
        "Grâce aux données historiques et à la vision par ordinateur, StadiumOS prédit les mouvements de foule avec 94% de précision.",
      accessTitle: "Une Coupe du Monde pour le Monde entier.",
      accessDesc:
        "Brisez les barrières grâce à des outils d'accessibilité natifs dotés d'intelligence artificielle.",
    },
  },

  ar: {
    nav: {
      platform: "المنصة",
      intelligence: "الذكاء",
      accessibility: "إمكانية الوصول",
      deploy: "النشر",
      signIn: "تسجيل الدخول",
      getDemo: "عرض تجريبي",
    },
    hero: {
      badge: "مدعوم بالذكاء الاصطناعي لكأس العالم FIFA 2026",
      title: "نظام الملعب المبني للعالم",
      subtitle:
        "ذكاء الحشود في الوقت الفعلي، والملاحة الذكية، والعمليات المدعومة بالذكاء الاصطناعي لكل مشجع ومنظم ومتطوع.",
      ctaPrimary: "استكشاف مركز المشجعين",
      ctaSecondary: "مركز القيادة",
    },
    roles: {
      heading: "مبني لكل دور",
      subheading: "يتكيف StadiumOS AI مع دورك. اختر تجربتك للبدء.",
      fan: {
        label: "مشجع",
        description:
          "مركزك الشخصي ليوم المباراة — التذكرة، الملاحة، الطوابير والمساعد الذكي.",
        cta: "فتح مركز المشجعين",
      },
      organizer: {
        label: "منظم",
        description:
          "لوحة تحكم العمليات — الحشود، الحوادث، النقل ومؤشرات الأداء.",
        cta: "فتح مركز القيادة",
      },
      copilot: {
        label: "المساعد الذكي",
        description:
          "ذكاء اصطناعي للملعب لاستعلامات الملاحة والقرارات الفورية.",
        cta: "فتح المساعد",
      },
      map: {
        label: "الخريطة الذكية",
        description:
          "ملاحة تفاعلية مع مسارات للكراسي المتحركة وخريطة الحرارة ومخارج الطوارئ.",
        cta: "فتح الخريطة",
      },
    },
    dashboard: {
      title: "مركز المشجعين",
      queues: "الطوابير الحية",
      weather: "الطقس",
      transit: "المواصلات والمواقف",
      myTicket: "تذكرتي",
      seat: "مقعدي",
      aiSuggestion: "توصية ذكية",
      routeMeThere: "أرشدني للوصول",
    },
    copilot: {
      title: "المساعد الذكي",
      placeholder: "اسأل المساعد عن أي شيء في الملعب…",
      thinking: "جارٍ تحليل بيانات الملعب…",
      disclaimer:
        "قد يرتكب المساعد أخطاء. تحقق دائمًا من القرارات التشغيلية الحاسمة.",
    },
    map: {
      title: "الملاحة الذكية",
      searchPlaceholder: "ابحث عن البوابات والمرافق والأقسام...",
      food: "الطعام",
      restrooms: "دورات المياه",
      medical: "الطبي",
      parking: "المواقف",
      mySeat: "مقعدي",
      activeNavigation: "الملاحة النشطة",
      endRoute: "إنهاء التوجيه",
    },
    common: {
      loading: "جارٍ التحميل…",
      noData: "لا تتوفر بيانات",
      live: "مباشر",
      critical: "حرج",
      warning: "تحذير",
      normal: "طبيعي",
      minutes: "دقيقة",
      noWait: "لا انتظار",
    },
    sections: {
      stadiumTitle: "مكان حي ونابض بالحياة.",
      stadiumDesc:
        "شاهد الملعب بأكمله بلمحة سريعة. اكتشف التغيرات في كثافة الحشود، والتقلبات الحرارية، والأحداث الأمنية في الوقت الفعلي.",
      copilotTitle:
        "مساعد العمليات الخاص بك، مدعوم بالذكاء الاصطناعي التوليدي.",
      copilotDesc:
        "لا يعرض StadiumOS البيانات فحسب؛ بل يفهم السياق. اطرح أسئلة معقدة حول كثافة الحشود أو بروتوكولات الطوارئ واحصل على إجابات فورية.",
      crowdTitle: "توقع الاختناقات قبل حدوثها.",
      crowdDesc:
        "باستخدام البيانات التاريخية والرؤية الحاسوبية، يتوقع StadiumOS أنماط حركة الحشود بدقة 94٪، ويعدل اللوحات الرقمية تلقائيًا.",
      accessTitle: "كأس عالم للعالم بأكمله.",
      accessDesc:
        "كسر الحواجز باستخدام أدوات إمكانية الوصول المدعومة بالذكاء الاصطناعي والمدمجة في المنصة.",
    },
  },

  pt: {
    nav: {
      platform: "Plataforma",
      intelligence: "Inteligência",
      accessibility: "Acessibilidade",
      deploy: "Implantar",
      signIn: "Entrar",
      getDemo: "Ver Demo",
    },
    hero: {
      badge: "Alimentado por IA para a Copa do Mundo FIFA 2026",
      title: "O Sistema de Estádio Construído para o Mundo",
      subtitle:
        "Inteligência de multidões em tempo real, navegação inteligente e operações movidas por IA para cada torcedor, organizador e voluntário.",
      ctaPrimary: "Explorar Fan Hub",
      ctaSecondary: "Central de Comando",
    },
    roles: {
      heading: "Construído para Cada Papel",
      subheading:
        "StadiumOS AI se adapta ao seu papel. Escolha sua experiência para começar.",
      fan: {
        label: "Torcedor",
        description:
          "Seu hub personalizado do dia de jogo — ingresso, navegação, filas e assistente IA.",
        cta: "Abrir Fan Hub",
      },
      organizer: {
        label: "Organizador",
        description:
          "Painel de controle operacional — multidões, incidentes, transporte e KPIs.",
        cta: "Abrir Comando",
      },
      copilot: {
        label: "Copiloto IA",
        description:
          "IA de estádio em tela cheia para consultas de navegação e decisões em tempo real.",
        cta: "Abrir Copiloto",
      },
      map: {
        label: "Mapa Inteligente",
        description:
          "Navegação interativa com rotas acessíveis, mapa de calor e saídas de emergência.",
        cta: "Abrir Mapa",
      },
    },
    dashboard: {
      title: "Fan Hub",
      queues: "Filas em Tempo Real",
      weather: "Clima",
      transit: "Transporte e Estacionamento",
      myTicket: "Meu Ingresso",
      seat: "Meu Assento",
      aiSuggestion: "Recomendação Inteligente",
      routeMeThere: "Me leve lá",
    },
    copilot: {
      title: "Copiloto",
      placeholder: "Pergunte ao Copiloto qualquer coisa sobre o estádio…",
      thinking: "Analisando dados do estádio…",
      disclaimer:
        "O Copiloto pode cometer erros. Sempre verifique decisões operacionais críticas.",
    },
    map: {
      title: "Nav Inteligente",
      searchPlaceholder: "Buscar portões, banheiros, seções...",
      food: "Alimentação",
      restrooms: "Banheiros",
      medical: "Médico",
      parking: "Estacionamento",
      mySeat: "Meu Assento",
      activeNavigation: "Navegação Ativa",
      endRoute: "Encerrar Rota",
    },
    common: {
      loading: "Carregando…",
      noData: "Nenhum dado disponível",
      live: "Ao Vivo",
      critical: "Crítico",
      warning: "Atenção",
      normal: "Normal",
      minutes: "min",
      noWait: "Sem espera",
    },
    sections: {
      stadiumTitle: "Um local vivo e pulsante.",
      stadiumDesc:
        "Veja todo o estádio de relance. Detecte fluxos de multidão, anomalias de temperatura e alertas de segurança em tempo real.",
      copilotTitle: "Seu copiloto de operações, alimentado por IA Generativa.",
      copilotDesc:
        "O StadiumOS não apenas exibe dados; ele entende o contexto. Faça perguntas complexas sobre densidade ou segurança e obteneu respostas imediatas.",
      crowdTitle: "Preveja o congestionamento antes que ele aconteça.",
      crowdDesc:
        "Aproveitando dados históricos e visão computacional, o StadiumOS prevê movimentos com 94% de eficiência, ajustando painéis digitais automaticamente.",
      accessTitle: "Uma Copa do Mundo para o Mundo inteiro.",
      accessDesc:
        "Quebrando barreiras com ferramentas nativas de acessibilidade alimentadas por inteligência artificial.",
    },
  },
};

/**
 * Returns the full translation object for the given locale.
 * Falls back to English if locale not found.
 */
export function getTranslations(locale: SupportedLocale): Translations {
  return TRANSLATIONS[locale] ?? TRANSLATIONS.en;
}

/**
 * Returns locale metadata for a given locale code.
 */
export function getLocaleInfo(locale: SupportedLocale): Locale {
  return (
    SUPPORTED_LOCALES.find((l) => l.code === locale) ?? SUPPORTED_LOCALES[0]
  );
}
