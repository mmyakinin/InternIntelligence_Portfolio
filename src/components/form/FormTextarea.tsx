"use client";

import React from "react";

import { useFormContext } from "react-hook-form";
import { ClearButton } from "../ClearButton";
import { ErrorText } from "../ErrorText";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label?: string;
    required?: boolean;
    className?: string;
}

export const FormTextarea: React.FC<Props> = ({
    name,
    label,
    required,
    placeholder,
    className,
    ...props
}) => {
    const {
        register,
        formState: { errors },
        watch,
        setValue,
    } = useFormContext();

    const value = watch(name);
    const errorText = errors[name]?.message as string;

    const onClickClear = () => {
        setValue(name, "", { shouldValidate: true });
    };

    return (
        <div className="w-full">
            {label && (
                <p className="text-[18px] font-medium pb-3">
                    {label}{" "}
                    {required && <span className="text-red-500">*</span>}
                </p>
            )}
            <div className="relative">
                <textarea
                    placeholder={placeholder}
                    {...register(name)}
                    {...props}
                    className={`text-[18px] border-2 rounded-lg pl-[18px] pr-10 py-3 w-full focus-visible:border-primary focus-visible:ring-ring/50 transiton duration-200 ease-in-out ${className}`}
                />

                {value && (
                    <ClearButton
                        onClick={onClickClear}
                        className="top-3"
                    />
                )}
            </div>

            {errorText && <ErrorText text={errorText} className="pt-2" />}
        </div>
    );
};
