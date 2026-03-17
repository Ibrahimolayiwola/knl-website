import Header from "../components/Header";
import Footer from "../components/Footer";
import { MotionButton } from "../components/ui/button";
import { GoDiamond } from "react-icons/go";
import { PiHandshake } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import cceccLogo from "../assets/ccecc.png";
import telisolLogo from "../assets/telisolLogo.png";
import { motion } from "framer-motion"
import { card, heading, hero, subText, cardImage, button, viewport } from "../animation/animation";


const coreValues = [
  {
    icon: GoDiamond,
    title: "Uncompromising Quality",
    description: "We ensure every product meets the highest industry standards for durability and performance."
  },
  {
    icon: PiHandshake,
    title: "Reliable Partnership",
    description: "Building long-term relationships based on trust, transparency, and consistent delivery."
  },
  {
    icon: FiUsers,
    title: "Customer Centricity",
    description: "Our commitment to understanding and exceeding client expectations drives every decision."
  }
];

const milestones = [
  {
    year: "2010",
    description: "Founded as a local steel supplier."
  },
  {
    year: "2015",
    description: "Expanded operations, serving different states across Nigeria."
  },
  {
    year: "2020",
    description: "Became one of the most trusted steel supply in Nigeria."
  },
  {
    year: "2025",
    description: "Celebrated 15 years of industry leadership and innovation."
  }
];

const testimonials = [
  {
    quote: "KNL consistently provides us with high-grade materials and exceptional service. Their reliability is unmatched in the industry.",
    name: "Adebayo Adeyinka",
    title: "Procurement Manager, CCECC."
  },
  {
    quote: "The team at KNL is incredibly knowledgeable and always goes the extra mile to ensure our complex orders are fulfilled on time and within budget.",
    name: "Joseph Emmanuel",
    title: "Lead Manager, Telliso."
  }
];

const partnerLogos = [
  cceccLogo, telisolLogo, "https://res.cloudinary.com/dejzdypyf/image/upload/v1773707362/BDEL-1_wfuefk.png",
]

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px]  flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("https://res.cloudinary.com/dejzdypyf/image/upload/v1773646296/heroImage_qqun0m.webp")` }}
        />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.h1 variants={hero} initial="initial" animate="animate_h" viewport={viewport} className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Dedicated to Supporting Every Building Project
          </motion.h1>
          <motion.p variants={hero} initial="initial" animate="animate_p" viewport={viewport} className="text-white/80 text-sm md:text-base max-w-xl mx-auto">
            We specialize in the supply of reliable building materials, helping contractors and individuals access quality steel, cement, marine boards, and other construction essentials.
          </motion.p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 variants={heading} initial="initial" whileInView="inView" viewport={viewport} className="font-heading text-2xl md:text-3xl font-bold text-destructive text-center mb-12">
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                variants={card}
                initial="initial"
                whileInView="inView"
                viewport={viewport}
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-foreground/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-20 px-4 bg-foreground/10">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 variants={heading} initial="initial" whileInView="inView" viewport={viewport} className="font-heading text-2xl md:text-3xl font-bold text-destructive text-center mb-12">
            Our Journey & Milestones
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {milestones.map((milestone, index) => (
              <motion.div variants={card} initial="initial" whileInView="inView" viewport={viewport} key={index} className="flex flex-col items-center text-center max-w-[140px]">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                </div>
                <span className="font-heading text-xl font-bold text-foreground mb-2">
                  {milestone.year}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      {/* <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 variants={heading} initial="initial" whileInView="inView" viewport={viewport} className="font-heading text-2xl md:text-3xl font-bold text-destructive text-center mb-12">
            Meet Our Leadership
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center">
                <motion.div variants={roundedImage} initial="initial" whileInView="inView" viewport={viewport} className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mx-auto mb-4 border-4 border-secondary">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.h3 variants={heading} initial="intial" whileInView="inView" viewport={viewport} className="font-heading text-base font-semibold text-primary">
                  {leader.name}
                </motion.h3>
                <motion.p variants={subText} initial="initial" whileInView="inView" viewport={viewport} className="text-muted-foreground text-xs mt-1">
                  {leader.title}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Certifications Section */}
      <section className="py-12 px-4 bg-foreground/10">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 variants={heading} initial="initial" whileInView="inView" viewport={viewport} className="font-heading text-2xl md:text-3xl font-bold text-destructive mb-10">
             Partners
          </motion.h2>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {
              partnerLogos.map((logo, i) => (
                <motion.div variants={cardImage} initial="initial" whileInView="inView" viewport={viewport} key={i} className="w-26  md:w-32 md:h-20   rounded-lg flex items-center justify-center">
                  <img src={logo} alt="partner logo" className="w-full object-contain" />
                </motion.div>
              ))
            }
            {/* <div className="w-16 h-16 md:w-20 md:h-20 bg-transparent shadow-lg rounded-lg flex items-center justify-center">
              <img src={cceccLogo} alt="ccecc logo design" className="w-full object-cover"/>
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-xs">API</span>
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-destructive rounded-lg flex items-center justify-center">
              <span className="text-destructive-foreground font-bold text-xs">PARTNER</span>
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-foreground rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-xs">ASTM</span>
            </div> */}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 variants={heading} initial="initial" whileInView="inView" viewport={viewport} className="font-heading text-2xl md:text-3xl font-bold text-destructive
          
           text-center mb-12">
            What Our Clients Say
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div variants={cardImage} initial="initial" whileInView="inView" key={index} viewport={viewport} className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground text-sm italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="text-right">
                  <p className="font-semibold text-primary text-sm">{testimonial.name}</p>
                  <p className="text-xs text-destructive">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.h2 variants={heading} initial="initial" whileInView="inView" viewport={viewport} className="font-heading text-2xl md:text-3xl font-bold text-destructive mb-4">
            Get the Right Materials for Your Project—On Time and On Spec.
          </motion.h2>
          <motion.p variants={subText} initial="initial" whileInView="inView" viewport={viewport} className="text-muted-foreground text-sm mb-8 max-w-xl mx-auto">
            Contact us today to discuss your project requirements and discover how KNL can support your success.
          </motion.p>
          <Link to="/contact">
            <MotionButton variants={button} initial="initial" whileInView="inView" viewport={viewport} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Request a Quote
            </MotionButton>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;