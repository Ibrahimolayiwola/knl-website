import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input"
import { CiCalendarDate } from "react-icons/ci";
import { useStateContext } from "../context/StateContext";

const RequestPrice = () => {
    const { openModal, onClose, selectedProduct } = useStateContext()
    const productName = selectedProduct?.productName
    if (!openModal || !productName) return null


    const [priceRequestInfo, setPriceRequestInfo] = useState({
        customerName: "",
        quantity: "",
        unit: "",
        location: "",
        deliveryDate: "",
        email: "",
        phone: "",
    })

    const {
        customerName,
        quantity,
        unit,
        location,
        deliveryDate,
        email,
        phone
    } = priceRequestInfo

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setPriceRequestInfo({ ...priceRequestInfo, [id]: value })
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onClose()
        // 1. Submit to form service
        fetch("https://formspree.io/f/maqqevrg", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ priceRequestInfo }),
        })
            .then(() => {
                // 2. After submission, open WhatsApp
                const message = `Hello, I would like to request the price for:
Product name: ${productName}
Name: ${customerName}
Email: ${email}
Phone Number: ${phone}
Quantity: ${quantity || "Not specified"}
Unit: ${unit}
location: ${location}
Delivery date: ${deliveryDate}
`


                const whatsappLink = `https://wa.me/2348183674112?text=${encodeURIComponent(message)}`;
                window.open(whatsappLink, "_blank");
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="fixed inset-0  bg-black/50  top-0 z-20 flex justify-center items-center min-h-screen ">
            <form onSubmit={handleSubmit} className="w-[500px] md:w-[650px] lg:w-[800px] p-8 bg-white rounded-lg shadow-md space-y-4 overflow-y-scroll">
                <h2 className="text-center text-destructive font-semibold">Request Price</h2>
                <div className="">
                    {/* <img src={image} alt="product image" className="w-[250px] mx-auto rounded-lg" /> */}
                    <p>Product name</p>
                    <p className="p-4 bg-secondary rounded-md">{productName}</p>
                </div>
                <div className="mb-2">
                    <label htmlFor="customerName" >Name</label>
                    <Input type="text" id="customerName" value={customerName} onChange={handleChange} className="mt-2 focus:ring-1 focus:ring-destructive" />
                </div>
                <div className="flex gap-6">
                    <div className="flex-1">
                        <label htmlFor="quantity">Quantity</label>
                        <Input type="number" id="quantity" value={quantity} onChange={handleChange} className="mt-2" />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="unit" >Units</label>
                        <Input type="number" placeholder="tons" id="unit" value={unit} onChange={handleChange} className="mt-2" />
                    </div>

                </div>
                <div className="md:flex justify-between items-center gap-6">
                    <div className="flex-1">
                        <label htmlFor="location" >Delivery location</label>
                        <Input type="text" id="location" value={location} onChange={handleChange} className="mt-2" />
                    </div>
                    <div className="relative flex-1">
                        <label htmlFor="deliveryDate" >Delivery date</label>
                        <Input type="text" id="deliveryDate" value={deliveryDate} onChange={handleChange} className="mt-2" />
                        <CiCalendarDate className="absolute left-4 bottom-3" />
                    </div>
                </div>
                <div className="md:flex justify-between items-center gap-6">
                    <div className="flex-1">
                        <label htmlFor="email" >Email</label>
                        <Input type="email" id="email" value={email} placeholder="Enter your email address" onChange={handleChange} className="mt-2" />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="phone" className="">Phone</label>
                        <Input type="number" id="phone" value={phone} placeholder="Enter your phone number" onChange={handleChange} className="mt-2" />
                    </div>
                </div>
                <div className="mt-4 space-x-4">
                    <Button type="button" onClick={() => onClose()} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">Cancel</Button>
                    <Button type="submit" >Continue to WhatsApp</Button>
                </div>
            </form>
        </div>
    )
}

export default RequestPrice