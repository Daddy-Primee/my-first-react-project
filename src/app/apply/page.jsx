"use client";

import React, { useState } from "react";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
    coverLetter: "",
    jobTitle: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
  
  };

  return (
    <div className="max-w-2xl mx-auto p-8 mt-10 bg-white shadow-md rounded-lg">
    
      <h1 className="text-3xl font-bold mb-6 text-center">Job Application</h1>

     
      <form action='https://formsubmit.co/festusemmanuel737@gmail.com'
      method="POST"
       className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />
        <input
         type="text"
         name="jobTitle"
         placeholder="Job Position" 
         value={formData.jobTitle}
         onChange={handleChange}
          className="w-full border p-3 rounded"
          required/>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />
        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />
        <textarea
          name="coverLetter"
          placeholder="Cover Letter"
          value={formData.coverLetter}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          rows="5"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-[#D55053]  text-white py-3 rounded hover:bg-[#f1c095] transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
