import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const Menu = () => {
  const texts = [
    "Notre carte est constituée d'un menu dégustation variant au gré des arrivages et des saisons.",
    "Le tout en formule à partagerLe prix par personne varie selon les arrivages",
    "Prévoir environ 85$/personne pour le repas",
    "(tx et services non inclus).",
    "Pour un visuel de nos plats, nous vous invitons à visiter nos réseaux sociaux. @restolepicurieux",
    "Merci et à bientôt",
    "L'Épicurieux",
  ];

  const imgs = ["img1", "img2", "img3", "img4"];

  // Schema to validate
  const schema = z.object({
    email: z.string().email("INvalid E-Mail"),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <section className="flex flex-col items-center justify-between gap-8 overflow-hidden pt-4">
        {/* BG */}
        <div
          className="h-[60vh] w-screen bg-cover"
          style={{ backgroundImage: `url("/img/menu/bg.webp")` }}
        ></div>

        {/* INFORMATION */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: "spring", bounce: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          {/* MENU */}
          <p className="mx-4 text-sm md:text-xl">MENU</p>
          <p className="mx-4 max-w-xl px-12 text-center text-lg md:text-3xl">
            MENU Notre menu change au gré des saisons et selon les arrivages.
          </p>

          {/* LOGO */}
          <div className="mx-4 my-4 size-10 object-cover md:size-15">
            <img
              src="/img/sublogoBlack.webp"
              alt=""
              className="duration-700 hover:rotate-180"
            />
          </div>

          {/* INPUT */}
          <div className="relative mx-4 my-4 w-75 md:w-96">
            <form
              onSubmit={handleSubmit((data) => {
                alert(`EMAIL WAS SENT: ${data.email}`);
                reset();
              })}
            >
              <input
                type="email"
                {...register("email")}
                className="h-8 w-full px-4 outline-1 md:h-12"
                placeholder="E-Mail:"
              />
              {errors.email && (
                <p className="my-2 text-sm text-red-500">{errors.email.message}</p>
              )}
              <button
                type="submit"
                className="absolute top-0 right-0 h-9 cursor-pointer border-black bg-black px-2 text-white outline-1 duration-200 hover:bg-white hover:text-black md:h-12 md:text-xl"
              >
                Send
              </button>
            </form>
          </div>

          {/* info */}
          <div className="mx-4 my-4 flex flex-col items-center gap-8">
            {texts.map((text, index) => (
              <p key={index} className="max-w-xl text-center text-lg md:text-2xl">
                {text}
              </p>
            ))}
          </div>

          {/* IMGS */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2.5, type: "spring", bounce: 0.3 }}
            viewport={{ once: true }}
            className="hidden h-screen w-screen md:flex"
          >
            {imgs.map((img, index) => (
              <div key={index} className="group relative h-full w-1/4 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-black/20"></div>
                <img
                  src={`/img/menu/${img}.webp`}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-400 group-hover:scale-110"
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Menu;
