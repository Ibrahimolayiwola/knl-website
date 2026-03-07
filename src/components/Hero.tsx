import { MotionButton } from "./ui/button";
import heroImage from "../assets/heroImg.jpg";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import {hero, heroButton, viewport} from "../animation/animation.tsx"

const Hero = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Steel pipes background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-4 md:px-8 lg:px-16 text-center">
        <motion.h1 variants={hero} initial="initial" animate="animate_h" viewport={viewport} className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4 max-w-2xl mx-auto leading-auto animate-fade-in">
          Get Premium Steel Products Delivered to your Site
        </motion.h1>
        <motion.p variants={hero} initial="initial" animate="animate_p" viewport={viewport} className="text-primary-foreground/80 text-sm md:text-base max-w-xl mx-auto mb-8 mt-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Competitive prices. Fair delivery. Trusted builders, contractors, and hardware supplies accross nation.
        </motion.p>
        <div className="px-6  flex flex-col sm:flex-row gap-3 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Link to="/products">
            <MotionButton variants={heroButton} initial="initial_l" animate="animate" viewport={viewport} className="max-sm:w-full bg-primary hover:bg-accent text-primary-foreground">
              Explore Products
            </MotionButton>
          </Link>
          <Link to="/contact" >
            <MotionButton variants={heroButton} initial="initial_r" animate="animate" variant="outline" viewport={viewport} className="max-sm:w-full border-primary-foreground/30 text-destructive-foreground bg-destructive hover:bg-destructive/90">
              Contact Us
            </MotionButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;