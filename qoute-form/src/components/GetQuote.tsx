import React, { useState } from "react";

interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
}

interface GetQuoteProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetQuote: React.FC<GetQuoteProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote Request Submitted:", formData);

    alert("Your quote request has been submitted!");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex flex-col bg-orange-600 z-50">
      {/* Top bar with back button */}
      <div className="p-4">
        <button
          onClick={onClose}
          className="text-black font-bold text-lg"
        >
          back
        </button>
      </div>

      {/* Centered Form */}
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-orange-500 border border-black rounded-xl p-10 w-full max-w-lg">
          <h2 className="text-center text-black font-serif text-lg mb-6">
            Request a Quote
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm text-black mb-1">FULL NAME</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full names"
                className="w-full border border-black rounded-md px-3 py-2 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-black mb-1">EMAIL</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full border border-black rounded-md px-3 py-2 outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-black mb-1">PHONE NUMBER</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+254 700 000 000"
                className="w-full border border-black rounded-md px-3 py-2 outline-none"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm text-black mb-1">COMPANY NAME</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="Enter companies name"
                className="w-full border border-black rounded-md px-3 py-2 outline-none"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm text-black mb-1">SELECT SERVICE</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full border border-black rounded-md px-3 py-2 outline-none"
              >
                <option value="">SELECT SERVICE</option>
                <option value="ICT Services">ICT Services</option>
                <option value="Project Management">Project Management</option>
                <option value="Building Services">Building Services</option>
              </select>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-white border border-black px-6 py-2 rounded-md font-medium hover:bg-gray-100"
              >
                Submit request
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Black Bar */}
      <div className="h-12 bg-black w-full"></div>
    </div>
  );
};

export default GetQuote;
