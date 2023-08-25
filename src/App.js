import Splash from "./components/animations/Splash";
import { Home } from "./pages/Home";
import { Footer } from "./shared/Footer";
import { NavBar } from "./shared/NavBar";
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react";

export default function App() {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);
  return (
    <AnimatePresence>
      {
        splash ?
          <Splash />
          :
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}>
            <NavBar />
            <Home />
            <Footer />
          </motion.div>
      }
    </AnimatePresence>
  )
}