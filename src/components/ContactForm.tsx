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

export const ContactForm: React.FC = () => {
    const form = useForm<TContactFormValues>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            fullName: "",
            email: "",
            subject: "",
            comment: "",
        },
    });

    const onSubmit = async () => {
        try {
            toast.success(
                "Your message has been sent successfully. I’ll get back to you shortly.",
            );
        } catch (err) {
            console.error(err);
            toast.error(
                "Something went wrong. Please try sending the form again.",
            );
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
                        className="bg-primary px-8 py-5 text-[18px] leading-5 text-white rounded-2xl"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </FormProvider>
    );
};
