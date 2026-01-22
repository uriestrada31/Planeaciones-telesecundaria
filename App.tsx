
import React, { useRef } from 'react';
import { 
  BookOpen, 
  ExternalLink, 
  User, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  School,
  Award,
  Facebook,
  Instagram,
  Mic,
  Music2,
  ListChecks,
  Info,
  Layers,
  Users,
  Library,
  MapPin
} from 'lucide-react';

const LOGO_SE = "https://www.educacionchiapas.gob.mx/wp-content/uploads/2024/12/se_logo_horizontal-1.png";
const LOGO_CREATOR = "https://dapper-cactus-3c8f9f.netlify.app/uri.jpg";
const NOTEBOOK_URL = "https://notebooklm.google.com/notebook/6c5ecdef-a5fd-4c92-bebb-0a3e69779ad3";

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61564889590193',
    icon: <Facebook className="w-4 h-4" />,
    color: 'hover:bg-[#1877F2] hover:text-white',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@uri.armin.estrada',
    icon: <Music2 className="w-4 h-4" />,
    color: 'hover:bg-black hover:text-white',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/uriestradamx',
    icon: <Instagram className="w-4 h-4" />,
    color: 'hover:bg-[#E4405F] hover:text-white',
  },
  {
    name: 'Spotify Podcast',
    url: 'https://open.spotify.com/show/3H9XSWONGsEMSXwsWAG5Ni',
    icon: <Mic className="w-4 h-4" />,
    color: 'hover:bg-[#1DB954] hover:text-white',
  }
];

const GUIDE_STEPS = [
  {
    title: "1. El punto de partida: Tu información",
    description: "Para empezar, necesito que me indiques el Grado, el Campo Formativo y el Contenido Integrado. Con estos datos, mi sistema consulta los documentos de \"Dosificación de contenidos\" para vincular ese contenido con los Procesos de Desarrollo de Aprendizaje (PDA) oficiales.",
    icon: <Info className="w-6 h-6 text-red-700" />
  },
  {
    title: "2. Organización en 10 Sesiones (2 semanas)",
    description: "No genero una lista de temas sueltos, sino un plan estructurado: Tres Proyectos Académicos (9 sesiones de 3 cada uno) y el Cierre del Proyecto Parcial de Aula (Sesión 10) para presentación de resultados.",
    icon: <Layers className="w-6 h-6 text-amber-600" />
  },
  {
    title: "3. Aplicación de las 7 Etapas Metodológicas",
    description: "Organizo intensivamente las etapas de Telesecundaria: S1 (Etapas 1-3: ¿Qué haremos?, Problema, Solución), S2 (Etapas 4-5: Paso a paso, Consultas) y S3 (Etapas 6-7: Unión y Conclusión).",
    icon: <ListChecks className="w-6 h-6 text-blue-600" />
  },
  {
    title: "4. Diversificación por Equipos (Variantes)",
    description: "Propongo obligatoriamente de 2 a 3 variantes de actividades (Variante A, B, C). El objetivo es que los grupos realicen tareas diferenciadas que apunten al mismo objetivo de aprendizaje.",
    icon: <Users className="w-6 h-6 text-green-600" />
  },
  {
    title: "5. Integración de Recursos y Libros (LTG)",
    description: "Indicaré exactamente qué materiales usar de la nueva familia de libros: Nuestro libro de proyectos, Nuestros saberes y Múltiples Lenguajes, además de referencias a videos detonadores y académicos.",
    icon: <Library className="w-6 h-6 text-purple-600" />
  },
  {
    title: "6. Autonomía y Territorialización",
    description: "Mis propuestas son una base flexible diseñada para que tú, como autoridad experta, puedas ajustar la planeación a la realidad social, cultural y comunitaria de tu escuela específica.",
    icon: <MapPin className="w-6 h-6 text-red-500" />
  }
];

