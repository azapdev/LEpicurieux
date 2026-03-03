import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navroutes } from "../../Routes/routes";

const Histoire = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <section className="overflow-hidden">
        <div
          className="h-[60vh] w-screen bg-cover"
          style={{ backgroundImage: `url("/img/histoire/bg.webp")` }}
        ></div>
        <div className="md: grid grid-cols-1 pt-12 md:grid-cols-2 md:pt-0">
          {/* MAin IMG */}
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            whileInView={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src="/img/histoire/img1.webp" alt="" className="h-full" />
          </motion.div>
          {/* INFORMATION */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center justify-center gap-8 px-4 py-12 text-black"
          >
            {/* LOGO */}
            <div className="border-t-2 border-b-2 py-4">
              <img src="/img/histoire/wordlogo.webp" alt="" className="w-xs" />
            </div>
            {/* TEXTS */}
            <div className="flex max-w-lg flex-col items-center justify-center gap-8 text-center">
              <p className="text-center">
                « C’est simple, ce que nous célébrons à L’Épicurieux, c’est le bon boire
                et le bien-manger. L’idée derrière la cuisine de saison est la promesse
                que chaque bouchée plaise à vos papilles de la manière la plus
                fondamentale – par sa fraîcheur. Dans le même état d’esprit, nous essayons
                du mieux que nous pouvons d’utiliser des produits provenant de commerçants
                locaux. Nous voulons que chaque fruit, légume et viande soient à l’apogée
                de leurs saveurs. Nous nous engageons à toujours vous offrir le meilleur.
                »
              </p>
              <p>
                <span>Fanny Ducharme, </span> de Sainte-Adèle, a obtenu son diplôme
                d'études professionnelles et son attestation de spécialisation
                professionnelle en cuisine de l'École Hôtelière des Laurentides. Elle a
                passé ses dernières années dans les cuisines de la Cabane à sucre du
                Pied-de-Cochon et se trouve désormais devant ses propres fourneaux chez
                L'Épicurieux. Elle est chaleureusement accompagnée dans cette aventure
                culinaire par son conjoint, William Lamarre, qui œuvre également en
                cuisine
              </p>
              <Link
                to={Navroutes.MEDIAS}
                className="w-fit rounded-3xl border px-4 py-2 text-xs text-gray-400 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-600"
              >
                VOIR TOUS LES ARTICLES SUR NOUS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Histoire;
