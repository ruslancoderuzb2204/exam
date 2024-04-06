"use client";
import { useState } from "react";
import ButtonPrimary from "@/UI/ButtonPrimary";
import toast, { Toaster } from "react-hot-toast";
import CustomInput from "@/UI/CustomInput";

const AuthenticationModal = ({ showModal, toggleModal, setToken1 }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notify = () =>
    toast.success("Регистрация успешна!", {
      duration: 4000,
    });
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("token", JSON.stringify({ email, password }));
    setToken1(true);
    setEmail("");
    setPassword("");
    toggleModal();
    notify();
  };

  return (
    <>
      {showModal && (
        <div className="fixed h-modal h-[100vh] md:h-full top-0 left-0 right-0 md:inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-md top-28 px-4 h-full md:h-auto">
            <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
              <div className="flex justify-between px-6 pt-5">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Регистрация
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  onClick={toggleModal}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <form
                className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8"
                onSubmit={handleSubmit}
              >
                <div>
                  <CustomInput
                    type="email"
                    placeholder="Ваш email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <CustomInput
                    type="password"
                    placeholder="Пароль*"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="text-sm ml-3">
                      <label className="font-medium text-gray-900 dark:text-gray-300">
                        Я соглашаюсь c обработкой персональных данных на
                        условиях{" "}
                        <span className="text-[#088269]">
                          Политики конфиденциальности
                        </span>
                        .
                      </label>
                    </div>
                  </div>
                </div>
                <ButtonPrimary classNames="w-full" type="submit">
                  Регистрация
                </ButtonPrimary>
              </form>
              <div className="text-base py-4 text-center rounded-b-xl font-medium bg-[#E5E4ED] text-gray-500 dark:text-gray-300">
                Вы уже зарегистрированы?{" "}
                <span className="text-[#088269]">Войти</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthenticationModal;
