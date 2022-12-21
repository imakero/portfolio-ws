import { Blok, SbForm } from "../types/Types";
import { Formik, Form as FormikForm, FormikHelpers } from "formik";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

type FormProps = {
  blok: Blok<SbForm>;
  initialValues: { [index: string]: string };
  onSubmit: (
    values: { [index: string]: string },
    formikHelpers: FormikHelpers<{ [index: string]: string }>
  ) => void | Promise<any>;
  validate: (values: { [index: string]: string }) => {
    [index: string]: string;
  };
};

const Form = ({ blok, initialValues, onSubmit, validate }: FormProps) => {
  return (
    <div className="w-80 p-4" {...storyblokEditable(blok)}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        {({ status, errors, touched }) => {
          return status?.status === "submitted" ? (
            <div>{status.message}</div>
          ) : (
            <div className="space-y-6">
              <FormikForm>
                <div className="mb-6 flex flex-col space-y-6">
                  {blok.fields.map((nestedBlok) => (
                    <StoryblokComponent
                      blok={nestedBlok}
                      key={nestedBlok._uid}
                      error={errors[nestedBlok.name]}
                      touched={touched[nestedBlok.name]}
                    />
                  ))}
                </div>
                <div className="mb-6 text-red-600">{status?.message}</div>
                <button
                  type="submit"
                  className="rounded-full bg-primary px-4 py-2 font-bold text-white hover:scale-[102%] focus:border-2 focus:border-primary-light focus:outline-none"
                  disabled={status?.status === "submitting"}
                >
                  {status?.status === "submitting"
                    ? "sending..."
                    : blok.submit_text}
                </button>
              </FormikForm>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default Form;
