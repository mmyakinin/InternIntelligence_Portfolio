import { z } from "zod";

export const ContactFormSchema = z.object({
    fullName: z.string().min(4, {
        message: "The full name must contain at least 2 characters",
    }),
    email: z.string().email({
        message: "Enter correct email",
    }),
    subject: z
        .string()
        .min(8, { message: "This field is required. At least 8 characters" }),
    comment: z.string().min(30, {
        message: "This field is required. At least 30 characters",
    }),
});

export type TContactFormValues = z.infer<typeof ContactFormSchema>;
