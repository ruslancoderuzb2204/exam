import { BarChart2, Heart } from "lucide-react";
import LeftSide from "./LeftSide";
import ButtonPrimary from "@/UI/ButtonPrimary";
import Image from "next/image";
import {
  Famous1,
  Famous2,
  Famous3,
  Famous4,
  Famous5,
  Famous6,
  Famous7,
} from "@/constants";

const Products = () => {
  const productsData = [
    {
      image: Famous1,
      title: "Анализатор мочи MIND UA-66",
      article: "213134",
      availability: "B наличии",
      price: "300 000 руб.",
    },
    {
      image: Famous2,
      title: "Product 2",
      article: "123456",
      availability: "Есть в наличии",
      price: "500 000 руб.",
    },
    {
      image: Famous3,
      title: "Product 3",
      article: "789012",
      availability: "B наличии",
      price: "700 000 руб.",
    },
    {
      image: Famous4,
      title: "Product 4",
      article: "345678",
      availability: "B наличии",
      price: "900 000 руб.",
    },
    {
      image: Famous5,
      title: "Product 5",
      article: "901234",
      availability: "B наличии",
      price: "1 200 000 руб.",
    },
    {
      image: Famous6,
      title: "Product 6",
      article: "567890",
      availability: "B наличии",
      price: "1 500 000 руб.",
    },
    {
      image: Famous7,
      title: "Product 7",
      article: "234567",
      availability: "B наличии",
      price: "1 800 000 руб.",
    },
  ];

  return (
    <div className="flex container gap-12">
      <LeftSide
        elements={["Хиты продаж", "Новинки", "Акции"]}
        title="Каталог товаров"
      />
      <div id="scrollbar1" className="mb-20 overflow-x-auto rounded-lg">
        <div className="flex flex-shrink-1 gap-4">
          {productsData.map((product, index) => (
            <div
              key={index}
              className="w-80 border shrink-0 rounded-lg bg-white mb-4"
            >
              <div className="flex items-center justify-between p-2 rounded-t-lg">
                <ButtonPrimary>Новинка</ButtonPrimary>
                <div className="flex gap-2">
                  <BarChart2 className="" size="24" />
                  <Heart className="" size="24" />
                </div>
              </div>
              <div className="mx-auto">
                <Image
                  className="mx-auto shrink-1 h-72"
                  src={product.image}
                  alt="img"
                  objectFit="cover"
                  width={200}
                  height={200}
                />
              </div>
              <div className=" bg-[#F8F7F3] p-4">
                <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                <p className="text-sm">Артикул: {product.article}</p>
                <p className="text-sm my-2">{product.availability}</p>
                <p className="text-xl font-semibold mb-4">{product.price}</p>
                <ButtonPrimary>Добавить в корзину</ButtonPrimary>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
