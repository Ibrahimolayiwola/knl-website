import { BsTruckFlatbed } from "react-icons/bs";
import { GoShieldCheck } from "react-icons/go";
import { IoMdTrendingUp } from "react-icons/io";
import { PiHandshakeLight } from "react-icons/pi";
import {motion} from "framer-motion"
import { card, heading, subText, viewport } from "../animation/animation";

const features = [
  {
    icon: BsTruckFlatbed,
    title: "Fast Delivery",
    description: "Streamlined logistics for on-time arrivals, every time.",
  },
  {
    icon: GoShieldCheck,
    title: "Quality Construction Materials",
    description: "Premium-grade materials meeting the highest industry standards.",
  },
  {
    icon: IoMdTrendingUp,
    title: "Competitive Pricing",
    description: "Cost-effective solutions without compromising on quality.",
  },
  {
    icon: PiHandshakeLight,
    title: "Trusted Supplier",
    description: "Building long-term partnerships through reliability and service.",
  },
];

const Features = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <motion.h2 variants={heading} initial="initial" whileInView="inView" viewport={viewport} className="font-heading text-2xl md:text-3xl font-semibold text-destructive mb-3">
            Why Choose KNL?
          </motion.h2>
          <motion.p variants={subText} initial="initial" whileInView="inView" viewport={viewport} className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
            We are committed to excellence, providing superior construction materials that drive your projects forward.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <motion.div
              variants={card}
              initial="initial"
              whileInView="inView"
              viewport={viewport}
              key={feature.title}
              className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-destructive">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;