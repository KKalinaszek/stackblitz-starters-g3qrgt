import React, { useId } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PersonForm = () => {
  const ID = useId();
  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      city: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('wymagane pole'),
      age: Yup.number().required('wymagane pole'),
      city: Yup.string().required('wymagane pole'),
      email: Yup.string().email('niepoprawny e-mail').required('wymagane pole'),
    }),
    onSubmit: (values) => {
      JSON.stringify(values, null, 2);
      console.log(values.email);
    },
  });
  return (
    <div>
      <h2>Person Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Imie:</label>
        <input
          id="name"
          name="name"
          type="string"
          {...formik.getFieldProps('name')}
        />
        {formik.touched.city && formik.errors.city ? (
          <div>{formik.errors.city}</div>
        ) : null}

        <br />

        <label htmlFor="email">Wiek:</label>
        <input
          id="age"
          name="age"
          type="number"
          {...formik.getFieldProps('age')}
        />
        {formik.touched.age && formik.errors.age ? (
          <div>{formik.errors.age}</div>
        ) : null}

        <br />

        <label htmlFor="email">Miasto:</label>
        <input
          id="city"
          name="city"
          type="string"
          {...formik.getFieldProps('city')}
        />
        {formik.touched.city && formik.errors.city ? (
          <div>{formik.errors.city}</div>
        ) : null}

        <br />

        <label htmlFor="email">Adress e-mail:</label>
        <input
          id="email"
          name="email"
          type="email"
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <br />

        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
};

export default PersonForm;
