import { useState } from "react";
import "./ProjectForm.css";

export default function ProjectForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-page form-success">
        <div className="success-icon">✓</div>
        <h1>We got it!</h1>
        <p className="form-sub">
          Thanks for reaching out. We'll get back to you within 24 hours.
        </p>
        <button
          className="form-btn-back"
          onClick={() => setSubmitted(false)}
        >
          ← Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="form-page">

      <p className="form-eyebrow">New Project</p>
      <h1 className="form-heading">
        Tell us about <br />
        <em>your project.</em>
      </h1>
      <p className="form-sub">
        Fill out the form and we'll get back to you within 24 hours.
        First conversation is always free.
      </p>

      <form onSubmit={handleSubmit}>

        {/* Row 1 — Name & Email */}
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="name">Full Name *</label>
            <input
              id="name"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email Address *</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Row 2 — Phone & Company */}
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              placeholder="+91 6969696969"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="company">Company / Brand Name</label>
            <input
              id="company"
              name="company"
              placeholder="Your Company"
              value={form.company}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Row 3 — Project Type & Budget */}
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="projectType">Service Needed</label>
            <select
              id="projectType"
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
            >
              <option value="" disabled hidden>Select a service</option>
              <option value="Website Design">Website Design</option>
              <option value="Logo Design">Logo Design</option>
              <option value="Brand Identity">Brand Identity</option>
              <option value="Promo Video">Promo Video</option>
              <option value="Banner Design">Banner Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="budget">Budget Range</label>
            <select
              id="budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
            >
              <option value="" disabled hidden>Select your budget</option>
              <option value="Under ₹5,000">Under ₹5,000</option>
              <option value="₹5,000 – ₹15,000">₹5,000 – ₹15,000</option>
              <option value="₹15,000 – ₹30,000">₹15,000 – ₹30,000</option>
              <option value="₹30,000+">₹30,000+</option>
            </select>
          </div>
        </div>

        {/* Project Details */}
        <div className="form-field">
          <label htmlFor="details">Project Details</label>
          <textarea
            id="details"
            name="details"
            placeholder="Tell us about your project — what you need, your timeline, any references you like..."
            rows="6"
            value={form.details}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit Inquiry →</button>

      </form>
    </div>
  );
}