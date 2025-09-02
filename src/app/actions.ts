"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

export type FormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const data = Object.fromEntries(formData.entries());
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      success: false,
      message: "Please correct the errors below.",
      errors: fieldErrors,
    };
  }

  // Here you would normally send an email
  // For this example, we'll just log it and return success
  console.log("New contact form submission:", parsed.data);
  // Example: await sendEmail(parsed.data);

  return {
    success: true,
    message: "Thank you for your message! We will get back to you soon.",
  };
}
