"use client";

import Image from "next/image";
import { useState } from "react";
import { AlignEndHorizontal, Heart, Minus, Plus, X } from "lucide-react";
import { productsData } from "@/data";
import ButtonPrimary from "@/UI/ButtonPrimary";
import ButtonSecondary from "@/UI/ButtonSecondary";

const Corsica = () => {
  const [allPrice, setAllPrice] = useState(
    productsData.reduce((acc, item) => acc + item.price, 0)
  );
  const [counter, setCounter] = useState(1);

  const onAdd = (id) => {
    const findItem = productsData.find((item) => item.id === id);
    if (findItem) {
      setAllPrice((prev) => prev + findItem.price);
    }
    setCounter((prev) => prev + 1);
  };

  const onRemove = (id) => {
    const findItem = productsData.find((item) => item.id === id);
    if (findItem) {
      setAllPrice((prev) => prev - findItem.price);
    }
    setCounter((prev) => prev - 1);
  };

  return (
    <div className="container">
      <div className="mx-auto text-sm my-12 grid grid-cols-4 gap-4">
        <div className="col-span-3 flex flex-col gap-4">
          {productsData.map((item, index) => (
            <div
              className={"flex justify-between gap-4 rounded-md border"}
              key={index}
            >
              <div className="relative flex h-48 w-2/6 bg-white p-12">
                <ButtonSecondary classNames="absolute left-2 top-2 z-50 px-2 py-1 text-sm">
                  Новинка
                </ButtonSecondary>
                <Image
                  className={"h-full w-full"}
                  src={item.image}
                  fill
                  alt={"image"}
                />
              </div>
              <div className="flex flex-1 justify-between gap-4 p-4">
                <div className="text-base">
                  <h2 className="  font-semibold">{item.title}</h2>
                  <p className=" font-normal">{item.description}</p>
                  <p className="  font-normal">{item.sub_description}</p>
                </div>
                <div>
                  <p className="text-md mb-3 font-normal">{item.price} руб</p>
                  <div className="flex rounded-full justify-evenly w-20 border">
                    <button
                      onClick={() => onRemove(item.id)}
                      className=" rounded-full border border-none bg-transparent text-green-600 hover:bg-[#eee]"
                    >
                      <Minus className={"w-4"} />
                    </button>
                    <p className="p-2">{counter}</p>
                    <button
                      onClick={() => onAdd(item.id)}
                      className="rounded-full border border-none bg-transparent text-green-600 hover:bg-[#eee]"
                    >
                      <Plus className={"w-4"} />
                    </button>
                  </div>
                </div>
                <div className="flex gap-5">
                  <AlignEndHorizontal />
                  <Heart />
                  <X />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-1 rounded border bg-white p-3">
          <div className="flex mb-2  items-center justify-between ">
            <p>Итого</p>
            <p>{allPrice} руб</p>
          </div>
          <hr className=" mb-4" />
          <div className="flex items-center  justify-between">
            <p>Товары ({productsData.length} шт)</p>
            <p>{allPrice} руб</p>
          </div>
          <div className="flex  items-center mt-4 justify-between">
            <p>Скидка</p>
            <p>0 руб.</p>
          </div>
          <div className="flex mt-4 flex-col gap-2">
            <ButtonPrimary>Оформить заказ</ButtonPrimary>
            <ButtonSecondary>Задать вопрос</ButtonSecondary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corsica;
