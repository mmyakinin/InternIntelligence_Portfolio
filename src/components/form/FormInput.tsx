"use client";

import React from "react";

import { useFormContext } from "react-hook-form";
import { ClearButton } from "../ClearButton";
import { ErrorText } from "../ErrorText";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    required?: boolean;
    readOnly?: boolean;
}

export const FormInput: React.FC<Props> = ({
    name,
    label,
    required,
    readOnly,
    placeholder,
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
                <input
                    placeholder={placeholder}
                    readOnly={readOnly}
                    {...register(name)}
                    {...props}
                    className="text-[18px] border-2 rounded-lg pl-[18px] pr-10 py-3 w-full focus-visible:border-primary focus-visible:ring-ring/50 transiton duration-200 ease-in-out"
                />

                {value && !readOnly && (
                    <ClearButton
                        onClick={onClickClear}
                        className="-translate-y-1/2"
                    />
                )}
            </div>

            {errorText && <ErrorText text={errorText} className="pt-2" />}
        </div>
    );
};
