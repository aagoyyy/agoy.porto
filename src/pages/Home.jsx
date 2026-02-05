import { motion } from "framer-motion";
import { Suspense, lazy, memo } from "react";
import profile from "../assets/profile.png";

const VideoCard = lazy(() => import("../components/VideoCard")); // lazy load VideoCard

const videos = [
  { id: 1, title: "Company Profile TEX20S", url: "https://www.youtube.com/embed/4hAE4ExzH44",orientation:"landscape" },
  { id: 2, title: "Visual Effect Sederhana", url: "https://www.youtube.com/embed/b3MAVGONTpo", orientation:"landscape" },
  { id: 3, title: "Liputan Fashion", url: "https://www.youtube.com/embed/HAdSXdZIgdI", orientation:"landscape" },
  { id: 4, title: "Remake Music Video - Sweet Scar", url: "https://www.youtube.com/embed/_fiDhl9BW0Y", orientation:"landscape" },
  { id: 5, title: "Gaming Anak-Anak", url: "https://www.youtube.com/embed/hq3BpVCnvH8", orientation:"landscape" },
  { id: 6, title: "Dokumentasi Acara", url: "https://www.youtube.com/embed/wWJN5CgfDzc", orientation:"landscape" },
  { id: 7, title: "IDE ITU MURAH?", url: "https://www.youtube.com/embed/t4ANEizx5Ag", orientation: "portrait"},
  { id: 8, title: "STRATEGI CHINA", url: "https://www.youtube.com/embed/PTZvK5Y9WFQ", orientation: "portrait"},
  { id: 9, title: "SHORT DRAMA", url: "https://www.youtube.com/embed/u0buD9Hj25c?autoplay=0&loop=1&playlist=u0buD9Hj25c", orientation: "portrait", orientation: "portrait"},
];

// ANIMATION VARIANTS
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

const float = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

