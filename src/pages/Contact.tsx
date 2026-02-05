import { useState } from "react";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

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
                <h1 className="font-heading text-3xl font-bold text-destructive mb-2">
                  Get in Touch
                </h1>
                <p className="text-muted-foreground mb-8">
                  Have questions about our steel products or services? Fill out the form below, and our team will get back to you promptly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder=""
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder=""
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder=""
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder=""
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder=""
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or inquiry..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-auto">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Office Info & Map */}
              <div className="space-y-6">
                {/* Office Info Card */}
                <div className="bg-background border border-border rounded-lg p-8">
                  <h2 className="font-heading text-2xl font-bold text-destructive mb-2">
                    Our Office
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Find us or reach out through our direct contact information. We're here to help.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Address</h3>
                        <p className="text-muted-foreground text-sm">
                          155 Lagos-Badagry express way, Lagos, Nigeria
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Phone</h3>
                        <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <p className="text-muted-foreground text-sm">info@knl.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-semibold text-foreground mb-3">Connect With Us</h3>
                    <div className="flex gap-4">
                      <a href="#" className="text-destructive hover:text-primary transition-colors" aria-label="Facebook">
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-destructive hover:text-primary transition-colors" aria-label="Twitter">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-destructive hover:text-primary transition-colors" aria-label="LinkedIn">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-destructive hover:text-primary transition-colors" aria-label="Instagram">
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
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