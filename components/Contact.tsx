import React from "react";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";

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

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row mx-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-white text-2xl -my-40">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl xl:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#000000]/50 underline">Lets talk</span>
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
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput mt-2 sm:mt-0 emailInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />

          <button
            type="submit"
            className="bg-[#000000] py-5 px-10 text-white font-bold text-lg shadow-xl rounded-xl uppercase"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
