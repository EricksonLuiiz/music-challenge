import { motion } from "framer-motion";

const AnimatedBackground = () => {
    return (
        <ul className="fixed w-full h-full pointer-events-none">
            {[...Array(10)].map((_, index) => (
                <motion.li
                    key={index}
                    className={`
              absolute block opacity-50 border border-[#0a5be0] bg-transparent bottom-0
              ${index === 0 && "left-[5%] w-[4vmin] h-[4vmin]"}
              ${index === 1 && "left-[20%] w-[8vmin] h-[8vmin]"}
              ${index === 2 && "left-[25%] w-[4vmin] h-[4vmin]"}
              ${index === 3 && "left-[40%] w-[6vmin] h-[6vmin]"}
              ${index === 4 && "left-[70%] w-[4vmin] h-[4vmin]"}
              ${index === 5 && "left-[80%] w-[6vmin] h-[6vmin]"}
              ${index === 6 && "left-[32%] w-[8vmin] h-[8vmin]"}
              ${index === 7 && "left-[55%] w-[2vmin] h-[2vmin]"}
              ${index === 8 && "left-[7%] w-[1vmin] h-[1vmin]"}
              ${index === 9 && "left-[90%] w-[8vmin] h-[8vmin]"}
            `}
                    initial={{ y: "20vh", rotate: 0 }}
                    animate={{
                        y: "-100vh",
                        rotate: 360,
                    }}
                    transition={{
                        y: {
                            duration: index === 7 || index === 8 ? 27 : 15,
                            repeat: Infinity,
                            delay: [0, 2, 4, 0, 0, 3, 7, 15, 2, 11][index],
                            ease: "linear",
                        },
                        rotate: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                        },
                    }}
                />
            ))}
        </ul>
    );
};

export default AnimatedBackground;
