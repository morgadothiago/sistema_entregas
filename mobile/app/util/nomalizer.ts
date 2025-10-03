export function normalizeData(userInfo: any, accessData: any) {
  return {
    name: userInfo.name,
    dob:
      userInfo.dob instanceof Date
        ? userInfo.dob.toISOString().split("T")[0]
        : `${userInfo.dob.year}-${String(userInfo.dob.month).padStart(
            2,
            "0"
          )}-${String(userInfo.dob.day).padStart(2, "0")}`,
    email: accessData.email,
    password: accessData.password,
    address: userInfo.address,
    city: userInfo.city,
    state: userInfo.state,
    zipCode: userInfo.zipCode,
    number: userInfo.number,
    complement: userInfo.complement,
    vehicleType: userInfo.vehicleType?.value || "",
    licensePlate: userInfo.licensePlate || "",
    brand: userInfo.brand || "",
    model: userInfo.model || "",
    year: userInfo.year?.toString() || "",
    color: userInfo.color || "",
  }
}
