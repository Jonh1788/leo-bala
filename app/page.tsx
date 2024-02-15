'use client'
import Image from "next/image";
import NavBar from "./ui/navbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import * as React from 'react';
import { FaApple, FaCartPlus } from "react-icons/fa";
import { Plus, ShoppingCart } from "lucide-react";


export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnHover: true })
  )
  return (
    <main className="flex flex-col">
      <NavBar />
      <div className="flex justify-center align-center mt-8">
      <Carousel className="w-full" opts={{
        align: "center",
        loop: true,
      }}
      plugins={[ plugin.current ]}>
          <CarouselContent>
            <CarouselItem >
              <div className="h-full w-full text-white font-medium flex gap-8 items-center justify-center text-6xl bg-gradient-to-br from-[#9DB5D7] via-[#00429E] to-[#041F58]">
                <div>
                  <h2 className="drop-shadow-3xl">Você está a um passo de encontrar</h2>
                  <h2 className="drop-shadow-3xl"> o <span className="font-extrabold">iPhone perfeito</span>  para você!</h2> 
                </div>
                <Image
                src="/leoBarroso.png"
                width={496}
                height={496}
                alt="Leo Barroso"
                className="drop-shadow-3xl"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="w-full flex justify-center items-center">
                <Image
                  src="/iphone12.jpg"
                  width={780}
                  height={707}
                  sizes="h-80% w-70%"
                  alt="iPhone 12"
                />      
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        
      </div>
      <div className="h-screen w-full">
        <div className="flex gap-2 flex-wrap justify-center items-center mt-6">
          <button className="bg-gray-200 h-10 hover:bg-gray-400 justify-center items-center rounded-full w-auto px-2 flex">
            iPhones Seminovos 
            <FaApple className="ml-1 self-center"/> 
            </button>
          <button className="bg-gray-200 h-10 hover:bg-gray-400 justify-center items-center rounded-full w-auto px-2 flex">
            iPhones Novos
            <FaApple className="ml-1 self-center"/> 
            </button>
          <button className="bg-gray-200 h-10 hover:bg-gray-400 justify-center items-center rounded-full w-auto px-2 flex">
            Macbooks
            <FaApple className="ml-1 self-center"/> 
            </button>
          <button className="bg-gray-200 h-10 hover:bg-gray-400 justify-center items-center rounded-full w-auto px-2 flex">
            Airpods
            <FaApple className="ml-1 self-center"/> 
            </button>
          <button className="bg-gray-200 h-10 hover:bg-gray-400 justify-center items-center rounded-full w-auto px-2 flex">Acessórios</button>
          <button className="bg-gray-200 h-10 hover:bg-gray-400 justify-center items-center rounded-full w-auto px-2 flex">Smartwatchs</button>
          <button className="bg-gray-200 h-10 hover:bg-gray-400 justify-center items-center rounded-full w-auto px-2 flex">Ipads</button>
          <button className="bg-gray-200 h-10 hover:bg-gray-400 justify-center items-center rounded-full w-auto px-2 flex">JBL e Games</button>
        </div>
        <div className="h-screen py-4 px-4">
          <div className="h-auto w-80 rounded-md shadow-lg border flex flex-col items-center gap-4 pt-4 text-start">
            <Image
            src="/iphone15pro.jpg"
            width={765}
            height={1000}
            objectFit="contain"
            alt="iPhone 15 Pro"
            className="w-80 h-80"
            style={{
              width: "80%",
              height: "80%",
              }}
            />
            <div className="w-full h-px bg-slate-300"/>
            <h1 className="text-2xl font-bold  w-full px-4">iPhone 15 Pro</h1>
            <div className="w-full px-4">
              <p className="text-xs line-through">De: <span>1259,25</span> </p>
              <p className="text-lg font-semibold">Por apenas: <span className="font-bold">R$1000,00</span></p>
              <p className="text-xs">Ou 10x de 100,00 sem juros</p>
            </div>
            <div className="flex items-center justify-center pb-4 gap-4">
              <button className="border border-slate-500 rounded-full text-slate-900 p-2 hover:bg-slate-900 hover:text-white font-semibold">Comprar agora</button>
              <button className="relative rounded-full border border-slate-500 p-2 hover:bg-slate-900 hover:text-white">
                <FaCartPlus className="w-6 h-6"/>
                </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
