import { useEffect } from "react";
import Sec1 from "./Sec1";
import Sec2 from "./Sec2";
import Sec3 from "./Sec3";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div className="">
      <Sec1 />
      <Sec2 />
      <Sec3 />
    </div>
  );
};

export default Home;
