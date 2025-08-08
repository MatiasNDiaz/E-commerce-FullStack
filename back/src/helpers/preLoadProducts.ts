import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

export const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 16 Pro 256GB",
    price: 799,
    description:
      "El iPhone 16 ofrece una experiencia avanzada con iOS 18, integrando Apple Intelligence para funciones de IA personalizadas y una cámara mejorada para capturar momentos inolvidables.",
    image:
      "https://www.macstation.com.ar/web/image/product.template/91581/image_1024/%5BMYND3BE-A%5D%20iPhone%2016%20Pro%20128%20GB%20-%20Titanio%20Negro?unique=a61137d",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "MacBook Air M3",
    price: 999,
    description:
      "La MacBook Air con chip M3 combina rendimiento excepcional y eficiencia energética en un diseño ultradelgado, ideal para profesionales y estudiantes.",
    image:
      "https://www.macstation.com.ar/web/image/product.product/88950/image_1024/%5BMRXW3LE-A%5D%20MacBook%20Air%2013%22%20M3%20de%208C%20CPU%2C%2010C%20GPU%2C%208GB%2C%20512GB%20-%20Medianoche?unique=49fa645",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "iPad Pro M4 256GB",
    price: 1000,
    description:
      "El iPad Pro M5 redefine la productividad móvil con su potente chip M5, pantalla OLED de alta resolución y compatibilidad con el Apple Pencil Pro.",
    image:
      "https://www.macstation.com.ar/web/image/product.template/90619/image_1024/%5BMVV83LE-A%5D%20iPad%20Pro%2011%22%20M4%20WiFi%20256GB%2C%20Vidrio%20Est%C3%A1ndar%20-%20Negro%20Espacial?unique=39a5f78",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Apple Watch Series 10",
    price: 399,
    description:
      "El Apple Watch Series 6 monitorea tu salud con sensores avanzados, incluyendo oxígeno en sangre y ECG, manteniéndote conectado y activo durante todo el día.",
    image:
      "https://www.macstation.com.ar/web/image/product.template/91929/image_1024/%5BMWWK3AM-A%5D%20Apple%20Watch%20S10%20GPS%2042mm%20-%20Caja%20de%20Aluminio%20Oro%20Rosado%20-%20Loop%20Deportivo%20Ciruela?unique=39a5f78",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "AirPods 4",
    price: 249,
    description:
      "Los AirPods Pro de segunda generación ofrecen cancelación activa de ruido, modo transparencia y audio espacial para una experiencia sonora inmersiva.",
    image:
      "https://www.macstation.com.ar/web/image/product.template/92663/image_1024/%5BMXP63BE-A%5D%20AirPods%204ta%20Gen%20USB-C?unique=8f0e170",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "Apple AirTag",
    price: 99,
    description:
      "¿Has perdido la cartera? No se acaba el mundo. Cada AirTag lleva un altavoz incorporado y puedes hacer que suene para localizarlo. ",
    image:
      "https://www.macstation.com.ar/web/image/product.template/9393/image_1024/%5BMX532BE-A%5D%20Apple%20AirTag%20%281%20Pack%29?unique=2b29ab1",
    categoryId: 6,
    stock: 10,
  },
  // 6 productos mas:
    {
    name: "Sony Xperia 1 V",
    price: 1099,
    description:
      "El Sony Xperia 1 V combina tecnología de cine con un diseño elegante. Con su pantalla 4K OLED de 6.5'' y capacidades fotográficas avanzadas, es ideal para creadores de contenido.",
    image:
    "https://sony.scene7.com/is/image/sonyglobalsolutions/747_ProductPrimary_image?$categorypdpnav$&fmt=png-alpha",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Dell XPS 13 Plus",
    price: 1199,
    description:
      "Ultradelgada y potente, la Dell XPS 13 Plus ofrece una experiencia premium con pantalla infinita y procesadores Intel de última generación.",
    image:
      "https://i.ebayimg.com/images/g/80IAAOSwRHllgBT0/s-l1200.jpg",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "Samsung G.Tab S9",
    price: 849,
    description:
      "La Galaxy Tab S9 ofrece una pantalla AMOLED vibrante y un rendimiento fluido, perfecta para entretenimiento y productividad.",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-x910nzadaro/gallery/ar-galaxy-tab-s9-ultra-wifi-x910-sm-x910nzadaro-539476313?$684_547_PNG$",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Garmin Fenix 7 Pro",
    price: 749,
    description:
      "Reloj multideporte premium con GPS, mapas topográficos y sensores avanzados para seguimiento de salud y entrenamiento.",
    image:
      "https://res.garmin.com/en/products/010-02776-54/g/fenix-7-pro-m.jpg",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "Sony WH-1000XM5",
    price: 399,
    description:
      "Auriculares inalámbricos con cancelación de ruido líder en la industria y audio de alta resolución para una experiencia envolvente.",
    image:
      "https://m2.me-retail.com/cdn-cgi/image/w=1000,q=75,f=auto/pub/media/catalog/product/w/h/wh-1000xm5b-7.png",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "Tile Mate 2024",
    price: 35,
    description:
      "Encuentra tus objetos perdidos fácilmente con Tile Mate. Compatible con iOS y Android, con alcance de hasta 76 metros.",
    image:
      "https://cdn11.bigcommerce.com/s-q1uu96atar/images/stencil/480w/products/541/29440/7765b32f042fd899e8b44ae0efaef58a8a1ac729400a1f1903a3f1557982c6e5__28163.1739380006.png",
    categoryId: 6,
    stock: 10,
  },
  // 6 mas xd:
    {
    name: "Pixel Ultra 5G",
    price: 799,
    description:
      " Con conectividad 5G y una cámara de alta resolución, el Pixel Ultra 5G captura cada momento con claridad..",
    image:
      "https://api.zextons.co.uk/uploads/products/20241113_170846_Untitled%20design%20(17).png",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "HP Spectre x360",
    price: 1299,
    description:
      "La HP Spectre x360 combina potencia y versatilidad con su diseño convertible, procesador Intel Core i7 y pantalla táctil 4K.",
    image:
      "https://www.iconicmicro.com/cdn/shop/products/7fq48av-01.jpg?v=1678166401",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "Lenovo Tab P12 Pro",
    price: 799,
    description:
      "La Lenovo Tab P12 Pro cuenta con una pantalla AMOLED de 12.6 pulgadas, sonido Dolby Atmos y soporte para el Precision Pen 3, ideal para entretenimiento y productividad.",
    image:
      "https://p4-ofp.static.pub//fes/cms/2024/01/22/45yc9sdhxqjwagmxyt947vwzjocbag172179.png",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Garmin Venu 3",
    price: 449,
    description:
      "El Garmin Venu 3 es un smartwatch deportivo con GPS, sensor de oxígeno, ECG y hasta 14 días de batería. Ideal para fitness y vida saludable.",
    image:
      "https://res.garmin.com/es_ES/products/010-02784-01/v/cf-lg.png",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "JBL Live Flex",
    price: 179,
    description:
      "Los JBL Live Flex ofrecen cancelación de ruido adaptativa, batería de larga duración y sonido envolvente JBL Signature.",
    image:
      "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw6c87411e/04.JBL_Live%20Flex_Product%20Image_Case%20Open_Black.png?sw=535&sh=535",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "Chipolo ONE Spot",
    price: 35,
    description:
      "El Chipolo ONE Spot es un rastreador compatible con la red de Apple, ideal para encontrar objetos personales fácilmente.",
    image:
      "https://chipolo.net/imager/products/637637/Spot_1500x1500_LightBG-1_6c0c164bd2b597ee32b68b8b5755bd2e.png",
    categoryId: 6,
    stock: 10,
  },
  // ya sabes que voy a hacer 6 veces:
  {
    name: "OnePlus 12R",
    price: 649,
    description:
      "Potente rendimiento con Snapdragon 8 Gen 2, batería de larga duración y carga súper rápida de 100W.",
    image:
      "https://oasis.opstatics.com/content/dam/oasis/page/2024/global/product/aston/aston_blue.png",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Lenovo Yoga Slim 7i",
    price: 1099,
    description:
      "Portátil delgado y ligero con pantalla 2.8K OLED, ideal para productividad y entretenimiento.",
    image:
      "https://thetechrevolutionist.com/wp-content/uploads/2021/09/Lenovo-Yoga-Slim-7i-Pro-OLED_Front_Facing_Left.png",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "Xiaomi Pad 6 Pro",
    price: 599,
    description:
      "Tablet potente y ligera con pantalla 144Hz y chip Snapdragon 8+, perfecta para multitarea y gaming.",
    image:
      "https://www.whatamobile.com.pk/wp-content/uploads/2024/10/Xiaomi-Pad-6-Gravity-Gray-256GB-8GB-1.png",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Fitbit Versa 4",
    price: 229,
    description:
      "Smartwatch elegante con seguimiento de actividad, sueño y ritmo cardíaco, con batería de hasta 6 días.",
    image:
      "https://metapod.com/cdn/shop/products/FitbitVersa4FitnessSmartwatch1.png?v=1724662219",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "JBL Tour One M2",
    price: 329,
    description:
      "Auriculares over-ear con cancelación adaptativa de ruido, sonido envolvente y hasta 50h de batería.",
    image:
      "https://s3.amazonaws.com/cms.ipressroom.com/214/files/20227/202208261046/6308a496b3aed3780975bc42_JBL+Tour+One+M2+Black/JBL+Tour+One+M2+Black_thmb.png",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "Samsung SmartTag2",
    price: 45,
    description:
      "Localizador inteligente con alcance extendido, resistente al agua y batería de larga duración.",
    image:
      "https://media.flixcar.com/webp/synd-asset/Samsung-140593750-ar-galaxy-smarttag2-ei-t5600-ei-t5600bbegar-539637003--Download-Source--zoom.png",
    categoryId: 6,
    stock: 10,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};

export default productsToPreLoad