import ButtonPrimary from "@/UI/ButtonPrimary";

const Questions = () => {
  return (
    <div className="container">
      <div className="grid gap-10 mt-20 grid-cols-2">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.070347403041!2d69.20332422591855!3d41.285573411093154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta'lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1712206842035!5m2!1sru!2s"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="w-full bg-white p-10 text-[#7A7687] rounded-lg shadow-xl">
          <h2 className="text-black text-3xl font-medium mb-2">
            Остались вопросы?
          </h2>
          <p>
            Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои
            координаты и наш менеджер перезвонит вам через 10 минут
          </p>
          <div className="flex my-10 flex-col gap-6">
            <input
              placeholder="Ваше имя"
              className="pb-2 border-b-2"
              type="text"
            />
            <input
              placeholder="Ваш email"
              className="pb-2 border-b-2"
              type="text"
            />
            <input placeholder="Ваше" className="pb-2 border-b-2" type="text" />
            <textarea
              cols={5}
              placeholder="Ваш вопрос"
              className=" resize-none h-32 pb-2 border-b-2"
              type="text"
            />
          </div>
          <div className="flex items-center gap-10">
            <ButtonPrimary>Отправить</ButtonPrimary>
            <p className="text-xs">
              Нажимая «Отправить», я соглашаюсь c обработкой персональных данных
              на условиях{" "}
              <span className="text-[#088269]">
                Политики конфиденциальности{" "}
              </span>{" "}
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
