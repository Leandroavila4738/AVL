// ========== PAGE DATA ==========
const PAGES = {
  electricidad: {
    accent: 'amber', selection: 'amber',
    hero: { title: 'Soluciones Eléctricas', accentTitle: 'Seguras y Certificadas', desc: 'Electricista matriculado experto en instalaciones residenciales y comerciales. Enfocado en la seguridad técnica y la excelencia operativa.', img: 'https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Tablero_10_02_04.jpeg' },
    services: { title: 'Soluciones de', accentTitle: 'Electricidad Profesional', desc: 'Ofrecemos un abanico completo de soluciones eléctricas, garantizando el cumplimiento de todas las normativas de seguridad vigentes.', items: [
      { id:1, title:'Instalaciones y Adecuaciones', desc:'Realización de instalaciones eléctricas completas en viviendas, comercios e industrias.', icon:'zap', details:['Cableado de obra nueva','Recableado antiguo','Adecuación AEA','Tableros principales'] },
      { id:2, title:'Reparaciones y Mantenimiento', desc:'Detección y solución rápida de fallas eléctricas para su seguridad.', icon:'clock', details:['Cortocircuitos','Fallas de disyuntor','Baja tensión','Mantenimiento'] },
      { id:3, title:'Certificados y Trámites', desc:'Emisión de documentos oficiales y gestión ante distribuidoras eléctricas.', icon:'award', details:['Certificados (DCI)','Estudios de carga','Medidores','Planos firmados'] },
      { id:4, title:'Domótica y Automatización', desc:'Transformación de espacios tradicionales en entornos inteligentes, eficientes y conectados.', icon:'wifi', details:['Iluminación inteligente','Cámaras y seguridad WiFi','Automatización de Persianas y Motores','Gestión energética (Smart)'] }
    ]},
    about: { title:'Compromiso, Seguridad y', accentTitle:'Profesionalismo', desc:'Soy un electricista matriculado dedicado a brindar soluciones eléctricas de alta calidad. Mi objetivo principal es garantizar la seguridad de su hogar o negocio mediante trabajos que cumplen estrictamente con las normativas vigentes.', img:'https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Tablero_10_02_04.jpeg', years:'5+', yearsText:'Años de Experiencia', features:[
      { icon:'shield-check', title:'Matrícula Profesional', desc:'N° T-52095 - Habilitado para firmar planos y certificaciones.' },
      { icon:'award', title:'Trato Personalizado', desc:'Asesoramiento directo, presupuesto transparente y sin intermediarios.' }
    ]},
    gallery: { title:'Instalaciones', subtitle:'Nuestra trayectoria en imágenes. Calidad técnica y prolijidad en cada detalle de nuestras obras eléctricas.', word:'Trabajos', projects:[
      { id:1, title:'Instalación Integral de Luminaria del Hogar', cat:'residencial', service:'Iluminación', description:'Instalación de luminarias LED, spots y colgantes con diseño moderno y eficiente.', solution:'Iluminación en espacio integrado. Instalación técnica y de diseño: spots en riel sobre viga de cemento, luminarias colgantes en la barra desayunadora, plafón moderno para luz general en living y alimentación para sistema de climatización. Un acabado profesional que resalta cada textura y material del ambiente.', images:['https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Luces_residencia_01_01_02.jpeg','https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Luces_residencia_01_01_04.jpeg','https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Luces_residencia_01_01_07.jpeg'] },
      { id:2, title:'Iluminacion de Oficinas', cat:'comercial', service:'Oficinas', description:'Montaje de dicroicas LED simétricas para oficinas, logrando iluminación uniforme y estética.', solution:'Montaje de dicroicas LED con distribución simétrica para una iluminación uniforme. Especial cuidado en la prolijidad técnica sobre durlock y pintura final, garantizando un acabado estético perfecto.', images:['https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Luces_oficina_01_01_02.jpeg','https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Luces_oficina_01_01_01.jpeg'] },
      { id:3, title:'Iluminacion de Oficinas', cat:'comercial', service:'Decoración', description:'Iluminación decorativa con colgantes y plafones LED, combinando estilo y funcionalidad.', solution:'dInstalación de luces colgantes decorativas sobre barra y plafón LED para iluminación general. Un trabajo que combina diseño y funcionalidad con terminaciones limpias.', images:['https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Luces_oficina_04_01_02.jpeg','https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Luces_oficina_04_01_01.jpeg'] },
      { id:4, title:'Instalación de Carteleria y Letras CorpÓreas LED', cat:'comercial', service:'Comercial', description:'Instalación de cartelería comercial con letras corpóreas retroiluminadas de alto impacto.', solution:'Especialista en sistemas de iluminacion comercial de alto impacto. Realizamos el montaje y conexion de letras corpóreas con retroiluminacón frontal.', images:['https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Luces_Comercio_01_01.jpeg','https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Luces_Comercio_01_02.jpg'] },
      { id:5, title:'Iluminación LED', cat:'residencial', service:'Automatización', description:'Instalación de iliminación y perfiles LED.', solution:'Instalación de luminarias LEDUFO de alta eficiencia y sensores de movimiento.', images:['https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Luces_residencia_04_01_01.jpeg','https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Luces_residencia_04_01_03.jpeg'] },
      { id:6, title:'Iluminación del Hogar', cat:'residencial', service:'Mobiliario', description:'Retroiluminación LED en muebles de hogar para crear ambientes cálidos y sofisticados.', solution:'descripcion', images:['https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Retroiluminacion_muebles_02_01_01.jpg','https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Retroiluminacion_muebles_02_01_03.jpg'] },
      { id:7, title:'Iluminación de Muebles', cat:'residencial', service:'Mobiliario', description:'Instalación oculta, temperatura de color cálida para ambientes acogedores y optimización del consumo energético. Ideal para bibliotecas.', solution:'descripcion', images:['https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Retroiluminacion_muebles_01_01_03.jpg','https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Retroiluminacion_muebles_01_01_02.jpg','https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Retroiluminacion_muebles_01_01_01.jpg'] },
      { id:8, title:'Normalización de Tablero Trifásico', cat:'comercial', service:'Tableros', description:'Normalización de tableros trifásicos.', solution:'Recableado con terminales tiff, rotulado de circuitos y componentes Schneider Electric.', images:['https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Tablero_10_01_01.jpeg'] },
      { id:9, title:'Instalación de Tablero Seccional', cat:'residencial', service:'Tableros', description:'Armado de tableros seccionales con protecciones térmicas y circuitos independientes.', solution:'Armado y conexionado de tableros seccionales con protecciones térmicas y diferenciales. Se observa la organización de circuitos independientes para una distribución de carga equilibrada y segura.', images:['https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Tablero_10_02_04.jpeg','https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Tablero_10_02_03.jpeg'] },
      { id:10, title:'Reflector con Panel Solar', cat:'residencial', service:'Solar', description:'Instalación de reflectores solares con sensores para iluminación perimetral sustentable.', solution:'Instalación de reflector con panel solar. Automatizacion de luces perimetrales mediante sensores. Un trabajo limpio, seguro e impecable.', images:['https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Luces_panel_solar_01_01_05.jpeg','https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Luces_panel_solar_01_01_02.jpeg','https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Luces_panel_solar_01_01_01.jpeg'] },
      { id:11, title:'Medidor Electrico', cat:'residencial', service:'Medición', description:'Montaje de medidores eléctricos residenciales cumpliendo normativas de seguridad vigentes.', solution:'Instalación de medidor eléctrico', images:['https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Medidor_02_01_01.jpeg'] },
      { id:12, title:'Luminaria del Hogar', cat:'residencial', service:'Mantenimiento', description:'Renovación de artefactos lumínicos antiguos por tecnología LED de bajo consumo.', solution:'descripcion', images:['https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Luces_residencia_05_01_01.jpg','https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Luces_residencia_05_01_05.jpg','https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Luces_residencia_05_01_03.jpg'] },
    ]},
    contact: { title:'Contacto Técnico', subtitle:'Obtenga su presupuesto de electricidad en el día.', desc:'Asesoramiento gratuito para la elección de materiales y optimización de su instalación.', phone:'+54 9 11 2252 1497', email:'avila@AVLelectricidad.com', placeholder:'Ej: Instalación de tablero', fieldLabel:'Tipo de Trabajo' }
  },
  climatizacion: {
    accent: 'sky', selection: 'sky',
    hero: { title:'Confort Climático', accentTitle:'Eficiente y Garantizado', desc:'Especialistas matriculados en climatización avanzada. Instalaciones residenciales y comerciales con certificación de garantía y cumplimiento de normas de seguridad.', img:'https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Aire_Acondicionado_01_1_01.jpeg' },
    services: { title:'Soluciones de', accentTitle:'Climatización Profesional', desc:'Mantenemos sus ambientes en la temperatura ideal con equipos de alta eficiencia y la mejor técnica del mercado.', items:[
      { id:1, title:'Instalación de Equipos', desc:'Montaje profesional de aires acondicionados split, multi-split y sistemas centrales.', icon:'wind', details:['Bombas de vacío','Carga de refrigerante','Ménsulas reforzadas','Pruebas de estanqueidad'] },
      { id:2, title:'Mantenimiento Preventivo', desc:'Optimización de rendimiento para prolongar la vida útil y reducir el consumo eléctrico.', icon:'thermometer', details:['Limpieza de filtros','Desinfección de turbinas','Revisión de presiones','Control de drenaje'] },
      { id:3, title:'Reparación y Cargas', desc:'Diagnóstico preciso y solución rápida a fallas técnicas o fugas de gas refrigerante.', icon:'clock', details:['Detección de fugas','Cambio de capacitores','Placas universales','Soldaduras de plata'] }
    ]},
    about: { title:'Ingeniería Térmica', accentTitle:'para su Bienestar', desc:'Nos apasiona crear el ambiente perfecto. Entendemos que un sistema de climatización no es solo un equipo, es una inversión en confort y salud para su familia o equipo de trabajo.', img:'https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Aire_Acondicionado_01_1_01.jpeg', years:'3+', yearsText:'Años de Trayectoria', features:[
      { icon:'shield-check', title:'Matrícula Nacional', desc:'Inscripto en cámaras oficiales de refrigeración y aire acondicionado.' },
      { icon:'thermometer', title:'Herramental de Precisión', desc:'Manómetros digitales, bombas de vacío de alto caudal y detectores de fuga electrónicos.' }
    ]},
    gallery: { title:'Ambientes', subtitle:'Vea la prolijidad técnica en nuestras instalaciones de unidades interiores y exteriores.', word:'Transformados', projects:[
      { id:1, title:'Climatización Residencial', cat:'residencial', service:'Instalación', description:'Instalación de aire acondicionado Split con terminaciones prolijas y carga de gas.', solution:'Instalación de unidad Split en planta baja con terminaciones prolijas y puesta en marcha inmediata para un clima ideal.',  images:['https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Aire_Acondicionado_02_1_01.jpeg','https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Aire_Acondicionado_02_2_02.jpeg'] },
      { id:2, title:'Climatización Residencial', cat:'residencial', service:'Instalación', description:'Montaje de unidad exterior en altura siguiendo protocolos de seguridad y drenaje.', solution:'Colocación de unidad exterior en primer piso siguiendo estrictas normas de seguridad y asegurando un drenaje perfecto', images:['https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Aire_Acondicionado_01_1_01.jpeg','https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Aire_Acondicionado_01_2_02.jpeg']  },
      { id:3, title:'Climatización Residencial', cat:'residencial', service:'Mantenimiento', description:'Instalación técnica de equipos en edificios de gran altura con máxima precisión.', solution:'Instalación técnica en departamentos de gran altura. Equipamiento de seguridad y precisión para garantizar un funcionamiento óptimo en edificios.', images:['https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Aire_Acondicionado_03_01_01.jpg','https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Aire_Acondicionado_03_01_02.jpg']  }
    ]},
    contact: { title:'Contacto Técnico', subtitle:'Obtenga su presupuesto de climatización en el día.', desc:'Asesoramiento personalizado para la elección del equipo adecuado según las frigorías necesarias.', phone:'+54 9 11 2252 1497', email:'avila@AVLelectricidad.com', placeholder:'Ej: 3000 frigorías', fieldLabel:'Frigorías / Tipo Equipo' }
  }
};

