import { FiArrowRight } from "react-icons/fi";
import { MotionButton } from "./ui/button";
import { motion } from "framer-motion"
import {heading, subText, button } from "../animation/animation"


const CallToAction = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow mx-auto text-center">
        <motion.h2 variants={heading} initial whileInView="inView" className="font-heading text-2xl md:text-3xl font-semibold text-destructive mb-4">
         Let's build something that last
        </motion.h2>
        <motion.p variants={subText} initial="initial" whileInView="inView" className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto mb-8">
         Choose KNL for a reliable construction materials with proven quality and responsive support.
        </motion.p>
        <MotionButton variants={button} initial="initial" whileInView="inView" className="bg-primary hover:bg-accent text-primary-foreground">
          Start Your Project Today
          <FiArrowRight className="w-4 h-4 ml-2" />
        </MotionButton>
      </div>
    </section>
  );
};

export default CallToAction;