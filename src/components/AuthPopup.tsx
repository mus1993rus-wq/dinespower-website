"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

type Mode = "login" | "register";

const inputClass =
  "w-full h-[48px] bg-white border border-[#E7E7E7] rounded-[8px] px-4 text-[14px] text-[#181818] placeholder:text-[#8A8A8A] outline-none focus:border-[#181818] transition-colors";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

export default function AuthPopup() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const { login, register } = useAuth();

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ mode?: Mode }>).detail;
      setMode(detail?.mode === "register" ? "register" : "login");
      setError("");
      setOpen(true);
    };
    window.addEventListener("open-auth-popup", handler);
    return () => window.removeEventListener("open-auth-popup", handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (mode === "login") {
      const res = login(email.trim(), password);
      if (!res.ok) {
        setError(res.error ?? "Invalid email or password");
        return;
      }
    } else {
      if (password !== confirmPassword) {
        setError("Passwords don't match");
        return;
      }
      const res = register({ firstName: firstName.trim(), lastName: lastName.trim(), email: email.trim(), password });
      if (!res.ok) {
        setError(res.error ?? "Could not register");
        return;
      }
    }
    setOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50"
      role="dialog"
      aria-modal="true"
      onClick={() => setOpen(false)}
    >
      <div
        className="bg-white rounded-[16px] w-full max-w-[440px] max-h-[92vh] overflow-y-auto p-5 tablet:p-6 flex flex-col gap-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with tabs */}
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-extrabold text-[#181818] leading-6">My Account</h2>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F7F7F7] cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="#181818" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="bg-[#F7F7F7] rounded-[12px] p-1 flex items-center gap-1">
          <button
            onClick={() => { setMode("login"); setError(""); }}
            className={`cursor-pointer flex-1 h-10 rounded-[8px] text-[14px] font-semibold transition-colors ${
              mode === "login" ? "bg-white text-[#181818] shadow-sm" : "text-[#7E7E7E]"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => { setMode("register"); setError(""); }}
            className={`cursor-pointer flex-1 h-10 rounded-[8px] text-[14px] font-semibold transition-colors ${
              mode === "register" ? "bg-white text-[#181818] shadow-sm" : "text-[#7E7E7E]"
            }`}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {mode === "register" && (
            <>
              <div className="flex gap-2">
                <input className={inputClass} placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input className={inputClass} placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
            </>
          )}
          <input type="email" className={inputClass} placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" className={inputClass} placeholder="Password *" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {mode === "register" && (
            <input type="password" className={inputClass} placeholder="Confirm password *" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          )}

          {error && <p className="text-[13px] text-[#FB2F2F] leading-5">{error}</p>}

          {mode === "login" && (
            <Link href="/login/forgot" onClick={() => setOpen(false)} className="text-[13px] font-semibold text-[#FF6701] hover:underline self-start">
              Forgot your Password?
            </Link>
          )}

          <button
            type="submit"
            className="cursor-pointer h-12 bg-[#181818] hover:bg-black text-white text-[14px] font-semibold rounded-[8px] transition-colors"
          >
            {mode === "login" ? "Log In" : "Create Account"}
          </button>

          <div className="flex items-center gap-3 my-1">
            <div className="flex-1 h-px bg-[#E7E7E7]" />
            <span className="text-[12px] text-[#7E7E7E] leading-4">OR</span>
            <div className="flex-1 h-px bg-[#E7E7E7]" />
          </div>

          <button
            type="button"
            onClick={() => alert("Google sign-in is not wired up in this preview build.")}
            className="cursor-pointer h-12 bg-white border border-[#E7E7E7] hover:border-[#181818] rounded-[8px] text-[14px] font-semibold text-[#181818] flex items-center justify-center gap-3 transition-colors"
          >
            <GoogleIcon />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
}
