"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepThreeSchema } from "../schema/formSchema";

export default function StepThree({
  setStep,
  formData,
  setFormData,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(stepThreeSchema),
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));

    setStep(4);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F4F4]">
      <div className="bg-white p-8 rounded-2xl w-[430px]">

        <form onSubmit={handleSubmit(onSubmit)}>

          <input
            type="date"
            {...register("dateOfBirth")}
            className="w-full border p-3 rounded-lg mb-2"
          />

          <p className="text-red-500 text-sm mb-4">
            {errors.dateOfBirth?.message}
          </p>

          <botton>
          <input
            type="file"
            {...register("profileImage")}
            className="mb-6"
          /></botton>

          <div className="flex gap-3">

            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full border py-4 rounded-xl"
            >
              Back
            </button>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-xl"
            >
              Submit 3/3 →
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}