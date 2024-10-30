export const validateName = {
  required: "Name is required",
  minLength: {
    value: 5,
    message: "Name must be longer than 5 characters",
  },
  maxLength: {
    value: 50,
    message: "Name must be shorter than 50 characters",
  },
};

export const validateSurname = {
  required: "Surmame is required",
  minLength: {
    value: 5,
    message: "Surmame must be longer than 5 characters",
  },
  maxLength: {
    value: 50,
    message: "Surmame must be shorter than 50 characters",
  },
};

export const validateEmail = {
  required: "Email is required",
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Please enter a valid email",
  },
};

export const validatePassword = {
  required: "Password is required",
  minLength: {
    value: 8,
    message: "Password must be longer than 7 characters",
  },
  maxLength: {
    value: 50,
    message: "Password must be shorter than 50 characters",
  },
};
