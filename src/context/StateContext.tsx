import { useState, createContext, useContext, type ReactNode } from "react";

type PriceRequestPayload = {
    productName: string;
    image: string;
}

type contextType = {
    openModal: boolean;
    selectedProduct: PriceRequestPayload | null;
    onRequestPrice: (payload: PriceRequestPayload) => void;
    onClose: () => void;
}
const Context = createContext<contextType | null>(null)
export const StateContext = ({ children }: {children: ReactNode}) => {
    const [openModal, setOpenModal] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<PriceRequestPayload | null>(null)

    const onRequestPrice = (payload: PriceRequestPayload) => {
        setSelectedProduct(payload)
        setOpenModal(true)

    }
    const onClose = () => {
        setOpenModal(false)
    }
    return (
        <Context.Provider value={{
            openModal, selectedProduct, onRequestPrice, onClose
        }} >{children}</Context.Provider>
    )
}

export const useStateContext = () => {
   const context = useContext(Context)
   if(!context) {
    throw new Error("UseStateContext must be inside a context provider")
   }

   return context
}
