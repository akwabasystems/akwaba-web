import React, { useEffect, useMemo, useRef, useState } from "react";

import "./image-carousel.scss";

export type CarouselItemType = {
    id: string;
    src: string;
    alt: string;
    caption: string;
}

type ImageCarouselProps = {
    items: CarouselItemType[];
    title: string;
    autoPlay?: boolean;
    autoPlayIbterval?: number;
    showDots?: boolean;
    showArrows?: boolean;
    className?: string;
}

const SWIPE_THRESHOLD = 40;

export default function ImageCarousel(props: ImageCarouselProps) {
    const {
        items,
        title = 'Image Carousel',
        autoPlay = false,
        autoPlayIbterval = 5000,
        showDots = true,
        showArrows = true,
        className = '',
    } = props;

    const [activeIndex, setActiveIndex] = useState(0);
    const [isHowvered, setIsHovered] = useState(false);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    const total = items.length;
    const hasItems = total > 0;
    const hasnMultipleItems = total > 1;

    const safeIndex = useMemo(() => {
        if (!hasItems) {
            return 0;
        }

        return Math.min(activeIndex, total - 1);
    }, [activeIndex, total, hasnMultipleItems]);

    useEffect(() => {
        if (!hasnMultipleItems || !autoPlay || isHowvered) {
            return;
        }

        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % total);
        }, autoPlayIbterval);

        return () => clearInterval(timer);
    }, [autoPlay, autoPlayIbterval, hasnMultipleItems, isHowvered, total]);

    useEffect(() => {
        if (!hasItems) {
            setActiveIndex(0);
            return;
        }

        if (activeIndex > total - 1) {
            setActiveIndex(total - 1);
        }
    }, [activeIndex, hasItems, total]);

    const gotoImage = (index: number) => {
        if (!hasItems) {
            return;
        }

        const normalized = (index + total) % total;
        setActiveIndex(normalized);
    };

    const gotoNextImage = () => gotoImage(safeIndex + 1);
    const gotoPrevImage = () => gotoImage(safeIndex - 1);


    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (!hasnMultipleItems) {
            return;
        }

        if (event.key === 'ArrowRight') {
            event.preventDefault();
            gotoNextImage();
        } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            gotoPrevImage();
        }
    };

    const handlelTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = event.changedTouches[0].clientX ?? null;
        touchEndX.current = null;
    };

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        touchEndX.current = event.changedTouches[0].clientX ?? null;
    };

    const handelTouchEnd = () => {
        if (touchStartX.current === null || touchEndX.current === null) {
            return;
        }

        const distance = touchStartX.current - touchEndX.current;

        if (distance > SWIPE_THRESHOLD) {
            gotoNextImage();
        } else if (distance < -SWIPE_THRESHOLD) {
            gotoPrevImage();
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    if (!hasItems) {
        return null;
    }

    return (
        <section
            className={`akwaba-carousel ${className}`.trim()}
            aria-label={title}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            tabIndex={0}
        >
            <div
                className="akwaba-carousel__viewport"
                onTouchStart={handlelTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handelTouchEnd}
            >
                <div
                    className='akwaba-carousel__track'
                    style={{
                        transform: `translateX(-${safeIndex * 100}%)`
                    }}
                >
                    {items.map((item) => (
                        <figure className="akwaba-carousel__slide" key={item.id}>
                            <img
                                className="akwaba-carousel__image"
                                src={item.src}
                                alt={item.alt}
                                loading='lazy'
                                draggable={false}
                            />
                            {item.caption && (
                                <figcaption className="akwaba-carousel__caption">
                                    {item.caption}
                                </figcaption>
                            )}
                        </figure>
                    ))}
                </div>

                {showArrows && hasnMultipleItems && (
                    <>
                        <button
                            type="button"
                            className="akwaba-carousel_arrow akwaba-carousel__arrow--left"
                            aria-label="Previous Slide"
                            onClick={gotoPrevImage}
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            className="akwaba-carousel_arrow akwaba-carousel__arrow--right"
                            aria-label="Next Slide"
                            onClick={gotoNextImage}
                        >
                            ›
                        </button>
                    </>
                )}
            </div>

            {showDots && hasnMultipleItems && (
                <div className="akwaba-carousel__dots" role="tablist" aria-label="Slide Navigation">
                    {items.map((item, index) => (
                        <button
                            key={item.id}
                            type="button"
                            role="tab"
                            aria-selected={index === safeIndex}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`akwaba-carousel__dot ${index === safeIndex ? 'akwaba-carousel__dot--active' : ''}`}
                            onClick={() => gotoImage(index)}
                        />
                    ))}
                </div>
            )}
        </section>
    );

}