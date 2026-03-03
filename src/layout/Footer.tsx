import { motion } from "framer-motion";
const Footer = () => {
  return (
    <>
      <section
        id="contact"
        className="flex items-center justify-center overflow-hidden bg-black px-4 py-8"
      >
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-8 text-white"
        >
          <p className="text-lg md:text-2xl">SITUÉ AU</p>
          <div className="size-16 object-contain md:size-20">
            <img
              src="/img/sublogo.webp"
              alt=""
              className="duration-300 hover:rotate-180"
            />
          </div>

          <div className="flex flex-col gap-5 text-sm md:flex-row md:gap-12 md:text-lg">
            <span>info@restolepicurieux.com</span>
            <span>2270 Rue De L'Église, Val-David, J0T 2N0, QC</span>
            <span>(819) 320-0080</span>
          </div>
          <div className="flex justify-between gap-16">
            <a
              href="https://www.facebook.com/restolepicurieux"
              target="_blank"
              className="rounded-3xl border-2 px-4 py-1 text-sm duration-150 hover:bg-white hover:text-black md:text-lg"
            >
              facebook
            </a>
            <a
              href="https://www.instagram.com/restolepicurieux/"
              target="_blank"
              className="rounded-3xl border-2 px-4 py-1 text-sm duration-150 hover:bg-white hover:text-black md:text-lg"
            >
              instagram
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Footer;
