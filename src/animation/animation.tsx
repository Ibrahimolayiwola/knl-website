import { type Variants, type ViewportOptions } from "framer-motion"
export const hero: Variants = {
    initial: {
        opacity: 0
    },
    animate_h: {
        opacity: 1,
        transition: {
            duration: .25
        }
    },
    animate_p: {
        opacity: 1,
        transition: {
            delay: .25, 
            duration: .25
        }
    }

}

export const heroButton: Variants = {
    initial_l: {
        x: -100,
        opacity: 0
    },
     initial_r: {
        x: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            delay: .5,
            duration: .25,
            type: "spring",
            stiffness: 100
        }
    },

}

export const heading: Variants = {
    initial: {
        y: 40, 
        opacity: 0
    },
    inView: {
        y: 0, 
        opacity: 1,
        transition: {
            duration: 0.25
        }
    }

}

export const subText: Variants = {
    initial: {
        y: 20,
        opacity: 0
    },
    inView: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.1,
            duration: 0.25
        }
    }
}

export const card: Variants = {
    initial: {
        y: 40, 
        opacity: 0
    },
    inView: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15, 
            duration: 0.25
        }
    }
}

export const cardImage: Variants = {
  initial: {
    opacity: 0,
    scaleX: 0
  },
  
  inView: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.25
    } 
  },
}

export const roundedImage: Variants = {
  initial: {
    opacity: 0,
    scale: 0
  },
  
  inView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.25
    } 
  },
}

export const button: Variants = {
    initial: {
        opacity: 0,
        scaleX: 0,
        originX: 0
    },

    inView: {
        opacity: 1,
        scaleX: 1,
        transition: {
            duration: 0.25,
        }

    }
}

export const sidebar: Variants = {
    initial: {
        opacity: 0,
        scaleY: 0,
        originY: 0
    },
    inView: {
        opacity: 1, 
        scaleY: 1,
        transition: {
            delay: 0.1,
            duration: 0.25
        }
    } 
}

export const viewport: ViewportOptions = { once: true, amount: 0.5 }