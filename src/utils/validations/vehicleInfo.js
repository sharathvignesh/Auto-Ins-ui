import yup from 'yup';

let userInfoSchema = yup.object({
  vehicletype: yup.mixed().oneOf(['car', 'bike']),
  distanceEstimate: yup.number().required().positive().integer(),
  towingService: yup.boolean(),
  lawyerService: yup.boolean(),
});

module.exports = userInfoSchema;
