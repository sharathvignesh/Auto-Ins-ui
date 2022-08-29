import yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

let userInfoSchema = yup.object({
  name: yup.string().required(),
  dob: yup.date().required(),
  address: yup.string().required(),
  phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  liscenceNumber: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(12, 'Liscence number must be 12 digits')
    .max(12, 'Liscence number must be 12 digits'),
  type: yup.mixed().oneOf(['car', 'bike']),
  liscenceType: yup.mixed().oneOf(['green', 'blue', 'gold']),
  age: yup.number().required().positive().integer(),
  estimateDistance: yup.number().required().positive().integer(),
  towingService: yup.boolean().required(),
  lawyerService: yup.boolean().required(),
});

module.exports = userInfoSchema;
