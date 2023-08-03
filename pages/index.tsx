/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import section1 from "./section1.module.css";
import arrow from "./arrow.module.css";
import dynamic from "next/dynamic";

const ArrowDown = () => {
  return (
    <div className={arrow.arrow}>
      <span></span>
      <span></span>
    </div>
  );
};

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);
  const [animated, setAnimated] = useState(false);

  const onImageLoaded = () => {
    setImageLoaded(true);
  };

  const onFontLoaded = () => {
    setFontLoaded(true);
  };

  const onAnimated = () => {
    setAnimated(true);
  };

  const Sections = dynamic(() => import("./sections"), {
    loading: () => {
      return <></>;
    },
  });

  const loaded = imageLoaded && fontLoaded;

  useEffect(() => {
    if (imageLoaded) return;
    let iamge = new Image();
    iamge.src = "/assets/images/oein.png";
    iamge.addEventListener("load", onImageLoaded);

    document.fonts.ready.then(onFontLoaded);
  }, [imageLoaded]);

  if (!loaded) return <></>;
  return (
    <div className={styles.main} dir="ltr">
      <section className={section1.section}>
        <div className={section1.cont}>
          <div className={section1.contInside}>
            <div className={section1.imgcont}>
              <img
                src={"/assets/images/oein.png"}
                alt="oein profile image"
                onLoad={onImageLoaded}
                className={section1.img}
              />
            </div>
            <div className={section1.text} onAnimationEnd={onAnimated}>
              <div className={section1.wa}>Hello.</div>
              <div className={section1.tp}>
                I&apos;m <span className={section1.oein}>oein!</span>
              </div>
            </div>
          </div>
        </div>
        {animated && (
          <div className={section1.scrollDown}>
            <div className={section1.arrow}>
              <ArrowDown />
            </div>
            <div className={section1.scrollDownText}>
              Scroll down to see more
            </div>
          </div>
        )}
      </section>
      <Sections enabled={animated} />
    </div>
  );
}
