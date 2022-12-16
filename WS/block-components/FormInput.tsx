import { Blok, SbFormInput } from "../types/Types";
import { Field } from "formik";

type FormInputProps = {
  blok: Blok<SbFormInput>;
};

const FormInput = ({ blok }: FormInputProps) => {
  const { type, name, label, placeholder } = blok;
  const asType = type === "textarea" ? "textarea" : "input";

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="font-bold mb-2">
        {label}
      </label>
      <Field
        type={type}
        name={name}
        id={name}
        as={asType}
        className={`rounded-md px-4 py-2 bg-secondary text-primary focus:outline-none focus:border-2 focus:border-primary-light placeholder:text-primary-light ${
          asType === "textarea" ? "resize-none w-full" : ""
        }`}
        rows={asType === "textarea" ? "5" : undefined}
        cols={asType === "textarea" ? "5" : undefined}
        placeholder={placeholder}
      ></Field>
    </div>
  );
};

export default FormInput;
