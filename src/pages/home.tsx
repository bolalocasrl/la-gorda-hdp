import { motion } from "framer-motion";
import logoPath from "@assets/LogoGorda_1776793858173.png";
import heroLogoPath from "@assets/LogoFinitosfondotrasparente_1776708242283.png";
import wallPath from "@assets/SfondoGordahdp_1777040737766.webp";
import bluWallPath from "@assets/bluhdp_1777042587612.webp";
import redWallPath from "@assets/rossohdp_1777042587620.webp";
import brownWallPath from "@assets/marronehdp_1777042587620.webp";

import imgEmpanadasRaw from "@assets/WhatsApp_Image_2026-04-10_at_01.37.22_1776715073714.jpeg";
import imgPizzaEntera from "@assets/WhatsApp_Image_2026-04-10_at_01.44.15_1776715073724.jpeg";
import imgCornetti from "@assets/cornetti_1776715090711.jpeg";
import imgIngredientes from "@assets/WhatsApp_Image_2026-04-10_at_01.37.22_1776715090726.jpeg";
import imgMalbec from "@assets/WhatsApp_Image_2026-04-10_at_01.40.17_1776715090726.jpeg";
import imgPizzaSlice from "@assets/WhatsApp_Image_2026-04-10_at_01.44.14_1776715090726.jpeg";
import imgEmpanadasAbiertas from "@assets/WhatsApp_Image_2026-04-10_at_01.44.15_1776715090726.jpeg";
import imgEmpanada from "@assets/WhatsApp_Image_2026-04-10_at_01.44.16_1776715090727.jpeg";
import imgAlfajores from "@assets/Alfajores_sito_1776793822676.png";
import imgTortaSito from "@assets/TortaSito_1776793901739.jpeg";
import imgLocale from "@assets/LocaleLaGorda_1776794258488.png";
import imgUltimaSito from "@assets/ultimasito_1776794964736.png";

