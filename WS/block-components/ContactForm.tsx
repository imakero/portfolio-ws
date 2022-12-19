import { storyblokEditable } from "@storyblok/react";
import { FormikHelpers } from "formik";
import { Blok, SbContactForm } from "../types/Types";
import Form from "./Form";
import { send } from "emailjs-com";

type ContactFormProps = {
  blok: Blok<SbContactForm>;
};

const ContactForm = ({ blok }: ContactFormProps) => {
  const initialValues = blok.form[0].fields.reduce<{ [index: string]: string }>(
    (values, nestedBlok) => ({ ...values, [nestedBlok.name]: "" }),
    {}
  );

  const onSubmit = async (
    values: { [index: string]: string },
    { resetForm, setStatus }: FormikHelpers<{ [index: string]: string }>
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
    <div {...storyblokEditable(blok)}>
      <Form
        blok={blok.form[0]}
        initialValues={initialValues}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default ContactForm;