function Home() {
  return (
    <div className="bg-gray-950 text-gray-100 font-inter scroll-smooth">

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative flex flex-col md:flex-row items-center justify-center min-h-screen text-white px-6 md:px-20 overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/bg.jpg')" }} // moved to /public for faster load
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
<motion.div
  className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-8"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  variants={fadeInUp}
>
  <motion.div className="md:w-1/2 space-y-5 text-center md:text-left">
    <motion.h1
      className="text-2xl md:text-3xl font-bold text-white tracking-wide leading-tight"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      Hi, I’m
    </motion.h1>

    <motion.h2
      className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      YOGA IMAM SUMBADRI
    </motion.h2>

    <motion.h3
      className="text-2xl md:text-3xl font-semibold text-cyan-400"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Video Editor
    </motion.h3>

    <motion.p
      className="text-gray-300 text-sm md:text-base leading-relaxed text-justify"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      Creative and detail-oriented Video Editor. I have experience creating music videos, short videos, and basic visual effects. Skilled in Adobe Premiere Pro, After Effects, CapCut, as well as basic motion graphics. I enjoy working in a team, adapt easily, and am always excited to bring engaging visual stories to life.
    </motion.p>

    <div className="flex gap-4 mt-4 flex-wrap justify-center md:justify-start">
  <motion.a href="#portofolio" whileHover={{ scale: 1.05 }}>
    <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
        See My Work
      </span>
    </button>
  </motion.a>

  <motion.a 
    href="/cv.pdf" 
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
  >
    <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center gap-2">
        <i className="fa-solid fa-file-pdf"></i>
        See My CV
      </span>
    </button>
  </motion.a>
</div>
    
  </motion.div>

  <motion.div
    className="md:w-1/3 w-full max-h-[60vh] flex justify-center"
    variants={float}
    animate="animate"
  >
    <motion.img
      src={profile}
      alt="Yoga Imam"
      loading="lazy"
      className="w-64 h-80 md:w-80 md:h-[420px] rounded-2xl object-cover object-center shadow-lg transition-all duration-500 hover:shadow-[0_0_30px_5px_rgba(6,182,212,0.6)]"
    whileHover={{ scale: 1.03 }}
    />
  </motion.div>
</motion.div>
</section>

      {/* WHY HIRE ME */}
      <section id="whyhireme" className="px-6 md:px-20 py-20 bg-gradient-to-b from-gray-900 via-cyan-900 to-gray-900 text-white text-center">
        <motion.h2
          className="text-3xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          💼 Why Hire Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto text-justify">
          {[
            {
              title: "Creative & Detail-Oriented",
              text: `Creativity and attention to detail are the foundation of my work. I don’t just edit videos — I craft stories that evoke emotion and connect with viewers. Every color, transition, and sound effect is placed with purpose to ensure the final product not only looks professional but also feels immersive and memorable.`,
            },
            {
              title: "Skilled in Editing Tools",
              text: `I’m proficient in various video editing software such as Adobe Premiere Pro, After Effects, and CapCut. I know how to combine visual storytelling with technical precision — from color grading and motion graphics to sound design and smooth pacing — creating engaging results tailored to the target audience and platform.`,
            },
            {
              title: "Professional & Reliable",
              text: `Take pride in maintaining professionalism in every project. Meeting deadlines, clear communication, and understanding the client’s vision are my top priorities. Whether working independently or in a team, I’m committed to delivering high-quality work that aligns with the project’s goals and exceeds expectations.`,
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:-translate-y-2 hover:shadow-cyan-500/20 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-cyan-400 text-center">{card.title}</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-12">
            {[
              { src: "/pr.png", alt: "Adobe Premiere Pro", label: "Premiere Pro" },
              { src: "/ae.png", alt: "Adobe After Effects", label: "After Effects" },
              { src: "/capcut.png", alt: "CapCut", label: "CapCut" },
              { src: "/canva.png", alt: "Canva", label: "Canva" },
            ].map((tool, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 0 20px rgba(6,182,212,0.4)",
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="group relative flex flex-col items-center justify-center bg-gray-900/40 rounded-2xl py-4 px-3 hover:bg-gray-800/60 transition-all duration-300 border border-gray-700/40"
              >
                <img
                  src={tool.src}
                  alt={tool.alt}
                  loading="lazy"
                  className="h-10 w-10 sm:h-12 sm:w-12 object-contain transition-all duration-500"
                />
                <p className="mt-2 text-gray-300 text-xs sm:text-sm group-hover:text-cyan-400 transition">
                  {tool.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
{/* PORTOFOLIO VIDEO SECTION */}
<section id="portofolio" className="relative px-6 md:px-20 py-20 text-white overflow-hidden">
  {/* Background */}
  <div
    className="absolute inset-0 bg-center bg-cover"
    style={{ backgroundImage: "url('/bg2.jpg')" }}
  >
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  <div className="relative z-10">
    <motion.h2
      className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      🎞 My Portfolio
    </motion.h2>

    <Suspense fallback={<p className="text-center text-gray-400">Loading videos...</p>}>
      {/* LANDSCAPE VIDEOS */}
      <div className="mb-16">
        <motion.h3
          className="text-2xl font-semibold mb-6 text-cyan-300"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          📺 Landscape Videos
        </motion.h3>
        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {videos
            .filter((video) => video.orientation === 'landscape')
            .map((video) => (
              <motion.div
                key={video.id}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 25px rgba(6,182,212,0.4)",
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="rounded-xl overflow-hidden shadow-[0_0_10px_-5px_rgba(6,182,212,0.2)] border border-cyan-500/40 hover:border-cyan-400 transition-all duration-500"
              >
                <VideoCard title={video.title} url={video.url} />
                <div className="p-4 text-center">
                  <h3 className="text-base md:text-lg font-semibold text-cyan-400">{video.title}</h3>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>

      {/* PORTRAIT VIDEOS */}
<div>
  <motion.h3
    className="text-2xl font-semibold mb-6 text-cyan-300"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    📱 Portrait Videos
  </motion.h3>
  
  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
    variants={{
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { staggerChildren: 0.2 } },
    }}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
  >
    {videos
      .filter((video) => video.orientation === 'portrait')
      .map((video) => (
        <motion.div
          key={video.id}
          variants={{
            hidden: { opacity: 0, y: 40, scale: 0.95 },
            show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
          }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 25px rgba(6,182,212,0.4)",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="rounded-xl overflow-hidden shadow-[0_0_10px_-5px_rgba(6,182,212,0.2)] border border-cyan-500/40 hover:border-cyan-400 transition-all duration-500"
        >
          <VideoCard title={video.title} url={video.url} orientation="portrait" />
          <div className="p-4 text-center">
            <h3 className="text-sm md:text-base font-semibold text-cyan-400">{video.title}</h3>
          </div>
        </motion.div>
      ))}
  </motion.div>
</div>
      
    </Suspense>
  </div>
</section>

      {/* FOOTER */}
      <footer id="footer" className="bg-[#001829] text-gray-300 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              Let’s Connect and Create <br /> Something Amazing Together.
            </h2>
            <p className="text-gray-400 max-w-md">
              I’m always open to new projects, collaborations, or just talking about video editing ideas.
            </p>

            <div className="flex space-x-6 pt-4 text-2xl">
              <a href="https://www.youtube.com/@yokkks_" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="https://www.instagram.com/mr.agoyy__/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://wa.me/62881082125699" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>

            <p className="text-sm text-gray-500 pt-6">
              © 2025 <span className="text-white font-semibold">Yoga Imam</span>. All rights reserved.
            </p>
          </div>

          {/* Right - Contact */}
          <div className="flex flex-col justify-center md:items-start md:pl-12">
            <div className="flex flex-col space-y-6 text-sm md:text-base w-full max-w-xs">
              {[
                { icon: "fa-phone", label: "Phone", value: "0881082125699" },
                { icon: "fa-envelope", label: "Email", value: "yoga.yoks25@gmail.com" },
                { icon: "fa-location-dot", label: "Address", value: "Kebumen, Central Java" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border border-cyan-400 text-cyan-400 text-lg flex-shrink-0">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default memo(Home);