const App: React.FC = () => {
  const guideRef = useRef<HTMLDivElement>(null);

  const scrollToGuide = () => {
    guideRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header / Navbar */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-4">
              <img 
                src={LOGO_SE} 
                alt="Secretaría de Educación Chiapas" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="hidden md:flex space-x-6 items-center">
              <div className="flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-lg">
                <School className="w-4 h-4 text-red-800" />
                <span className="text-xs font-bold text-red-900 uppercase tracking-tight">Telesecundaria</span>
              </div>
              <div className="h-6 w-px bg-gray-200"></div>
              <div className="flex items-center gap-2">
                <img 
                  src={LOGO_CREATOR} 
                  alt="Mtro. Uri" 
                  className="w-8 h-8 rounded-full border border-gray-200 object-cover"
                />
                <span className="text-xs font-bold text-gray-700">Mtro. Uri Armin Estrada Lara</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-chiapas-gradient text-white pt-12 pb-20 lg:pt-20 lg:pb-32">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-10 pointer-events-none">
             <School size={500} />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                {/* Upper Badge */}
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-[10px] sm:text-xs font-black tracking-[0.15em] uppercase">
                  <Sparkles className="w-4 h-4 mr-2 text-yellow-300 animate-pulse" />
                  Plataforma Oficial de Planeación Didáctica
                </div>
                
                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] tracking-tight">
                  Generador de Planeaciones <span className="text-amber-400">Telesecundaria</span>
                </h1>
                
                {/* INTEGRATED AUTHOR INFO (UP HIGH) */}
                <div className="flex items-center gap-4 p-4 bg-black/20 border border-white/10 rounded-2xl backdrop-blur-sm max-w-md">
                  <div className="relative">
                    <img 
                      src={LOGO_CREATOR} 
                      alt="Autor" 
                      className="w-14 h-14 rounded-full border-2 border-amber-400 object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-amber-400 p-1 rounded-full text-red-950">
                      <Award className="w-3 h-3" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] text-amber-400 font-black uppercase tracking-widest mb-0.5">Autor y Creador</p>
                    <p className="text-lg font-bold leading-tight">Mtro. Uri Armin Estrada Lara</p>
                    <div className="flex gap-3 mt-1.5">
                      {SOCIAL_LINKS.map((social) => (
                        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-medium">
                  Optimiza tu gestión docente con IA. Genera planeaciones precisas, alineadas a la NEM y al contexto de Chiapas en segundos.
                </p>

                {/* CALL TO ACTION BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <a 
                    href={NOTEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center px-12 py-5 text-xl font-black rounded-2xl text-red-950 bg-amber-400 hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(251,191,36,0.3)] group overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                    <span className="relative flex items-center">
                      ACCEDER AL GENERADOR
                      <ExternalLink className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                  
                  <button 
                    onClick={scrollToGuide}
                    className="inline-flex items-center justify-center px-8 py-5 border-2 border-white/30 text-base font-bold rounded-2xl text-white hover:bg-white/10 backdrop-blur-sm transition-all"
                  >
                    Guía de Usuario
                  </button>
                </div>
              </div>

              {/* Visual Mockup Side */}
              <div className="hidden lg:block">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-red-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative bg-white rounded-[2.5rem] p-10 shadow-2xl border border-white/20">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                          <BookOpen className="text-red-700 w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-xs font-black text-gray-400 uppercase tracking-widest">NotebookLM Pro</p>
                          <h4 className="text-gray-900 font-black text-xl leading-none mt-1">Motor de IA Educativo</h4>
                        </div>
                      </div>
                      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter">
                        Online
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="w-1/3 h-20 bg-gray-50 rounded-2xl animate-pulse"></div>
                        <div className="w-2/3 h-20 bg-gray-50 rounded-2xl animate-pulse"></div>
                      </div>
                      <div className="h-4 bg-gray-50 rounded-full w-full"></div>
                      <div className="h-4 bg-gray-50 rounded-full w-5/6"></div>
                      <div className="h-4 bg-gray-50 rounded-full w-4/6"></div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex -space-x-3">
                        {[1,2,3,4].map(i => (
                          <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[8px] font-bold text-gray-500">SEP</div>
                        ))}
                      </div>
                      <span className="text-xs font-bold text-gray-400">+500 Docentes activos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Guide Section */}
        <section ref={guideRef} className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-red-700 font-black text-xs uppercase tracking-[0.2em]">Manual de Usuario</span>
              <h2 className="text-4xl font-black text-gray-900 mt-4 mb-4 tracking-tight">¿Cómo funciona el Generador?</h2>
              <p className="text-gray-500 max-w-2xl mx-auto font-medium">Sigue estos puntos clave para aprovechar al máximo la inteligencia artificial aplicada a tu planeación didáctica.</p>
              <div className="mt-6 flex justify-center">
                <div className="h-1.5 w-24 bg-red-700 rounded-full"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {GUIDE_STEPS.map((step, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:shadow-xl hover:bg-white transition-all group">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <h4 className="text-xl font-black mb-4 text-gray-900 leading-tight">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Extended Creator / Social Section */}
        <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2">
                <span className="text-red-700 font-black text-xs uppercase tracking-[0.2em]">Trayectoria Digital</span>
                <h2 className="text-4xl font-black text-gray-900 mt-4 mb-6 leading-tight">Sobre el Creador del Proyecto</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  El <strong>Mtro. Uri Armin Estrada Lara</strong> ha desarrollado esta herramienta para dignificar y facilitar el tiempo de los maestros chiapanecos. Con un enfoque en la Telesecundaria, busca integrar las últimas tecnologías de Google para transformar el aula.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-3xl font-black text-red-700">100%</p>
                    <p className="text-sm font-bold text-gray-500 uppercase mt-1 tracking-tighter">Alineado a la NEM</p>
                  </div>
                  <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <p className="text-3xl font-black text-red-700">IA</p>
                    <p className="text-sm font-bold text-gray-500 uppercase mt-1 tracking-tighter">Generación Inteligente</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col items-center">
                <div className="bg-white w-full p-10 rounded-[3rem] border border-gray-100 shadow-xl text-center">
                  <img src={LOGO_CREATOR} alt="Mtro Uri" className="w-32 h-32 rounded-full mx-auto border-4 border-gray-50 object-cover shadow-lg mb-6" />
                  <h3 className="text-2xl font-black text-gray-900">Mtro. Uri Armin Estrada Lara</h3>
                  <p className="text-red-700 font-bold mb-8 uppercase tracking-widest text-xs mt-2">Catedrático e Innovador Digital</p>
                  
                  <div className="flex justify-center gap-4">
                    {SOCIAL_LINKS.map((social) => (
                      <a
                        key={social.name + '-profile'}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-2xl bg-gray-50 text-gray-700 shadow-sm border border-gray-100 transition-all hover:-translate-y-1 hover:shadow-md ${social.color}`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
             <h2 className="text-3xl font-black text-gray-900 sm:text-4xl tracking-tight">Beneficios del Programa</h2>
             <div className="mt-4 flex justify-center">
                <div className="h-1.5 w-24 bg-red-700 rounded-full"></div>
              </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-gray-50 p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8">
                  <ArrowRight className="text-red-700 w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black mb-4 text-gray-900">Agilidad</h4>
                <p className="text-gray-500 leading-relaxed font-medium">Recupera horas valiosas de tu semana delegando la estructura técnica de la planeación a la IA.</p>
              </div>
              <div className="bg-gray-50 p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8">
                  <ShieldCheck className="text-amber-600 w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black mb-4 text-gray-900">Validación</h4>
                <p className="text-gray-500 leading-relaxed font-medium">Contenidos revisados bajo estándares de la Secretaría de Educación para el nivel Telesecundaria.</p>
              </div>
              <div className="bg-gray-50 p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8">
                  <Sparkles className="text-blue-600 w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black mb-4 text-gray-900">Personalización</h4>
                <p className="text-gray-500 leading-relaxed font-medium">Capacidad de ajustar la planeación a las realidades socioculturales específicas de cada comunidad.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 pb-12 border-b border-gray-800/50">
            <div className="max-w-md text-center md:text-left">
              <img 
                src={LOGO_SE} 
                alt="SE Chiapas" 
                className="h-12 w-auto brightness-0 invert opacity-90 mb-8 mx-auto md:mx-0"
              />
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                Secretaría de Educación del Estado de Chiapas. Institución rectora que garantiza el derecho a una educación de excelencia.
              </p>
            </div>
            
            <div className="text-center md:text-right w-full md:w-auto">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-3">
                PROGRAMA CREADO POR
              </p>
              <p className="text-2xl font-black text-white">
                Mtro. Uri Armin Estrada Lara
              </p>
              <p className="text-amber-500 font-bold mt-2">© Derechos Reservados {new Date().getFullYear()}</p>
              <div className="mt-8 bg-gray-900/50 p-4 rounded-xl border border-gray-800 inline-block text-left">
                <p className="text-[10px] text-gray-400 font-bold">ESTE PROGRAMA ES PÚBLICO, AJENO A CUALQUIER PARTIDO POLÍTICO.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center text-gray-600 text-[9px] font-bold tracking-widest uppercase">
            CHIAPAS, MÉXICO • TRANSFORMACIÓN EDUCATIVA • IA PARA DOCENTES
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
