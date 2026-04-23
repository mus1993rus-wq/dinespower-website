"use client";

import { useState } from "react";

const inputClass =
  "w-full h-[48px] bg-white border border-[#E7E7E7] rounded-[8px] px-4 text-[14px] text-[#181818] placeholder:text-[#8A8A8A] outline-none focus:border-[#181818] transition-colors";
const labelClass = "text-[14px] text-[#181818] leading-5 mb-1.5";

export default function AccountDetailsPage() {
  const [firstName, setFirstName] = useState("Rustam");
  const [lastName, setLastName] = useState("Musaev");
  const [displayName, setDisplayName] = useState("mus1993rus");
  const [email, setEmail] = useState("mus1993rus@gmail.com");
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-8">
      {/* Account Details */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] font-semibold text-[#181818] leading-[26px]">Account Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className={labelClass}>First name</p>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className={inputClass} />
          </div>
          <div>
            <p className={labelClass}>Last name</p>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} className={inputClass} />
          </div>
          <div>
            <p className={labelClass}>Display name</p>
            <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} className={inputClass} />
            <p className="text-[12px] text-[#7E7E7E] leading-4 mt-1.5 flex items-start gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#7E7E7E" className="mt-0.5 shrink-0">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4m0 4h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
              This will be how your name will be displayed in the account section and in reviews
            </p>
          </div>
          <div>
            <p className={labelClass}>Email address</p>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
          </div>
        </div>
      </div>

      {/* Password Change */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] font-semibold text-[#181818] leading-[26px]">Password Change</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className={labelClass}>
              Current password <span className="text-[#7E7E7E]">(leave blank to leave unchanged)</span>
            </p>
            <input
              type="password"
              placeholder="Current Password"
              value={currentPw}
              onChange={(e) => setCurrentPw(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <p className={labelClass}>
              New password <span className="text-[#7E7E7E]">(leave blank to leave unchanged)</span>
            </p>
            <input
              type="password"
              placeholder="New Password"
              value={newPw}
              onChange={(e) => setNewPw(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <p className={labelClass}>Confirm new password</p>
            <input
              type="password"
              placeholder="New Password"
              value={confirmPw}
              onChange={(e) => setConfirmPw(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="self-start h-11 px-6 bg-[#FF6701] hover:bg-[#E65D00] rounded-[8px] text-[14px] font-semibold text-white transition-colors"
      >
        Save Changes
      </button>
    </form>
  );
}
