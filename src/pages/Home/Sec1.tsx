import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navroutes } from "../../Routes/routes";

const Sec1 = () => {
  return (
    <>
      <section
        className="relative flex h-[125vh] items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-8"
        style={{ backgroundImage: "url(/img/sec1/bg1.webp)" }}
      >
        {/* Isolation bg */}
        <div className="absolute top-0 right-0 z-0 h-full w-full bg-black/20"></div>

        {/* PARENT */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.2,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="z-10 flex max-w-xl flex-col items-center gap-12"
        >
          <p className="text-lg text-white md:text-2xl">RESTAURANT</p>
          {/* WORd IMG */}
          <div>
            <img src="/img/sec1/wordlogo.webp" alt="" />
          </div>
          {/* SUB LOGO IMG */}
          <div>
            <img
              src="/img/sublogo.webp"
              alt=""
              className="size-10 object-cover duration-300 hover:rotate-180 md:size-15"
            />
          </div>
          <div>
            <Link
              to={Navroutes.MENU}
              className="rounded-3xl border border-white px-12 py-1 text-lg text-white duration-150 hover:bg-white hover:text-black"
            >
              {" "}
              MENU
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Sec1;
