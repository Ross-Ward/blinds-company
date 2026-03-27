"use client";

import Image from "next/image";
import { 
  PhoneCall, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Hammer, 
  ShieldCheck, 
  PenTool, 
  Home,
  Menu,
  X,
  Star,
  Quote
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Roman Blinds",
    desc: "Classic fabric folds for a soft, layered look. Wide range of patterns available.",
    image: "/Why_should_you_choose_Roman_blinds.jpg",
  },
  {
    title: "Wood Venetian Blinds",
    desc: "Durable and stylish wood slats for precise light control and privacy.",
    image: "/hil_2022_wood-venetians_ellwood_silver-grey_light-grey-tape_portrait01.webp",
  },
  {
    title: "Roller & Electric Blinds",
    desc: "Modern moisture-resistant fabrics with manual or automated smart controls.",
    image: "/zenith-tr-ice-white-extra-wide-electric-roller-living-room-blinds-1-.webp",
  }
];

const highlights = [
  { icon: ShieldCheck, title: "Fully Insured", desc: "Completely covered for your peace of mind." },
  { icon: Hammer, title: "Free Installation", desc: "Expert fitting included with every order." },
  { icon: Clock, title: "On Time, Every Time", desc: "Reliable service you can count on." },
  { icon: CheckCircle2, title: "5 Year Guarantee", desc: "Quality products built to last." }
];

