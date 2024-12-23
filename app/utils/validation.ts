// utils/validation.ts

import * as Yup from 'yup';

export const leadValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, 'Phone number is not valid')
    .optional(),
});
