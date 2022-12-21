import { Blok, SbFormInput } from "../types/Types";
import { Field } from "formik";

type FormInputProps = {
  blok: Blok<SbFormInput>;
  error: string;
  touched: boolean;
};

const FormInput = ({ blok, error, touched }: FormInputProps) => {
  const { type, name, label, placeholder } = blok;
  const asType = type === "textarea" ? "textarea" : "input";

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-2 font-bold">
        {label}
      </label>
      <Field
        type={type}
        name={name}
        id={name}
        as={asType}
        className={`rounded-md bg-secondary px-4 py-2 text-primary placeholder:text-primary-light focus:border-2 focus:border-primary-light focus:outline-none ${
          asType === "textarea" ? "w-full resize-none" : ""
        }`}
        rows={asType === "textarea" ? "5" : undefined}
        cols={asType === "textarea" ? "5" : undefined}
        placeholder={placeholder}
      ></Field>
      {error && touched && (
        <div className="mt-2 text-sm text-red-600">{error}</div>
      )}
    </div>
  );
};

export default FormInput;
