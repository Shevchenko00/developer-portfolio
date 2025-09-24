import { type ReactNode } from "react";
import { motion } from "framer-motion";

type Direction = "left" | "right" | "top" | "bottom";

interface AnimatedSectionProps {
    children: ReactNode;
    direction?: Direction;
    distance?: number;
    duration?: number;
    delay?: number;
    once?: boolean;
    amount?: number;
}

const AnimatedSection = ({
                             children,
                             direction = "left",
                             distance = 100,
                             duration = 0.6,
                             delay = 0,
                             once = true,
                             amount = 0.2,
                         }: AnimatedSectionProps) => {
    const getInitialPosition = () => {
        switch (direction) {
            case "right":
                return { x: distance, opacity: 0 };
            case "top":
                return { y: -distance, opacity: 0 };
            case "bottom":
                return { y: distance, opacity: 0 };
            case "left":
            default:
                return { x: -distance, opacity: 0 };
        }
    };

    const finalState = { x: 0, y: 0, opacity: 1 };

    return (
        <div style={{ overflowX: "hidden" }}>
            <motion.div
                initial={getInitialPosition()}
                whileInView={finalState}
                transition={{ duration, delay, ease: "easeOut" }}
                viewport={{ once, amount }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default AnimatedSection;
