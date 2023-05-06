import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

function ScrollToTop() {
  const [scrollTop, setScrollTop] = useState(0);
  const offset = 300;

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        scrollTop > offset
          ? "transition translate-y-0 delay-75 duration-500 ease-in-out"
          : "transition translate-y-16 delay-75 duration-300 ease-in-out"
      } bottom-5 right-5`}
    >
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="p-1 rounded-md bg-sky-600 hover:bg-sky-500"
      >
        <Icon
          icon="material-symbols:vertical-align-top-rounded"
          width={25}
          color="#ffffff"
        />
      </button>
    </div>
  );
}

export default ScrollToTop;
