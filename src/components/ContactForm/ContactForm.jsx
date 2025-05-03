import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      }),
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label>
          Name
          <br />
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="p" />
        </label>
        <label>
          Number
          <br />
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="p" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
