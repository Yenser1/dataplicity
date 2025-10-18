"use client";

import CountUp from "./Components/countUp";
import EmblaCarousel from "./Components/EmblaCarousel";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Smartphone, Laptop } from "lucide-react";
import ContactForm from "./Components/contactForm";

const Softwares = [
  <div
    className="flex justify-center items-center bg-[#333333] slidesEmbla relative backdrop-opacity-5"
    style={{
      background: `url('/imagenesSoftwareMenosClaras/Slide1.webp')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: "0.8",
    }}
  ></div>,
  <div
    className="flex justify-center items-center bg-[#333333] slidesEmbla"
    style={{
      background: `url('/imagenesSoftwareMenosClaras/Slide2.webp')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: "0.8",
    }}
  ></div>,
  <div
    className="flex justify-center items-center bg-[#333] slidesEmbla"
    style={{
      background: `url('/imagenesSoftwareMenosClaras/Slide3.webp')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: "0.8",
    }}
  ></div>,
];

function LandingPage() {
  const [Informacion, setInformacion] = useState("softDev"); //mobDev, webDev

  return (
    <main className="m-0">
      <section className="mb-8 relative ">
        <div className="flex flex-col absolute z-10 w-full h-full justify-center">
          <h1
            className="h3 w-3/4 mb-3 ml-20"
            style={{
              textShadow: "0 0 10px black",
            }}
          >
            Brindamos Soluciones Innovadoras
          </h1>
          <p
            className="mb-6 body-lg ml-20"
            style={{
              textShadow: "0 0 10px black",
            }}
          >
            Desarrollamos todo tipo de software segun su necesidad
          </p>
          <Link
            href={"/"}
            className="bg-green-600 flex w-max px-6 ml-20 py-2 rounded-xl h6 hover:scale-105 hover:-translate-y-1 transition-all duration-200"
          >
            Ver proyectos
          </Link>
        </div>

        <EmblaCarousel
          slides={Softwares}
          options={{
            align: "start",
            loop: true,
            draggable: false,
            dragFree: false,
          }}
        />
      </section>
      <section>
        <h1 className="mb-10 h2 text-center mt-20 px-20">Nuestros Proyectos</h1>
        {/* Contenedor de los softwares a la venta */}
        <div className="flex flex-wrap w-screen justify-center gap-10 mb-10 p-1">
          {/* Desarrollo de Aplicaciones WEB */}
          <div
            className="flex flex-col gap-5 hover:-translate-y-3 transition-all duration-200 delay-75"
            onClick={() => {
              setInformacion("webDev");
            }}
          >
            <h2
              className={`p-3 rounded-2xl hover:cursor-pointer transition-all duration-300 body-lg text-center px-10 hover:scale-105  ${
                Informacion === "webDev" ? "bg-green-600" : "bg-green-800"
              }`}
            >
              Desarrollo Aplicaciones Web
            </h2>
            <motion.div
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
              className={`self-center bg-[#333] w-full rounded-xl h-80 flex justify-center items-center 
              ${Informacion === "webDev" ? "shadow-lg shadow-[#232] " : ""}`}
            >
              <Laptop className="w-3/4 h-3/4" />
            </motion.div>
          </div>
          {/* Desarrollo de Software */}
          <div
            className="flex flex-col gap-5 hover:-translate-y-3 transition-all duration-200 delay-75"
            onClick={() => {
              setInformacion("softDev");
            }}
          >
            <h2
              className={`p-3 rounded-2xl hover:cursor-pointer transition-all duration-300 body-lg text-center px-20 hover:scale-105 ${
                Informacion === "softDev" ? "bg-green-600" : "bg-green-800"
              }`}
            >
              Desarrollo de Software
            </h2>
            <motion.div
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
              className={`self-center bg-[#333] w-full rounded-xl h-80 flex justify-center items-center 
              ${Informacion === "softDev" ? "shadow-lg shadow-[#232]" : ""}`}
            >
              <svg
                fill="#ffffff"
                className="w-3/4 h-3/4"
                viewBox="0 -3 32 32"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <defs>
                  <clipPath id="screenClip">
                    <rect
                      x="2"
                      y="2"
                      width="28"
                      height="17"
                      rx="0.5"
                      ry="0.5"
                    ></rect>
                  </clipPath>
                </defs>

                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>

                <g id="SVGRepo_iconCarrier">
                  <path d="M30.000,21.000 L17.000,21.000 L17.000,24.000 L22.047,24.000 C22.600,24.000 23.047,24.448 23.047,25.000 C23.047,25.552 22.600,26.000 22.047,26.000 L10.047,26.000 C9.494,26.000 9.047,25.552 9.047,25.000 C9.047,24.448 9.494,24.000 10.047,24.000 L15.000,24.000 L15.000,21.000 L2.000,21.000 C0.898,21.000 0.000,20.103 0.000,19.000 L0.000,2.000 C0.000,0.897 0.898,0.000 2.000,0.000 L30.000,0.000 C31.103,0.000 32.000,0.897 32.000,2.000 L32.000,19.000 C32.000,20.103 31.103,21.000 30.000,21.000 ZM2.000,2.000 L2.000,19.000 L29.997,19.000 L30.000,2.000 L2.000,2.000 Z"></path>
                </g>

                <g clipPath="url(#screenClip)">
                  <text
                    x="16"
                    y="10.5"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="10"
                    fontWeight="700"
                    fontFamily="ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', Arial"
                    fill="#ffffff"
                  >
                    @
                  </text>
                </g>
              </svg>
            </motion.div>
          </div>
          {/* Desarrollo de Aplicaciones Moviles */}
          <div
            className="flex flex-col gap-5 hover:-translate-y-3 transition-all duration-200 delay-75"
            onClick={() => {
              setInformacion("mobDev");
            }}
          >
            <h2
              className={`p-3 rounded-2xl hover:cursor-pointer transition-all duration-300 body-lg text-center px-8 hover:scale-105 ${
                Informacion === "mobDev" ? "bg-green-600" : "bg-green-800"
              }`}
            >
              Desarrollo Aplicaciones Moviles
            </h2>
            <motion.div
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
              className={`self-center bg-[#333] w-full rounded-xl h-80 flex justify-center items-center 
              ${Informacion === "mobDev" ? "shadow-lg shadow-[#232]" : ""}`}
            >
              <Smartphone className="w-3/4 h-3/4" />
            </motion.div>
          </div>
        </div>
        {/* Contenido con explicacion dinamica de cada que este seleccionado */}
        {Informacion === "webDev" && (
          <motion.div
            initial={{ opacity: 0.5, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.5, y: -10 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.07 }}
          >
            <div className="w-full flex flex-col justify-center items-center bg-[#436d20] mt-20 py-12">
              <h5 className="text-center h4">Desarrollo de Web</h5>
              <p className="text-center flex w-1/2 body-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                saepe repellendus laboriosam odio consequatur id totam enim quia
                in quidem autem voluptatem praesentium, earum laudantium
                excepturi dolorum quos distinctio. Ab. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Explicabo doloremque facere
                eveniet hic deleniti labore dolorem temporibus eligendi et
                optio. Consequatur ab aut fuga odio nisi earum harum perferendis
                neque.
              </p>
            </div>

            <section className="mt-16">
              <h1 className="h4 text-center mb-6">
                Experiencia de Desarrollo Web
              </h1>
              <div className="flex flex-wrap w-full justify-center gap-12">
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    ease: "easeInOut",
                    duration: "0.5",
                    delay: "0.02",
                  }}
                  className="bg-[#417a11] w-1/5 min-w-60 min-h-60 flex flex-col justify-center items-center rounded-2xl hover:-translate-y-3 transition-all duration-200 delay-75"
                >
                  <div className="w-max ">
                    <span className="h1 text-center">+</span>
                    <CountUp
                      from={0}
                      to={20}
                      separator=","
                      direction="up"
                      duration={5}
                      className="count-up-text h1 text-center"
                    />
                  </div>
                  <p className="body-lg text-center">Anos de Experiencia</p>
                </motion.div>
                <motion.div
                  initial={{ x: 0, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    ease: "easeInOut",
                    duration: "0.5",
                    delay: "0.02",
                  }}
                  className="bg-[#417a11] w-1/5 min-w-60 min-h-60 flex flex-col justify-center items-center rounded-2xl hover:-translate-y-3 transition-all duration-200 delay-75"
                >
                  <div className="w-max">
                    <span className="h1 text-center">+</span>
                    <CountUp
                      from={0}
                      to={40}
                      separator=","
                      direction="up"
                      duration={5}
                      className="count-up-text h1 text-center"
                    />
                  </div>
                  <p className="body-lg">Proyectos Realizados</p>
                </motion.div>

                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    ease: "easeInOut",
                    duration: "0.5",
                    delay: "0.02",
                  }}
                  className="bg-[#417a11] w-1/5 min-w-60 min-h-60 flex flex-col justify-center items-center rounded-2xl h-60 hover:-translate-y-3 transition-all duration-200 delay-75"
                >
                  <div className="w-max">
                    <span className="h1 text-center">+</span>
                    <CountUp
                      from={0}
                      to={25}
                      separator=","
                      direction="up"
                      duration={5}
                      className="count-up-text h1 text-center"
                    />
                  </div>
                  <p className="body-lg">Clientes Satisfechos</p>
                </motion.div>
              </div>
            </section>
          </motion.div>
        )}
        {Informacion === "softDev" && (
          <motion.div
            initial={{ opacity: 0.5, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.5, y: -10 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.07 }}
          >
            <div className="w-full flex flex-col justify-center items-center bg-[#436d20] mt-20 py-12">
              <h5 className="text-center h4">Desarrollo de Software</h5>
              <p className="text-center flex w-1/2 body-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci, doloremque animi! Quo, deserunt magni? Maxime placeat
                quisquam minima fuga! Eum sapiente voluptatem hic amet, aperiam
                exercitationem voluptatibus deleniti possimus nisi! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Illo minima
                voluptates quam, quibusdam maxime possimus iure illum officia
                quia animi commodi, omnis molestias odio libero itaque quae
                quidem ex atque?
              </p>
            </div>

            <section className="mt-16">
              <h1 className="h4 text-center mb-6">
                Experiencia de Desarrollo de Software
              </h1>
              <div className="flex flex-wrap w-full justify-center gap-12">
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    ease: "easeInOut",
                    duration: "0.5",
                    delay: "0.02",
                  }}
                  className="bg-[#417a11] w-1/5 min-w-60 min-h-60 flex flex-col justify-center items-center rounded-2xl hover:-translate-y-3 transition-all duration-200 delay-75"
                >
                  <div className="w-max">
                    <span className="h1 text-center">+</span>
                    <CountUp
                      from={0}
                      to={20}
                      separator=","
                      direction="up"
                      duration={5}
                      className="count-up-text h1 text-center"
                    />
                  </div>
                  <p className="body-lg text-center">Anos de Experiencia</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    ease: "easeInOut",
                    duration: "0.5",
                    delay: "0.02",
                  }}
                  className="bg-[#417a11] w-1/5 min-w-60 min-h-60 flex flex-col justify-center items-center rounded-2xl hover:-translate-y-3 transition-all duration-200 delay-75"
                >
                  <div className="w-max">
                    <span className="h1 text-center">+</span>
                    <CountUp
                      from={0}
                      to={50}
                      separator=","
                      direction="up"
                      duration={5}
                      className="count-up-text h1 text-center"
                    />
                  </div>
                  <p className="body-lg">Proyectos Realizados</p>
                </motion.div>

                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    ease: "easeInOut",
                    duration: "0.5",
                    delay: "0.02",
                  }}
                  className="bg-[#417a11] w-1/5 min-w-60 min-h-60 flex flex-col justify-center items-center rounded-2xl hover:-translate-y-3 transition-all duration-200 delay-75"
                >
                  <div className="w-max">
                    <span className="h1 text-center">+</span>
                    <CountUp
                      from={0}
                      to={30}
                      separator=","
                      direction="up"
                      duration={5}
                      className="count-up-text h1 text-center"
                    />
                  </div>
                  <p className="body-lg">Clientes Satisfechos</p>
                </motion.div>
              </div>
            </section>
          </motion.div>
        )}
        {Informacion === "mobDev" && (
          <motion.div
            initial={{ opacity: 0.5, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.5, y: -10 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.07 }}
          >
            <div className="w-full flex flex-col justify-center items-center bg-[#436d20] mt-20 py-12">
              <h5 className="text-center h4">
                Desarrollo de Aplicaciones Moviles
              </h5>
              <p className="text-center flex w-1/2 body-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                saepe repellendus laboriosam odio consequatur id totam enim quia
                in quidem autem voluptatem praesentium, earum laudantium
                excepturi dolorum quos distinctio. Ab. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Explicabo doloremque facere
                eveniet hic deleniti labore dolorem temporibus eligendi et
                optio. Consequatur ab aut fuga odio nisi earum harum perferendis
                neque.
              </p>
            </div>

            <section className="mt-16">
              <motion.h1
                initial={{ opacity: 0.5, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.5, y: -10 }}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.07 }}
                className="h4 text-center mb-6 in-vi"
              >
                Experiencia de Desarrollo Movil
              </motion.h1>
              <div className="flex flex-wrap w-full justify-center gap-12">
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    ease: "easeInOut",
                    duration: "0.5",
                    delay: "0.02",
                  }}
                  className="bg-[#417a11] w-1/5 min-w-60 min-h-60 flex flex-col justify-center items-center rounded-2xl hover:-translate-y-3 transition-all duration-200 delay-75"
                >
                  <div className="w-max">
                    <span className="h1 text-center">+</span>
                    <CountUp
                      from={0}
                      to={10}
                      separator=","
                      direction="up"
                      duration={5}
                      className="count-up-text h1 text-center"
                    />
                  </div>
                  <p className="body-lg text-center">Anos de Experiencia</p>
                </motion.div>
                <motion.div
                  initial={{ x: 0, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    ease: "easeInOut",
                    duration: "0.5",
                    delay: "0.02",
                  }}
                  className="bg-[#417a11] w-1/5 min-w-60 min-h-60 flex flex-col justify-center items-center rounded-2xl hover:-translate-y-3 transition-all duration-200 delay-75"
                >
                  <div className="w-max">
                    <span className="h1 text-center">+</span>
                    <CountUp
                      from={0}
                      to={20}
                      separator=","
                      direction="up"
                      duration={5}
                      className="count-up-text h1 text-center"
                    />
                  </div>
                  <p className="body-lg">Proyectos Realizados</p>
                </motion.div>

                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    ease: "easeInOut",
                    duration: "0.5",
                    delay: "0.02",
                  }}
                  className="bg-[#417a11] w-1/5 min-w-60 min-h-60 flex flex-col justify-center items-center rounded-2xl hover:-translate-y-3 transition-all duration-200 delay-75"
                >
                  <div className="w-max">
                    <span className="h1 text-center">+</span>
                    <CountUp
                      from={0}
                      to={15}
                      separator=","
                      direction="up"
                      duration={5}
                      className="count-up-text h1 text-center"
                    />
                  </div>
                  <p className="body-lg">Clientes Satisfechos</p>
                </motion.div>
              </div>
            </section>
          </motion.div>
        )}
      </section>
      <div className="w-full h-1 bg-[#417a11] my-10"></div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: "0.5",
          delay: "0.02",
        }}
        className="whatsapp-oval hover:-translate-y-3 transition-all duration-200 delay-75"
      >
        <div className="whatsapp-icon">
          <svg
            className="flex"
            width="42px"
            height="42px"
            viewBox="0 0 24 24"
            id="meteor-icon-kit__regular-whatsapp"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.5129 3.4866C18.2882 1.24722 15.2597 -0.00837473 12.1032 4.20445e-05C5.54964 4.20445e-05 0.216056 5.33306 0.213776 11.8883C0.210977 13.9746 0.75841 16.0247 1.80085 17.8319L0.114014 23.9932L6.41672 22.34C8.15975 23.2898 10.1131 23.7874 12.0981 23.7874H12.1032C18.6556 23.7874 23.9897 18.4538 23.992 11.8986C24.0022 8.74248 22.7494 5.71347 20.5129 3.4866ZM12.1032 21.7768H12.0992C10.3294 21.7776 8.59195 21.3025 7.06888 20.4012L6.70803 20.1874L2.96836 21.1685L3.96713 17.52L3.73169 17.1461C2.74331 15.5709 2.22039 13.7484 2.22328 11.8889C2.22328 6.44185 6.65615 2.00783 12.1072 2.00783C14.7284 2.00934 17.2417 3.05207 19.0941 4.90662C20.9465 6.76117 21.9863 9.27564 21.9848 11.8969C21.9825 17.3456 17.5496 21.7768 12.1032 21.7768ZM17.5234 14.3755C17.2264 14.2267 15.7659 13.5085 15.4934 13.4064C15.2209 13.3044 15.0231 13.2576 14.8253 13.5552C14.6275 13.8528 14.058 14.5215 13.8847 14.7199C13.7114 14.9182 13.5381 14.9427 13.241 14.794C12.944 14.6452 11.9869 14.3316 10.8519 13.3198C9.96884 12.5319 9.36969 11.5594 9.19867 11.2618C9.02765 10.9642 9.18043 10.8057 9.32922 10.6552C9.46261 10.5224 9.62622 10.3086 9.77444 10.1348C9.92266 9.9609 9.97283 9.83776 10.0714 9.63938C10.1701 9.44099 10.121 9.26769 10.0469 9.1189C9.97283 8.97011 9.37824 7.50788 9.13083 6.9133C8.88969 6.3341 8.64513 6.4122 8.46271 6.40023C8.29169 6.39168 8.09102 6.38997 7.89264 6.38997C7.58822 6.39793 7.30097 6.53267 7.10024 6.76166C6.82831 7.05923 6.061 7.77752 6.061 9.23976C6.061 10.702 7.12532 12.1146 7.27354 12.313C7.42176 12.5114 9.36855 15.5117 12.3472 16.7989C12.9004 17.0375 13.4657 17.2468 14.0409 17.426C14.7523 17.654 15.3999 17.6204 15.9118 17.544C16.4819 17.4585 17.6694 16.8251 17.9173 16.1313C18.1653 15.4376 18.1648 14.8424 18.0884 14.7187C18.012 14.595 17.8204 14.5266 17.5234 14.3778V14.3755Z"
                fill="#000000"
              ></path>
            </g>
          </svg>
        </div>
        <p>
          ¿Prefieres contactarnos directamente por WhatsApp?
          <br />
          Estamos disponibles para responder tus preguntas.
        </p>
        <Link
          href="https://wa.link/9gnqct"
          target="blank"
          className="whatsapp-button"
        >
          Chatear por WhatsApp
        </Link>
      </motion.div>
      <ContactForm />
    </main>
  );
}

export default LandingPage;
