// components/SkeletonNavbar.tsx
"use client"

import React from "react";

const SkeletonNavbar: React.FC = () => {
return (
    <header>
      {/* Sección superior con info logística */}
    <section className="flex bg-black items-center justify-between p-2 m-2 h-[12px]">
        <div className="ml-7 h-4 bg-gray-700 rounded w-[300px] animate-pulse"></div>
        <div className="mr-7 h-4 bg-gray-700 rounded w-[200px] animate-pulse"></div>
    </section>

      {/* Navbar principal */}
        <nav className="flex bg-black shadow-[0_4px_6px_0_rgba(255,255,255,0.3)] items-center justify-between h-[200px] mb-5 m-auto pt-7 pb-11 border-t border-gray-200">
        {/* Logo */}
        <div className="ml-12 mt-3 bg-gray-700 w-[280px] h-[170px] rounded animate-pulse"></div>

        {/* Menú */}
        <ul className="mt-2 flex items-center justify-between text-xl w-[740px] mr-8 gap-5">
        {Array.from({ length: 5 }).map((_, i) => (
            <li key={i}>
            <div className="h-6 w-[100px] bg-gray-500 rounded animate-pulse"></div>
            </li>
        ))}
        </ul>
    </nav>
    </header>
);
};

export default SkeletonNavbar;