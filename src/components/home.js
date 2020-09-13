import React from "react";
import { motion } from "framer-motion"

import CameraHome from '../img/camera1.png';

function Home() {
    return (
      <section className="home">
        <div className="showcase">
          <h2>Leica M6</h2>
          <motion.img
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.8}
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
              src={CameraHome}
              alt="Leica M6" 
          />
          <div className="info">
            <h3>Small but powerful</h3>
            <p>
              The new Leica M6 offers 4k at 60fps, Raw Video & Full Frame Sensor
            </p>
          </div>
        </div>
      </section>
    );
  }


export default Home;
