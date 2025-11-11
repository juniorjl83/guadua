// i18n dictionary (EN default, ES alternative)
const i18n = {
  en: {
    "nav.problem": "Problem",
    "nav.solution": "Solution",
    "nav.model": "Business Model",
    "nav.market": "Market",
    "nav.vision": "Vision",
    "nav.contact": "Contact",
    "cta.invest": "Invest Now",
    "cta.learn": "Learn More",
    "cta.whatsapp": "WhatsApp",
    "cta.email": "Email us",
    "hero.title": "The fastest, most trusted home emergency network in LATAM.",
    "hero.subtitle": "On-demand electricians, plumbers and locksmiths. Transparent pricing, verified professionals, secure payments.",
    "hero.geo": "Launching MVP in Medellín (Laureles, Poblado, Ciudad del Río) & Sabaneta.",
    "metrics.dispatch": "Avg dispatch",
    "metrics.availability": "Availability",
    "metrics.rating": "Rating system",
    "section.problem.title": "The Problem",
    "section.problem.body": "Home emergencies like leaks, short circuits, or broken locks are unpredictable. Finding a reliable, verified technician is slow, risky, and stressful. The market lacks a unified, trusted system that verifies workers, guarantees fair pricing, and ensures rapid response.",
    "section.solution.title": "Our Solution (MVP)",
    "solution.1": "Instant matching with nearest certified professionals.",
    "solution.2": "Training & certifications for plumbers, electricians, and more.",
    "solution.3": "Shared warehouse (bodega) with quality tools and materials.",
    "solution.4": "Benefits & incentives (rest zones, coffee, Wi‑Fi, showers).",
    "solution.5": "Transparent pricing, ratings, and secure payments.",
    "section.stack.title": "Tech Stack",
    "stack.ai": "AI: demand prediction, dynamic pricing, route optimization",
    "section.model.title": "Business Model",
    "model.1": "Commission (15–20%) per completed service.",
    "model.2": "Monthly membership for warehouse, training & job priority.",
    "model.3": "Partnerships with hardware stores & insurers.",
    "model.4": "B2B maintenance for buildings & offices.",
    "section.market.title": "Target Market",
    "market.1": "Initial focus: Medellín & Sabaneta.",
    "market.2": "Customers: mid–high income households, property managers, SMBs.",
    "market.3": "Professionals: certified electricians, plumbers, repair specialists.",
    "section.vision.title": "Growth Vision",
    "vision.1": "Phase 1 — Launch in Medellín & Sabaneta (MVP).",
    "vision.2": "Phase 2 — Expand to Bogotá, Cali, Cartagena.",
    "vision.3": "Phase 3 — Regional scaling to Mexico, Chile, Brazil, and Peru.",
    "vision.4": "Phase 4 — Smart diagnostics & AI scheduling.",
    "section.contact.title": "Contact & Investor Relations",
    "form.name": "Name",
    "form.email": "Email",
    "form.message": "Message",
    "form.send": "Send",
    "legal": "© {year} Guadua. All rights reserved."
  },
  es: {
    "nav.problem": "Problema",
    "nav.solution": "Solución",
    "nav.model": "Modelo de negocio",
    "nav.market": "Mercado",
    "nav.vision": "Visión",
    "nav.contact": "Contacto",
    "cta.invest": "Invertir ahora",
    "cta.learn": "Conocer más",
    "cta.whatsapp": "WhatsApp",
    "cta.email": "Escríbenos",
    "hero.title": "La red de emergencias domésticas más rápida y confiable de LATAM.",
    "hero.subtitle": "Electricistas, plomeros y cerrajeros bajo demanda. Precios transparentes, profesionales verificados y pagos seguros.",
    "hero.geo": "Lanzamiento del MVP en Medellín (Laureles, Poblado, Ciudad del Río) y Sabaneta.",
    "metrics.dispatch": "Despacho promedio",
    "metrics.availability": "Disponibilidad",
    "metrics.rating": "Sistema de calificación",
    "section.problem.title": "El Problema",
    "section.problem.body": "Las emergencias del hogar como fugas, cortocircuitos o cerraduras dañadas son impredecibles. Encontrar un técnico confiable y verificado suele ser lento, riesgoso y estresante. El mercado carece de un sistema unificado que verifique a los trabajadores, garantice precios justos y asegure una respuesta rápida.",
    "section.solution.title": "Nuestra Solución (MVP)",
    "solution.1": "Conexión instantánea con profesionales certificados cercanos.",
    "solution.2": "Capacitación y certificaciones para plomeros, electricistas y más.",
    "solution.3": "Bodega compartida con materiales y herramientas de calidad.",
    "solution.4": "Beneficios y comodidades (zonas de descanso, café, Wi‑Fi, duchas).",
    "solution.5": "Precios transparentes, calificaciones y pagos seguros.",
    "section.stack.title": "Stack Tecnológico",
    "stack.ai": "IA: predicción de demanda, precios dinámicos, optimización de rutas",
    "section.model.title": "Modelo de Negocio",
    "model.1": "Comisión (15–20%) por servicio completado.",
    "model.2": "Membresía mensual para bodega, capacitación y prioridad.",
    "model.3": "Alianzas con ferreterías y aseguradoras.",
    "model.4": "Mantenimiento B2B para edificios y oficinas.",
    "section.market.title": "Mercado Objetivo",
    "market.1": "Foco inicial: Medellín y Sabaneta.",
    "market.2": "Clientes: hogares de ingresos medio–alto, administradores, pymes.",
    "market.3": "Profesionales: electricistas, plomeros, técnicos de reparación.",
    "section.vision.title": "Visión de Crecimiento",
    "vision.1": "Fase 1 — Lanzamiento en Medellín y Sabaneta (MVP).",
    "vision.2": "Fase 2 — Expansión a Bogotá, Cali, Cartagena.",
    "vision.3": "Fase 3 — Escalamiento regional a México, Chile, Brasil y Perú.",
    "vision.4": "Fase 4 — Diagnóstico inteligente y agendamiento con IA.",
    "section.contact.title": "Contacto e Inversionistas",
    "form.name": "Nombre",
    "form.email": "Correo",
    "form.message": "Mensaje",
    "form.send": "Enviar",
    "legal": "© {year} Guadua. Todos los derechos reservados."
  }
};

function setLang(lang='en') {
  const dict = i18n[lang] || i18n.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = dict[key];
    if (typeof value === 'string') {
      el.textContent = value.replace('{year}', new Date().getFullYear());
    }
  });
  document.getElementById('lang-en').classList.toggle('bg-gray-900', lang==='en');
  document.getElementById('lang-en').classList.toggle('text-white', lang==='en');
  document.getElementById('lang-es').classList.toggle('bg-gray-900', lang==='es');
  document.getElementById('lang-es').classList.toggle('text-white', lang==='es');
  localStorage.setItem('lang', lang);
}

document.getElementById('lang-en').addEventListener('click', () => setLang('en'));
document.getElementById('lang-es').addEventListener('click', () => setLang('es'));

setLang(localStorage.getItem('lang') || 'en');
