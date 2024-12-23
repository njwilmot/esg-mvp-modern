// components/LeadForm.tsx

'use client';

import React from 'react';
import { useFormik } from 'formik';
import { leadValidationSchema } from '../utils/validation';
import api from '../utils/api';

const LeadForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    validationSchema: leadValidationSchema,
    onSubmit: async (values, { resetForm, setSubmitting, setErrors }) => {
      try {
        await api.post('/leads', values);
        resetForm();
        // Optionally, trigger a refresh or display a success message
      } catch (error: any) {
        if (error.response && error.response.data.errors) {
          setErrors({ email: 'Email already exists' });
        } else {
          console.error('Error submitting form:', error);
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Lead</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          className="w-full mt-1 p-2 border rounded"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-red-500 text-sm">{formik.errors.name}</div>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          className="w-full mt-1 p-2 border rounded"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone</label>
        <input
          type="text"
          name="phone"
          className="w-full mt-1 p-2 border rounded"
          onChange={formik.handleChange}
          value={formik.values.phone}
          onBlur={formik.handleBlur}
        />
        {formik.touched.phone && formik.errors.phone && (
          <div className="text-red-500 text-sm">{formik.errors.phone}</div>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? 'Submitting...' : 'Add Lead'}
      </button>
    </form>
  );
};

export default LeadForm;
