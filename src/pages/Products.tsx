import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Input } from "../components/ui/input";
import { Button, MotionButton } from "../components/ui/button";
import RequestPrice from "../components/RequestPrice";
import { useStateContext } from "../context/StateContext";
import { motion } from "framer-motion"
import { button, cardImage, heading, subText, viewport } from "../animation/animation"



const products = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dejzdypyf/image/upload/v1773524440/product1_vddeqx.webp",
    name: "LCI Steel Bar",
    tags: ["20mm"],
  },
   {
      id: 2,
      image: "https://res.cloudinary.com/dejzdypyf/image/upload/v1773524440/marine-board1_mfscp2.avif",
      name: "Marine Board",
      tags: [""]
    },
  {
    id: 3,
    image: "https://res.cloudinary.com/dejzdypyf/image/upload/v1773524442/product2_qeei1w.webp",
    name: "Lion Steel Bar",
    tags: ["16mm"],
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dejzdypyf/image/upload/v1773524442/product2_qeei1w.webp",
    name: "TMT Steel Bar",
    tags: ["8mm"],
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/dejzdypyf/image/upload/v1773524443/product5_x54mtg.avif",
    name: "RS local Steel Bar",
    tags: ["12mm"],
  },
   {
      id: 6,
      image: "https://res.cloudinary.com/dejzdypyf/image/upload/v1773524441/marine-board4_cm7nit.avif",
      name: "Marine Board",
      tags: [""]
    },
  {
    id: 7,
    image: "https://res.cloudinary.com/dejzdypyf/image/upload/v1773524445/product7_zi5psa.avif",
    name: "STM Local Steel Bar",
    tags: ["10mm"],
  },

  {
    id: 8,
    image: "https://res.cloudinary.com/dejzdypyf/image/upload/v1773524444/product6_zrovny.avif",
    name: "Eagle Steel Bar",
    tags: ["16mm"],
  },
  {
    id: 9,
    image: "https://res.cloudinary.com/dejzdypyf/image/upload/v1773524445/product9_ukkoen.avif",
    name: "TMT Steel Bar",
    tags: ["10mm"],
  },
   {
      id: 10,
      image: "https://res.cloudinary.com/dejzdypyf/image/upload/v1773524442/marine-board3_q2ji5e.avif",
      name: "Marine Board",
      tags: [""]
    },
  {
    id: 11,
    image: "https://res.cloudinary.com/dejzdypyf/image/upload/v1773524447/product10_oogak6.avif",
    name: "Tiger Steel Bar",
    tags: ["16mm"],
  },
];



const Products = () => {
  const { onRequestPrice, selectedProduct } = useStateContext()
  const [searchQuery, setSearchQuery] = useState("");



  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-8">
        <div className="container-narrow mx-auto section-padding">
          <div className="lg:hidden">
             <motion.h2 variants={heading} initial="initial" whileInView="inView" viewport={viewport} className="font-heading text-2xl md:text-3xl font-bold text-destructive text-center mb-12">
                Our Products
              </motion.h2>
              <motion.p variants={subText} initial="initial" whileInView="inView" viewport={viewport} className="text-foreground mb-6 leading-relaxed">
                Explore our extensive range of high-quality construction materials, engineered to meet the
                demands of diverse industrial and construction projects. From raw materials to custom
                fabrications, we deliver reliability and performance.
              </motion.p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 pt-8">
        
            

            {/* Main Content */}
            <div className="flex-1">
              {/* Intro Text */}
              <div className="max-lg:hidden">
                <motion.h2 variants={heading} initial="initial" whileInView="inView" viewport={viewport} className="font-heading text-2xl md:text-3xl font-bold text-destructive text-center mb-12">
                Our Products
              </motion.h2>
              <motion.p variants={subText} initial="initial" whileInView="inView" viewport={viewport} className="text-foreground mb-6 leading-relaxed">
                Explore our extensive range of high-quality steel products, engineered to meet the
                demands of diverse industrial and construction projects. From raw materials to custom
                fabrications, we deliver reliability and performance.
              </motion.p>
              </div>

              {/* Search Bar */}
              <div className="relative mb-8">
                <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  variants={button}
                  initial="initial"
                  whileInView="inView"
                  viewport={viewport}
                  type="text"
                  placeholder="Search for products, materials, or applications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 bg-card border-border"
                />
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                {products.map(({ id, image, name, tags }) => (
                  <div
                    key={id}
                    className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-card-hover transition-shadow duration-300"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <motion.img
                        variants={cardImage}
                        initial="initial"
                        whileInView="inView"
                        viewport={viewport}
                        src={image}
                        alt="Steel product"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-destructive font-semibold text-sm mb-4 leading-relaxed">
                        {name}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block bg-muted text-muted-foreground text-xs px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="w-full" onClick={() => onRequestPrice({ productName: name, image })}>
                        Request price
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center">
                <MotionButton variants={button} initial="initial" whileInView="inView" viewport={viewport} variant="outline" size="lg">
                  Load More Products
                </MotionButton>
              </div>
            </div>
          </div>
        </div>
        {
          selectedProduct && (
            <RequestPrice />
          )
        }
      </main>

      <Footer />
    </div>
  );
};

export default Products;