const HOME_STATIONS = [
  { id:'electricidad', title:'Servicios Eléctricos', subtitle:'INSTALACIONES MATRICULADAS', desc:'Soluciones de energía segura, tableros industriales y certificaciones oficiales para hogares e industrias.', icon:'zap', color:'amber', img:'https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Tablero_10_02_04.jpeg' },
  { id:'climatizacion', title:'Climatización', subtitle:'CONFORT TÉRMICO AVANZADO', desc:'Montaje y mantenimiento de equipos de aire acondicionado con máxima eficiencia energética.', icon:'wind', color:'sky', img:'https://raw.githubusercontent.com/Leandroavila4738/AVL/refs/heads/main/Im%C3%A1genes/Aire_Acondicionado_01_1_01.jpeg' }
];

// ========== RENDERERS ==========
function renderHomeStations() {
  const c = document.getElementById('home-stations');
  c.innerHTML = HOME_STATIONS.map(s => `
    <button onclick="navigateTo('${s.id}')" class="group relative flex flex-col h-full min-h-[380px] md:min-h-[450px] rounded-[2.5rem] overflow-hidden border border-slate-800 bg-slate-900/40 hover:border-white/20 transition-all duration-700 hover:-translate-y-2 shadow-2xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-left">
      <div class="absolute inset-0 z-0"><img src="${s.img}" alt="${s.title}" class="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-60" loading="eager"><div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent opacity-90"></div></div>
      <div class="absolute top-0 right-0 w-64 h-64 bg-${s.color}-500/10 rounded-bl-full blur-[80px] group-hover:bg-${s.color}-500/20 transition-all duration-700"></div>
      <div class="relative z-10 p-6 md:p-10 lg:p-12 mt-auto flex flex-col items-start w-full">
        <div class="mb-4 p-3 rounded-xl bg-slate-800 border border-slate-700 text-${s.color}-500 group-hover:bg-${s.color}-500 group-hover:text-slate-950 transition-all duration-500 shadow-xl"><i data-lucide="${s.icon}" class="w-6 h-6 md:w-8 md:h-8"></i></div>
        <span class="text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase mb-1 text-${s.color}-500/80">${s.subtitle}</span>
        <h2 class="text-2xl md:text-4xl lg:text-5xl font-black mb-4 group-hover:text-white transition-colors leading-none tracking-tighter italic uppercase">${s.title}</h2>
        <p class="text-sm md:text-lg text-slate-400 mb-8 font-medium leading-relaxed group-hover:text-slate-200 max-w-lg opacity-80 group-hover:opacity-100 transition-all">${s.desc}</p>
        <div class="flex items-center gap-2 text-white font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px] py-3 px-6 rounded-xl border border-white/10 bg-white/5 group-hover:bg-white group-hover:text-slate-950 transition-all duration-500 shadow-lg">Ingresar a la Sección <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500"></i></div>
      </div>
    </button>
  `).join('');
}

