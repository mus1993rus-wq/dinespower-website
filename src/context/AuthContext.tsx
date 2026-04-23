"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName: string;
}

interface AuthContextType {
  user: User | null;
  hydrated: boolean;
  login: (email: string, password: string) => { ok: boolean; error?: string };
  register: (user: { firstName: string; lastName: string; email: string; password: string }) => { ok: boolean; error?: string };
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);
const STORAGE_KEY = "dinespower_user_v1";

function readStored(): User | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      parsed &&
      typeof parsed.email === "string" &&
      typeof parsed.firstName === "string" &&
      typeof parsed.lastName === "string"
    ) {
      return parsed as User;
    }
  } catch {
    // ignore
  }
  return null;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [hydrated, setHydrated] = useState(false);

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const stored = readStored();
    if (stored) setUser(stored);
    setHydrated(true);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (!hydrated) return;
    try {
      if (typeof window !== "undefined") {
        if (user) {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
        } else {
          window.localStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch {
      // ignore
    }
  }, [user, hydrated]);

  // Cross-tab sync
  useEffect(() => {
    if (typeof window === "undefined") return;
    function onStorage(e: StorageEvent) {
      if (e.key !== STORAGE_KEY) return;
      if (e.newValue == null) {
        setUser(null);
        return;
      }
      try {
        const parsed = JSON.parse(e.newValue);
        if (parsed?.email) setUser(parsed as User);
      } catch {
        // ignore
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const login = (email: string, password: string) => {
    if (!email.trim() || !password.trim()) {
      return { ok: false, error: "Email and password are required" };
    }
    // Mock: accept any non-empty creds, split email for names
    const [localPart] = email.split("@");
    const newUser: User = {
      id: `u_${Date.now()}`,
      email: email.trim(),
      firstName: localPart || "User",
      lastName: "",
      displayName: localPart || "User",
    };
    setUser(newUser);
    return { ok: true };
  };

  const register = ({
    firstName,
    lastName,
    email,
    password,
  }: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => {
    if (!email.trim() || !password.trim() || !firstName.trim()) {
      return { ok: false, error: "All fields are required" };
    }
    const newUser: User = {
      id: `u_${Date.now()}`,
      email: email.trim(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      displayName: `${firstName.trim()}${lastName.trim() ? " " + lastName.trim()[0] + "." : ""}`,
    };
    setUser(newUser);
    return { ok: true };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, hydrated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
