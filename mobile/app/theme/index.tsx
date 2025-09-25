export const colors = {
  primary: "#003B73", // Azul royal escuro
  secondary: "#FFFFFF", // Branco
  support: "#5DADE2", // Azul Tech pastel
  stars: "#FFD700", // Dourado
  buttons: "#00FFB3", // Verde cibernético
  text: "#2C3E50",
  active: "#0da87aff", // Cinza grafite (para fundo branco)
} as const

export type ColorName = keyof typeof colors
