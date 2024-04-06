"use client";
import Image from "next/image";
import { Logo } from "@/constants";
import { GoPerson } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { BarChart2, LogOut } from "lucide-react";
import Link from "next/link";
import SearchBar from "@/UI/SearchBar";
import AuthenticationModal from "@/containers/LoginModal";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const MiddleNav = () => {
  const [token, setToken] = useState<object | boolean>(false);
  const [token1, setToken1] = useState<object | boolean>(false);

  useEffect(() => {
    const tokenString = localStorage.getItem("token");
    if (tokenString) {
      const parsedToken = JSON.parse(tokenString);
      setToken(parsedToken);
    }
  }, []);
  useEffect(() => {
    if (token) {
      setToken1(!token1);
    }
  }, [token]);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const notify = () =>
    toast.success("Bxoд успешна!", {
      duration: 4000,
    });
  const removeToken = () => {
    localStorage.removeItem("token");
    setToken1(false);
    notify();
  };
  return (
    <div className="container flex justify-between items-center ">
      <div className="text-[#7A7687] flex text-sm py-4 md:py-2 items-center gap-10 lg:gap-6 md:gap-4 sm:gap-2">
        <div>
          <Link href="/">
            <Image src={Logo} alt="Logo" width={50} height={20} />
          </Link>
        </div>
        <div className="base:hidden">
          <SearchBar />
        </div>
        <div className="lg:hidden">
          <p>
            Пн - Пт <br /> Сб - Вс
          </p>
        </div>
      </div>
      <div>
        <ul className="flex text-sm items-end md:items-center gap-8 lg:gap-6 md:gap-4 sm:gap-2">
          {!token1 ? (
            <li
              onClick={toggleModal}
              className="flex cursor-pointer flex-col items-center gap-1 text-[#7A7687]"
            >
              <GoPerson className=" scale-150" />
              <p className="md:hidden">Войти</p>
            </li>
          ) : (
            <li
              onClick={removeToken}
              className="flex cursor-pointer   flex-col items-center gap-1 text-[#7A7687]"
            >
              <LogOut className=" scale-75" />
              <p className="md:hidden">Вxoд</p>
            </li>
          )}

          <li className="flex flex-col items-center gap-1 text-[#7A7687]">
            <CiHeart className=" scale-150" />
            <p className="md:hidden">Избранное</p>
          </li>
          <li className="flex flex-col items-center gap-1 text-[#7A7687]">
            <div>
              <BarChart2 />
            </div>
            <p className="md:hidden">Сравнить</p>
          </li>
          <li>
            <Link
              href={"/cart"}
              className="flex flex-col items-center gap-1 text-[#7A7687]"
            >
              <SlBasket className=" scale-150" />
              <p className="md:hidden">Корзина</p>
            </Link>
          </li>
        </ul>
      </div>
      {showModal && (
        <AuthenticationModal
          setToken1={setToken1}
          toggleModal={toggleModal}
          showModal={showModal}
        />
      )}
    </div>
  );
};

export default MiddleNav;
