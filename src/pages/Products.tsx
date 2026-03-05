import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Input } from "../components/ui/input";
import { Button, MotionButton } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";

import productRebar from "../assets/product1.jpg";
import productPipes from "../assets/product2.jpg";
import productBeams from "../assets/product3.jpg";
import productSheets from "../assets/product4.jpg";
import productWire from "../assets/product5.jpg";
import productCoils from "../assets/product5.jpg";
import RequestPrice from "../components/RequestPrice";
import { useStateContext } from "../context/StateContext";
import { motion } from "framer-motion"
import { button, cardImage, heading, sidebar, subText, viewport } from "../animation/animation"

const sizes = [
  "16mm",
  "12mm",
  "10mm",
  "20mm",
  "8mm",
  "25mm",
];

const materialTypes = [
  { id: "eagle", label: "Eagle Steel" },
  { id: "tiger", label: "Tiger Steel" },
  { id: "lion", label: "Lion Steel" },
  { id: "stm", label: "STM Steel" },
  { id: "rs", label: "RS Steel" },
  { id: "tmt", label: "TMT Steel" },
  { id: "fed", label: "Fed Steel" },
];

const products = [
  {
    id: 1,
    image: productRebar,
    name: "LCI Steel Bar",
    tags: ["20mm"],
  },
  {
    id: 2,
    image: productSheets,
    name: "Lion Steel Bar",
    tags: ["16mm"],
  },
  {
    id: 3,
    image: productBeams,
    name: "TMT Steel Bar",
    tags: ["8mm"],
  },
  {
    id: 4,
    image: productPipes,
    name: "RS local Steel Bar",
    tags: ["12mm"],
  },
  {
    id: 5,
    image: productWire,
    name: "STM Local Steel Bar",
    tags: ["10mm"],
  },
  {
    id: 6,
    image: productCoils,
    name: "Eagle Steel Bar",
    tags: ["16mm"],
  },
  {
    id: 7,
    image: productSheets,
    name: "TMT Steel Bar",
    tags: ["10mm"],
  },
  {
    id: 8,
    image: productCoils,
    name: "Tiger Steel Bar",
    tags: ["16mm"],
  },
];



const Products = () => {
  const { onRequestPrice, selectedProduct } = useStateContext()
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMaterialChange = (materialId: string, checked: boolean) => {
    if (checked) {
      setSelectedMaterials([...selectedMaterials, materialId]);
    } else {
      setSelectedMaterials(selectedMaterials.filter((m) => m !== materialId));
    }
  };




  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="container-narrow mx-auto section-padding">
          <div className="lg:hidden">
             <motion.h2 variants={heading} initial="initial" whileInView="inView" viewport={viewport} className="font-heading text-2xl md:text-3xl font-bold text-destructive text-center mb-12">
                Our Products
              </motion.h2>
              <motion.p variants={subText} initial="initial" whileInView="inView" viewport={viewport} className="text-foreground mb-6 leading-relaxed">
                Explore our extensive range of high-quality steel products, engineered to meet the
                demands of diverse industrial and construction projects. From raw materials to custom
                fabrications, we deliver reliability and performance.
              </motion.p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 pt-8">
            {/* Sidebar */}
            <motion.aside variants={sidebar} initial="initial" whileInView="inView" viewport={viewport} className="w-full lg:w-64 shrink-0">
              <div className="bg-card border border-border rounded-lg p-6">
                {/* Categories */}
                <nav className="space-y-1 mb-8">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${selectedSize === size
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-foreground hover:bg-muted"
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </nav>

                {/* Material Types */}
                <div className="space-y-3">
                  {materialTypes.map((material) => (
                    <div key={material.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={material.id}
                        checked={selectedMaterials.includes(material.id)}
                        onCheckedChange={(checked: boolean) =>
                          handleMaterialChange(material.id, checked as boolean)
                        }
                      />
                      <label
                        htmlFor={material.id}
                        className="text-sm text-muted-foreground cursor-pointer"
                      >
                        {material.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </motion.aside>

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