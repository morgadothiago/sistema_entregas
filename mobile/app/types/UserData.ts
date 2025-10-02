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

// Tipo para opções de tipo de veículo no picker
export type VehicleTypeOption = {
  label: string
  value: string | number
}

// Dados do veículo
export interface VehicleInfoData {
  licensePlate: string
  brand: string
  model: string
  year: string
  color: string
  vehicleType: VehicleTypeOption // ← correto agora
}

// Formulário completo com todas as etapas
export type RegisterFormData = AccessData & UserInfoData & VehicleInfoData
