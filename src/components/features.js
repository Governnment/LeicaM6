import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import Card1 from '../img/card1.png';
import Card2 from '../img/card2.png';
import Card3 from '../img/card3.png';
import Wave from '../img/wave.png';


function Features() {
    const controls = useAnimation();
    const [ref, inView] = useInView({trackVisibility: true, delay: 500, rootMargin: "250px"});
    
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    
    return (
      <div className="features-container" id="features">
        <section className="features">
          <h2>Features</h2>
          <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              variants={{
                visible: { opacity: 1, x: 0, scale: 1 },
                hidden: { opacity: 0, x: '1vh', scale: 0 }
              }}
              className="cards"
              >
            <div className="card">              
              <img src={Card1} alt="4k 60fps"/>
              <h4>4k 60fps</h4>
              <p>Get those slow motions ma boi</p>
            </div>
            <div className="card">
              <img src={Card2} alt="4k 60fps" />
              <h4>4k 60fps</h4>
              <p>Get those slow motions ma boi</p>
            </div>
            <div className="card">
              <img src={Card3} alt="4k 60fps" />
              <h4>4k 60fps</h4>
              <p>Get those slow motions ma boi</p>
            </div>
          </motion.div>
          <img className="wave" src={Wave} alt="leica" />
        </section>
      </div>
    );
  }


export default Features;
