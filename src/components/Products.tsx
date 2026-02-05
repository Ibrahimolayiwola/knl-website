import { FiArrowRight } from "react-icons/fi";
import { Button } from "./ui/button";
import SteelProduct1 from "../assets/product1.jpg"
import SteelProduct2 from "../assets/product2.jpg"
import SteelProduct3 from "../assets/product3.jpg"
import SteelProduct4 from "../assets/product4.jpg"
import SteelProduct5 from "../assets/product5.jpg"
import SteelProduct6 from "../assets/product6.jpg"
import { useStateContext } from "../context/StateContext";

const products = [
  {
    image: SteelProduct1,
    name: "LCI Steel bar",
    thickness: ["12mm", "14mm", "16mm"]
  },
  {
    image: SteelProduct2,
    name: "Eagle Steel bar",
    thickness: ["14mm", "16mm", "20mm"]
  },
  {
    image: SteelProduct3,
    name: "Lion Steel Bar",
    thickness: ["8mm", "20mm", "14mm"]
  },
  {
    image: SteelProduct4,
    name: "Fed Steel bar",
    thickness: ["14mm", "8mm", "10mm"]
  },
  {
    image: SteelProduct5,
    name: "TMT Steel bar",
    thickness: ["16mm", "20mm"]
  },
  {
    image: SteelProduct6,
    name: "Tiger Steel bar",
    thickness: ["14mm", "12mm", "10mm"]
  },
];

const subject = "Request for Pricing Information";
const body = `Hello,

I would like to request pricing information for 

Thank you.

Ibrahim Olayiwola`;






const Products = () => {
  const {onRequestPrice} = useStateContext()
  return (
    <section id="products" className="section-padding bg-muted">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-destructive mb-3">
            Our Premium Steel Products
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
            Explore our diverse range of steel products, engineered for strength, durability, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(({ image, name, thickness }) => (
            <div
              key={name}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
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