function renderPage(key) {
  const p = PAGES[key];
  const a = p.accent;
  const prefix = key === 'electricidad' ? 'elec' : 'clim';
  const at = a === 'amber' ? 'text-amber-500' : 'text-sky-400';
  const abg = a === 'amber' ? 'bg-amber-500 hover:bg-amber-400 shadow-amber-500/20 hover:shadow-amber-500/40' : 'bg-sky-500 hover:bg-sky-400 shadow-sky-500/20 hover:shadow-sky-500/40';
  const ai = a === 'amber' ? 'text-amber-500' : 'text-sky-400';
  const container = document.getElementById(prefix + '-content');

  // HERO
  let html = `<section id="${prefix}-inicio" class="relative bg-slate-900 scroll-mt-20 overflow-hidden min-h-[90vh] flex items-center">
    <div class="absolute inset-0 z-0"><img class="w-full h-full object-cover object-center" src="${p.hero.img}" alt="${p.hero.title}" referrerpolicy="no-referrer"><div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/40"></div><div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent md:hidden"></div></div>
    <div class="relative w-[90vw] mx-auto max-w-[1600px] pt-32 md:pt-40 pb-20 flex flex-col justify-center z-10"><div class="w-full lg:w-4/5 xl:w-2/3 flex flex-col items-center sm:items-start text-center sm:text-left">
      <h1 class="text-[clamp(2.5rem,5.5vw,5.5rem)] font-black text-white tracking-tight leading-[1.05] mb-6 drop-shadow-xl">${p.hero.title} <br><span class="${at}">${p.hero.accentTitle}</span></h1>
      <p class="mt-2 text-[clamp(1rem,1.5vw,1.5rem)] text-gray-200 max-w-2xl mb-10 leading-relaxed font-medium drop-shadow-md">${p.hero.desc}</p>
      <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a href="#" onclick="scrollToSection('contacto',event)" class="inline-flex items-center justify-center px-8 py-4 text-[clamp(1rem,1.2vw,1.25rem)] font-bold rounded-xl text-slate-900 ${abg} transition-all shadow-xl hover:-translate-y-1 w-full sm:w-auto active:scale-95">Solicitar Cotización</a>
        <a href="#" onclick="scrollToSection('servicios',event)" class="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-600/50 bg-slate-800/40 backdrop-blur-sm text-[clamp(1rem,1.2vw,1.25rem)] font-bold rounded-xl text-white hover:bg-slate-700/60 hover:border-slate-500 transition-all w-full sm:w-auto">Servicios Técnicos</a>
      </div>
      <div class="mt-16 w-full grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/10">
        ${[{ic:'shield-check',t:'Garantía Real',s:'En toda instalación'},{ic:'award',t:'Técnico Matriculado',s:'Seguridad técnica'},{ic:'clock',t:'Urgencias',s:'Soporte técnico 24h'}]
          .filter(f => key !== 'climatizacion' || f.t !== 'Urgencias')
          .map(f=>`<div class="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4"><div class="p-3 bg-slate-800/50 rounded-lg backdrop-blur-sm"><i data-lucide="${f.ic}" class="h-8 w-8 ${ai}"></i></div><div class="text-center sm:text-left"><p class="font-bold text-white text-lg">${f.t}</p><p class="text-sm text-gray-400">${f.s}</p></div></div>`).join('')}
      </div>
    </div></div>
  </section>`;

  // SERVICES
  const sb = a==='amber' ? 'border-t-amber-500 hover:shadow-amber-500/10' : 'border-t-sky-500 hover:shadow-sky-500/10';
  const sic = a==='amber' ? 'text-amber-500' : 'text-sky-500';
  const sicbg = a==='amber' ? 'group-hover:bg-amber-500' : 'group-hover:bg-sky-500';
  const sht = a==='amber' ? 'group-hover:text-amber-500' : 'group-hover:text-sky-500';
  html += `<section id="${prefix}-servicios" class="relative py-[10vh] bg-transparent scroll-mt-20 overflow-hidden"><div class="relative z-10 w-[90vw] mx-auto max-w-[1600px]">
    <div class="text-center mb-[8vh]"><h2 class="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white mb-6 leading-tight">${p.services.title} <br class="md:hidden"> <span class="${at}">${p.services.accentTitle}</span></h2><p class="text-[clamp(1rem,1.2vw,1.25rem)] text-gray-300 max-w-3xl mx-auto px-2 font-medium">${p.services.desc}</p></div>
    <div class="grid grid-cols-1 md:grid-cols-2 ${p.services.items.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-6 md:gap-8 xl:gap-10 w-full mx-auto">
      ${p.services.items.map(s=>`<div class="bg-slate-900/60 backdrop-blur-md rounded-2xl shadow-2xl transition-all duration-300 p-6 lg:p-10 border border-slate-800 border-t-[6px] ${sb} flex flex-col h-full group relative overflow-hidden">
        <div class="absolute top-0 right-0 w-24 h-24 ${a==='amber'?'bg-amber-500/5':'bg-sky-500/5'} rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500 z-0"></div>
        <div class="relative z-10 flex flex-col h-full">
          <div class="flex items-start justify-between mb-6"><div class="p-3 bg-slate-800 ${sic} rounded-xl ${sicbg} group-hover:text-slate-950 transition-colors duration-300 shadow-sm border border-slate-700"><i data-lucide="${s.icon}" class="h-8 w-8"></i></div><span class="text-5xl font-black text-slate-800 group-hover:text-slate-700 transition-colors select-none">0${s.id}</span></div>
          <h3 class="text-[clamp(1.25rem,1.5vw,1.6rem)] font-bold text-white mb-4 ${sht} transition-colors">${s.title}</h3>
          <p class="text-gray-400 mb-8 text-sm lg:text-base leading-relaxed">${s.desc}</p>
          <ul class="space-y-3 mt-auto border-t border-slate-800 pt-6">${s.details.map(d=>`<li class="flex items-center text-sm text-gray-300"><i data-lucide="shield-check" class="h-4 w-4 ${sic} mr-2 flex-shrink-0"></i><span class="font-medium">${d}</span></li>`).join('')}</ul>
        </div></div>`).join('')}
    </div></div></section>`;

  // ABOUT
  const abrd = a==='amber'?'border-amber-500/30':'border-sky-500/30';
  html += `<section id="${prefix}-sobre-mi" class="relative py-16 md:py-24 lg:py-32 bg-transparent scroll-mt-20 overflow-hidden"><div class="relative z-10 w-[90vw] mx-auto max-w-[1600px]"><div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
    <div class="w-full lg:w-1/2 relative order-1"><div class="${a==='amber'?'bg-amber-500':'bg-sky-500'} absolute top-4 -left-4 w-full h-full rounded-2xl z-0 hidden sm:block transform rotate-2"></div>
      <img src="${p.about.img}" alt="${p.about.title}" class="relative z-10 w-full h-auto rounded-2xl shadow-2xl object-cover aspect-[4/3] lg:aspect-auto lg:h-[600px] border border-slate-700" loading="lazy" referrerpolicy="no-referrer">
      <div class="absolute -bottom-6 right-4 sm:right-auto sm:-right-6 md:-right-12 z-20 bg-slate-950 text-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-2xl border-4 border-slate-800 max-w-[140px] sm:max-w-[180px] lg:max-w-[220px]"><p class="text-3xl sm:text-4xl lg:text-5xl font-extrabold ${at}">${p.about.years}</p><p class="text-xs sm:text-sm lg:text-base font-bold leading-tight uppercase tracking-wide mt-1 text-slate-300">${p.about.yearsText}</p></div>
    </div>
    <div class="w-full lg:w-1/2 mt-8 lg:mt-0 order-2 text-center lg:text-left">
      <h2 class="text-[clamp(2rem,3.5vw,4rem)] font-extrabold text-white mb-6 leading-tight">${p.about.title} <br class="hidden sm:block"><span class="${at}">${p.about.accentTitle}</span></h2>
      <p class="text-[clamp(1rem,1.1vw,1.25rem)] text-slate-300 mb-8 lg:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">${p.about.desc}</p>
      <div class="grid gap-6 lg:gap-8">${p.about.features.map(f=>`<div class="flex flex-col lg:flex-row items-center lg:items-start p-6 bg-slate-900/40 backdrop-blur-md rounded-xl border border-slate-700 hover:${abrd} hover:bg-slate-800/80 transition-all group"><div class="bg-slate-900 p-3 rounded-full shadow-sm mb-4 lg:mb-0 lg:mr-6 group-hover:scale-110 transition-transform"><i data-lucide="${f.icon}" class="h-8 w-8 sm:h-10 sm:w-10 ${sic}"></i></div><div><h4 class="font-bold text-white text-lg lg:text-xl mb-2">${f.title}</h4><p class="text-base lg:text-lg text-slate-400">${f.desc}</p></div></div>`).join('')}</div>
    </div></div></div></section>`;

  // GALLERY
  const cats = ['all', ...new Set(p.gallery.projects.map(x=>x.cat))];
  html += `<section id="${prefix}-galeria" class="gallery-section relative py-24 bg-transparent text-white scroll-mt-20 overflow-hidden" data-gallery-accent="${a}"><div class="relative z-10 w-[90vw] mx-auto max-w-[1600px]">
    <div class="text-center mb-16"><h2 class="text-[clamp(2rem,4vw,3.5rem)] font-extrabold mb-4 uppercase tracking-tighter italic">${p.gallery.title} <span class="${at}">${p.gallery.word}</span></h2><p class="text-slate-400 max-w-2xl mx-auto font-medium">${p.gallery.subtitle}</p></div>
    <div class="flex flex-wrap justify-center gap-3 mb-16">${cats.map(c=>`<button class="filter-btn px-6 py-2.5 rounded-xl border text-xs font-black uppercase tracking-widest transition-all ${c==='all'?(a==='amber'?'bg-amber-500 border-amber-500 text-slate-900 shadow-xl shadow-amber-500/20':'bg-sky-500 border-sky-500 text-slate-900 shadow-xl shadow-sky-500/20'):'bg-slate-900/50 border-slate-700 text-slate-400'}" data-filter="${c}" onclick="filterGallery(this.closest('.gallery-section'),'${c}')">${c==='all'?'Todos':c==='urgencia'?'Urgencias':c}</button>`).join('')}</div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">${p.gallery.projects.map(proj=>`
      <div class="gallery-card animate-in group relative bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800 overflow-hidden flex flex-col hover:border-${a}-500/30 transition-all duration-500 shadow-xl h-full" data-category="${proj.cat}" data-images='${JSON.stringify(proj.images)}' data-current-index="0">
        <div class="relative aspect-[4/3] overflow-hidden lightbox-hitbox" onclick="openLightbox(this)">
          <img class="gallery-card-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="${proj.images[0]}" alt="${proj.title}" loading="lazy" referrerpolicy="no-referrer">
          ${proj.images.length>1?`<button onclick="event.stopPropagation();galleryCardNav(this,-1)" class="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-950/50 hover:bg-slate-950/80 p-1.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"><i data-lucide="chevron-left" class="w-4 h-4"></i></button><button onclick="event.stopPropagation();galleryCardNav(this,1)" class="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-950/50 hover:bg-slate-950/80 p-1.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"><i data-lucide="chevron-right" class="w-4 h-4"></i></button>`:''}
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
            <div class="bg-${a}-500 text-slate-950 p-4 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <i data-lucide="external-link" class="w-6 h-6"></i>
            </div>
          </div>
          ${proj.images.length>1?`<div class="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md px-2 py-1 rounded-lg border border-slate-800 flex items-center gap-1.5 z-10"><div class="flex gap-0.5">${proj.images.map((_,i)=>`<div class="card-dot w-1 h-1 rounded-full ${i===0?'bg-'+a+'-500':'bg-slate-600'}"></div>`).join('')}</div><span class="card-counter text-[9px] font-black text-white">1/${proj.images.length}</span></div>`:''}
          <div class="absolute top-4 left-4 z-10"><span class="text-[9px] font-black px-2 py-1 rounded uppercase tracking-wider shadow-lg ${proj.cat==='urgencia'?'bg-red-500 text-white':'bg-'+a+'-500 text-slate-950'}">${proj.cat}</span></div>
        </div>
        <div class="p-6 flex-grow flex flex-col">
          <h4 class="font-bold text-lg text-white leading-tight mb-3 group-hover:text-${a}-500 transition-colors">${proj.title}</h4>
          <p class="text-xs text-slate-400 line-clamp-2 italic mb-6">"${proj.description || proj.solution}"</p>
          <div class="mt-auto pt-4 border-t border-slate-800 flex justify-between items-center">
            <span class="flex items-center gap-1.5 text-[10px] font-bold text-slate-500"><i data-lucide="tag" class="w-3 h-3 text-${a}-500"></i> ${proj.service.toUpperCase()}</span>
            <button onclick="openLightbox(this)" class="text-[9px] font-black uppercase tracking-widest text-${a}-500 hover:opacity-70 transition-opacity">Ver Detalle</button>
          </div>
        </div>
      </div>`).join('')}</div>
  </div></section>`;

  // CONTACT
  const af = a==='amber'?'focus:border-amber-500 focus:ring-amber-500':'focus:border-sky-500 focus:ring-sky-500';
  const abu = a==='amber'?'decoration-amber-500/20':'decoration-sky-500/20';
  html += `<section id="${prefix}-contacto" class="relative py-16 md:py-24 lg:py-32 bg-transparent scroll-mt-20 overflow-hidden"><div class="relative z-10 w-[90vw] mx-auto max-w-[1600px]">
    <div class="text-center mb-12 md:mb-16 lg:mb-20"><h2 class="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white mb-6">${p.contact.title}</h2><p class="text-[clamp(1rem,1.2vw,1.25rem)] text-slate-300 max-w-3xl mx-auto px-4 font-medium">${p.contact.subtitle}</p></div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24">
      <div class="space-y-10 lg:space-y-12 order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left">
        <div><h3 class="text-2xl lg:text-3xl font-bold ${at} mb-6 underline ${abu} underline-offset-8">Atención Personalizada</h3><p class="text-slate-300 text-lg lg:text-xl leading-relaxed">${p.contact.desc}</p></div>
        <div class="space-y-8">
          <div class="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6 p-6 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-700"><div class="bg-slate-900 p-4 rounded-full flex-shrink-0 mb-4 lg:mb-0 border ${a==='amber'?'border-amber-500/20':'border-sky-500/20'}"><i data-lucide="message-circle" class="h-6 w-6 lg:h-8 lg:w-8 ${sic}"></i></div><div><h4 class="font-bold text-white text-lg lg:text-xl">WhatsApp</h4><p class="${sic} font-bold text-base lg:text-xl mt-1">${p.contact.phone}</p></div></div>
          <div class="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6 p-6 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-700"><div class="bg-slate-900 p-4 rounded-full flex-shrink-0 mb-4 lg:mb-0 border ${a==='amber'?'border-amber-500/20':'border-sky-500/20'}"><i data-lucide="mail" class="h-6 w-6 lg:h-8 lg:w-8 ${sic}"></i></div><div><h4 class="font-bold text-white text-lg lg:text-xl">Email</h4><p class="text-slate-300 text-base lg:text-xl mt-1 break-all">${p.contact.email}</p></div></div>
        </div>
      </div>
      <div class="bg-slate-900/80 backdrop-blur-xl p-6 md:p-8 lg:p-12 rounded-3xl shadow-2xl order-1 lg:order-2 border border-slate-700">
        <h3 class="text-2xl lg:text-3xl font-bold text-white mb-8 text-center lg:text-left border-b border-slate-800 pb-4">Solicitar Presupuesto</h3>
        <form class="space-y-6">
          <div><label class="block text-sm lg:text-base font-bold text-slate-300 mb-2">Nombre Completo *</label><input type="text" required class="mt-1 block w-full rounded-xl border border-slate-700 bg-slate-800 text-white px-4 py-3 lg:py-4 shadow-sm ${af} focus:outline-none focus:ring-1 text-base lg:text-lg transition-all"></div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="block text-sm lg:text-base font-bold text-slate-300 mb-2">Teléfono *</label><input type="tel" required class="mt-1 block w-full rounded-xl border border-slate-700 bg-slate-800 text-white px-4 py-3 lg:py-4 shadow-sm ${af} focus:outline-none focus:ring-1 text-base lg:text-lg transition-all"></div><div><label class="block text-sm lg:text-base font-bold text-slate-300 mb-2">${p.contact.fieldLabel}</label><input type="text" placeholder="${p.contact.placeholder}" class="mt-1 block w-full rounded-xl border border-slate-700 bg-slate-800 text-white px-4 py-3 lg:py-4 shadow-sm ${af} focus:outline-none focus:ring-1 text-base lg:text-lg transition-all"></div></div>
          <button type="button" class="w-full flex items-center justify-center px-8 py-4 lg:py-5 border border-transparent text-base lg:text-lg font-bold rounded-xl text-slate-950 ${abg} transition-all shadow-lg active:scale-95">Enviar Mensaje <i data-lucide="send" class="ml-2 h-5 w-5 lg:h-6 lg:w-6"></i></button>
        </form>
      </div>
    </div>
  </div></section>`;

  container.innerHTML = html;
}

