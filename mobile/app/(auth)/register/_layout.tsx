import React from "react"
import { Stack } from "expo-router"
import { FormProvider, useForm } from "react-hook-form"
import { RegisterFormData } from "@/app/types/UserData"
import { MultiStepProvider } from "@/app/context/MultiStepContext"

export default function RegisterLayout() {
  const methods = useForm<RegisterFormData>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      dob: "",
      cpf: "",
      phone: "",
      address: "",
      city: "",
      number: "",
      complement: "",
      state: "",
      zipCode: "",
      licensePlate: "",
      brand: "",
      model: "",
      year: "",
      color: "",
      vehicleType: "",
    },
  })

  return (
    <MultiStepProvider>
      <FormProvider {...methods}>
        <Stack screenOptions={{ headerShown: false }} />
      </FormProvider>
    </MultiStepProvider>
  )
}
