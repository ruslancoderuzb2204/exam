"use client";
import EquipmentBlock from "@/components/Home/Block";
import Famous from "@/components/Detail/Famous";
import Products from "@/components/Home/Products";
import Brands from "@/components/Home/Brands";
import Subscribe from "@/components/Home/Subscribe";
import Detail from "./Detail";
const ProductDetail = ({params}) => {
  return (
    <div>
      <Detail params={params}/>
      <Products />
      <EquipmentBlock />
      <Famous />
      <Brands />
      <Subscribe />
    </div>
  );
};

export default ProductDetail;
