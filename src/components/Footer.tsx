import { IoMailOutline } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/knl-logo-2.png";

const Footer = () => {
    return (
        <footer id="contact" className="bg-foreground text-primary-foreground">
            <div className="container-narrow mx-auto px-4 md:px-8 lg:px-16 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo & Copyright */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Link to="/" className="flex items-center gap-2">
                                <img src={Logo} alt="KNL logo" width={120} height={40} />
                            </Link>
                        </div>
                        <p className="text-primary-foreground/70 text-sm">
                            © 2026 KNL. All rights reserved.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                                    Products
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/contact" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                                <IoMailOutline className="w-4 h-4" />
                                info@knl.com
                            </li>
                            <li className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                                <MdLocalPhone className="w-4 h-4" />
                                +234 46121217
                            </li>
                            <li className="flex items-start gap-2 text-primary-foreground/70 text-sm">
                                <FiMapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                155 Lagos-Badagry express way, Lagos, Nigeria
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social Links */}
                <div className="border-t border-primary-foreground/10 mt-8 pt-8 flex justify-center gap-4">
                    <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="Facebook">
                        <FiFacebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="Twitter">
                        <FaXTwitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
                        <FiLinkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="Instagram">
                        <FaInstagram className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;