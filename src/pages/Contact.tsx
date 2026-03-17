import { useState } from "react";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MotionButton } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { motion } from "framer-motion"
import { heading, subText, button, viewport } from "../animation/animation";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const {
    firstName,
    lastName,
    company,
    email,
    phone,
    message
  } = formData

   const inputs = [
    {text: "First name", label: "firstName", type: "text", value: firstName},
    {text: "Last name", label: "lastName", type: "text", value: lastName},
    {text: "Company", label: "company", type: "text", value: company},
    {text: "Work email", label: "email", type: "email", value: email},
    {text: "Phone number", label: "phone", type: "tel", value: phone},
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
     fetch("https://formspree.io/f/maqqevrg", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ formData }),
        })
            .then(() => {
                // 2. After submission, open mail
                const subject = "Inquiry about steel supply"
                const body = `${message}
Name: ${firstName} ${lastName}
Email: ${email}
Phone Number: ${phone}
company: ${company}
`


                const mailtoLink = `mailto:ibrahimolayiwola333@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                window.open(mailtoLink, "_blank");
            })
            .catch((err) => console.error(err));
   
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-background border border-border rounded-lg p-8">
                <motion.h1 variants={heading} initial="initial" whileInView="inView" viewport={viewport} className="font-heading text-3xl font-bold text-destructive mb-2">
                  Get in Touch
                </motion.h1>
                <motion.p variants={subText} initial="initial" whileInView="inView" viewport={viewport} className="text-muted-foreground mb-8">
                  Have questions about our products or services? Fill out the form below, and our team will get back to you promptly.
                </motion.p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {
                      inputs.map(({text, label, type, value}, i) => (
                        <div key={i} className="space-y-2">
                      <Label htmlFor={label}>{text}</Label>
                      <Input
                        variants={button}
                        initial="initial"
                        whileInView="inView"
                        viewport={viewport}
                        id={label}
                        name={label}
                        type={type}
                        placeholder=""
                        value={value}
                        onChange={handleChange}
                        required
                      />
                    </div>
                      ))
                    }
                    </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      variants={button}
                      initial="initial"
                      whileInView="inView"
                      viewport={viewport}
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or inquiry..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <MotionButton variants={button} initial="initial" whileInView="inView" viewport={viewport} type="submit" className="w-auto">
                    Send Message
                  </MotionButton>
                </form>
              </div>

              {/* Office Info & Map */}
              <div className="space-y-6">
                {/* Office Info Card */}
                <div className="bg-background border border-border rounded-lg p-8">
                  <motion.h2 variants={heading} initial="initial" whileInView="inView" viewport={viewport} className="font-heading text-2xl font-bold text-destructive mb-2">
                    Our Office
                  </motion.h2>
                  <motion.p variants={subText} initial="initial" whileInView="inView" viewport={viewport}  className="text-muted-foreground mb-6">
                    Find us or reach out through our direct contact information. We're here to help.
                  </motion.p>

                  <motion.div variants={button} initial="initial" whileInView="inView" viewport={viewport} className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Address</h3>
                        <p className="text-muted-foreground text-sm">
                          2, Olorunshogo str, Iron MKT, Orile Iganmu, Lagos
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Phone</h3>
                        <p className="text-muted-foreground text-sm">+2348124960354</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <p className="text-muted-foreground text-sm">knlnigeria@gmail.com</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={button} initial="initial" whileInView="inView" viewport={viewport} className="mt-6">
                    <h3 className="font-semibold text-foreground mb-3">Connect With Us</h3>
                    <div className="flex gap-4">
                      <a href="https://web.facebook.com/profile.php?id=61555772919708" target="_blank" className="text-destructive hover:text-primary transition-colors" aria-label="Facebook">
                        <Facebook className="w-8 h-8" />
                      </a>
                      
                      <a href="https://www.instagram.com/knl_nigeria/" target="_blank" className="text-destructive hover:text-primary transition-colors" aria-label="Instagram">
                        <Instagram className="w-8 h-8" />
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Map Placeholder */}
                {/* <div className="bg-muted border border-border rounded-lg h-48 flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">
                    Map Placeholder: SteelWorks Distribution Location
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;