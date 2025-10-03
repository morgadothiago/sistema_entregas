export type UserInfoData = {
  name: string
  dob: Date | { day: number; month: number; year: number } | string
  email: string
  password: string
  address?: string
  city?: string
  state?: string
  zipCode?: string
  number?: string
  complement?: string
  vehicleType?: string
  licensePlate?: string
  brand?: string
  model?: string
  year?: string | number
  color?: string
}
