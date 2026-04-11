"use client";

import { useState } from "react";

const inputClass =
  "w-full h-[48px] bg-white border border-[#E7E7E7] rounded-[8px] px-4 text-[14px] text-[#181818] placeholder:text-[#8A8A8A] outline-none focus:border-[#181818] transition-colors";
const labelClass = "text-[14px] text-[#181818] leading-5 mb-1.5";

export default function AddressPage() {
  const [firstName, setFirstName] = useState("Rustam");
  const [lastName, setLastName] = useState("Musaev");
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [stateCity, setStateCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("mus1993rus@gmail.com");

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-5"
    >
      <h2 className="text-[18px] font-semibold text-[#181818] leading-[26px]">Billing address</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className={labelClass}>First name</p>
          <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className={inputClass} />
        </div>
        <div>
          <p className={labelClass}>Last name</p>
          <input value={lastName} onChange={(e) => setLastName(e.target.value)} className={inputClass} />
        </div>

        <div>
          <p className={labelClass}>Country / Region</p>
          <div className="relative">
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className={`${inputClass} appearance-none cursor-pointer pr-10 ${country ? "text-[#181818]" : "text-[#8A8A8A]"}`}
            >
              <option value="" disabled>Select a country / region...</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="USA">USA</option>
              <option value="UK">United Kingdom</option>
            </select>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <path d="M6 9l6 6 6-6" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div>
          <p className={labelClass}>Street address</p>
          <input
            placeholder="House number and street name"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <p className={labelClass}>Postcode/ZIP</p>
          <input
            placeholder="Write your Postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <p className={labelClass}>Town / City</p>
          <input
            placeholder="Write your Town / City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <p className={labelClass}>State / City</p>
          <div className="relative">
            <select
              value={stateCity}
              onChange={(e) => setStateCity(e.target.value)}
              className={`${inputClass} appearance-none cursor-pointer pr-10 ${stateCity ? "text-[#181818]" : "text-[#8A8A8A]"}`}
            >
              <option value="" disabled>Select a state / City...</option>
              <option value="N/A">N/A</option>
            </select>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <path d="M6 9l6 6 6-6" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div>
          <p className={labelClass}>Phone number</p>
          <div className="flex items-center w-full h-[48px] bg-white border border-[#E7E7E7] rounded-[8px] pl-4 pr-2 gap-3">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="text-[16px]">🇺🇸</span>
              <span className="text-[14px] text-[#181818]">(+1)</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <input
              placeholder="(555) 123-4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 min-w-0 text-[14px] text-[#181818] placeholder:text-[#8A8A8A] outline-none bg-transparent"
            />
          </div>
        </div>

        <div className="col-span-2 max-w-[50%]">
          <p className={labelClass}>Email address</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <button
        type="submit"
        className="self-start mt-2 h-11 px-6 bg-[#FF6701] hover:bg-[#E65D00] rounded-[8px] text-[14px] font-semibold text-white transition-colors"
      >
        Save Changes
      </button>
    </form>
  );
}
