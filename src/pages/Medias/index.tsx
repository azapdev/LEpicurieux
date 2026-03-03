import { motion } from "framer-motion";
import { useEffect } from "react";
const Medias = () => {
  const imgs: string[] = ["img1", "img2", "img3", "img4", "img5"];
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <section className="overflow-hidden">
        {/* BG */}
        <div
          className="h-[60vh] w-full bg-cover"
          style={{ backgroundImage: `url("/img/media/bg.webp")` }}
        ></div>

        {/* SEC2 */}
        <div className="flex items-center justify-center gap-4 bg-black px-8 py-12 text-white">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex w-full items-center justify-center"
          >
            <p className="max-w-lg text-center text-2xl md:text-6xl">
              Bienvenue sur notre site
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <p className="max-w-lg text-xs md:text-lg">
              Accueillez les visiteurs du site avec une introduction courte et attrayante.
              Double-cliquez ici pour ajouter votre texte.
            </p>
            <p className="mt-4 w-fit border-b-2 py-2 pe-4 text-xs text-white md:text-sm">
              Lire Plus
            </p>
          </motion.div>
        </div>

        {/* SEC3 */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2.5, type: "spring", bounce: 0.3 }}
          viewport={{ once: true }}
          className="flex w-screen"
        >
          {imgs.map((img, index) => (
            <div key={index} className="group relative h-full w-1/4 overflow-hidden">
              <div className="absolute inset-0 z-10 bg-black/20"></div>
              <img
                src={`/img/media/${img}.webp`}
                alt=""
                className="h-full w-full object-cover transition-transform duration-400 group-hover:scale-110"
              />
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Medias;
