import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  Cpu, 
  Settings, 
  Users, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight,
  Monitor,
  Database,
  BrainCircuit, 
  Lightbulb,
  Waves,
  Hexagon
} from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-11 h-11">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-brand-blue/20 blur-xl rounded-full group-hover:bg-brand-blue/40 transition-colors" />
            
            {/* Geometric Hub */}
            <div className="relative w-full h-full bg-brand-dark border-2 border-brand-blue/30 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:border-brand-cyan/50">
              <Hexagon className="text-brand-blue/20 w-8 h-8 absolute animate-spin-slow" />
              <BrainCircuit className="text-brand-blue w-6 h-6 z-10" />
            </div>
            
            {/* Status Indicator */}
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-brand-cyan rounded-full border-2 border-brand-dark shadow-[0_0_8px_rgba(186,230,253,0.5)]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-2xl tracking-tighter text-white leading-tight">SHALINI</span>
            <span className="text-brand-blue text-[9px] font-black tracking-[0.35em] uppercase leading-none opacity-90">IT SOLUTION</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#industries" className="hover:text-white transition-colors">Industries</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <button className="px-5 py-2 rounded-full border border-brand-blue/30 text-brand-blue hover:bg-brand-blue/10 transition-all font-semibold">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-wider mb-6">
            <Settings className="w-3 h-3" />
            Empowering Future Enterprises
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            Transform Your Business with <span className="text-gradient">Intelligent Automation</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
            Reduce costs, eliminate manual work, and scale operations with cutting-edge AI-powered RPA solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-xl bg-brand-blue hover:bg-brand-blue/90 text-white font-bold transition-all flex items-center gap-2 group shadow-lg shadow-brand-blue/20">
              Get Free Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-xl glass hover:bg-white/10 text-white font-bold transition-all">
              Book Demo
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass p-8 rounded-3xl neon-glow">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Processes Automated', value: '200+', icon: Monitor },
                { label: 'Cost Savings', value: '70%', icon: BarChart3 },
                { label: 'Accuracy Rate', value: '99.9%', icon: CheckCircle2 },
                { label: 'Average ROI', value: '4mos', icon: Cpu },
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <stat.icon className="w-6 h-6 text-brand-blue mb-2" />
                  <div className="text-2xl font-display font-bold">{stat.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Decorative rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "RPA Development",
      desc: "End-to-end bot development and process automation for Web, Desktop, and Excel workflows.",
      icon: Database,
      tag: "CORE"
    },
    {
      title: "SAP Automation",
      desc: "Streamline Purchase Orders, Invoice processing, and Vendor management within your SAP ecosystem.",
      icon: Settings,
      tag: "ENTERPRISE"
    },
    {
      title: "Intelligent Automation",
      desc: "OCR-based document processing, AI + RPA solutions, and advanced Chatbot integration.",
      icon: BrainCircuit,
      tag: "AI ADVANCED"
    },
    {
      title: "Consulting",
      desc: "Automation roadmap, ROI analysis, and RPA Center of Excellence (CoE) setup guide.",
      icon: Lightbulb,
      tag: "STRATEGY"
    }
  ];

  return (
    <section id="services" className="py-24 bg-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">Our <span className="text-brand-blue">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Providing specialized automation solutions to drive digital transformation.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl flex flex-col group h-full"
            >
              <div className="text-[10px] font-bold text-brand-blue tracking-[0.2em] mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                {s.tag}
              </div>
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-6 text-brand-blue">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                {s.desc}
              </p>
              <button className="mt-8 text-brand-cyan font-bold text-sm flex items-center gap-2 group/btn">
                Learn More
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const points = [
    { title: "Fast Deployment", text: "Go live in just 2–4 weeks with our agile implementation methodology." },
    { title: "Strong RPA Expertise", text: "Certified specialists with deep technical knowledge across major platforms." },
    { title: "Cost-Effective", text: "Optimized solutions designed to deliver maximum ROI and low TCO." },
    { title: "Scalable Architecture", text: "Robust frameworks that grow with your business needs." }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display text-4xl font-bold mb-8">Why Choose <span className="text-brand-cyan">Shalini IT Solution</span>?</h2>
          <div className="space-y-6">
            {points.map((p, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center">
                  <CheckCircle2 className="w-3 h-3 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">{p.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="h-64 rounded-3xl bg-linear-to-br from-brand-blue/20 to-brand-cyan/5 border border-white/5 p-8 flex flex-col justify-end">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">Digital Workforce</div>
            </div>
            <div className="h-48 rounded-3xl glass p-8">
              <div className="w-10 h-10 rounded-full bg-brand-blue/20 mb-4 flex items-center justify-center">
                <Users className="w-5 h-5 text-brand-blue" />
              </div>
              <div className="text-lg font-bold">150+ Clients</div>
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="h-48 rounded-3xl glass p-8">
              <div className="w-10 h-10 rounded-full bg-brand-cyan/20 mb-4 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-brand-cyan" />
              </div>
              <div className="text-lg font-bold">90% Efficiency</div>
            </div>
            <div className="h-64 rounded-3xl bg-linear-to-br from-white/10 to-transparent border border-white/5 p-8 flex flex-col justify-end">
               <div className="text-4xl font-bold mb-2">0%</div>
               <div className="text-xs text-gray-400 uppercase tracking-widest">Manual Errors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = ["Banking & Finance", "Manufacturing", "Healthcare", "Logistics", "Retail"];
  
  return (
    <section id="industries" className="py-24 bg-brand-blue/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <h2 className="font-display text-2xl font-bold mb-12 text-center opacity-50 uppercase tracking-widest">Empowering Leading Industries</h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {industries.map((ind, i) => (
            <div key={i} className="flex items-center gap-3 text-xl font-display font-medium text-gray-300">
              <div className="w-2 h-2 rounded-full bg-brand-blue" />
              {ind}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-3xl glass p-1 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
              alt="Technology Background" 
              className="w-full h-full object-cover rounded-[1.2rem] opacity-60 grayscale hover:grayscale-0 transition-all duration-700" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center">
                 <Settings className="w-6 h-6 text-brand-blue animate-spin-slow" />
              </div>
              <div>
                <div className="font-bold">Mumbai Presence</div>
                <div className="text-xs text-gray-400">Headquartered in India</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-display text-4xl font-bold mb-8">Redefining <span className="text-gradient">Operational Excellence</span></h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            We are a leading automation solutions provider specializing in Robotic Process Automation (RPA), SAP automation, and AI-driven technologies.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            Our goal is to help organizations streamline operations, reduce costs, and improve efficiency through intelligent automation. With strong expertise in enterprise systems and workflow optimization, we deliver scalable and reliable automation solutions tailored to business needs.
          </p>
          <button className="px-8 py-3 rounded-full border border-white/20 hover:border-brand-blue transition-colors flex items-center gap-2 font-semibold">
            Our Mission
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-linear-to-b from-transparent to-brand-blue/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass p-12 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="font-display text-4xl font-bold mb-6 italic">Let's build your <span className="text-brand-blue">Digital Workforce</span></h2>
              <p className="text-gray-400 mb-10">Ready to transform your business? Contact us today for a free assessment and roadmap for your automation journey.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-blue">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 uppercase tracking-widest font-bold">Call Us</div>
                    <div className="text-lg font-bold">+91 9326414835</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-blue">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 uppercase tracking-widest font-bold">Email Us</div>
                    <div className="text-lg font-bold">ndsawant1998@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-blue">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 uppercase tracking-widest font-bold">Location</div>
                    <div className="text-lg font-bold">Mumbai, India</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass bg-white/5 p-8 rounded-3xl">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-blue transition-colors" />
                  <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-blue transition-colors" />
                </div>
                <input type="text" placeholder="Company" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-blue transition-colors" />
                <textarea placeholder="Tell us about your automation needs" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-blue transition-colors resize-none"></textarea>
                <button className="w-full py-4 rounded-xl bg-linear-to-r from-brand-blue to-brand-cyan text-brand-dark font-black tracking-widest uppercase hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-brand-dark border border-brand-blue/30 flex items-center justify-center relative overflow-hidden group">
            <BrainCircuit className="text-brand-blue w-5 h-5" />
            <div className="absolute inset-0 bg-brand-blue/5 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tight text-white leading-none">SHALINI</span>
            <span className="text-brand-blue text-[8px] font-black tracking-widest leading-none">IT SOLUTION</span>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          © 2026 Shalini IT Solution. All rights reserved. Mumbai, India.
        </div>
        <div className="flex gap-6">
          <button className="text-gray-400 hover:text-brand-blue transition-colors text-sm">Privacy Policy</button>
          <button className="text-gray-400 hover:text-brand-blue transition-colors text-sm">Terms of Service</button>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Industries />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
