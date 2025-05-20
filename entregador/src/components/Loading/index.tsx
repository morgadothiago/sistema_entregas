// src/components/Loading.tsx
import {
  Container,
  LoadingIndicator,
  ProgressText,
  SpashScreen,
} from "./styles";
import { useEffect, useState } from "react";

export function Loading({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onFinish(); // ✅ Chama função passada de App
          return 100;
        }
        return prev + 1;
      });
    }, 50); // 5 segundos

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      onFinish();
    }
  }, [progress]);

  return (
    <Container>
      <SpashScreen source={require("../../assets/spash.png")}>
        <LoadingIndicator />
        <ProgressText>{progress}%</ProgressText>
      </SpashScreen>
    </Container>
  );
}
