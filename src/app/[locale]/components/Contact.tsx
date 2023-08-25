import React from "react";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslations } from "next-intl";
import reactStringReplace from "react-string-replace";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:pablodbb@gmail.com?subject=${formData.subject}&body=Hi, mi name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  const t = useTranslations("Contact");
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row mx-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-white text-2xl -my-40">
        {t("title")}
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl xl:text-4xl font-semibold text-center">
          {reactStringReplace(
            t("Phrase"),
            /(Hablemos|Lets talk)/gi,
            (match, i) => (
              <span className="underline decoration-[#000000]">{match}</span>
            )
          )}
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <BsFillEnvelopeFill className="text-[#000000] h-7 w-7 animate-pulse" />
            <p className="text-2xl">pablodbb@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <FaMapMarkerAlt className="text-[#000000] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Barcelona, Spain</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 mx-auto"
        >
          <div className="flex flex-col sm:flex-row space-x-2">
            <input
              {...register("name")}
              placeholder={t("Name")}
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder={t("Email")}
              className="contactInput mt-2 sm:mt-0 emailInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder={t("Subject")}
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder={t("Message")}
            className="contactInput"
          />

          <button
            type="submit"
            className="bg-[#000000] py-5 px-10 text-white font-bold text-lg shadow-xl rounded-xl uppercase"
          >
            {t("Submit")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
