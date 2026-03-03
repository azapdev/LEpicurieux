import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navroutes } from "../../Routes/routes";
const Sec3 = () => {
  return (
    <>
      <section className="flex justify-center overflow-hidden lg:flex-nowrap">
        {/* IMG1 */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          viewport={{ once: true }}
          className="group relative overflow-hidden"
        >
          <div className="absolute top-0 z-10 h-full w-full bg-black/40"></div>
          <img
            src="/img/sec3/img1.webp"
            alt=""
            className="hidden duration-300 group-hover:scale-125 md:block"
          />
        </motion.div>

        {/* IMG2 */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="group relative overflow-hidden"
        >
          <div className="absolute top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-4 bg-black/40 md:gap-8">
            <div className="size-12 object-contain md:size-20">
              <img src="/img/sublogo.webp" alt="" />
            </div>
            <p className="text-sm text-white md:text-2xl">FAIRE UNE</p>
            <Link
              to={Navroutes.MENU}
              className="rounded-2xl border border-white px-4 py-1 text-xs text-white duration-150 hover:bg-white hover:text-black md:px-12 md:text-sm"
            >
              {" "}
              Menu
            </Link>
          </div>
          <img
            src="/img/sec3/img2.webp"
            alt=""
            className="duration-300 group-hover:scale-125"
          />
        </motion.div>

        {/* IMG3 */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1, type: "spring" }}
          viewport={{ once: true }}
          className="group relative overflow-hidden"
        >
          <div className="absolute top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-4 bg-black/40 md:gap-8">
            <div className="size-12 object-contain md:size-20">
              <img src="/img/sublogo.webp" alt="" />
            </div>
            <p className="text-sm text-white md:text-2xl">VOIR</p>
            <Link
              to={Navroutes.MENU}
              className="rounded-2xl border border-white px-4 py-1 text-xs text-white duration-150 hover:bg-white hover:text-black md:px-12 md:text-sm"
            >
              {" "}
              Menu
            </Link>
          </div>
          <img
            src="/img/sec3/img3.webp"
            alt=""
            className="z-0 duration-300 group-hover:scale-125"
          />
        </motion.div>

        {/* IMG4 */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
          viewport={{ once: true }}
          className="group group relative overflow-hidden"
        >
          <div className="absolute top-0 z-10 h-full w-full bg-black/40"></div>
          <img
            src="/img/sec3/img4.webp"
            alt=""
            className="z-0 hidden duration-300 group-hover:scale-125 md:block"
          />
        </motion.div>
      </section>
    </>
  );
};

export default Sec3;
