import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col m-auto bg-black">
      <Link href="/home" className="h-[10px]">
        <Image
          width={30}
          height={18}
          className="relative top-7 right-96 w-[50px] h-[50px] m-auto"
          src="/iconoVolver.png"
          alt="Volver al inicio"
        />
      </Link>
      <div className="m-auto flex justify-between">
        <Image
          width={900}
          height={800}
          className="w-[840px] h-[766px] mt-0 m-auto"
          src="/ErrorProducto404.png"
          alt="Imagen Error 404"
        />
      </div>
    </div>
  );
}