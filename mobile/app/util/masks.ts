export function PhoneMask(phone: string, forDisplay: boolean = true): string {
  const digits = phone.replace(/\D/g, "")
  if (forDisplay) {
    // Show formatted to user: (99) 99999-9999
    const match = digits.match(/^(\d{2})(\d{5})(\d{4})$/)
    return match ? `(${match[1]}) ${match[2]}-${match[3]}` : digits
  }
  // Save raw digits to database
  return digits
}

export function CPFMask(cpf: string, forDisplay: boolean = true): string {
  const digits = cpf.replace(/\D/g, "")
  if (forDisplay) {
    // Show formatted to user: 999.999.999-99
    const match = digits.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/)
    return match ? `${match[1]}.${match[2]}.${match[3]}-${match[4]}` : digits
  }
  // Save raw digits to database
  return digits
}

export function maskDate(value: string): string {
  const digits = value.replace(/\D/g, "");
  let result = digits;
  if (digits.length > 2) result = digits.slice(0,2) + "/" + digits.slice(2);
  if (digits.length > 4) result = result.slice(0,5) + "/" + digits.slice(4);
  if (result.length > 10) result = result.slice(0,10);
  return result;
}
