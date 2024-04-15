// import * as Yup from 'yup';

// // Regular expression for email validation
// const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// // Define Yup schema for validation
// const individualSchema = Yup.object().shape({
//   email: Yup.string()
//     .trim()
//     .required('Please enter your Email')
//     .email('Please enter a valid Email')
//     .matches(emailRegex, 'Please enter a valid Email'),
//   password: Yup.string().required('Password is required'),
// });

// // Define initial values for the form
// interface FormValues {
//   email: string;
//   password: string;
// }

// const initialValues: FormValues = {
//   email: '',
//   password: '',
// };

// export { individualSchema, initialValues };
