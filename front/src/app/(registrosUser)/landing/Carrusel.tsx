'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

type Product = {
    id?:number
    image: string;
};

type CarouselProps = {
    products: Product[];
};

export default function Carrusel({ products }: CarouselProps) {
    return (
    <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    }}
    >
    {products.map((product) => (
        <SwiperSlide key={product.id}>
        <div className="bg-white rounded-xl shadow-md text-white text-center hover:scale-105 transition">
            <Image
            src={product.image}
            alt={"producto"} 
            width={340} height={500}
            className="w-[3000px] h-[500px] object-contain text-white bg-slate-400 rounded-md p-2 "
            />
        </div>
        </SwiperSlide>
    ))}
    </Swiper>
    );
}
