import React from "react";
import Image from "next/image";
import { productsData } from "@/data";
import ButtonSecondary from "@/UI/ButtonSecondary";
import ButtonPrimary from "@/UI/ButtonPrimary";

const Detail = ({ params }) => {
  const findProduct = productsData[params?.productId - 1];

  return (
    <div className="container">
      <div className="mt-10 mb-20">
        <div className="flex items-center justify-between">
          <div className="w-[760px] rounded-md border-2 border-black/10 bg-white p-6">
            <button className="flex items-center rounded-2xl border-2 border-[#0b8269] bg-[#0b8269]/10 px-2.5">
              Новинка
            </button>
            <div className="flex items-center justify-center">
              <Image src={findProduct?.image} width={400} height={400} alt="" />
            </div>
            <div className="flex items-center gap-3">
              {[1, 2, 3].map((alt) => (
                <Image
                  key={alt}
                  src={findProduct?.image}
                  alt={alt.toString()}
                  width={50}
                  height={50}
                  className="rounded-md border-2 border-[#0b8269] p-1"
                />
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl">{findProduct?.title}</h1>
              <ul className="flex flex-col gap-1.5">
                {[
                  "Категория: Лабораторное оборудование",
                  "Производитель: Lorem",
                  "Артикул: 213134",
                  "В наличии",
                ].map((item, index) => (
                  <li key={index} className="text-sm text-[#7A7687]">
                    {item}
                  </li>
                ))}
              </ul>
              <span className="text-base font-bold">300 000 руб.</span>
              <div className="mt-5 flex items-center gap-5">
                <ButtonSecondary>Задать вопрос</ButtonSecondary>
                <ButtonPrimary>Добавить в корзину</ButtonPrimary>
              </div>
              <div className="mt-5 flex flex-col gap-5">
                <h3 className="text-base font-bold">О товаре</h3>
                <p className="w-[500px]">
                  Но синтетическое тестирование, в своём классическом
                  представлении, допускает внедрение поэтапного и
                  последовательного развития общества. В рамках спецификации
                  современных стандартов, сторонники тоталитаризма в науке будут
                  функционально разнесены.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
