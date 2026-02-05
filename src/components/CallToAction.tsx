import { FiArrowRight } from "react-icons/fi";
import { Button } from "./ui/button";

const CallToAction = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-destructive mb-4">
         Let's build something that last
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto mb-8">
         Choose KNL for a reliable steel supply, proven quality, and responsive support.
        </p>
        <Button className="bg-primary hover:bg-accent text-primary-foreground">
          Start Your Project Today
          <FiArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;