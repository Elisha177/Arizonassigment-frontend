/* eslint-disable no-unused-vars */
import React from 'react';

const ShopByDepartment = () => {
  const departments = [
    {
      title: "Ceiling Lights",
      href: "/Ceiling-Lighting.htm?bid=bmb",
      image: "https://imgprd.1stoplighting.com/crystorama-lighting/products/ken_2203_vg_300.jpg",
      alt: "ceiling light"
    },
    {
      title: "Outdoor Lighting",
      href: "/category/all-outdoor-lighting?bid=bmb",
      image: "https://imgprd.1stoplighting.com/capital-lighting/products/946411bk_300.jpg",
      alt: "outdoor wall lantern"
    },
    {
      title: "Ceiling Fans",
      href: "/Ceiling-Fans.htm?bid=bmb",
      image: "https://imgprd.1stoplighting.com/craftmade-lighting/products/gar56fb5_300.jpg",
      alt: "windmill ceiling fan"
    },
    {
      title: "LED Mirrors",
      href: "/category/lit-mirrors?bid=bmb",
      image: "https://imgprd.1stoplighting.com/elan-lighting/products/84165cg_300.jpg",
      alt: "gold rimmed led mirror"
    },
    {
      title: "Wall Lighting",
      href: "/Wall-Lighting.htm?bid=bmb",
      image: "https://imgprd.1stoplighting.com/savoy-house/products/9_0901_1_322_300.jpg",
      alt: "wall sconce"
    },
    {
      title: "Bath Lights",
      href: "/category/bathroom-lights?bid=bmb",
      image: "https://imgprd.1stoplighting.com/kichler/products/45574bk_300.jpg",
      alt: "gold bath vanity"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Shop by Department</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {departments.map((dept, index) => (
          <div key={index} className="flex flex-col items-center">
            <a 
              href={dept.href}
              className="group flex flex-col items-center text-center hover:opacity-90 transition-opacity"
            >
              <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 transition-colors">
                {dept.title}
              </h3>
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <img
                  src={dept.image}
                  alt={dept.alt}
                  className="w-[150px] h-[150px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                  width={150}
                  height={150}
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByDepartment;