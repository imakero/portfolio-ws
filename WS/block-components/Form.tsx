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
};

const Form = ({ blok, initialValues, onSubmit }: FormProps) => {
  return (
    <div className="p-4 w-80" {...storyblokEditable(blok)}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ status }) => {
          return status?.status === "submitted" ? (
            <div>{status.message}</div>
          ) : (
            <div className="space-y-6">
              <FormikForm>
                <div className="flex flex-col space-y-6 mb-6">
                  {blok.fields.map((nestedBlok) => (
                    <StoryblokComponent
                      blok={nestedBlok}
                      key={nestedBlok._uid}
                    />
                  ))}
                </div>
                <div className="text-red-600 mb-6">{status?.message}</div>
                <button
                  type="submit"
                  className="bg-primary font-bold text-white rounded-full px-4 py-2 hover:scale-[102%] focus:outline-none focus:border-2 focus:border-primary-light"
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
