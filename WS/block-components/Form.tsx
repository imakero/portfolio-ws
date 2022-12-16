import { Blok, SbForm } from "../types/Types";
import { Formik, Form as FormikForm } from "formik";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

type FormProps = {
  blok: Blok<SbForm>;
};

const Form = ({ blok }: FormProps) => {
  const initialValues = blok.fields.reduce(
    (values, nestedBlok) => ({ ...values, [nestedBlok.name]: "" }),
    {}
  );

  return (
    <div className="p-4 w-80" {...storyblokEditable(blok)}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        <div className="space-y-6">
          <FormikForm>
            <div className="flex flex-col space-y-6 mb-6">
              {blok.fields.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </div>
            <button
              type="submit"
              className="bg-primary font-bold text-white rounded-full px-4 py-2 hover:scale-[102%] focus:outline-none focus:border-2 focus:border-primary-light"
            >
              {blok.submit_text}
            </button>
          </FormikForm>
        </div>
      </Formik>
    </div>
  );
};

export default Form;
