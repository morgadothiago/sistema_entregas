export interface AccessData {
  email: string
  password: string
}

export interface UserInfoData {
  name: string
  dob: string
  cpf: string
  phone: string
  address: string
  city: string
  number: string
  complement: string
  state: string
  zipCode: string
}

export interface VehicleInfoData {
  licensePlate: string
  brand: string
  model: string
  year: string
  color: string
  vehicleType: string
}

export type RegisterFormData = AccessData & UserInfoData & VehicleInfoData
