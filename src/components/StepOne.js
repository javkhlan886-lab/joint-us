"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepOneSchema } from "../schema/formSchema";

export default function StepOne({
  setStep,
  formData,
  setFormData,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(stepOneSchema),
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));

    setStep(2);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F4F4]">
      <div className="bg-white p-8 rounded-2xl w-[430px]">

        <h1 className="text-3xl font-bold mb-2">
          Join Us 😎
        </h1>

        <p className="text-gray-400 mb-6">
          Please provide all current information accurately.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>

          <input
            {...register("firstName")}
            placeholder="First name"
            className="w-full border p-3 rounded-lg mb-2"
          />

          <p className="text-red-500 text-sm mb-3">
            {errors.firstName?.message}
          </p>

          <input
            {...register("lastName")}
            placeholder="Last name"
            className="w-full border p-3 rounded-lg mb-2"
          />

          <p className="text-red-500 text-sm mb-3">
            {errors.lastName?.message}
          </p>

          <input
            {...register("username")}
            placeholder="Username"
            className="w-full border p-3 rounded-lg mb-2"
          />

          <p className="text-red-500 text-sm mb-6">
            {errors.username?.message}
          </p>

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-xl"
          >
            Continue 1/3 →
          </button>

        </form>
      </div>
    </div>
  );
}