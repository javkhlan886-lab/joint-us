"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepTwoSchema } from "../schema/formSchema";

export default function StepTwo({
  setStep,
  formData,
  setFormData,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(stepTwoSchema),
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));

    setStep(3);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F4F4]">
      <div className="bg-white p-8 rounded-2xl w-[430px]">

        <form onSubmit={handleSubmit(onSubmit)}>

          <input
            {...register("email")}
            placeholder="Email"
            className="w-full border p-3 rounded-lg mb-2"
          />

          <p className="text-red-500 text-sm mb-3">
            {errors.email?.message}
          </p>

          <input
            {...register("phone")}
            placeholder="Phone"
            className="w-full border p-3 rounded-lg mb-2"
          />

          <p className="text-red-500 text-sm mb-3">
            {errors.phone?.message}
          </p>

          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className="w-full border p-3 rounded-lg mb-2"
          />

          <p className="text-red-500 text-sm mb-3">
            {errors.password?.message}
          </p>

          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirm password"
            className="w-full border p-3 rounded-lg mb-2"
          />

          <p className="text-red-500 text-sm mb-6">
            {errors.confirmPassword?.message}
          </p>

          <div className="flex gap-3">

            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full border py-4 rounded-xl"
            >
              Back
            </button>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-xl"
            >
              Continue 2/3 →
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}