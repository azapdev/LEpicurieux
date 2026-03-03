import { motion } from "framer-motion";
const Sec2 = () => {
  // imgs
  const imgs = ["IMG1", "IMG2", "IMG3"];
  return (
    <>
      <section className="flex flex-col gap-20 overflow-hidden py-12">
        {/* img */}
        <motion.div
          initial={{ clipPath: "inset(0 0  100% 0)", opacity: 0 }}
          whileInView={{ clipPath: "inset(0 0  -5% 0)", opacity: 1 }}
          transition={{ duration: 2.5, type: "spring" }}
          viewport={{ once: true }}
          className="my-8 flex flex-wrap justify-center gap-4"
        >
          {imgs.map((img, index) => (
            <div key={index} className="mx-4 size-50 object-contain lg:size-70">
              <img src={`/img/sec2/${img}.webp`} alt="" />
            </div>
          ))}
        </motion.div>

        {/* infrormation */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
          className="mx-8 flex flex-col items-center justify-center gap-8 text-black"
        >
          <p className="text-xl md:text-2xl">À PROPOS</p>
          <div className="size-15">
            <img src="/img/sublogoBlack.webp" alt="" />
          </div>
          <p className="text-2xl md:text-3xl">L'Épicurieux</p>
          <p className="max-w-2xl text-sm md:text-lg">
            Situé à l'entrée du très joli village de Val-David dans les Laurentides,
            L’Épicurieux est un petit restaurant de quartier qui est reconnu pour ses
            plats tout en fraîcheur et son menu dégustation qui s'adapte aux saisons. Nous
            portons une attention particulière aux produits frais et locaux, tant dans nos
            plats que dans nos desserts . Nous fonctionnons sous forme de menu dégustation
            uniquement pour faire vivre une expérience complète. Notre carte des vins est
            constituée entièrement de vignerons/nes indépendants/es.{" "}
          </p>
          <p className="text-sm">Merci de prendre le temps de visiter notre site web.</p>
          <p className="text-sm">À bientôt</p>
          <img src="/img/sec2/prient.webp" alt="" className="size-40" />
          <p className="w-fit rounded-3xl border px-4 py-2 text-xs text-gray-400">
            VOIR TOUS LES ARTICLES SUR NOUS
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default Sec2;
