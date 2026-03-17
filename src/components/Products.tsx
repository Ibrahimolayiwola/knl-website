import { FiArrowRight } from "react-icons/fi";
import { Button } from "./ui/button";
import { useStateContext } from "../context/StateContext";
import {motion} from "framer-motion"
import {cardImage, heading, subText, viewport} from "../animation/animation"

const products = [
  {
    image: "https://res.cloudinary.com/dejzdypyf/image/upload/v1773524440/product1_vddeqx.webp",
    name: "LCI Steel bar",
    thickness: ["12mm", "14mm", "16mm"]
  },
  {
    image: "https://res.cloudinary.com/dejzdypyf/image/upload/v1773524442/product2_qeei1w.webp",
    name: "Eagle Steel bar",
    thickness: ["14mm", "16mm", "20mm"]
  },
  {
    image: "https://res.cloudinary.com/dejzdypyf/image/upload/v1773524440/marine-board1_mfscp2.avif",
    name: "Marine Board",
    thickness: [""]
  },
   {
    image: "https://res.cloudinary.com/dejzdypyf/image/upload/v1773524442/product2_qeei1w.webp",
    name: "Marine Board",
    thickness: [""]
  },
  {
    image: "https://res.cloudinary.com/dejzdypyf/image/upload/v1773524443/product5_x54mtg.avif",
    name: "TMT Steel bar",
    thickness: ["16mm", "20mm"]
  },
   {
    image: "https://res.cloudinary.com/dejzdypyf/image/upload/v1773524442/marine-board2_napbro.avif",
    name: "Marine Board",
    thickness: [""]
  },
];






const Products = () => {
  const {onRequestPrice} = useStateContext()
  return (
    <section id="products" className="section-padding bg-muted">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <motion.h2 variants={heading} initial="initial" whileInView="inView" viewport={viewport} className="font-heading text-2xl md:text-3xl font-semibold text-destructive mb-3">
            Our Premium Products
          </motion.h2>
          <motion.p variants={subText} initial="initial" whileInView="inView" viewport={viewport} className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
            Explore our diverse range of products, engineered for strength, durability, and reliability.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(({ image, name, thickness }, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  variants={cardImage}
                  initial="initial"
                  whileInView="inView"
                  viewport={viewport}
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-5">
                <h3 className="font-heading font-semibold text-destructive ">
                  {name}
                </h3>
                <div className="flex flex-wrap gap-1.5 ">
                  {thickness.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-muted text-muted-foreground text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                  <Button variant="outline" size="sm" className="group w-full" onClick={() => onRequestPrice({productName: name, image})}>
                    Request price
                    <FiArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;