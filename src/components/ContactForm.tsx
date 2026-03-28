import React from "react";

import { FormProvider, useForm } from "react-hook-form";
import {
    ContactFormSchema,
    type TContactFormValues,
} from "../constants/contact-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormInput } from "./form/FormInput";
import { FormTextarea } from "./form/FormTextarea";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";

export const ContactForm: React.FC = () => {
    const [isSubmiting, setIsSubmiting] = React.useState<boolean>(false);

    const form = useForm<TContactFormValues>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            fullName: "",
            email: "",
            subject: "",
            comment: "",
        },
    });

    const onSubmit = async (values: TContactFormValues) => {
        try {
            setIsSubmiting(true);
            const formData = new FormData();

            formData.append(
                "access_key",
                "fc7393ea-08df-402f-8db9-9a68048b4c2f",
            );
            formData.append("name", values.fullName);
            formData.append("email", values.email);
            formData.append("subject", values.subject);
            formData.append("message", values.comment);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                toast.success(
                    "Your message has been sent. I’ll get back to you soon.",
                );
                form.reset();
            } else {
                toast.error("Failed to send your message. Please try again.");
            }
        } catch (err) {
            setIsSubmiting(false);
            console.error(err);
            toast.error(
                "Something went wrong. Please try sending the form again.",
            );
        } finally {
            setIsSubmiting(false);
        }
    };

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-8">
                    <FormInput required name={"fullName"} label="Full Name" />
                    <FormInput required name={"email"} label="E-Mail" />
                    <FormInput required name={"subject"} label="Subject" />
                    <FormTextarea
                        required
                        name={"comment"}
                        label="Comment"
                        className="h-[120px]"
                    />
                    <button
                        type="submit"
                        className={`flex justify-center items-center bg-primary px-8 py-4 text-[18px] text-white rounded-2xl ${isSubmiting && "opacity-50 pointer-events-none"}`}
                    >
                        {isSubmiting ? (
                            <Loader className="animate-spin" size={32} />
                        ) : (
                            "Submit"
                        )}
                    </button>
                </div>
            </form>
        </FormProvider>
    );
};
