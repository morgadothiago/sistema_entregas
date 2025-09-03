import React from "react"
// src/components/Loading.tsx
import {
  Container,
  LoadingIndicator,
  ProgressText,
  SpashScreen,
} from "./styles"
import { useEffect, useState } from "react"

interface LoadingProps {
  onFinish: () => void
  simple?: boolean
}

export function Loading({ onFinish, simple = false }: LoadingProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (simple) {
      // Para loading simples, chama onFinish imediatamente
      onFinish()
      return
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 50) // 5 segundos

    return () => clearInterval(interval)
  }, [simple, onFinish])

  useEffect(() => {
    if (!simple && progress >= 100) {
      onFinish() // Só será chamado uma vez
    }
  }, [progress, simple, onFinish])

  if (simple) {
    return (
      <Container>
        <LoadingIndicator />
      </Container>
    )
  }

  return (
    <Container>
      <SpashScreen source={require("../../assets/fundo.png")}>
        <LoadingIndicator />
        <ProgressText>{progress}%</ProgressText>
      </SpashScreen>
    </Container>
  )
}
