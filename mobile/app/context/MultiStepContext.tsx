import React, { createContext, useContext, useState } from "react"
import {
  UserInfoData,
  VehicleInfoData,
  AccessData,
  RegisterFormData,
} from "@/app/types/UserData"

interface MultiStepContextProps {
  step: number
  setStep: (step: number) => void
  userInfo: UserInfoData
  setUserInfo: (data: UserInfoData) => void
  vehicleInfo: VehicleInfoData
  setVehicleInfo: (data: VehicleInfoData) => void
  accessInfo: AccessData
  setAccessInfo: (data: AccessData) => void
  reset: () => void
}

const defaultUserInfo: UserInfoData = {
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
}

const defaultVehicleInfo: VehicleInfoData = {
  licensePlate: "",
  brand: "",
  model: "",
  year: "",
  color: "",
  vehicleType: "",
}

const defaultAccessInfo: AccessData = {
  email: "",
  password: "",
}

const MultiStepContext = createContext<MultiStepContextProps | undefined>(
  undefined
)

export const MultiStepProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [step, setStep] = useState(0)
  const [userInfo, setUserInfo] = useState<UserInfoData>(defaultUserInfo)
  const [vehicleInfo, setVehicleInfo] =
    useState<VehicleInfoData>(defaultVehicleInfo)
  const [accessInfo, setAccessInfo] = useState<AccessData>(defaultAccessInfo)

  function reset() {
    setStep(0)
    setUserInfo(defaultUserInfo)
    setVehicleInfo(defaultVehicleInfo)
    setAccessInfo(defaultAccessInfo)
  }

  return (
    <MultiStepContext.Provider
      value={{
        step,
        setStep,
        userInfo,
        setUserInfo,
        vehicleInfo,
        setVehicleInfo,
        accessInfo,
        setAccessInfo,
        reset,
      }}
    >
      {children}
    </MultiStepContext.Provider>
  )
}

export function useMultiStep() {
  const ctx = useContext(MultiStepContext)
  if (!ctx)
    throw new Error("useMultiStep must be used within a MultiStepProvider")
  return ctx
}