// ========== MOBILE MENU CONTENT ==========
function updateMobileMenu() {
  const c = document.getElementById('mobile-menu-content');
  if (currentPage === 'home') {
    c.innerHTML = `<button onclick="navigateTo('electricidad');closeMobileMenu()" class="w-full text-left px-4 py-2.5 text-amber-500 font-bold text-sm">Electricidad</button>
      <button onclick="navigateTo('climatizacion');closeMobileMenu()" class="w-full text-left px-4 py-2.5 text-sky-500 font-bold text-sm">Climatización</button>`;
  } else {
    const sections = ['inicio','servicios','sobre-mi','galeria','contacto'];
    const names = ['Inicio','Servicios','Sobre Mí','Trabajos','Solicitar Consulta'];
    c.innerHTML = sections.map((s,i) => `<a href="#" onclick="scrollToSection('${s}',event);closeMobileMenu()" class="block px-4 py-2.5 rounded-xl text-sm font-bold text-gray-300 hover:bg-slate-800">${names[i]}</a>`).join('') +
      `<button onclick="navigateTo('home');closeMobileMenu()" class="w-full text-left px-4 py-2.5 text-slate-400 font-bold italic text-sm">Cambiar de Sección</button>`;
  }
}

// ========== BOOT ==========
document.addEventListener('DOMContentLoaded', () => {
  renderHomeStations();
  renderPage('electricidad');
  renderPage('climatizacion');
  updateMobileMenu();
  lucide.createIcons();
});

// Override navigateTo to also update mobile menu
const _origNav = navigateTo;
navigateTo = function(page) {
  _origNav(page);
  updateMobileMenu();
};