export default function TradesHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Top Contact Bar */}
      <div className="bg-slate-900 px-6 py-2 text-sm text-white md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><MapPin size={14} className="text-blue-400" /> Serving All of Dublin</span>
            <span className="hidden items-center gap-2 sm:flex"><Clock size={14} className="text-blue-400" /> Mon - Sat: 9am - 6pm</span>
          </div>
          <a href="tel:012345678" className="flex items-center gap-2 font-bold hover:text-blue-400 transition-colors">
            <PhoneCall size={14} className="text-blue-400" /> 01 234 5678
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          <div className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700 text-white shadow-md">
              <Home size={28} />
            </div>
            <div>
              <span className="block text-2xl font-black uppercase leading-none tracking-tight text-slate-900"> Dublin City </span>
              <span className="text-lg font-bold uppercase tracking-widest text-blue-700"> Blinds </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-wider text-slate-700">
            <a href="#" className="hover:text-blue-700">Home</a>
            <a href="#" className="hover:text-blue-700">Our Blinds</a>
            <a href="#" className="hover:text-blue-700">Recent Projects</a>
            <a href="#" className="hover:text-blue-700">Testimonials</a>
            <button className="bg-blue-700 px-6 py-3 text-white rounded-md shadow-lg shadow-blue-200 hover:bg-blue-800 transition-all active:scale-95">
              Get A Free Quote
            </button>
          </div>

          <button className="lg:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      <main>
        {/* Banner Section */}
        <section className="relative h-[600px] w-full bg-slate-900 text-white">
          <Image 
            src="/move1VVB_1469.2e16d0ba.fill-1080x610.jpg"
            alt="Blinds Installation"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-blue-900/40" />
          
          <div className="relative mx-auto h-full max-w-7xl px-6 py-20 md:px-12 flex items-center">
            <div className="max-w-2xl bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-xl border border-white/20 shadow-2xl">
              <div className="mb-4 inline-block bg-orange-500 px-4 py-1.5 text-xs font-black uppercase tracking-widest rounded-sm border border-orange-400">
                ⭐ Highly Rated Local Trade
              </div>
              <h1 className="text-4xl font-black uppercase leading-tight md:text-6xl tracking-tighter">
                Premium Blinds <br />
                <span className="text-blue-400">Made & Fitted</span> in Dublin
              </h1>
              <p className="mt-6 text-lg font-medium text-slate-100 leading-relaxed uppercase tracking-tighter decoration-blue-500">
                Expert measurement, custom manufacturing, and professional fitting. All in one affordable package.
              </p>
              
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-md font-black uppercase text-lg shadow-xl shadow-orange-950/20 transition-all transform active:scale-95">
                  Book A Free Survey Today
                </button>
              </div>
              
              <div className="mt-8 flex items-center gap-4 text-xs font-bold uppercase tracking-widest border-t border-white/20 pt-6">
                <span className="flex items-center gap-1.5 text-blue-300"><CheckCircle2 size={16} /> Fully Insured</span>
                <span className="flex items-center gap-1.5 text-blue-300"><CheckCircle2 size={16} /> Locally Owned</span>
              </div>
            </div>
          </div>
        </section>

        {/* Confidence Section */}
        <section className="bg-white py-16 shadow-inner">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
              {highlights.map((h, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-700">
                    <h.icon size={32} />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-sm mb-1 tracking-tight text-slate-800">{h.title}</h4>
                    <p className="text-sm text-slate-600 font-medium">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Showcase */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="mb-16 border-l-8 border-blue-700 pl-8">
              <h2 className="text-4xl font-black uppercase tracking-tight text-slate-900 md:text-5xl">Our Custom Solutions</h2>
              <p className="mt-4 text-lg font-bold text-slate-600 max-w-xl">
                We manufacture and fit a wide variety of blinds to suit every room and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {services.map((s, i) => (
                <div key={i} className="flex flex-col bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-black uppercase text-slate-900 mb-3 tracking-tight leading-none h-12">{s.title}</h3>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">
                      {s.desc}
                    </p>
                    <button className="text-blue-700 font-black uppercase text-sm tracking-widest border-b-2 border-blue-100 hover:border-blue-700 pb-1 transition-all">
                      View Options
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Simple Quote CTA */}
        <section className="bg-blue-800 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12 text-center">
            <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">Get A Fixed Quote Online</h2>
            <p className="mt-6 text-xl text-blue-100 font-bold max-w-2xl mx-auto">
              Ready to upgrade your windows? Give us a call or send a message for a free, no-obligation measurement and quote.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:012345678" className="inline-flex items-center gap-3 bg-white text-blue-900 px-10 py-5 rounded-md font-black uppercase text-lg hover:bg-slate-100 transition-all">
                <PhoneCall size={24} /> 01 234 5678
              </a>
              <button className="bg-orange-500 text-white px-10 py-5 rounded-md font-black uppercase text-lg hover:bg-orange-600 transition-all shadow-xl shadow-blue-950">
                Email Us
              </button>
            </div>
          </div>
        </section>

        {/* Review Banner */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Quote className="mx-auto text-blue-100 mb-8" size={64} />
            <p className="text-2xl font-bold italic text-slate-700 leading-relaxed mb-8">
              "Dublin City Blinds transformed our home. The measurement was quick, the quality of the Roman blinds is outstanding, and the price was much better than the big chains. Highly recommend!"
            </p>
            <div className="flex flex-col items-center">
              <span className="font-black uppercase tracking-widest text-blue-700"> Keith O'Hanlon </span>
              <span className="text-sm font-bold text-slate-500 uppercase"> Dublin 15 Customer </span>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#ff9900" className="text-orange-500" />)}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Standard Tradie Footer */}
      <footer className="bg-slate-900 text-white py-20 px-6 border-t-8 border-blue-700">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-xl font-black uppercase mb-6 tracking-tight">Dublin City <span className="text-blue-400">Blinds</span></h4>
            <p className="text-slate-400 text-sm font-medium leading-relaxed">
              Your local window treatment specialists. Professional fitting, high-quality materials, and affordable prices for all of Dublin.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-black uppercase text-blue-400 tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">Our Blinds</h4>
            <ul className="text-slate-400 text-sm font-bold space-y-3 uppercase tracking-tighter">
              <li><a href="#" className="hover:text-white">Roman Blinds</a></li>
              <li><a href="#" className="hover:text-white">Venetian Blinds</a></li>
              <li><a href="#" className="hover:text-white">Roller Blinds</a></li>
              <li><a href="#" className="hover:text-white">Electric Blinds</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-black uppercase text-blue-400 tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">Company</h4>
            <ul className="text-slate-400 text-sm font-bold space-y-3 uppercase tracking-tighter">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Recent Work</a></li>
              <li><a href="#" className="hover:text-white">Review Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-black uppercase text-blue-400 tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">Contact</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-center">
                <PhoneCall size={20} className="text-blue-400" />
                <span className="font-black text-lg">01 234 5678</span>
              </div>
              <p className="text-sm text-slate-400 font-bold uppercase tracking-tight">
                serving Dublin, Kildare & Wicklow
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl mt-20 pt-8 border-t border-white/5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 flex flex-col md:flex-row justify-between items-center text-center gap-4">
          <p>&copy; 2026 Dublin City Blinds Limited. Registered in Ireland.</p>
          <p className="text-blue-500/50">Design by Professional Trades Portfolio</p>
        </div>
      </footer>
    </div>
  );
}