const wallBg = {
  backgroundImage: `url(${wallPath})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const blueBg = {
  backgroundImage: `url(${bluWallPath})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const redBg = {
  backgroundImage: `url(${redWallPath})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const brownBg = {
  backgroundImage: `url(${brownWallPath})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const foodImg: React.CSSProperties = {
  filter: "contrast(1.15) saturate(1.25)",
  objectFit: "cover" as const,
};

// ── Fileteado text-shadow styles ──────────────────────────────────────────────
const fileteadoYellow: React.CSSProperties = {
  fontFamily: "'Rye', serif",
  textShadow: "2px 2px 0px #000, 4px 4px 0px rgba(0,0,0,0.55), -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
  WebkitTextStroke: "0.5px black",
  letterSpacing: "0.03em",
};

const fileteadoWhite: React.CSSProperties = {
  fontFamily: "'Rye', serif",
  textShadow: "2px 2px 0px #000, 4px 4px 0px rgba(0,0,0,0.55), -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
  WebkitTextStroke: "0.5px black",
  letterSpacing: "0.03em",
};

const lobsterStyle: React.CSSProperties = {
  fontFamily: "'Lobster', cursive",
};

export default function Home() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-oswald overflow-x-hidden">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-yellow-400">
        <div className="flex justify-between items-center px-4 py-2">
          <div onClick={() => scrollTo("hero")} className="flex items-center gap-3 cursor-pointer">
            <img src={logoPath} className="w-12 h-12" />
            {/* Header brand name: Rye font with fileteado effect */}
            <span
              className="text-2xl text-white hidden sm:block"
              style={fileteadoWhite}
            >
              LA GORDA HDP
            </span>
          </div>
          <div className="flex gap-6 font-bebas text-lg text-white">
            <button onClick={() => scrollTo("quienes-somos")}>SOMOS</button>
            <button onClick={() => scrollTo("menu")}>MENÚ</button>
            <button onClick={() => scrollTo("location")}>LOCAL</button>
          </div>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-32 md:pt-40"
        style={wallBg}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.15) 100%)" }}></div>
        <div className="relative z-10 px-4 flex flex-col items-center">
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            src={heroLogoPath}
            className="w-full max-w-md md:max-w-lg mx-auto mb-6"
            style={{ filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.8)) brightness(1.1)" }}
          />

          {/* Tagline: Lobster replaces font-bebas inline badge */}
          <p
            className="text-xl md:text-2xl bg-black text-yellow-400 inline-block px-4 py-1 mt-2 self-end translate-x-6 rotate-1 shadow-[4px_4px_0px_rgba(0,0,0,0.7)]"
            style={lobsterStyle}
          >
            Empanadas · Pizza · Alfajores · Malbec
          </p>

          {/* Quote: Lobster replaces font-marker */}
          <div className="bg-[#D0201A] px-5 py-2 mt-6 rotate-[-3deg] inline-block rounded-sm shadow-[6px_6px_0px_rgba(0,0,0,0.8)] border-2 border-black/40 self-start -translate-x-4">
            <p className="text-2xl md:text-3xl text-white" style={lobsterStyle}>
              Un hombre sin panza es como un cielo sin estrellas
            </p>
          </div>

          <div className="flex gap-3 mt-5 flex-wrap justify-center">
            <span className="bg-yellow-400 text-black font-bebas text-sm px-3 py-1 rotate-[-3deg] shadow-lg inline-block cursor-default transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl">🇦🇷 DESDE BUENOS AIRES</span>
            <span className="bg-black text-white font-bebas text-sm px-3 py-1 rotate-2 shadow-lg inline-block border border-white/20 cursor-default transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl">SIN FILTRO</span>
            <span className="bg-[#1A4FA0] text-yellow-400 font-bebas text-sm px-3 py-1 rotate-[-1deg] shadow-lg inline-block cursor-default transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl">HECHO A MANO 🔥</span>
          </div>

          {/* CTA button: Rye with fileteado */}
          <button
            onClick={() => window.open("/menu.html", "_blank")}
            className="mt-14 mb-20 bg-black text-white text-4xl px-12 py-5 border-4 border-yellow-400 rotate-2 shadow-[6px_6px_0px_rgba(245,197,24,0.85)] rounded-sm transition-all duration-200 ease-out hover:scale-105 hover:-translate-y-1"
            style={fileteadoYellow}
            data-testid="button-ver-menu"
          >
            VER MENÚ
          </button>
        </div>
      </section>

      {/* ─── QUIENES SOMOS ─── */}
      <section
        id="quienes-somos"
        className="relative py-24 text-center overflow-hidden"
        style={blueBg}
      >
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.10)" }}></div>
        <div className="relative z-10 px-4 flex flex-col items-center">
          <div className="relative inline-block mb-10">
            <div className="bg-black px-8 py-3 rounded-sm shadow-[6px_6px_0px_rgba(0,0,0,0.9)] border-4 border-white rotate-[-1deg]">
              {/* Section title: Rye + fileteado */}
              <h2 className="text-5xl text-yellow-400" style={fileteadoYellow}>QUIÉNES SOMOS</h2>
            </div>
            <span className="absolute -top-4 -right-6 bg-yellow-400 text-black font-bebas text-xs px-2 py-1 rotate-6 shadow-xl z-10 pointer-events-none whitespace-nowrap">DESDE BsAs ✈️</span>
          </div>
          <div className="max-w-3xl w-full mx-auto space-y-5 flex flex-col">
            <div className="bg-black px-6 py-4 self-start rotate-[-1deg] shadow-[6px_6px_0px_rgba(0,0,0,0.8)] border-2 border-white/20">
              <p className="text-white text-xl">Somos street food argentina. Pizzería, empanadería y alfajores caseros.</p>
            </div>
            {/* Key phrase: Lobster replaces font-marker */}
            <div className="bg-[#D0201A] px-8 py-4 self-center rotate-[-2deg] shadow-[6px_6px_0px_rgba(0,0,0,0.8)] border-2 border-black">
              <p className="text-4xl text-yellow-300" style={lobsterStyle}>Somos calle, somos masa, somos fuego.</p>
            </div>
            <div className="bg-black px-6 py-4 self-end rotate-1 shadow-[6px_6px_0px_rgba(0,0,0,0.8)] border-2 border-white/20">
              <p className="text-white text-xl">Pedís, te lo llevás, y listo. Sin vueltas.</p>
            </div>
          </div>
          {/* TAKE AWAY badge: Rye */}
          <div
            className="mt-4 -translate-y-2 relative z-10 bg-yellow-400 text-black text-3xl px-6 py-3 rotate-[-3deg] inline-block shadow-[6px_6px_0px_rgba(0,0,0,0.7)] border-2 border-black"
            style={fileteadoYellow}
          >
            TAKE AWAY ONLY
          </div>
        </div>
      </section>

      {/* ─── PRODUCTOS — cards with real food photos ─── */}
      <section
        className="relative py-24 overflow-hidden"
        style={wallBg}
      >
        <div className="absolute inset-0" style={{ background: "rgba(245,197,24,0.12)" }}></div>
        <div className="relative z-10">
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <div className="bg-black px-8 py-3 rounded-sm shadow-[6px_6px_0px_rgba(0,0,0,0.85)] border-4 border-yellow-400 rotate-1">
                {/* Section title: Rye + fileteado */}
                <h2 className="text-6xl text-yellow-400" style={fileteadoYellow}>LO NUESTRO</h2>
              </div>
              <span className="absolute -top-4 -left-6 bg-[#D0201A] text-white font-bebas text-sm px-3 py-1 rotate-[-10deg] shadow-xl z-10 pointer-events-none">🔥 HOT</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 px-4 max-w-6xl mx-auto">

            {/* Fugazzeta */}
            <div className="bg-[#D0201A] text-white rotate-[-1deg] shadow-[8px_8px_0px_rgba(0,0,0,0.85)] border-4 border-black overflow-hidden rounded-sm transition-all duration-200 ease-out hover:scale-[1.03] hover:rotate-0 hover:shadow-2xl cursor-pointer">
              <div className="h-52 overflow-hidden">
                <img src={imgPizzaSlice} alt="Pizza" className="w-full h-full" style={foodImg} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 flex-wrap">
                  {/* Card title: Rye */}
                  <h3 className="text-4xl" style={{ ...fileteadoWhite, textShadow: "1px 1px 0px #000, 3px 3px 0px rgba(0,0,0,0.5)" }}>Fugazzeta</h3>
                  <span className="inline-block bg-yellow-400 text-black font-bebas text-xs px-2 py-0.5 rotate-[-2deg] shadow-md">⭐ TOP VENTA</span>
                </div>
                <p>Mucha cebolla. Mucho queso. Punto.</p>
              </div>
            </div>

            {/* Empanadas */}
            <div className="bg-[#1A4FA0] text-white rotate-[3deg] shadow-[8px_8px_0px_rgba(0,0,0,0.8)] border-4 border-black overflow-hidden rounded-sm transition-all duration-200 ease-out hover:scale-[1.03] hover:rotate-1 hover:shadow-2xl cursor-pointer">
              <div className="h-52 overflow-hidden">
                <img src={imgEmpanada} alt="Empanada" className="w-full h-full" style={foodImg} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-4xl" style={{ ...fileteadoWhite, textShadow: "1px 1px 0px #000, 3px 3px 0px rgba(0,0,0,0.5)" }}>Empanadas</h3>
                  <span className="inline-block bg-yellow-400 text-black font-bebas text-xs px-2 py-0.5 rotate-2 shadow-md">🥟 RELLENO CASERO</span>
                </div>
                <p>Relleno casero. Sin mentira.</p>
              </div>
            </div>

            {/* Pizza */}
            <div className="bg-white text-black rotate-[-2deg] shadow-[8px_8px_0px_rgba(0,0,0,0.8)] border-4 border-black overflow-hidden rounded-sm transition-all duration-200 ease-out hover:scale-[1.03] hover:-rotate-1 hover:shadow-2xl cursor-pointer">
              <div className="h-52 overflow-hidden">
                <img src={imgPizzaEntera} alt="Pizza entera" className="w-full h-full" style={foodImg} />
              </div>
              <div className="p-6">
                <h3 className="text-4xl text-black" style={{ fontFamily: "'Rye', serif", textShadow: "1px 1px 0px rgba(0,0,0,0.3), 3px 3px 0px rgba(0,0,0,0.15)", letterSpacing: "0.03em" }}>Pizza</h3>
                <p>Al corte o entera. Como tiene que ser.</p>
              </div>
            </div>

            {/* Alfajores */}
            <div className="bg-black text-yellow-400 rotate-1 shadow-[8px_8px_0px_rgba(245,197,24,0.45)] border-4 border-yellow-400 overflow-hidden rounded-sm transition-all duration-200 ease-out hover:scale-[1.03] hover:rotate-0 hover:shadow-2xl cursor-pointer">
              <div className="h-52 overflow-hidden">
                <img src={imgAlfajores} alt="Alfajores" className="w-full h-full" style={foodImg} />
              </div>
              <div className="p-6">
                <h3 className="text-4xl" style={fileteadoYellow}>Alfajores</h3>
                <p>Dulce de leche en serio.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── PHOTO COLLAGE STRIP ─── */}
      <div className="bg-black overflow-hidden">

        {/* DESKTOP: full-width row, each image fills its cell */}
        <div className="hidden md:flex h-72 w-full">
          {[imgEmpanadasRaw, imgMalbec, imgEmpanadasAbiertas, imgIngredientes, imgCornetti, imgPizzaSlice, imgTortaSito, imgUltimaSito].map((src, i) => (
            <div key={i} className="flex-1 overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover" style={foodImg} />
            </div>
          ))}
        </div>

        {/* MOBILE: infinite auto-scroll carousel */}
        <div className="md:hidden h-44 overflow-hidden">
          <div className="carousel-track flex items-center h-full" style={{ width: "max-content" }}>
            {[imgEmpanadasRaw, imgMalbec, imgEmpanadasAbiertas, imgIngredientes, imgCornetti, imgPizzaSlice, imgTortaSito, imgUltimaSito,
              imgEmpanadasRaw, imgMalbec, imgEmpanadasAbiertas, imgIngredientes, imgCornetti, imgPizzaSlice, imgTortaSito, imgUltimaSito].map((src, i) => (
              <img key={i} src={src} alt="" className="h-40 w-auto flex-shrink-0 mr-2 shadow-xl" style={foodImg} />
            ))}
          </div>
        </div>

      </div>

      {/* ─── MENU — all 4 categories ─── */}
      <section
        id="menu"
        className="relative py-24 overflow-hidden"
        style={blueBg}
      >
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.12)" }}></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <div className="bg-black px-8 py-3 rounded-sm shadow-[6px_6px_0px_rgba(0,0,0,0.9)] border-4 border-yellow-400 rotate-[-1deg]">
                {/* MENÚ title: Rye + fileteado */}
                <h2 className="text-6xl text-yellow-400" style={fileteadoYellow}>MENÚ</h2>
              </div>
              <span className="absolute -top-4 -right-7 bg-[#D0201A] text-white font-bebas text-xs px-2 py-1 rotate-6 shadow-xl z-10 pointer-events-none whitespace-nowrap">¡PEDÍ YA! 🥟</span>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-6">

            {/* PIZZAS */}
            <div className="bg-black text-white p-6 rotate-[-2deg] shadow-[8px_8px_0px_rgba(0,0,0,0.85)] border-2 border-yellow-400/40">
              {/* Category title: Lobster replaces font-marker */}
              <h3 className="text-3xl text-yellow-400 mb-4" style={lobsterStyle}>🍕 PIZZAS</h3>
              <ul className="space-y-1 text-base">
                <li className="flex justify-between"><span>Margarita</span><span className="text-yellow-400 font-bebas text-lg ml-4">12€</span></li>
                <li className="flex justify-between"><span>Fugazzeta <span className="text-xs text-yellow-300">★ FIRMA · cebolla · mozzarella</span></span><span className="text-yellow-400 font-bebas text-lg ml-4">14€</span></li>
                <li className="flex justify-between"><span>Jamón Dulce</span><span className="text-yellow-400 font-bebas text-lg ml-4">13€</span></li>
                <li className="flex justify-between"><span>Peperoni</span><span className="text-yellow-400 font-bebas text-lg ml-4">13€</span></li>
                <li className="flex justify-between"><span>Napolitana</span><span className="text-yellow-400 font-bebas text-lg ml-4">13€</span></li>
                <li className="flex justify-between"><span>Diabla <span className="text-xs text-red-300">carne horneada · picante</span></span><span className="text-yellow-400 font-bebas text-lg ml-4">15€</span></li>
                <li className="flex justify-between"><span>4 Quesos</span><span className="text-yellow-400 font-bebas text-lg ml-4">14€</span></li>
                <li className="flex justify-between"><span>Kuk <span className="text-xs text-gray-400">rúcula · cabra · tomates</span></span><span className="text-yellow-400 font-bebas text-lg ml-4">15€</span></li>
              </ul>
              <p className="mt-3 text-center text-xs text-gray-400 font-bebas tracking-widest">CORTE: 3€</p>
            </div>

            {/* EMPANADAS */}
            <div className="bg-[#D0201A] text-white p-6 rotate-[2deg] shadow-[8px_8px_0px_rgba(0,0,0,0.85)] border-2 border-black">
              <h3 className="text-3xl text-yellow-300 mb-4" style={lobsterStyle}>🥟 EMPANADAS</h3>
              <ul className="space-y-1 text-base">
                <li className="flex justify-between"><span>Carne</span><span className="text-yellow-300 font-bebas text-lg ml-4">3,30€</span></li>
                <li className="flex justify-between"><span>Carne Picante 🌶</span><span className="text-yellow-300 font-bebas text-lg ml-4">3,30€</span></li>
                <li className="flex justify-between"><span>Pollo</span><span className="text-yellow-300 font-bebas text-lg ml-4">3,30€</span></li>
                <li className="flex justify-between"><span>Jamón y Queso</span><span className="text-yellow-300 font-bebas text-lg ml-4">3,00€</span></li>
                <li className="flex justify-between"><span>Caprese</span><span className="text-yellow-300 font-bebas text-lg ml-4">3,00€</span></li>
                <li className="flex justify-between"><span>Calabacín</span><span className="text-yellow-300 font-bebas text-lg ml-4">3,30€</span></li>
                <li className="flex justify-between"><span>Olivas Negras</span><span className="text-yellow-300 font-bebas text-lg ml-4">3,00€</span></li>
                <li className="flex justify-between"><span>Maíz / Verduras</span><span className="text-yellow-300 font-bebas text-lg ml-4">3,00€</span></li>
              </ul>
              {/* Fun phrase: Lobster */}
              <p className="mt-3 text-center text-sm text-yellow-200" style={lobsterStyle}>¡todas caseras, boludo!</p>
            </div>

            {/* ALFAJORES & OTROS */}
            <div className="bg-yellow-400 text-black p-6 rotate-[-1deg] shadow-[8px_8px_0px_rgba(0,0,0,0.85)] border-2 border-black">
              <h3 className="text-3xl mb-4" style={lobsterStyle}>🍮 DULCES</h3>
              <ul className="space-y-1 text-base">
                <li className="flex justify-between"><span>Alfajor</span><span className="font-bebas text-lg ml-4">2,00€</span></li>
                <li className="flex justify-between"><span>Alfajor de Maizena</span><span className="font-bebas text-lg ml-4">2,50€</span></li>
                <li className="flex justify-between"><span>Brownie</span><span className="font-bebas text-lg ml-4">3,30€</span></li>
                <li className="flex justify-between border-t border-black/20 mt-2 pt-2"><span>Quiche Espinacas</span><span className="font-bebas text-lg ml-4">4,50€</span></li>
                <li className="flex justify-between"><span>Quiche Atún</span><span className="font-bebas text-lg ml-4">5,00€</span></li>
                <li className="flex justify-between"><span>Quiche Jamón/Queso</span><span className="font-bebas text-lg ml-4">4,50€</span></li>
              </ul>
            </div>

            {/* BEBIDAS */}
            <div className="bg-black text-white p-6 rotate-[3deg] shadow-[8px_8px_0px_rgba(0,0,0,0.85)] border-2 border-yellow-400/40">
              <h3 className="text-3xl text-yellow-400 mb-4" style={lobsterStyle}>🍷 BEBIDAS</h3>
              <ul className="space-y-1 text-base">
                <li className="flex justify-between"><span>Caña</span><span className="text-yellow-400 font-bebas text-lg ml-4">2,00€</span></li>
                <li className="flex justify-between"><span>Caña Doble</span><span className="text-yellow-400 font-bebas text-lg ml-4">3,00€</span></li>
                <li className="flex justify-between"><span>Medianas</span><span className="text-yellow-400 font-bebas text-lg ml-4">3,30€</span></li>
                <li className="flex justify-between"><span>Refrescos</span><span className="text-yellow-400 font-bebas text-lg ml-4">2,00€</span></li>
                <li className="flex justify-between"><span>Copa Malbec <span className="text-xs text-gray-400">Mendoza</span></span><span className="text-yellow-400 font-bebas text-lg ml-4">3,50€</span></li>
                <li className="flex justify-between"><span>Vermuth</span><span className="text-yellow-400 font-bebas text-lg ml-4">3,50€</span></li>
                <li className="flex justify-between"><span>Cubatas</span><span className="text-yellow-400 font-bebas text-lg ml-4">8,00€</span></li>
                <li className="flex justify-between"><span>Agua</span><span className="text-yellow-400 font-bebas text-lg ml-4">1,80€</span></li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ─── CONTACTO ─── */}
      <section
        id="location"
        className="relative py-24 overflow-hidden text-center"
        style={wallBg}
      >
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.10)" }}></div>
        <div className="relative z-10 px-4 w-full max-w-5xl mx-auto">
          {/* Title */}
          <div className="text-center mb-10">
            <div className="relative inline-block">
              <div className="bg-black px-8 py-3 rounded-sm shadow-[6px_6px_0px_rgba(0,0,0,0.85)] border-4 border-black rotate-1 outline outline-2 outline-white/60 outline-offset-[-6px]">
                {/* CONTACTO title: Rye + fileteado */}
                <h2 className="text-6xl md:text-7xl text-white" style={fileteadoWhite}>CONTACTO</h2>
              </div>
              <span className="absolute -top-4 -left-6 bg-[#1A4FA0] text-yellow-400 font-bebas text-xs px-2 py-1 rotate-[-8deg] shadow-xl z-10 pointer-events-none">📍 BCN</span>
            </div>
          </div>

          {/* Two-column layout */}
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">

            {/* LEFT — text blocks */}
            <div className="flex flex-col items-center gap-6 flex-1">
              <div className="bg-black text-white px-8 py-6 w-full space-y-3 shadow-[8px_8px_0px_rgba(0,0,0,0.7)] border-2 border-white/20 rotate-[-1deg]">
                {/* Sub-label: Rye */}
                <p className="text-2xl text-yellow-400 tracking-widest" style={{ fontFamily: "'Rye', serif" }}>DÓNDE ESTAMOS</p>
                <p className="text-xl">Carrer Roger de Flor 167, Barcelona</p>
                <p className="text-xl">+34 647 00 68 82</p>
              </div>
              <div
                className="bg-[#D0201A] text-white inline-block px-6 py-3 text-3xl rotate-[-2deg] shadow-[6px_6px_0px_rgba(0,0,0,0.8)] border-2 border-black relative -mt-4 z-10"
                style={fileteadoWhite}
              >
                TAKE AWAY ONLY
              </div>
              <a
                href="tel:+34647006882"
                className="bg-[#D0201A] text-white text-4xl px-14 py-6 border-4 border-yellow-400 rotate-2 shadow-[8px_8px_0px_rgba(0,0,0,0.85)] inline-block w-full text-center transition-all duration-200 ease-out hover:scale-105 hover:-translate-y-1"
                style={fileteadoWhite}
                data-testid="link-llamar-ahora"
              >
                LLAMAR AHORA
              </a>
              <a
                href="https://maps.google.com/?q=Carrer+Roger+de+Flor+167,+Barcelona"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A4FA0] text-white font-bebas text-2xl px-8 py-3 inline-block shadow-[6px_6px_0px_rgba(0,0,0,0.7)] border-2 border-black/30 rotate-[-1deg] w-full text-center transition-all duration-200 ease-out hover:scale-105 hover:-translate-y-1"
                data-testid="link-ver-mapa"
              >
                VER EN EL MAPA
              </a>
            </div>

            {/* RIGHT — locale photo */}
            <div className="flex-1 flex justify-center">
              <img
                src={imgLocale}
                alt="El local — La Gorda HDP"
                className="border-4 border-black rotate-2 shadow-[10px_10px_0px_rgba(0,0,0,0.85)] w-full max-w-xs md:max-w-sm object-cover"
                style={{ maxHeight: "420px" }}
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}