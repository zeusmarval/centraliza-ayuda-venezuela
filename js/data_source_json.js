//no actualizar este archivo directamente.
//Añadir nuevas fuente en el arreglo data_source_helper/new_sources.json
//luego ejecutar merge_sources.py
const SOURCES = [
    {
        "nombre": "Acopio VZLA",
        "url": "https://acopiovzla.com",
        "descripcion": "Directorio de centros de acopios a nivel nacional e internacional.",
        "tags": [
            "Refugios",
            "Centros de Acopio"
        ],
        "id": 291
    },
    {
        "nombre": "Acopios Refugios - Venezuela Resiste",
        "url": "https://acopios-refugios.vercel.app",
        "descripcion": "Mapa colaborativo de Acopios y Refugios. Acopios se publican al instante con sello \"sin verificar\". Refugios se revisan antes.",
        "tags": [
            "Centros de Acopio"
        ],
        "id": 290
    },
    {
        "nombre": "AcopioVE",
        "url": "https://acopiove.org",
        "descripcion": "Mapa Internacional y colaborativo de refugios y centros de acopio. Incluyendo a Venezuela.",
        "tags": [
            "Centros de Acopio"
        ],
        "id": 162
    },
    {
        "nombre": "Aid Venezuela",
        "url": "https://aidvenezuela.net",
        "descripcion": "Plataforma ciudadana de emergencia creada a raíz de los fuertes sismos que afectaron al país (principalmente en La Guaira). Sirve para reportar o buscar personas desaparecidas, revisar el mapa de zonas afectadas y ubicar centros de ayuda.",
        "tags": [
            "Desaparecidos",
            "Encontrados",
            "Mascotas y Animales",
            "Ayuda General",
            "Centros de Acopio"
        ],
        "id": 246
    },
    {
        "nombre": "AidLinksVenezuela",
        "url": "https://aidlinksvenezuela.org",
        "descripcion": "Directorio de recursos digitales tras el terremoto 🇻🇪 — Reporta, Busca, Encuentra personas y mascotas; Centros de Acopio, Listados y Más.",
        "tags": [
            "Ayuda General"
        ],
        "id": 287
    },
    {
        "nombre": "AJE Venezuela",
        "url": "https://ajevenezuela.org/ayuda-venezuela",
        "descripcion": "Centros de acopio, voluntariado y donaciones verificados para apoyar a Venezuela.",
        "tags": [
            "Centros de Acopio",
            "Voluntarios",
            "Donaciones"
        ],
        "id": 184
    },
    {
        "nombre": "Aparecio Mi Gente (Telegram)",
        "url": "https://t.me/aparecio_en_venezuela_bot",
        "descripcion": "Bot de alerta: Alerta cuando un nombre aparece en listas",
        "tags": [
            "Recursos y Herramientas"
        ],
        "id": 255
    },
    {
        "nombre": "Apoyo SaluPro",
        "url": "https://apoyo.salu.pro",
        "descripcion": "Registro centralizado y gratuito de personas desaparecidas tras la catástrofe. Busca a un ser querido o reporta una desaparición.",
        "tags": [
            "Desaparecidos"
        ],
        "id": 207
    },
    {
        "nombre": "Apoyo Terremoto - Veneconnect",
        "url": "https://veneconnect.com/apoyo-terremoto",
        "descripcion": "Información verificada del terremoto: una guía de prevención, un mapa de centros de acopio y fundaciones.",
        "tags": [
            "Centros de Acopio",
            "Ayuda General"
        ],
        "id": 160
    },
    {
        "nombre": "Aquí Estoy",
        "url": "https://aquiestoy.xyz",
        "descripcion": "Personas reportadas en hospitales de Venezuela durante el terremoto de junio de 2026. Busca a tu familiar.",
        "tags": [
            "Encontrados",
            "Atendidos en Hospitales"
        ],
        "id": 192
    },
    {
        "nombre": "Asociación Pro-Defensa de los Animales",
        "url": "https://instagram.com/aproavzla",
        "descripcion": "Aproa atiende gratuitamente a las mascotas afectadas en la sede de los chaguaramos, Caracas en respuesta al terremoto de Junio 2026.",
        "tags": [
            "Mascotas y Animales"
        ],
        "id": 156
    },
    {
        "nombre": "Atención Psicológica Gratuita y Recursos Varios | Grupo Sinapsis",
        "url": "https://gsinapsis.com/terremoto-venezuela-intervencion-crisis",
        "descripcion": "Atención Psicológica Gratuita, Recursos de Contención y Afrontamiento Emocional. Guía de Intervención.",
        "tags": [
            "Psicología"
        ],
        "id": 282
    },
    {
        "nombre": "Avapre Venezuela",
        "url": "https://redh.avapre.com",
        "descripcion": "Red informativa de Hospitales, centros de acopio y búsqueda de familiares en Caracas, funciona con señal débil y sin conexión.",
        "tags": [
            "Centros de Acopio",
            "Salud General",
            "Desaparecidos"
        ],
        "id": 273
    },
    {
        "nombre": "Ayuda en Camino",
        "url": "https://ayudaencamino.com",
        "descripcion": "Centros de acopio, refugios y ONGs publican sus necesidades en tiempo real. Encuentra dónde llevar tus donaciones y haz que lleguen a quienes más las necesitan.",
        "tags": [
            "Refugios",
            "Ayuda General",
            "Centros de Acopio"
        ],
        "id": 215
    },
    {
        "nombre": "Ayuda por Venezuela",
        "url": "https://ayudaparavenezuela.com",
        "descripcion": "Centros de acopio y puntos que necesitan ayuda en todo el país. Reporta, visita, ayuda.",
        "tags": [
            "Centros de Acopio"
        ],
        "id": 159
    },
    {
        "nombre": "Ayuda VE",
        "url": "https://ayudave.com",
        "descripcion": "Reporta y encuentra personas desaparecidas, pide y ofrece ayuda, y sigue sismos y alertas durante la emergencia en Venezuela.",
        "tags": [
            "Recursos y Herramientas",
            "Centros de Acopio",
            "Donaciones",
            "Ayuda General",
            "Desaparecidos",
            "Encontrados",
            "Daños Estructurales"
        ],
        "id": 258
    },
    {
        "nombre": "Bot de Telegram para búsqueda de personas desaparecidas | busqueda_vzla_temblor_bot",
        "url": "https://t.me/busqueda_vzla_temblor_bot",
        "descripcion": "Bot de Telegram te ayuda a encontrar a familiares ingresados en hospitales tras el sismo.",
        "tags": [
            "Desaparecidos",
            "Encontrados",
            "Recursos y Herramientas",
            "Atendidos en Hospitales"
        ],
        "id": 270
    },
    {
        "nombre": "Build for Venezuela",
        "url": "https://build4venezuela.com/es",
        "descripcion": "Evento hackathón que invita a pensar y construir soluciones tecnológicas en apoyo a Venezuela ante el terremoto.",
        "tags": [
            "Ayuda General"
        ],
        "id": 237
    },
    {
        "nombre": "Busca en listas Vzla",
        "url": "https://buscaenlistasvzla.info",
        "descripcion": "Escribe nombre, apellido o cédula — los buscaremos en las listas de hospitales y refugios que tenemos.",
        "tags": [
            "Encontrados"
        ],
        "id": 201
    },
    {
        "nombre": "Búscame",
        "url": "https://buscame.info",
        "descripcion": "Plataforma humanitaria para reunir familias separadas por el terremoto en Venezuela. Pensada sobre todo para quienes no pueden decir quiénes son: personas que no hablan o no recuerdan su nombre. Por eso el rostro es clave, el sistema reconoce la cara y la compara aunque no haya un nombre.",
        "tags": [
            "Desaparecidos",
            "Encontrados"
        ],
        "id": 217
    },
    {
        "nombre": "Búsqueda de Estudiantes de la UCV (Sistema de Aparecidos)",
        "url": "https://ucv-aparecidos.vercel.app",
        "descripcion": "Centralización de información sobre estudiantes de la UCV afectados por el sismo. Reporta desaparecidos, confirma apariciones y ayuda a reunir familias.",
        "tags": [
            "Desaparecidos",
            "Encontrados"
        ],
        "id": 225
    },
    {
        "nombre": "Camapaña de Donaciones | Misiones Salesianas",
        "url": "https://misionessalesianas.org/emergencia-terremotos-en-venezuela",
        "descripcion": "Desde MISIONES SALESIANAS activamos la ayuda de primera emergencia para acompañar a las familias, a los niños, niñas y jóvenes, y a las comunidades afectadas por el terremoto.",
        "tags": [
            "Donaciones"
        ],
        "id": 284
    },
    {
        "nombre": "Campaña Airbnb Venezuela",
        "url": "https://news.airbnb.com/ea/airbnb-org-ofrece-alojamiento-para-personal-de-emergencia-tras-los-terremotos-en-venezuela",
        "descripcion": "Airbnb.org está proporcionando alojamiento de emergencia gratuito a equipos que apoyan labores de ayuda en Venezuela tras dos terremotos de gran magnitud.",
        "tags": [
            "Refugios"
        ],
        "id": 189
    },
    {
        "nombre": "Campaña AlumnusUSB",
        "url": "https://alumnusb.org/ayuda-tras-terremoto",
        "descripcion": "Queremos apoyar a las comunidades alrededor de nuestras sedes del litoral y Sartenejas, y estamos coordinando tanto la recolección de fondos como la evaluación de las necesidades específicas: desde lo inmediato —comida, medicamentos— hasta la recuperación posterior para ayudar a las personas que perdieron sus viviendas.",
        "tags": [
            "Ayuda General",
            "Donaciones"
        ],
        "id": 186
    },
    {
        "nombre": "Campaña de Apoyo de Somos Quedate (Hospedaje en Venezuela)",
        "url": "https://ayuda.quedate.net",
        "descripcion": "Creamos esta web para hacer visible los refujios temporales y los centros de acopio totalmente sin fines de lucro registra los centros de ayuda",
        "tags": [
            "Centros de Acopio",
            "Refugios"
        ],
        "id": 199
    },
    {
        "nombre": "Campaña de Donaciones - Banco Venezolano de Crédito",
        "url": "https://cb.venezolano.com/pagoVPagosStandaloneAction.do?cobCode=dvc",
        "descripcion": "En respuesta a la emergencia provocada por los terremotos, Venezolano de Crédito ha habilitado un enlace para recibir donaciones. Lee más sobre esta información aquí: https://www.instagram.com/venezolanodecredito/",
        "tags": [
            "Donaciones"
        ],
        "id": 183
    },
    {
        "nombre": "Campaña de Donaciones - SUNRISAS",
        "url": "https://fundraise.sunrisas.org/campaign/815513/donate",
        "descripcion": "En Sun.Risas, estamos activando nuestra red de respuesta a emergencias para brindar asistencia inmediata a las comunidades más afectadas. Trabajando codo a codo con socios y voluntarios locales de confianza, nos centraremos en proporcionar recursos esenciales, coordinar las labores de socorro y garantizar que el apoyo llegue a quienes lo necesitan de forma rápida y responsable.",
        "tags": [
            "Donaciones",
            "Centros de Acopio"
        ],
        "id": 209
    },
    {
        "nombre": "Campaña de Donaciones - UNICEF España",
        "url": "https://colabora.unicef.es/ayudavenezuela",
        "descripcion": "Dos fuertes terremotos han devastado Venezuela. Miles de familias lo han perdido todo y los niños y niñas son los más vulnerables. UNICEF ya está actuando en el país, pero el nivel de catástrofe es enorme y necesitamos toda la ayuda posible. Súmate a La Vecina Rubia y UNICEF para ayudar a los niños y niñas en el momento que más nos necesitan. Dona ahora y salva vidas.",
        "tags": [
            "Donaciones"
        ],
        "id": 210
    },
    {
        "nombre": "Campaña de Donaciones - Yummy Rides",
        "url": "https://dona.yummyrides.com",
        "descripcion": "Suma tu donación desde dentro y fuera de Venezuela, y ayuda a quienes más lo necesitan.",
        "tags": [
            "Donaciones"
        ],
        "id": 173
    },
    {
        "nombre": "Campaña de Donaciones GlobalGiving – Venezuela Earthquake Relief Fund",
        "url": "https://globalgiving.org/projects/venezuela-earthquake-relief-fund",
        "descripcion": "Fondo internacional que canaliza donaciones a organizaciones locales de salud, refugio, agua y alimentos.",
        "tags": [
            "Donaciones"
        ],
        "id": 264
    },
    {
        "nombre": "Campaña de Donaciones Impact Hub Caracas",
        "url": "https://zeffy.com/en-US/donation-form/help-the-impact-hub-caracas-community-recover-from-the-earthquakes",
        "descripcion": "Help the Impact Hub Caracas community access — and provide — life-saving resources and regain stability after the earthquakes. Every contribution, of any size, strengthens this resilient community so they can keep providing rescue efforts and createimpact where it’s needed most.",
        "tags": [
            "Donaciones"
        ],
        "id": 288
    },
    {
        "nombre": "Campaña de Donaciones | Alimenta la solidaridad",
        "url": "https://donate.alimentalasolidaridad.org/campaign/815565/donate",
        "descripcion": "Activamos nuestra red humanitaria para acompañar a las comunidades afectadas por el terremoto y llevar ayuda donde más se necesita.",
        "tags": [
            "Donaciones"
        ],
        "id": 235
    },
    {
        "nombre": "Campaña de Donaciones | Médicos del Mundo",
        "url": "https://medicosdelmundo.org/donacion-ong/campana/terremoto-venezuela",
        "descripcion": "Donaciones para atención médica de emergencia con equipos presentes en el país. Nuestros proyectos se centran, desde hace 7 años que estamos en el país, en un enfoque de salud, nutrición y protección de la salud mental y psicosocial, en los estados de Apure, Sucre y Táchira. También atendemos casos de violencia de género, brindando atención y realizando seguimiento a lo largo del tiempo.",
        "tags": [
            "Donaciones"
        ],
        "id": 266
    },
    {
        "nombre": "Campaña de Donaciones | World Central Kitchen",
        "url": "https://wck.org/es/relief/wck-en-venezuela-despues-de-terremotos-consecutivos",
        "descripcion": "Dos poderosos terremotos azotaron Venezuela y derrumbaron edificios en la capital de Caracas y comunidades costeras de La Guaira. Los temblores provocaron conmoción en varios estados. El equipo de WCK está trabajando con socios de larga data en el país para apoyar a las familias afectadas.",
        "tags": [
            "Donaciones"
        ],
        "id": 243
    },
    {
        "nombre": "Campaña de Donación de Cáritas Internationalis",
        "url": "https://donate.caritas.org/venezuela",
        "descripcion": "Donaciones internacionales para la respuesta de Cáritas Venezuela en terreno.",
        "tags": [
            "Centros de Acopio",
            "Donaciones"
        ],
        "id": 239
    },
    {
        "nombre": "Campaña de Donación para Desplegar Puntos de Conexión a Internet y Recarga de Celulares | VESinFiltro y Asociación Conexión Segura y Libre",
        "url": "https://gofundme.com/f/internet-for-rescuers-and-earthquake-victims-in-venezuela",
        "descripcion": "Ayúdanos a desplegar más puntos de internet satelital con generadores para recargar celulares, al servicio de rescatistas, médicos, voluntarios y los afectados del terremoto. Tu donación ayudará a cubrir equipos de internet satelital, planes de servicio, generadores, baterías o combustible, logística y transporte.",
        "tags": [
            "Donaciones"
        ],
        "id": 277
    },
    {
        "nombre": "Campaña Héroes de Yummy Rides para Traslados Gratis",
        "url": "https://heroes.yummyrides.com",
        "descripcion": "Queremos apoyar a quienes trabajan en la primera línea. Traslados gratis desde y hacia donde lo necesiten. Utilizando la plataforma Yummy RIdes",
        "tags": [
            "Transporte y Logística"
        ],
        "id": 236
    },
    {
        "nombre": "Campañas GoFundMe - Donaciones para Venezuela",
        "url": "https://gofundme.com/c/act/venezuela-earthquake-relief-es",
        "descripcion": "Muchas personas fallecieron trágicamente después de que dos grandes terremotos azotaran a Venezuela, hiriendo a miles y dejando hogares y negocios devastados. La comunidad de GoFundMe se está uniendo para ayudar a las personas a reconstruir sus vidas y recuperarse. Dona hoy a las recaudaciones verificadas de ayuda por los terremotos en Venezuela.",
        "tags": [
            "Donaciones"
        ],
        "id": 212
    },
    {
        "nombre": "Caracas Ayuda",
        "url": "https://caracasayuda.com",
        "descripcion": "Mapa interactivo de agua, comida, refugios, hospitales y puntos de ayuda en Caracas, con caducidad automática de los reportes.",
        "tags": [
            "Desaparecidos",
            "Encontrados",
            "Centros de Acopio",
            "",
            "Refugios",
            "Recursos y Herramientas",
            "Rescate y Apoyo Físico",
            ""
        ],
        "id": 263
    },
    {
        "nombre": "Caritas Venezuela - Donaciones",
        "url": "https://caritasvenezuela.org/donaciones",
        "descripcion": "«Ayúdanos Ayudar» Tú puedes ayudar a sostener el trabajo que Cáritas de Venezuela realiza mediante el esfuerzo de más de 30 mil voluntarios que prestan sus servicios a la población más vulnerable en toda Venezuela.",
        "tags": [
            "Donaciones",
            "Voluntarios"
        ],
        "id": 174
    },
    {
        "nombre": "Censo de emergencia: Población TEA afectada por el terremoto (24 de junio de 2026)",
        "url": "https://docs.google.com/forms/d/e/1FAIpQLSd8J8QcqHyNAu2ryh5Mxht2lT39UCg-i0O6Lzue9Mmsk_G5dg/viewform",
        "descripcion": "Este censo tiene como objetivo identificar y priorizar la atención de personas con Trastorno del Espectro Autista (TEA) y sus familias afectadas por el reciente sismo. La información recolectada será canalizada con brigadas de búsqueda, cuerpos de salud, apoyo psicológico e insumos de regulación sensorial. Por favor, complete los datos con la mayor precisión posible.",
        "tags": [
            "Ayuda General",
            "Psicología"
        ],
        "id": 280
    },
    {
        "nombre": "Centros Ayuda Venezuela | Centros de Acopio en distintos países",
        "url": "https://centrosayudavenezuela.org",
        "descripcion": "Directorio centralizado de puntos a nivel internacional donde puedes llevar donaciones para apoyar a las personas damnificadas. Busca por país, ciudad, organizacion o tipo de insumo.",
        "tags": [
            "Centros de Acopio"
        ],
        "id": 181
    },
    {
        "nombre": "Centros de Acopio a nivel Internacional | Centros de Acopio VZLA",
        "url": "https://centrosdeacopiovzla.com",
        "descripcion": "Directorio abierto a nivel internacional para apoyar tras los dos sismos de magnitud 7.2 y 7.5 del 24 de junio en venezuela. Elige tu país, y tu estado para ver los centros activos, qué reciben y cómo llegar.",
        "tags": [
            "Centros de Acopio"
        ],
        "id": 279
    },
    {
        "nombre": "Centros de Acopio en Barquisimeto, Lara",
        "url": "https://centros-acopio-barquisimeto.vercel.app",
        "descripcion": "Un directorio de todos los centros de acopio de Barquisimeto. en un solo lugar. Si quieres colaborar con insumos médicos, comida o ropa, pero no sabes a dónde ir ni qué llevar exactamente, esta es la solución: encuentra el centro de acopio más cercano en Barquisimeto de forma totalmente gratuita y centralizada.",
        "tags": [
            "Centros de Acopio",
            "Mascotas y Animales"
        ],
        "id": 233
    },
    {
        "nombre": "CIVIS Venezuela",
        "url": "https://civisvenezuela.com",
        "descripcion": "Plataforma de apoyo ciudadano para emergencia: búsqueda de personas desaparecidas, reportes de daños, mapa de riesgos, puntos de abastecimiento, réplicas/sismos, números de emergencia y atención por WhatsApp con agentes de IA",
        "tags": [
            "Ayuda General",
            "Recursos y Herramientas",
            "Centros de Acopio",
            "Daños Estructurales"
        ],
        "id": 274
    },
    {
        "nombre": "Colegio de Ingenieros de Venezuela (CIV)",
        "url": "https://instagram.com/civoficial",
        "descripcion": "Brigadas e iniciativas de ingenieros para inspección de habitabilidad e infraestructura crítica tras el sismo (perfil oficial).",
        "tags": [
            "Daños Estructurales"
        ],
        "id": 241
    },
    {
        "nombre": "Coliseo de La Urbina - Refugio",
        "url": "https://x.com/ReporteYa/status/2070628090993082623",
        "descripcion": "El Coliseo de La Urbina está ubicado en la Prolongación de la avenida El Samán, urbanización La Urbina, Municipio Sucre del Estado Miranda. Contacto: https://www.instagram.com/p/DaEOlQbxTLG/",
        "tags": [
            "Refugios"
        ],
        "id": 196
    },
    {
        "nombre": "Contingencia Nacional | Campaña de Yummy Rides",
        "url": "https://sos.yummyrides.com",
        "descripcion": "Plataforma de coordinación de ayuda de Yummy tras el terremoto del 24 de junio de 2026 en Venezuela. Reporta daños y encuentra recursos oficiales.",
        "tags": [
            "Desaparecidos",
            "Encontrados",
            "Atendidos en Hospitales",
            "Servicios",
            "Refugios",
            "Ayuda General",
            "Centros de Acopio"
        ],
        "id": 221
    },
    {
        "nombre": "creea.ve - Iniciativa abierta para Impresión 3D de Férulas artesanales para dedos, manos y antebrazos.",
        "url": "https://instagram.com/reels/DaBuEz8PypK",
        "descripcion": "Si tienes una impresora 3D escríbeme te comparto los archivos es momento de actuar para ayudar.",
        "tags": [
            "Recursos y Herramientas",
            "Salud General"
        ],
        "id": 177
    },
    {
        "nombre": "De Mano en Mano - Dona Insumos",
        "url": "https://demanoenmanove.org",
        "descripcion": "Esta página muestra lo que piden hospitales, refugios y comunidades. Es de solo lectura: mira qué hace falta y, si puedes, llévalo directamente al lugar.",
        "tags": [
            "Servicios",
            "Ayuda General",
            "Donaciones"
        ],
        "id": 222
    },
    {
        "nombre": "Desaparecidos Venezuela",
        "url": "https://desaparecidosvenezuela.com",
        "descripcion": "Esta plataforma de reporte ciudadano es gratuita y para todos. Si buscas a un ser querido o quieres avisar que estás a salvo, regístralo aquí y compártelo. Entre todos los encontramos.",
        "tags": [
            "Desaparecidos"
        ],
        "id": 245
    },
    {
        "nombre": "DesaparecidosTerremotoVenezuela",
        "url": "https://desaparecidosterremotovenezuela.com",
        "descripcion": "Esta es una herramienta ciudadana para encontrar personas desaparecidas. Ante una emergencia médica, llama a los organismos de rescate. Verifica siempre la información antes de difundirla.",
        "tags": [
            "Desaparecidos"
        ],
        "id": 132
    },
    {
        "nombre": "Dividendo Voluntario para la Comunidad",
        "url": "https://dividendovoluntario.org",
        "descripcion": "Centralización de Donaciones. Dividendo Voluntario para la Comunidad. Nos unimos para recaudar insumos de primera necesidad para las comunidades afectadas por los sismos del 24 de junio de 2026, ante la situación de emergencia que estamos viviendo en el país.",
        "tags": [
            "Donaciones"
        ],
        "id": 253
    },
    {
        "nombre": "Dona Venezuela",
        "url": "https://donavenezuela.com",
        "descripcion": "Canaliza ayuda monetaria hacia organizaciones humanitarias verificadas tras el terremoto. Plataforma Aliada de Cáritas, Fe y Alegría y Regnum de Christi Venezuela.",
        "tags": [
            "Donaciones"
        ],
        "id": 278
    },
    {
        "nombre": "Donaciones a Comunidad Fighting Venezuela (Tekken, Smash, Street Fighter, Mortal Kombat, etc)",
        "url": "https://gofundme.com/f/venezuela-fg-community-earthquake-relief?attribution_id=sl%3A008827d3-624c-4b82-9800-5bdb12708a6c&lang=en_US&ts=1782693613",
        "descripcion": "Apoyar en los gastos iniciales de las viviendas de los jugadores de la comunidad que han perdido su hogar y puedan pagar el alquiler de la vivienda nueva, servicios básicos como luz, internet, gas, agua, medicinas, comida. Además de los pagos funerarios de los que fallecieron",
        "tags": [
            "Donaciones"
        ],
        "id": 232
    },
    {
        "nombre": "Donaciones Direct Relief",
        "url": "https://directrelief.org/2026/06/venezuela-earthquake-caracas-damage",
        "descripcion": "Donaciones para suministros médicos de emergencia.Direct Relief is in communication with local and regional organizations about medical needs and will mobilize medical aid deliveries to help address immediate and near-term health requests. The organization has an extensive history of medical support in South America and the Caribbean, including work in coordination with the Pan American Health Organization, the branch of the World Health Organization in the Americas, since 2018, to provide regional medical support during emergencies and support health systems throughout the region.",
        "tags": [
            "Donaciones"
        ],
        "id": 269
    },
    {
        "nombre": "Donaciones | Catholic Relief Services (CRS)",
        "url": "https://crs.org/donate/venezuela-earthquake",
        "descripcion": "Donaciones internacionales canalizadas con Cáritas Venezuela: refugio, alimentos, agua y salud.CRS está trabajando a través de Cáritas Venezuela y la Iglesia local para entregar rápidamente refugio de emergencia, alimentos, agua potable, atención médica y otra ayuda crítica a las personas afectadas.",
        "tags": [
            "Donaciones"
        ],
        "id": 265
    },
    {
        "nombre": "Donar Seguro",
        "url": "https://donarseguro.com",
        "descripcion": "Directorio curado para donar dinero tras el terremoto de Venezuela, organizado por la relación de cada organización con el sismo y por cómo donar seguro desde cualquier parte del mundo.",
        "tags": [
            "Donaciones"
        ],
        "id": 211
    },
    {
        "nombre": "Encontrados VE (Telegram)",
        "url": "https://t.me/encontrados_ve_bot",
        "descripcion": "Bot de Búsqueda: Consulta por cedula/apellido",
        "tags": [
            "Recursos y Herramientas"
        ],
        "id": 256
    },
    {
        "nombre": "Encuentralos - Tecnosoft.dev",
        "url": "https://encuentralos.tecnosoft.dev",
        "descripcion": "Herramienta ciudadana, gratuita y sin fines de lucro para reportar y ayudar a localizar personas desaparecidas tras el sismo. Sin registro: tu reporte aparece al instante.",
        "tags": [
            "Desaparecidos"
        ],
        "id": 137
    },
    {
        "nombre": "Encuentrame Vzla",
        "url": "https://encuentramevzla.com",
        "descripcion": "Registro centralizado de personas encontradas y atendidas en hospitales. Busca por nombre o cédula a una persona ingresada en un hospital de Venezuela tras el sismo. Con privacidad mediada: solo te indicamos el hospital donde hay una coincidencia.",
        "tags": [
            "Desaparecidos",
            "Atendidos en Hospitales"
        ],
        "id": 171
    },
    {
        "nombre": "Enlaza Venezuela",
        "url": "https://enlazavenezuela.com",
        "descripcion": "Conectamos maquinaria, herramientas y voluntarios para búsqueda y rescate tras el terremoto. También refugio, alimentos y salud. Caracas y La Guaira.",
        "tags": [
            "Voluntarios",
            "Ayuda General",
            "Rescate y Apoyo Físico"
        ],
        "id": 172
    },
    {
        "nombre": "EscuchaActiva",
        "url": "https://escuchactiva.com",
        "descripcion": "Una iniciativa de apoyo psicológico voluntario tras el terremoto en Venezuela. No es un servicio de emergencia. Si hay riesgo de vida, contacta a los servicios de emergencia de tu país directamente.",
        "tags": [
            "Psicología",
            "Voluntarios"
        ],
        "id": 200
    },
    {
        "nombre": "Federación de Psicólogos de Venezuela",
        "url": "https://instagram.com/fpv_ve",
        "descripcion": "Federación que representa a los profesionales de Psicología en Venezuela de acuerdo a la legislación vigente para el ejercicio de dicha ocupación. Con información y herramientas de atención gratuita en salud mental luego del terremoto del 24 de Junio 2026.",
        "tags": [
            "Psicología"
        ],
        "id": 150
    },
    {
        "nombre": "Fondo de Donaciones en Criptomonedas Academia BTC de la UCAB",
        "url": "https://btc.academiasucab.com/fondo-emergencia-sismo-vzla-2026",
        "descripcion": "Los terremotos del 24 de junio de 2026 dejaron a Venezuela frente a una de las peores tragedias sísmicas en más de un siglo. La Guaira fue declarada zona de desastre: edificios colapsados, cientos de heridos, personas atrapadas bajo escombros. Desde la Academia Blockchain, Trading & Cripto UCAB (Academia BTC), abrimos este fondo de emergencia para canalizar ayuda rápida, directa y verificable.",
        "tags": [
            "Centros de Acopio",
            "Salud General",
            "Rescate y Apoyo Físico",
            "Transporte y Logística",
            "Psicología",
            "Donaciones"
        ],
        "id": 272
    },
    {
        "nombre": "Fundación Lealtad",
        "url": "https://fundacionlealtad.org/terremotos-venezuela-respuesta-ong-acreditadas",
        "descripcion": "Listado de ONG acreditadas y verificables que responden al terremoto en Venezuela con iniciativas de donaciones y apoyo.",
        "tags": [
            "Donaciones"
        ],
        "id": 244
    },
    {
        "nombre": "Grupo Ávila - Inspección estructural gratuita",
        "url": "https://wa.me/584241993167",
        "descripcion": "Evaluación presencial gratuita de estructuras con daños visibles en Chacao, Baruta, El Hatillo y Sucre (contacto por WhatsApp) | Más información en: https://grupo-avila-inspecciones.vercel.app/",
        "tags": [
            "Daños Estructurales"
        ],
        "id": 242
    },
    {
        "nombre": "Habitable",
        "url": "https://habitable.lovable.app",
        "descripcion": "Iniciativa independiente de respuesta civil para registro de Ingenieros Voluntarios para evaluación de daño en edificaciones y reportar edificaciones con daños.",
        "tags": [
            "Daños Estructurales"
        ],
        "id": 141
    },
    {
        "nombre": "Hazlo Hoy · Venezuela Ayuda",
        "url": "https://terremoto.hazlohoy.org",
        "descripcion": "Este es un proyecto comunitario y sin fines de lucro. Si quieres colaborar - desarrollo, datos, difusión o verificación de información.",
        "tags": [
            "Centros de Acopio",
            "Desaparecidos",
            "Ayuda General",
            "Daños Estructurales",
            "Encontrados"
        ],
        "id": 163
    },
    {
        "nombre": "Hogar Bambi - Donaciones",
        "url": "https://instagram.com/hogarbambi",
        "descripcion": "Ante la situación generada por el reciente sismo, en Hogar Bambi nos preparamos para brindar resguardo y atención integral a los niños, niñas y adolescentes remitidos por El Consejo de Protección, como a quienes ya habitan en nuestras casas. ¡HOY TU AYUDA TAMBIÉN HACE LA DIFERENCIA!",
        "tags": [
            "Refugios",
            "Donaciones"
        ],
        "id": 208
    },
    {
        "nombre": "Hospitales en Venezuela",
        "url": "https://hospitalesenvenezuela.com",
        "descripcion": "Esta app de reporte ciudadano es para encontrar a quien está ingresado en un hospital o centro de salud.",
        "tags": [
            "Encontrados",
            "Atendidos en Hospitales"
        ],
        "id": 140
    },
    {
        "nombre": "HuellasCan",
        "url": "https://huellascan.com/terremoto",
        "descripcion": "Plataforma pública de emergencia para reunir perritos y gatitos extraviados tras el sismo de anoche. Publica de forma instantánea sin registros ni contraseñas.",
        "tags": [
            "Mascotas y Animales"
        ],
        "id": 153
    },
    {
        "nombre": "Info Ayuda Venezuela",
        "url": "https://infoayudavenezuela.site",
        "descripcion": "Listas de Centros de Acopio por estados a nivel nacional y de forma internacional",
        "tags": [
            "Centros de Acopio"
        ],
        "id": 252
    },
    {
        "nombre": "Info Salud Sismo Venezuela 2026",
        "url": "https://infosaludsismovzla2026.com",
        "descripcion": "Esta página ha sido creada con el propósito de apoyar en el registro y búsqueda de personas que ingresaron a unidades hospitalarias en Caracas tras el terremoto en Venezuela. Aquí encontrará información, espacios para correcciones y formas de colaborar. Gracias por acompañarnos en este esfuerzo solidario.",
        "tags": [
            "Encontrados",
            "Atendidos en Hospitales"
        ],
        "id": 191
    },
    {
        "nombre": "Iniciativa de Voluntarios | Topos Digitales",
        "url": "https://whatsapp.com/channel/0029VbCq1745Ui2cD3SHpc24",
        "descripcion": "Nuestra misión es llevar la información hasta las víctimas del terremoto. Aquí centralizaremos enlaces, plataformas, hospitales, centros de acopio, recursos y actualizaciones para que cada voluntario pueda ayudar directamente a las familias en los grupos de WhatsApp de las comunidades afectadas. No esperes que las víctimas lleguen a la información. Ve tú hacia ellas.",
        "tags": [
            "Refugios",
            "Ayuda General",
            "Voluntarios"
        ],
        "id": 275
    },
    {
        "nombre": "Inspecciones gratuitas - Ingtek",
        "url": "https://instagram.com/ingtek_ve",
        "descripcion": "Especialistas en construcción de OBRAS CIVILES y REMODELACIONES de viviendas, locales comerciales y oficina. Brindando inspecciones gratuitas para daños del terremoto 24 Junio 2026.",
        "tags": [
            "Daños Estructurales"
        ],
        "id": 145
    },
    {
        "nombre": "International Medical Corps",
        "url": "https://internationalmedicalcorps.org/emergency-response/venezuela-earthquakes",
        "descripcion": "Donaciones para atención médica de emergencia en terreno. International Medical Corps trabaja en Venezuela desde 2019. Desde entonces, nuestro equipo, que ofrece programas de salud, nutrición, salud mental y apoyo psicosocial, seguridad alimentaria y medios de subsistencia, protección infantil y agua, saneamiento e higiene, ha llegado a más de 3,7 millones de personas en 10 estados, ha apoyado a más de 120 centros de salud y ha distribuido medicamentos, suministros médicos y equipos por un valor de casi 2 millones de dólares.",
        "tags": [
            "Donaciones"
        ],
        "id": 267
    },
    {
        "nombre": "Intérpretes voluntarios EIM-UCV",
        "url": "https://docs.google.com/forms/d/e/1FAIpQLScXzwYRf6lJPfcJaKdAMDbeehH1pbMkU7QEq5UTSYOpWQubOQ/viewform",
        "descripcion": "Estamos organizando un equipo de intérpretes voluntarios para misiones internacionales de rescate",
        "tags": [
            "Servicios",
            "Ayuda General"
        ],
        "id": 234
    },
    {
        "nombre": "LAEnvíos | Traslado Gratuito de Paquetes de Donaciones En Venezuela para Ayudar",
        "url": "https://instagram.com/p/DaAzCRKFX5C",
        "descripcion": "Tras el reciente Terremoto, nuestros hermanos en Caracas y La Guaira nos necesitan más que nunca. En LAE ponemos a disposición toda nuestra flota nacional para trasladar tus donaciones de forma rápida y completamente gratuita hasta las zonas afectadas. ¿Cómo puedes apoyar? Acércate a cualquiera de nuestras sedes receptoras a nivel nacional y dona",
        "tags": [
            "Transporte y Logística"
        ],
        "id": 281
    },
    {
        "nombre": "Lista de Refugiados en el campo de golf de Caraballeda.",
        "url": "https://x.com/JJFlores94/status/2070669132450668905",
        "descripcion": "Ver más información aquí: https://www.instagram.com/caraballedagyc/reels/",
        "tags": [
            "Encontrados"
        ],
        "id": 195
    },
    {
        "nombre": "Listado de Atendidos en Hospital Perez Carreño",
        "url": "https://x.com/Oscarztop/status/2070665415399747945/photo/4",
        "descripcion": "Calle La Industria, Caracas 1020, Distrito Capital",
        "tags": [
            "Encontrados",
            "Atendidos en Hospitales"
        ],
        "id": 197
    },
    {
        "nombre": "Listado de sobrevivientes atendidos en el Hospital Militar Universitario Doctor Carlos Arvelo de Caracas",
        "url": "https://drive.google.com/drive/folders/1bg1l3Axdx3ghbvbNWmg7ZU3mgnGvr67K",
        "descripcion": "Listado de sobrevivientes atendidos en el Hospital Militar Universitario Doctor Carlos Arvelo de Caracas",
        "tags": [
            "Atendidos en Hospitales",
            "Encontrados"
        ],
        "id": 180
    },
    {
        "nombre": "Listados de personas encontradas y atendidas en centros de salud",
        "url": "https://drive.google.com/drive/u/0/folders/1o36ifaRz45kAs5rKzci49aD0mP5JB_YI",
        "descripcion": "Listados de personas encontradas y atendidas en centros de salud",
        "tags": [
            "Atendidos en Hospitales",
            "Encontrados"
        ],
        "id": 179
    },
    {
        "nombre": "Localiza Pacientes (Sistema Oficial)",
        "url": "https://localizapacientes.com",
        "descripcion": "Sistema oficial de registro adscrito a instituciones nacionales para consultar la ubicación de personas atendidas tras el terremoto.",
        "tags": [
            "Encontrados",
            "Atendidos en Hospitales",
            "Ente Oficial"
        ],
        "id": 134
    },
    {
        "nombre": "Localizados Venezuela",
        "url": "https://localizadosvenezuela.com",
        "descripcion": "Busqueda centralizada de personas localizadas tras el sismo en Venezuela. Solo localizados, no para reportar desaparecidos.",
        "tags": [
            "Encontrados",
            "Atendidos en Hospitales"
        ],
        "id": 190
    },
    {
        "nombre": "Mandá plata a tu familia en Venezuela",
        "url": "https://envioya.saldoar.com",
        "descripcion": "Te decimos la forma de que les lleguen más bolívares, vía Pago Móvil.",
        "tags": [
            "Servicios",
            "Donaciones",
            "Recursos y Herramientas"
        ],
        "id": 231
    },
    {
        "nombre": "Mascotas de Venezuela",
        "url": "https://mascotasporvenezuela.com",
        "descripcion": "Una plataforma para reunir a las mascotas perdidas con sus familias tras el terremoto. Reporta, busca y comparte: cada reencuentro empieza con un gesto de esperanza.",
        "tags": [
            "Mascotas y Animales"
        ],
        "id": 165
    },
    {
        "nombre": "MascotasVZLA - Encuentra a Tu Mascota",
        "url": "https://mascotasvzla.org",
        "descripcion": "Mapa colaborativo para reportar mascotas perdidas, encontradas o resguardadas en Venezuela después de los terremotos del 24 de junio de 2026.",
        "tags": [
            "Mascotas y Animales"
        ],
        "id": 229
    },
    {
        "nombre": "MiGenteVe - Patitas a Salvo",
        "url": "https://migenteve.com",
        "descripcion": "Registra mascotas perdidas, encontradas o con necesidad médica después de un terremoto. La comunidad puede buscar por zona, compartir casos y ubicar reportes en el mapa.",
        "tags": [
            "Mascotas y Animales"
        ],
        "id": 155
    },
    {
        "nombre": "Médicos Por Venezuela - Atención Gratuita",
        "url": "https://medicosporvenezuela.org",
        "descripcion": "Servicio gratuito para personas que necesitan orientación médica y psicológica.",
        "tags": [
            "Servicios",
            "Psicología",
            "Salud General"
        ],
        "id": 216
    },
    {
        "nombre": "Pacientes Terremoto Vzla",
        "url": "https://pacientesterremotovzla.lovable.app",
        "descripcion": "Busca a tus familiares, reporta nuevos casos y mantén actualizada la información de los centros de salud que atienden a los afectados por el terremoto.",
        "tags": [
            "Encontrados",
            "Atendidos en Hospitales"
        ],
        "id": 139
    },
    {
        "nombre": "Patas a Casa",
        "url": "https://patasacasa.com",
        "descripcion": "Hecho por la comunidad para ayudar a que las mascotas vuelvan a casa. Comparte este directorio con quien lo necesite.",
        "tags": [
            "Mascotas y Animales"
        ],
        "id": 164
    },
    {
        "nombre": "Patitas a Salvo",
        "url": "https://patitasasalvovenezuela.org",
        "descripcion": "Respuesta animal post-terremoto. Búsqueda de Mascotas.",
        "tags": [
            "Mascotas y Animales"
        ],
        "id": 170
    },
    {
        "nombre": "Patitas Perdidas Venezuela",
        "url": "https://patitasperdidasvenezuela.org",
        "descripcion": "Registro centralizado de mascotas perdidas tras el terremoto en Venezuela. Gratis, abierto y para todos.",
        "tags": [
            "Mascotas y Animales"
        ],
        "id": 154
    },
    {
        "nombre": "Pa’Lante | Una red ciudadana",
        "url": "https://palantevenezuela.org",
        "descripcion": "Conecta necesidades con quienes pueden ayudar: registro de voluntarios y profesionales, casos urgentes, albergues y sus necesidades, mapa en vivo y movilización por WhatsApp. Enlaza a las plataformas de personas no localizadas.",
        "tags": [
            "Refugios",
            "Ayuda General",
            "Centros de Acopio",
            "Voluntarios"
        ],
        "id": 261
    },
    {
        "nombre": "Previasis - Telemedicina",
        "url": "https://instagram.com/p/DZ_XM2eNiZm?hl=en",
        "descripcion": "Este servicio forma parte de la atención médica que ofrece Previasís, hoy GRATIS para los afectados por el sismo que sacudió a nuestros país por el terremoto 2026.",
        "tags": [
            "Salud General"
        ],
        "id": 149
    },
    {
        "nombre": "Primeros Auxilios Psicológicos Falcón y Zulia | Azul Positivo",
        "url": "https://instagram.com/p/DaEl5beM5da",
        "descripcion": "Primeros auxilios psicológicos gratuitos para los estados Falcón y Zulia por parte de Azul Positivo. Estos servicios están didiridos a las personas afectadas (directa e indirectamente por la crisis generada por el desastre natural y social) buscando de esta manera contribuir a la salud mental e integral.",
        "tags": [
            "Psicología"
        ],
        "id": 286
    },
    {
        "nombre": "PsicoMapa / PsicoData (UCAB)",
        "url": "https://psicodatavzla.ucab.edu.ve",
        "descripcion": "Recursos psicológicos y mapa de más de 100 organizaciones de atención psicológica por estado en Venezuela; la UCAB ofrece además primeros auxilios psicológicos gratuitos por teléfono.",
        "tags": [
            "Recursos y Herramientas"
        ],
        "id": 238
    },
    {
        "nombre": "Psicólogos sin Fronteras",
        "url": "https://x.com/psfvenezuela/status/2070270992723665289/photo/2",
        "descripcion": "Psicólogos Sin Fronteras - Venezuela A.C. Asistencia psicosocial a personas afectadas por crisis y duelos. Atención Telefónica Gratuita para Venezolanos en el Exterior.",
        "tags": [
            "Psicología"
        ],
        "id": 151
    },
    {
        "nombre": "Punto de Apoyo Venezuela",
        "url": "https://puntodeapoyovenezuela.com",
        "descripcion": "Mapa colaborativo de emergencia tras el terremoto de Venezuela. Centros de acopio, hospitales con donantes, ayuda ciudadana en tiempo real. Gratis y sin registro.",
        "tags": [
            "Servicios",
            "Ayuda General",
            "Centros de Acopio"
        ],
        "id": 187
    },
    {
        "nombre": "Radar VZLA",
        "url": "https://radarvzla.com",
        "descripcion": "Mapa interactivo de reporte de los daños causados por el terremoto 2026.",
        "tags": [
            "Daños Estructurales"
        ],
        "id": 202
    },
    {
        "nombre": "Reconecta Venezuela - Mapa de Puntos de internet gratuito",
        "url": "https://reconectavenezuela.com",
        "descripcion": "Mapa abierto de puntos de internet satelital gratuito tras el terremoto del 24 de junio de 2026 en Venezuela. Acceso libre para comunicarte y coordinar la ayuda.",
        "tags": [
            "Servicios"
        ],
        "id": 220
    },
    {
        "nombre": "Red Ayuda Venezuela",
        "url": "https://redayudavenezuela.com",
        "descripcion": "Plataforma ciudadana de coordinación territorial para organizar ayuda humana en zonas afectadas de Venezuela.",
        "tags": [
            "Desaparecidos",
            "Centros de Acopio",
            "Mascotas y Animales"
        ],
        "id": 133
    },
    {
        "nombre": "Red de Apoyo Canino",
        "url": "https://instagram.com/reddeapoyocanino",
        "descripcion": "Red veterinaria de apoyo para perros afectados por el sismo en Caracas.",
        "tags": [
            "Mascotas y Animales"
        ],
        "id": 205
    },
    {
        "nombre": "Red de esperanza",
        "url": "https://red-de-esperanza-lime.vercel.app",
        "descripcion": "Sitio web en dónde puedes ver en el mapa personas desaparecidas de cada zona, y se puede reportar específicamente qué se necesita en cada lugar del mapa (rescates, medicinas, comida) en tiempo real. Incluye un chat de conversación por cada uno de los estados del país.",
        "tags": [
            "Desaparecidos",
            "Servicios",
            "Ayuda General",
            "Centros de Acopio",
            "Recursos y Herramientas"
        ],
        "id": 276
    },
    {
        "nombre": "RedQuipu",
        "url": "https://redquipu.com",
        "descripcion": "Plataforma Directorio RedQuipu. Conecta iniciativas, organiza necesidades y consolida información para facilitar una respuesta más coordinada.",
        "tags": [
            "Recursos y Herramientas"
        ],
        "id": 257
    },
    {
        "nombre": "REDSONADORAS: Buscador de personas desaparecidas, localizadas, atendidas y fallecidas tras el terremoto 24J en Venezuela",
        "url": "https://redsonadoras.com/hasta-encontrarles-buscador-de-personas-desaparecidas-localizadas-y-atendidas-tras-el-terremoto-24j-en-venezuela",
        "descripcion": "Este buscador reúne reportes de personas desaparecidas, localizadas, hospitalizadas y fallecidas, con el objetivo de facilitar el acceso a información actualizada en medio de la emergencia.",
        "tags": [
            "Desaparecidos",
            "Encontrados",
            "Atendidos en Hospitales"
        ],
        "id": 214
    },
    {
        "nombre": "Refugio VE",
        "url": "https://refugio-ve.vercel.app",
        "descripcion": "Coordinación ciudadana de registro de Refugios en respuesta al terremoto en Venezuela.",
        "tags": [
            "Refugios"
        ],
        "id": 188
    },
    {
        "nombre": "Reporte Venezuela",
        "url": "https://reportevenezuela.com",
        "descripcion": "Búsqueda de desaparedcidos. Considera datos únicos o no duplicados. Datos compilados de hospitales, refugios e instituciones, y de la comunidad. Los fallecimientos del registro provienen de fuentes verificadas, no de reportes de la comunidad.",
        "tags": [
            "Atendidos en Hospitales",
            "Desaparecidos",
            "Encontrados"
        ],
        "id": 271
    },
    {
        "nombre": "Reportes de Daños por Microsoft AI for Good - HUMANITARIAN DATA EXCHANGE (HDX)",
        "url": "https://data.humdata.org/event/venezuela-earthquake",
        "descripcion": "Dataset y Reportes Técnicos de Daños verificados ocasionados por el terremoto",
        "tags": [
            "Recursos y Herramientas",
            "Daños Estructurales"
        ],
        "id": 249
    },
    {
        "nombre": "Rescate Venezuela",
        "url": "https://rescate-ve.vercel.app",
        "descripcion": "Mapa colaborativo para reportar emergencias, refugios, centros de acopio y buscar personas desaparecidas en Venezuela.",
        "tags": [
            "Rescate y Apoyo Físico",
            "Centros de Acopio",
            "Desaparecidos",
            "Transporte y Logística"
        ],
        "id": 148
    },
    {
        "nombre": "Rescate y Adopción La Manada de Bethoven",
        "url": "https://instagram.com/lamanadadebethoven",
        "descripcion": "Rescate,Rehabilitación y Adopción con estrategias de apoyo ante el terremoto de Junio 2026.",
        "tags": [
            "Mascotas y Animales"
        ],
        "id": 157
    },
    {
        "nombre": "rescate-vzla",
        "url": "https://rescate-vzla.onrender.com",
        "descripcion": "Generar alertas con GPS y coordenadas donde haya gente atrapada o derrumbes. Está lista es pública y está conectada a Google Maps.",
        "tags": [
            "Desaparecidos",
            "Ayuda General",
            "Rescate y Apoyo Físico",
            "Recursos y Herramientas"
        ],
        "id": 228
    },
    {
        "nombre": "RESCATEVENEZUELA Registro de personas desaparecidas",
        "url": "https://rescatevenezuela.info",
        "descripcion": "Iniciativa ciudadana 100% independiente, no vinculada a ningún ente gubernamental ni partido político. Red de apoyo a la localización y reunificación de personas desaparecidas durante situaciones de emergencia con equipos de rescate.",
        "tags": [
            "Desaparecidos",
            "Rescate y Apoyo Físico"
        ],
        "id": 283
    },
    {
        "nombre": "ReservaDoc - Telemedicina Gratuita",
        "url": "https://sos.reservadoc.com",
        "descripcion": "Desde cualquier parte del mundo. Si eres médico en el exterior o en el interior, conéctate y atiende consultas médicas de seguimiento, y descongestiona los hospitales físicos. Videollamada inmediata. Sin descargas. Sin costo.",
        "tags": [
            "Salud General"
        ],
        "id": 224
    },
    {
        "nombre": "Revisa Tu Edificio",
        "url": "https://revisatuedificio.com",
        "descripcion": "Plataforma que conecta con ingenieros colegiados y estudiantes de apoyo dispuestos a evaluar tu edificio, organizados por tu zona. Tu petición es privada: nadie ve tus datos salvo el ingeniero que elijas.",
        "tags": [
            "Daños Estructurales"
        ],
        "id": 142
    },
    {
        "nombre": "Ridery | Campaña Solidaria durante emergencia del Terremoto",
        "url": "https://web.ridery.app",
        "descripcion": "Viajes gratuitos a clínicas y hospitales de Caracas y centros de recepción de ayuda humanitaria.",
        "tags": [
            "Transporte y Logística"
        ],
        "id": 268
    },
    {
        "nombre": "Rigidizador de Cuello Impreso en 3D (Planos)",
        "url": "https://instagram.com/p/DaG75KKxABT",
        "descripcion": "Planos compartidos libre y gratuitamente para crear un Rigidizador de cuello artesanal con Impresión 3D. Planos en Makerwold: 2984480 @montmaker.3d",
        "tags": [
            "Recursos y Herramientas"
        ],
        "id": 223
    },
    {
        "nombre": "SEO for Venezuela",
        "url": "https://seoforvenezuela.com",
        "descripcion": "Iniciativa independiente que incentiva intercambio de servicios profesionales en auditoría de SEO a cambio de Donaciones directas hacia fundaciones verificadas en apoyo a Venezuela ante el Terremoto. Donate to one of the relief funds below, upload your receipt in the form, and I’ll record you a personal 5-minute Loom audit of your website, in English or Spanish",
        "tags": [
            "Donaciones",
            "Servicios"
        ],
        "id": 240
    },
    {
        "nombre": "Servicio Gratuito de Estabilización Psicológica | Barquisimeto (Hospitour)",
        "url": "https://instagram.com/p/DaSqS1ZxPw1",
        "descripcion": "A todos los sobrevivientes, familiares afectados y voluntarios que vivieron de cerca el reciente terremoto y hoy se encuentran en Barquisimeto: en Hospitour abrimos nuestras puertas para ustedes.",
        "tags": [
            "Psicología"
        ],
        "id": 289
    },
    {
        "nombre": "Señalización de Emergencia — Terremoto Venezuela 2026",
        "url": "https://xn--sealizacion-de-emergencia-terremoto-venezuela-2026-zye.framer.website",
        "descripcion": "Diseños de Carteles imprimibles gratuitos para orientar en refugios, puntos de acopio y zonas de respuesta. Gratuitos. Listos para imprimir.",
        "tags": [
            "Recursos y Herramientas"
        ],
        "id": 218
    },
    {
        "nombre": "Sismo Venezuela",
        "url": "https://sismovenezuela.org",
        "descripcion": "Información sobre el sismo y el terremoto en Venezuela, recopilada de forma colaborativa. Los reportes son enviados por la comunidad y no constituyen información oficial.",
        "tags": [
            "Daños Estructurales",
            "Desaparecidos"
        ],
        "id": 166
    },
    {
        "nombre": "SismoAyudaVe - Plataforma de Evaluación Estructural Post-Sismo",
        "url": "https://sismoayudave.com",
        "descripcion": "Plataforma gratuita para evaluar la seguridad de tu vivienda tras el sismo.",
        "tags": [
            "Daños Estructurales"
        ],
        "id": 182
    },
    {
        "nombre": "SIVIV",
        "url": "https://siviv.pages.dev",
        "descripcion": "Sistema de Información de Víctimas. Atendidos en centros hospitalarios.",
        "tags": [
            "Atendidos en Hospitales",
            "Encontrados"
        ],
        "id": 178
    },
    {
        "nombre": "SOS UCV — Atención médica gratuita",
        "url": "https://sosucv.umiasalud.com",
        "descripcion": "Plataforma exclusiva de atención primaria y orientación médica para síntomas leves, dosis de medicamentos y heridas menores. Si su vida corre peligro o sufrió un trauma grave, acuda de inmediato a un centro de salud. No atiende emergencias.",
        "tags": [
            "Salud General"
        ],
        "id": 259
    },
    {
        "nombre": "SOS Venezuela",
        "url": "https://sosenvenezuela.com/sos",
        "descripcion": "Búsqueda de desaparecidos y listas de encontrados. Ubicación de centros de ayuda y hospitales en el mapa. Encuentra el punto de ayuda más cercano.",
        "tags": [
            "Desaparecidos",
            "Encontrados"
        ],
        "id": 203
    },
    {
        "nombre": "SOS Venezuela (net)",
        "url": "https://sosvenezuela.net",
        "descripcion": "Directorio comunitario tras el terremoto: centros de acopio por ciudad y registro de personas heridas o desaparecidas. Agregamos y enlazamos información de la comunidad; no operamos centros.",
        "tags": [
            "Atendidos en Hospitales",
            "Encontrados",
            "Desaparecidos"
        ],
        "id": 247
    },
    {
        "nombre": "Sos Venezuela 2026",
        "url": "https://sosvenezuela2026.com",
        "descripcion": "Reporta daños y busca personas en el mapa en tiempo real.",
        "tags": [
            "Ayuda General",
            "Daños Estructurales",
            "Desaparecidos"
        ],
        "id": 146
    },
    {
        "nombre": "SOSVenezuela",
        "url": "https://sosvenezuela.net/personas",
        "descripcion": "Registro y búsqueda de personas heridas, desaparecidas o a salvo tras el terremoto de Venezuela. Busca a tus seres queridos o reporta a quien estás buscando o que está a salvo.",
        "tags": [
            "Desaparecidos",
            "Ayuda General",
            "Encontrados",
            "Centros de Acopio"
        ],
        "id": 136
    },
    {
        "nombre": "SVMI - Lista de Pacientes Por Hospitales en Caracas y La Guaira",
        "url": "https://dropbox.com/scl/fi/m4fbaw4metvkuay91fi0j/26JUN26-15.12-Pacientes-Consolidados-Hospitales-Venezuela.xlsx?rlkey=0bjem2yymn9q88qumzr33fisz&st=f4kbxhg3&e=3&dl=0",
        "descripcion": "ATENCIÓN - LISTA DE PACIENTES POR HOSPITALES en Caracas y la guaira. Está organizada por hospitales y orden alfabético de apellidos. Permite localizar nombres con el buscador.",
        "tags": [
            "Encontrados",
            "Atendidos en Hospitales"
        ],
        "id": 226
    },
    {
        "nombre": "Te Busco",
        "url": "https://tebusco.app",
        "descripcion": "Registro ciudadano con barra de búsqueda. TeBusco ayuda a las familias a reencontrarse. Registra a quien veas o reporta a quien buscas.",
        "tags": [
            "Desaparecidos"
        ],
        "id": 176
    },
    {
        "nombre": "Terremoto VE",
        "url": "https://terremotove.netlify.app",
        "descripcion": "Mapa ciudadano de apoyo y directorio de recursos.Tras el terremoto, cada reporte cuenta. Este mapa colaborativo registra edificios colapsados y personas desaparecidas para coordinar la búsqueda y la ayuda. Si sabes algo, repórtalo. iniciativas ciudadanas organizadas por categoría. Busca por nombre o filtra para encontrar lo que necesitas.",
        "tags": [
            "Recursos y Herramientas",
            "Desaparecidos",
            "Encontrados",
            "Atendidos en Hospitales",
            "Centros de Acopio",
            "Donaciones",
            "Ayuda General"
        ],
        "id": 248
    },
    {
        "nombre": "Terremoto Venezuela",
        "url": "https://terremotovenezuela.com",
        "descripcion": "Centralizamos información sobre edificios, residencias, hospitales, escuelas, comercios y otras construcciones afectadas por el terremoto ocurrido en Venezuela el 24 de junio de 2026.",
        "tags": [
            "Daños Estructurales"
        ],
        "id": 143
    },
    {
        "nombre": "Terremoto Venezuela - Tiltely",
        "url": "https://venezuela.tiltely.com",
        "descripcion": "Reúne y enlaza canales oficiales que ya existen para búsqueda de desaparecidos. No es un organismo oficial, no recibe dinero y no almacena ningún dato sobre ti.",
        "tags": [
            "Desaparecidos"
        ],
        "id": 135
    },
    {
        "nombre": "The House Project - Donations",
        "url": "https://thehouse-project.org/collections/donate-thp/products/support-the-house-project-make-a-difference-today?variant=49348724228394",
        "descripcion": "At The House Project, we want to bring our community together to provide emergency humanitarian aid to those who need it most. With your donation, we can deliver food, clean water, and hygiene kits—bringing relief, hope, and reminding families that they are not alone.",
        "tags": [
            "Donaciones"
        ],
        "id": 185
    },
    {
        "nombre": "Tilinapp",
        "url": "https://tilinapp.com/inspeccion-emergencia",
        "descripcion": "Por el terremoto del 24 de junio de 2026, la App Tilin puede ayudarte a registrar daños con fotos y videos y orientarte por este chat con una evaluación técnica virtual preliminar. La coordinación operativa puede tardar más de lo habitual.",
        "tags": [
            "Daños Estructurales"
        ],
        "id": 144
    },
    {
        "nombre": "Todos con Venezuela",
        "url": "https://todosconvzla.com",
        "descripcion": "Reporta desaparecidos, daños, temblores, refugios y puntos de ayuda. Verifica antes de compartir.",
        "tags": [
            "Desaparecidos",
            "Centros de Acopio"
        ],
        "id": 169
    },
    {
        "nombre": "Tu Gruero",
        "url": "https://instagram.com/p/DaBbKqdJWkj",
        "descripcion": "Asistencia vial motorizada Gratuita en CARACAS de la mano de Tu Gruero.",
        "tags": [
            "Transporte y Logística"
        ],
        "id": 152
    },
    {
        "nombre": "UN Crisis Relief – Venezuela",
        "url": "https://crisisrelief.un.org/en/donate-venezuela-crisis",
        "descripcion": "Fondo humanitario de la ONU para la respuesta de emergencia en apoyo a las afectaciones del terremoto en Venezuela",
        "tags": [
            "Donaciones"
        ],
        "id": 262
    },
    {
        "nombre": "UnidosVenezuela",
        "url": "https://unidosvenezuela.io/directorio",
        "descripcion": "Directorio y Mapa de emergencia para centralizar reportes, personas, centros, fuentes y aportes relacionados con la emergencia en Venezuela.",
        "tags": [
            "Desaparecidos",
            "Ayuda General",
            "Centros de Acopio",
            "Daños Estructurales",
            "Rescate y Apoyo Físico"
        ],
        "id": 219
    },
    {
        "nombre": "VE Earthquake Relief",
        "url": "https://venezuela-earthquake-relief.netlify.app",
        "descripcion": "Agregador de Donaciones en inglés.",
        "tags": [
            "Donaciones"
        ],
        "id": 254
    },
    {
        "nombre": "Venemergencia - Telemedicina Gratuita",
        "url": "https://instagram.com/p/DZ_tmKtuU_W?hl=en",
        "descripcion": "Ante el sismo que estremeció a nuestra tierra, en Venemergencia abrimos las puertas de nuestra línea de telemedicina GRATUITA TAP (Telemedicina de Acceso Público) para que cada venezolano que necesite consultar a un médico vía remota pueda tener acceso a orientación profesional de calidad.",
        "tags": [
            "Salud General"
        ],
        "id": 204
    },
    {
        "nombre": "Venezuela 2026 - Registro para buscar personas tras el terremoto",
        "url": "https://venezuela2026.xyz",
        "descripcion": "Registro ciudadano de personas desaparecidas.",
        "tags": [
            "Encontrados",
            "Atendidos en Hospitales"
        ],
        "id": 193
    },
    {
        "nombre": "Venezuela Busca",
        "url": "https://venezuelabusca.com",
        "descripcion": "Personas desaparecidas y encontradas. Buscador de personas encontradas.",
        "tags": [
            "Encontrados",
            "Atendidos en Hospitales"
        ],
        "id": 198
    },
    {
        "nombre": "Venezuela Earthquake Map",
        "url": "https://venezuela-earthquake-map.vercel.app",
        "descripcion": "Mapa de reportes, concentra fuentes de reportes desde redes sociales y auto-agrega YouTube/X/IG cada 10min.",
        "tags": [
            "Recursos y Herramientas"
        ],
        "id": 250
    },
    {
        "nombre": "Venezuela Rescate | Red ciudadana por Bomberos Voluntarios USB",
        "url": "https://venezuelarescate.com",
        "descripcion": "Red ciudadana para reportar, coordinar y asistir en emergencias. Creado por el grupo de Bomberos Voluntarios de la (USB) Universidad Simón Bolívar, Miranda.",
        "tags": [
            "Desaparecidos",
            "Ayuda General",
            "Rescate y Apoyo Físico",
            "Voluntarios"
        ],
        "id": 230
    },
    {
        "nombre": "Venezuela te necesita",
        "url": "https://venezuelatenecesita.com",
        "descripcion": "Plataforma digital centralizada e independiente para la coordinación de ayuda humanitaria tras el evento sísmico. Desarrollada y gestionada por voluntarios de la sociedad civil.",
        "tags": [
            "Centros de Acopio",
            "Ayuda General"
        ],
        "id": 168
    },
    {
        "nombre": "Venezuela Terremoto 2026",
        "url": "https://venezuelaterremoto2026.com",
        "descripcion": "Ayuda Venezuela. Coordinación de emergencia · Terremoto 2026",
        "tags": [
            "Servicios",
            "Ayuda General",
            "Desaparecidos"
        ],
        "id": 167
    },
    {
        "nombre": "Venezuela unida — La Guaira",
        "url": "https://ayudalaguaira.com",
        "descripcion": "Esfuerzo voluntario y ciudadano de registro para búsqueda de personas desaparecidas. No sustituye a los organismos de rescate ni a las autoridades competentes.",
        "tags": [
            "Desaparecidos"
        ],
        "id": 138
    },
    {
        "nombre": "VenezuelaReporta",
        "url": "https://venezuelareporta.org",
        "descripcion": "Registro comunitario y sin fines de lucro para reportar y encontrar a personas afectadas por el terremoto en Venezuela. Las entradas las envía la comunidad y no están verificadas.",
        "tags": [
            "Desaparecidos",
            "Ayuda General"
        ],
        "id": 131
    },
    {
        "nombre": "VenezuelaTeBusca",
        "url": "https://venezuelatebusca.com",
        "descripcion": "Registro ciudadano para encontrar personas desaparecidas y compartir recursos verificados de apoyo en Venezuela.",
        "tags": [
            "Desaparecidos"
        ],
        "id": 130
    },
    {
        "nombre": "Voluntariado de Profesionales de Salud en Campo",
        "url": "https://docs.google.com/forms/d/e/1FAIpQLSfrLUw7bBsfMkg4fVD07r1XWm24zqUbrahfLhsTn4CdUkmBkw/viewform",
        "descripcion": "Tras el impacto del devastador terremoto ocurrido el 24 de junio de 2026, nuestra prioridad es brindar una atención médica organizada y eficaz a los damnificados. La Sociedad Venezolana de Medicina Interna está conformando brigadas voluntarias de salud para cubrir las necesidades asistenciales en los sectores más vulnerables, en coordinación con otras instituciones nacionales. Tu experiencia es fundamental en este momento. Regístrate aquí para integrarte a nuestros equipos de trabajo en terreno. Lee más en: https://www.instagram.com/svminacional/",
        "tags": [
            "Salud General",
            "Voluntarios"
        ],
        "id": 227
    },
    {
        "nombre": "Voluntarios del Programa de las Naciones Unidas en Respuesta a Venezuela",
        "url": "https://app.unv.org/opportunities/1784888021270437",
        "descripcion": "Seguimiento internacional de los medios de comunicación sobre la respuesta del PNUD al terremoto en Venezuela. Estamos buscando voluntarios en línea para apoyar el monitoreo y análisis de medios internacionales sobre la respuesta y recuperación tras los recientes terremotos en Venezuela.",
        "tags": [
            "Ayuda General",
            "Voluntarios"
        ],
        "id": 285
    },
    {
        "nombre": "Voluntarios Profesionales",
        "url": "https://voluntariosprofesionales.vercel.app",
        "descripcion": "Red de voluntarios para emergencias y misiones humanitarias.",
        "tags": [
            "Voluntarios"
        ],
        "id": 206
    },
    {
        "nombre": "VZLA Ayuda",
        "url": "https://vzlayuda.com",
        "descripcion": "VZLA Ayuda es una iniciativa ciudadana, no es un organismo oficial. No sustituye a los servicios de emergencia, y no se hace responsable de las interacciones ni acuerdos entre las personas que se contactan a través del portal.",
        "tags": [
            "Ayuda General",
            "Transporte y Logística",
            "Salud General",
            "Mascotas y Animales",
            "Refugios",
            "Servicios"
        ],
        "id": 158
    },
    {
        "nombre": "VZLA Encuentra",
        "url": "https://vzlaencuentra.com",
        "descripcion": "Plataforma dedicada a facilitar el reencuentro familiar en situaciones de emergencia. Cumplimos con los lineamientos internacionales de protección de identidad para menores y heridos desorientados.",
        "tags": [
            "Desaparecidos",
            "Encontrados"
        ],
        "id": 213
    },
    {
        "nombre": "VZLA Response Hub | Directorio",
        "url": "https://vzla-response-hub.vercel.app",
        "descripcion": "Hub o directorio de plataformas de respuesta en apoyo a Venezuela por el terremoto.",
        "tags": [
            "Recursos y Herramientas"
        ],
        "id": 260
    },
    {
        "nombre": "We Love Foundation Venezuela GoFundMe Campaign",
        "url": "https://gofundme.com/f/emergency-relief-for-venezuela-earthquake-victims?attribution_id=sl:26f7dd78-3a28-49c9-a777-96fa47f5175e&lang=en_GB&ts=1782508421",
        "descripcion": "Following the devastating earthquake in Venezuela, We Love Foundation Inc., doing business as I Love Venezuela Foundation, is launching an emergency relief campaign to support affected families and communities.",
        "tags": [
            "Donaciones"
        ],
        "id": 194
    },
    {
        "nombre": "Zona Segura",
        "url": "https://zonasegura.up.railway.app",
        "descripcion": "Plataforma de información en un mapa interactivo, la ubicación de zonas seguras ante sismos e inundaciones, facilitando a los ciudadanos identificar rápidamente los puntos de resguardo más cercanos.",
        "tags": [
            "Refugios",
            "Encontrados",
            "Centros de Acopio"
        ],
        "id": 147
    },
    {
        "nombre": "¿Lo Has Visto? - Generador automatizado de imágenes de Personas Desaparecidas para redes sociales",
        "url": "https://lo-la-has-visto-48680439362.us-west1.run.app",
        "descripcion": "Plataforma humanitaria de apoyo inmediato. Completa el formulario de abajo para generar de forma gratuita e instantánea una tarjeta de búsqueda en alta resolución, formateada perfectamente para compartir en Instagram Stories (9:16) o Publicaciones (1:1).",
        "tags": [
            "Desaparecidos",
            "Recursos y Herramientas"
        ],
        "id": 175
    }
]