"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";

const inputClass =
  "w-full h-[53px] bg-white border border-[#E7E7E7] rounded-[8px] px-4 text-[14px] text-[#181818] placeholder:text-[#8A8A8A] outline-none focus:border-[#181818] transition-colors";

function OrDivider() {
  return (
    <div className="flex items-center gap-3 my-1">
      <div className="flex-1 h-px bg-[#E7E7E7]" />
      <span className="text-[12px] text-[#7E7E7E] leading-4">OR</span>
      <div className="flex-1 h-px bg-[#E7E7E7]" />
    </div>
  );
}

function GoogleButton({ label }: { label: string }) {
  const handleClick = () => {
    // Mock — real OAuth wiring happens server-side
    alert("Google sign-in is not wired up in this preview build.");
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="cursor-pointer h-[48px] bg-white border border-[#E7E7E7] hover:border-[#181818] rounded-[8px] text-[14px] font-semibold text-[#181818] flex items-center justify-center gap-3 transition-colors"
    >
      <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      </svg>
      {label}
    </button>
  );
}

function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" stroke="#7E7E7E" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" stroke="#7E7E7E" strokeWidth="1.5" />
    </svg>
  ) : (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" stroke="#7E7E7E" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" stroke="#7E7E7E" strokeWidth="1.5" />
      <path d="M3 3l18 18" stroke="#7E7E7E" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LoginContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { login, register } = useAuth();
  const initialMode = searchParams.get("mode") === "register" ? "register" : "login";
  const [mode, setMode] = useState<"login" | "register">(initialMode);
  const [error, setError] = useState<string | null>(null);

  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginShowPw, setLoginShowPw] = useState(false);
  const [loginRemember, setLoginRemember] = useState(true);

  // Register state
  const [regFirst, setRegFirst] = useState("");
  const [regLast, setRegLast] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirm, setRegConfirm] = useState("");
  const [regShowPw, setRegShowPw] = useState(false);
  const [regShowConfirm, setRegShowConfirm] = useState(false);
  const [regAcceptTerms, setRegAcceptTerms] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const res = login(loginEmail, loginPassword);
    if (!res.ok) {
      setError(res.error ?? "Login failed");
      return;
    }
    router.push("/account");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (regPassword !== regConfirm) {
      setError("Passwords do not match");
      return;
    }
    if (!regAcceptTerms) {
      setError("Please accept the Terms of Use and Privacy Policy to continue");
      return;
    }
    const res = register({
      firstName: regFirst,
      lastName: regLast,
      email: regEmail,
      password: regPassword,
    });
    if (!res.ok) {
      setError(res.error ?? "Registration failed");
      return;
    }
    router.push("/account");
  };

  return (
    <>
      <Header />
      <main className="relative z-10 bg-white">
        {/* Breadcrumb */}
        <div className="max-w-[1340px] mx-auto px-4  py-4">
          <div className="flex items-center gap-2 text-sm text-[#7E7E7E]">
            <Link href="/" className="hover:text-[#181818] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#181818] font-semibold">My Account</span>
          </div>
        </div>

        <div className="max-w-[500px] mx-auto px-4  pb-12 tablet:pb-16">
          <h1 className="text-[24px] tablet:text-[30px] font-extrabold text-[#181818] leading-[30px] tablet:leading-[36px] mb-4 tablet:mb-6">My Account</h1>

          {/* Login / Register tabs */}
          <div className="bg-[#F7F7F7] rounded-[12px] p-1 flex items-center gap-1 mb-5">
            <button
              onClick={() => setMode("login")}
              className={`cursor-pointer flex-1 h-[48px] rounded-[8px] text-[15px] font-semibold leading-6 transition-colors ${
                mode === "login" ? "bg-white text-[#181818] shadow-sm" : "text-[#7E7E7E] hover:text-[#181818]"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setMode("register")}
              className={`cursor-pointer flex-1 h-[48px] rounded-[8px] text-[15px] font-semibold leading-6 transition-colors ${
                mode === "register" ? "bg-white text-[#181818] shadow-sm" : "text-[#7E7E7E] hover:text-[#181818]"
              }`}
            >
              Register
            </button>
          </div>

          {/* Form card */}
          <div className="bg-[#F7F7F7] rounded-[16px] p-2">
            <div className="bg-white border border-[#E7E7E7] rounded-[12px] p-5 tablet:p-6 flex flex-col gap-5">
              <h2 className="text-[22px] font-extrabold text-[#181818] leading-[29px]">
                {mode === "login" ? "Login" : "Register"}
              </h2>

              {error && (
                <div className="bg-[#FFE8E8] border border-[#FB2F2F] text-[#FB2F2F] rounded-[8px] px-4 py-3 text-[13px]" role="alert">
                  {error}
                </div>
              )}
              {mode === "login" ? (
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] text-[#181818] leading-5">Email</label>
                    <input
                      type="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className={inputClass}
                      placeholder=""
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] text-[#181818] leading-5">Password</label>
                    <div className="relative">
                      <input
                        type={loginShowPw ? "text" : "password"}
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className={`${inputClass} pr-12`}
                      />
                      <button
                        type="button"
                        onClick={() => setLoginShowPw(!loginShowPw)}
                        aria-label="Toggle password visibility"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center"
                      >
                        <EyeIcon open={loginShowPw} />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <span
                        onClick={() => setLoginRemember(!loginRemember)}
                        className={`w-5 h-5 rounded-[4px] flex items-center justify-center shrink-0 transition-colors ${
                          loginRemember ? "bg-[#181818]" : "border border-[#CBCBCB] bg-white"
                        }`}
                      >
                        {loginRemember && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </span>
                      <span className="text-[14px] text-[#181818] leading-5">Remember me</span>
                    </label>

                    <Link href="/login/forgot" className="text-[14px] font-semibold text-[#181818] hover:underline leading-5">
                      Forgot your password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="cursor-pointer h-[55px] bg-[#181818] hover:bg-black text-white text-[16px] font-semibold rounded-[8px] transition-colors"
                  >
                    Log In
                  </button>

                  <OrDivider />
                  <GoogleButton label="Continue with Google" />
                </form>
              ) : (
                <form onSubmit={handleRegister} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] text-[#181818] leading-5">First name</label>
                    <input type="text" value={regFirst} onChange={(e) => setRegFirst(e.target.value)} className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] text-[#181818] leading-5">Last name</label>
                    <input type="text" value={regLast} onChange={(e) => setRegLast(e.target.value)} className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] text-[#181818] leading-5">Email</label>
                    <input type="email" value={regEmail} onChange={(e) => setRegEmail(e.target.value)} className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] text-[#181818] leading-5">Password</label>
                    <div className="relative">
                      <input
                        type={regShowPw ? "text" : "password"}
                        value={regPassword}
                        onChange={(e) => setRegPassword(e.target.value)}
                        className={`${inputClass} pr-12`}
                      />
                      <button type="button" onClick={() => setRegShowPw(!regShowPw)} aria-label="Toggle password" className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center">
                        <EyeIcon open={regShowPw} />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[14px] text-[#181818] leading-5">Confirm Password</label>
                    <div className="relative">
                      <input
                        type={regShowConfirm ? "text" : "password"}
                        value={regConfirm}
                        onChange={(e) => setRegConfirm(e.target.value)}
                        className={`${inputClass} pr-12`}
                      />
                      <button type="button" onClick={() => setRegShowConfirm(!regShowConfirm)} aria-label="Toggle password" className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center">
                        <EyeIcon open={regShowConfirm} />
                      </button>
                    </div>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <span
                      onClick={() => setRegAcceptTerms(!regAcceptTerms)}
                      className={`w-5 h-5 rounded-[4px] flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        regAcceptTerms ? "bg-[#181818]" : "border border-[#CBCBCB] bg-white"
                      }`}
                    >
                      {regAcceptTerms && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </span>
                    <span className="text-[14px] text-[#181818] leading-5">
                      I accept the{" "}
                      <Link href="/terms" className="font-semibold underline hover:text-[#FF6701]">Terms of Use</Link>
                      {" "}and{" "}
                      <Link href="/privacy" className="font-semibold underline hover:text-[#FF6701]">Privacy Policy</Link>
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="cursor-pointer h-[55px] bg-[#181818] hover:bg-black text-white text-[16px] font-semibold rounded-[8px] transition-colors"
                  >
                    Register
                  </button>

                  <OrDivider />
                  <GoogleButton label="Continue with Google" />
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <div className="relative z-0">
        <Footer />
      </div>
    </>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <LoginContent />
    </Suspense>
  );
}
