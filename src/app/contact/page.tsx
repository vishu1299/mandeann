"use client";

import { useForm, type FieldErrors } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ContactFormValues = {
  name: string;
  email: string;
  address: string;
  phone: string;
  message: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setFocus,
  } = useForm<ContactFormValues>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
      message: "",
    },
  });

  const brand = "#5e3b91";

  const onSubmit = async (values: ContactFormValues) => {
    try {
      // Simulate client-only submission
      await new Promise((res) => setTimeout(res, 700));
      const displayName = values.name?.trim() ? values.name.trim() : "there";
      toast.success(
        `Thanks, ${displayName}! Your message has been sent successfully.`
      );
      reset();
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Unable to send your message.";
      toast.error(message);
    }
  };

  const onInvalid = (errors: FieldErrors<ContactFormValues>) => {
    const firstErrorField = Object.keys(errors)[0] as
      | keyof ContactFormValues
      | undefined;
    if (firstErrorField) {
      setFocus(firstErrorField);
    }
    toast.error("Please fix the highlighted fields.");
  };

  return (
    <main className="w-full bg-gray-50">
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-16">
        <h1
          className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: brand }}
        >
          Contact Us
        </h1>

        <div className="mt-8 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100 sm:p-6 md:p-8">
          <div className="mb-4">
            <div className="flex items-end gap-3">
              <h2 className="text-2xl font-semibold text-gray-900">
                Leave a Message
              </h2>
            </div>
            <p className="mt-4 text-gray-500">
              If you have any questions please send us a message using the
              adjacent form and we will get back to you as soon as possible
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit, onInvalid)}
            noValidate
            className="mt-6 space-y-4"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Name"
                  aria-invalid={!!errors.name || undefined}
                  className={cn(
                    "h-11 rounded-full border-blue-300 bg-white text-gray-900 placeholder:text-gray-400",
                    "focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-[#5e3b91]"
                  )}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  aria-invalid={!!errors.email || undefined}
                  className={cn(
                    "h-11 rounded-full border-blue-300 bg-white text-gray-900 placeholder:text-gray-400",
                    "focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-[#5e3b91]"
                  )}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="address" className="sr-only">
                  Address
                </label>
                <Input
                  id="address"
                  placeholder="Address"
                  aria-invalid={!!errors.address || undefined}
                  className={cn(
                    "h-11 rounded-full border-blue-300 bg-white text-gray-900 placeholder:text-gray-400",
                    "focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-[#5e3b91]"
                  )}
                  {...register("address", { required: "Address is required" })}
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.address.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  placeholder="Phone Number"
                  aria-invalid={!!errors.phone || undefined}
                  className={cn(
                    "h-11 rounded-full border-blue-300 bg-white text-gray-900 placeholder:text-gray-400",
                    "focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-[#5e3b91]"
                  )}
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[+()0-9.\-\s]{7,}$/,
                      message: "Please enter a valid phone number",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Message"
                aria-invalid={!!errors.message || undefined}
                className={cn(
                  "min-h-[120px] rounded-2xl border-blue-300 bg-white text-gray-900 placeholder:text-gray-400",
                  "focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-[#5e3b91]"
                )}
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message should be at least 10 characters",
                  },
                })}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-11 rounded-full px-6 text-white shadow-sm bg-[#0088FF] hover:bg-[#0088FF] disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-10">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="relative aspect-[16/9] w-full md:aspect-[16/7]">
              <iframe
                title="Johns Hopkins University Map"
                src="https://www.google.com/maps?q=Johns%20Hopkins%20University%2C%20Baltimore&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ filter: "grayscale(100%)" }}
              />
            </div>
          </div>
        </div>
      </section>

      <ToastContainer
        position="top-right"
        newestOnTop
        pauseOnFocusLoss
        pauseOnHover
        closeOnClick
        autoClose={4000}
        toastStyle={{
          borderRadius: 12,
        }}
        // You can further customize with className or theme
        theme="light"
      />
    </main>
  );
}
