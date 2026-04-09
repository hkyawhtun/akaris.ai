import { useState, useEffect, useRef } from "react";

const COURSES = [
  "AI Starter for Everyone",
  "AI Business Growth Accelerator",
  "AI Automation Mastery",
  "Vibe Coding for Modern Software Developer",
  "Become an AI Engineer",
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
  enquiryType?: string;
}

type Status = "idle" | "sending" | "success" | "error";

export default function EnrollModal({
  isOpen,
  onClose,
  defaultCourse = "",
  enquiryType = "",
}: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: defaultCourse,
    type: enquiryType,
  });
  const [status, setStatus] = useState<Status>("idle");
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setForm((f) => ({ ...f, course: defaultCourse, type: enquiryType }));
      setStatus("idle");
      setTimeout(() => firstInputRef.current?.focus(), 50);
    }
  }, [isOpen, defaultCourse, enquiryType]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const flowType =
      form.type == "Course Enrollment"
        ? "Course Enrollment"
        : form.type == "consultation"
          ? "consultation"
          : "Webinar Registration";

    const formData = new URLSearchParams();
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("course", form.course || "Not specified");
    formData.append("type", flowType);
    formData.append("subject", `${flowType} - ${form.course || "General"}`);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyed4xBrctNd-L2S9-dubFo06NMUj6OK5NmRk1GeprrySxJKnHGXYYkMiRGnbkEmGCQ/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        },
      );

      const resultText = await response.text();

      let result;
      try {
        result = JSON.parse(resultText);
      } catch {
        result = { status: "error" };
      }

      if (result.status === "success") {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", course: "", type: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
    }
  };

  const isLoading = status === "sending";

  const getModalTitle = () => {
    switch (form.type) {
      case "Course Enrollment":
        return "Enroll Now";
      case "consultation":
        return "Book for Consultation";
      case "webinar":
        return "Register Now for Webinar";
      default:
        return "Enroll Now";
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enroll-title"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-navy-900 border border-navy-800 rounded-2xl w-full max-w-md shadow-2xl">
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-navy-800">
          <div>
            <h2 id="enroll-title" className="text-white font-bold text-xl">
              {getModalTitle()}
            </h2>
            <p className="text-slate-400 text-sm mt-0.5">
              We'll be in touch with next steps.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-navy-800"
            aria-label="Close"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="px-6 py-6">
          {status === "success" ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-gold-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                Enquiry Sent!
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Thanks, <span className="text-white">{form.name}</span>. We've
                received your enquiry and will reach out to{" "}
                <span className="text-white">{form.email}</span> shortly.
              </p>
              <button
                onClick={onClose}
                className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-sm px-8 py-2.5 rounded-full transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-slate-300 text-sm font-medium"
                >
                  Full Name <span className="text-gold-400">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="bg-navy-950 border border-navy-700 focus:border-gold-500/60 text-white placeholder-slate-600 rounded-lg px-4 py-2.5 text-sm outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-slate-300 text-sm font-medium"
                >
                  Email Address <span className="text-gold-400">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="bg-navy-950 border border-navy-700 focus:border-gold-500/60 text-white placeholder-slate-600 rounded-lg px-4 py-2.5 text-sm outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="phone"
                  className="text-slate-300 text-sm font-medium"
                >
                  Phone Number <span className="text-gold-400">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+61 4XX XXX XXX"
                  className="bg-navy-950 border border-navy-700 focus:border-gold-500/60 text-white placeholder-slate-600 rounded-lg px-4 py-2.5 text-sm outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="course"
                  className="text-slate-300 text-sm font-medium"
                >
                  Interested Course
                </label>
                <select
                  id="course"
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  className="bg-navy-950 border border-navy-700 focus:border-gold-500/60 text-white rounded-lg px-4 py-2.5 text-sm outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="text-slate-500">
                    Select a course (optional)
                  </option>
                  {COURSES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2.5">
                  Something went wrong. Please try again or email us directly at{" "}
                  <a href="mailto:hkyawhtun.ai@gmail.com" className="underline">
                    hkyawhtun.ai@gmail.com
                  </a>
                </p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="mt-2 bg-gold-500 hover:bg-gold-400 disabled:opacity-60 disabled:cursor-not-allowed text-navy-950 font-bold text-sm px-8 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-gold-500/25"
              >
                {isLoading ? "Sending..." : "Submit Enquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
