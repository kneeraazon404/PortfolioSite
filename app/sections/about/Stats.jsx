"use client";

import { useEffect, useRef, useState } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";

const stats = [
    { id: 1, name: 'Stars on Github', value: '332+' },
    { id: 2, name: 'Satisfied clients', value: '60+' },
    { id: 3, name: 'Job Success Score', value: '97.9%' },
    { id: 4, name: 'Total Earnings', value: '$50k+' },
    { id: 5, name: 'Projects Completed', value: '75+' },
];

export function Stats() {
    /// TODO: Add color mode support
    const [, setActiveItem] = useState(0);
    const carouselRef = useRef(null);
    // const animRef = useRef(null);
    const isInView = useInView(carouselRef, { once: true });

    const scroll = (node, left) => {
        return node.scrollTo({ left, behavior: "smooth" });
    };

    const handleClick = (e, i) => {
        e.preventDefault();

        if (carouselRef.current) {
            const scrollLeft = Math.floor(
                carouselRef.current.scrollWidth * 0.2 * (i / stats.length)
            );

            scroll(carouselRef.current, scrollLeft);
        }
    };

    const handleScroll = () => {
        if (carouselRef.current) {
            const index = Math.round(
                (carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.2)) *
                stats.length
            );

            setActiveItem(index);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            scroll(carouselRef.current, 0);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <LazyMotion features={domAnimation}>
            <ul
                ref={carouselRef}
                onScroll={handleScroll}
                className="flex flex-row flex-nowrap gap-5 justify-between overflow-x-auto snap-x cursor-pointer hide-scroll-bar mt-16"
            >
                <>
                    {stats.map((item, index) => {
                        return (
                            <li
                                id={`carousel__item-${index}`}
                                key={index}
                                className="flex flex-col gap-3 snap-start w-[calc((100%/2)-30px)] sm:w-1/3 md:w-1/6"
                                onClick={(e) => handleClick(e, index)}
                                style={{
                                    transform: isInView
                                        ? "none"
                                        : `${index === 0 ? "translateY(250px)" : `translateY(${200 / index}px)`}`,
                                    opacity: isInView ? 1 : 0,
                                    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index === 0 ? 0.5 : 1.2 * index
                                        }s`
                                }}
                            >
                                <h3
                                    tabIndex="0"
                                    aria-label={"What do I do in " + item.year}
                                    className="flex items-center gap-4 text-2xl font-bold"
                                >
                                    {`${item.value}`}

                                </h3>
                                <p className="tracking-wide " tabIndex="0">
                                    {item.name}
                                </p>
                            </li>
                        );
                    })}
                </>
            </ul>
        </LazyMotion>
    );
}
