"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center rounded-xl2 border border-canvas-line bg-canvas-tint p-12 text-center"
      >
        <CheckCircle2 className="text-execute-600" size={40} aria-hidden="true" />
        <h2 className="mt-4 text-xl">
          Thank you for contacting SMARTED SYSTEMS.
        </h2>
        <p className="mt-2 text-ink-500">
          Our team will contact you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <Field
        label="Name"
        error={errors.name?.message}
        inputProps={{ ...register("name"), autoComplete: "name" }}
      />
      <Field
        label="Company"
        error={errors.company?.message}
        inputProps={{ ...register("company"), autoComplete: "organization" }}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Email"
          error={errors.email?.message}
          inputProps={{
            ...register("email"),
            type: "email",
            autoComplete: "email",
          }}
        />
        <Field
          label="Phone"
          error={errors.phone?.message}
          inputProps={{ ...register("phone"), type: "tel", autoComplete: "tel" }}
        />
      </div>
      <div>
        <label
          htmlFor="requirements"
          className="mb-1.5 block text-sm font-medium text-ink-700"
        >
          Project requirements
        </label>
        <textarea
          id="requirements"
          rows={5}
          {...register("requirements")}
          aria-invalid={Boolean(errors.requirements)}
          aria-describedby={
            errors.requirements ? "requirements-error" : undefined
          }
          className="w-full rounded-xl2 border border-canvas-line bg-white px-4 py-3 text-sm text-ink-900 shadow-soft transition-colors focus:border-execute-500"
        />
        {errors.requirements && (
          <p id="requirements-error" className="mt-1.5 text-sm text-red-600">
            {errors.requirements.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm text-red-600"
          >
            Something went wrong sending your message. Please try again, or
            email us directly.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}

interface FieldProps {
  label: string;
  error?: string;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
}

function Field({ label, error, inputProps }: FieldProps) {
  const id = inputProps.name;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink-700">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full rounded-xl2 border border-canvas-line bg-white px-4 py-3 text-sm text-ink-900 shadow-soft transition-colors focus:border-execute-500"
        {...inputProps}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
