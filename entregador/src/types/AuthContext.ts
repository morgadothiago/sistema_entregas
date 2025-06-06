import { useState } from "react";

interface User {
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  // ...
}

const [user, setUser] = useState<User | null>(null);
