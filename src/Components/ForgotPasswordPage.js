// src/pages/ForgotPasswordPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ForgotPasswordPage.css';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const ForgotPasswordPage = () => (
  <div className="forgot-password-container">
    <h1>Forgot Password</h1>
    <Formik
      initialValues={{ email: '' }}
      validationSchema={ForgotPasswordSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="forgot-password-form">
          <div>
            <label>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
    <div className="forgot-password-links">
      <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
    </div>
  </div>
);

export default ForgotPasswordPage;
