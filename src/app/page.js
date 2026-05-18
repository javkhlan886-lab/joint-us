"use client";

import { useState } from "react";

import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import Success from "../components/Success";

export default function Home() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    profileImage: null,
  });

  return (
    <div>
      {step === 1 && (
        <StepOne
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {step === 2 && (
        <StepTwo
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {step === 3 && (
        <StepThree
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {step === 4 && <Success />}
    </div>
  );
}