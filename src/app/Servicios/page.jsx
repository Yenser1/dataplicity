"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/contacto.css";
import { motion } from "framer-motion";

const serviceData = [
  {
    icon: "fas fa-laptop-code",
    title: "Desarrollo Web",
    desc: "Soluciones personalizadas diseñadas específicamente para las necesidades únicas de tu empresa.",
    img: "/imagenesServicios/31.webp",
    features: [
      "SEO Optimizado",
      "Diseño responsive",
      "Velocidad de carga",
      "Seguridad web",
      "Accesibilidad y usabilidad",
    ],
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Desarrollo Movil",
    desc: "Aplicaciones móviles con tecnología de punta para maximizar tu presencia digital.",
    img: "/imagenesServicios/32.webp",
    features: [
      "Rendimiento eficiente",
      "Interfaz intuitiva",
      "Compatibilidad multiplataforma",
      "Seguridad de datos",
      "Actualizacion y escalabilidad",
    ],
  },
  {
    icon: "fas fa-server",
    title: "Desarrollo Software",
    desc: "Infraestructura y soluciones en la nube para garantizar escalabilidad y seguridad.",
    img: "/imagenesServicios/33.webp",
    features: [
      "Estabilidad y rendimiento",
      "Interfaz clara y amigable",
      "Compatibilidad con sistemas operativos",
      "Seguridad y proteccion de datos",
      "Escalabilidad y mantenibilidad",
    ],
  },
];

const processSteps = [
  {
    number: 1,
    title: "Consulta",
    desc: "Analizamos tus necesidades y objetivos.",
  },
  {
    number: 2,
    title: "Diseño",
    desc: "Creamos prototipos y planificamos la solución.",
  },
  {
    number: 3,
    title: "Desarrollo",
    desc: "Implementamos la solución con metodologías ágiles.",
  },
  { number: 4, title: "Entrega", desc: "Lanzamos y damos soporte continuo." },
];

function ServiceCard({ service }) {
  React.useEffect(() => {
    if (!document.getElementById("fa-cdn")) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
      link.id = "fa-cdn";
      document.head.appendChild(link);
    }
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
      className="bg-[rgba(30,30,30,0.9)] rounded-xl p-8 text-center flex-1 min-w-[300px] max-w-[350px] shadow-xl border border-[#333] mb-6 transition-transform duration-300 hover:-translate-y-2"
    >
      <div className="mb-6 flex items-center justify-center mx-auto w-20 h-20 rounded-full bg-[rgba(94,147,26,0.1)]">
        <i className={`${service.icon} text-5xl text-[#5e931a]`}></i>
      </div>
      <h3 className="text-xl font-semibold mb-4 text-[#5e931a]">
        {service.title}
      </h3>
      <p className="mb-6 text-gray-300">{service.desc}</p>
      <div className="relative h-44 bg-[rgba(20,20,20,0.7)] border-2 border-dashed border-[#5e931a] rounded-lg flex flex-col items-center justify-center mb-6 text-[#5e931a]">
        <Image
          src={service.img}
          alt={service.title}
          fill
          className="object-cover mb-2 rounded-lg"
        />
      </div>
      <ul className="list-none text-left mt-6 p-0 space-y-2">
        {service.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-200">
            <i className="fas fa-check text-[#5e931a] mt-1 mr-2"></i>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ProcessStep({ step }) {
  return (
    <div className="flex-1 min-w-[200px] text-center hover:-translate-y-3 transition-all duration-200 delay-75">
      <div className="w-12 h-12 bg-[#5e931a] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step.number}
      </div>
      <h4 className="text-lg font-semibold text-[#5e931a] mb-2">
        {step.title}
      </h4>
      <p className="text-gray-300">{step.desc}</p>
    </div>
  );
}

export default function Servicios() {
  return (
    <div className=" min-h-screen font-sans">
      <div className="contactoHeader bg-[#5e931a] text-white text-center py-10 px-4 shadow-lg relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
          Nuestros Servicios
        </h1>
        <p className="text-lg opacity-90">
          Soluciones tecnológicas a tu medida
        </p>
      </div>
      <div className="text-center py-8 px-4 max-w-2xl mx-auto text-gray-300 text-base md:text-lg">
        <p>
          En Dataplicity ofrecemos una amplia gama de servicios de desarrollo de
          software para impulsar tu negocio hacia el éxito a través de la
          digitalización.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 md:gap-10 w-[90%] max-w-6xl mx-auto my-8">
        {serviceData.map((service, idx) => (
          <ServiceCard key={service.title + idx} service={service} />
        ))}
      </div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
        className="bg-[rgba(30,30,30,0.9)] rounded-xl p-10 my-12 w-[90%] max-w-5xl mx-auto shadow-2xl border border-[#333] text-center"
      >
        <h2 className="text-2xl font-bold text-[#5e931a] mb-8">
          Nuestro Proceso de Desarrollo
        </h2>
        <div className="flex flex-wrap justify-around gap-6">
          {processSteps.map((step, idx) => (
            <ProcessStep key={step.title + idx} step={step} />
          ))}
        </div>
      </motion.div>
      <div className="bg-gradient-to-br from-[#5e931a] to-[#4a7615] rounded-xl p-12 my-12 w-[90%] max-w-2xl mx-auto text-center shadow-2xl hover:-translate-y-3 transition-all duration-200 delay-75">
        <h2 className="text-2xl font-bold mb-4">
          ¿Interesado en nuestros servicios?
        </h2>
        <p className="mb-8 text-lg">
          Contáctanos hoy mismo para una consulta gratuita
        </p>
        <Link
          href="/Contacto"
          className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold text-lg border border-[#5e931a] transition-all duration-300 hover:bg-[#222] hover:scale-105"
        >
          Contactar ahora
        </Link>
      </div>
    </div>
  );
}
