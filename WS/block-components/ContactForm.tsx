import { storyblokEditable } from "@storyblok/react";
import { FormikHelpers } from "formik";
import { Blok, SbContactForm } from "../types/Types";
import Form from "./Form";
import { send } from "emailjs-com";

type ContactFormProps = {
  blok: Blok<SbContactForm>;
};

type Values = { [index: string]: string };

export type ContactFormErrors = {
  from_name?: string;
  reply_to?: string;
  message?: string;
};

const validate = (values: Values) => {
  const errors: ContactFormErrors = {};

  if (!values.from_name) {
    errors.from_name = "Required";
  }

  if (!values.reply_to) {
    errors.reply_to = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.reply_to)
  ) {
    errors.reply_to = "Invalid email address";
  }

  if (!values.message) {
    errors.message = "Required";
  }

  return errors;
};

const ContactForm = ({ blok }: ContactFormProps) => {
  const initialValues = blok.form[0].fields.reduce<Values>(
    (values, nestedBlok) => ({ ...values, [nestedBlok.name]: "" }),
    {}
  );

  const onSubmit = async (
    values: Values,
    { resetForm, setStatus }: FormikHelpers<Values>
  ) => {
    try {
      setStatus({ status: "submitting" });
      await send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        { ...values },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
      );
      resetForm();
      setStatus({
        status: "submitted",
        message: "Thank you for your message!",
      });
    } catch (error) {
      setStatus({
        status: "error",
        message: "Somthing went wrong, please try again!",
      });
    }
  };

  return (
    <div
      className="flex min-h-[500px] flex-col justify-center"
      {...storyblokEditable(blok)}
    >
      <Form
        blok={blok.form[0]}
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      />
    </div>
  );
};

export default ContactForm;
