import {ResetPasswordTypes} from '../../types/ResetPasswordTypes.ts';

export const validations = {
  email: {
    required: {value: true, message: 'Email is required.'},
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: 'Invalid email format.',
    },
  },

  password: {
    required: {value: true, message: 'Password is required.'},
    pattern: {
      value: /^[A-Z][a-z][0-9!@#$%^&*)(_+=><.؟/|]{6}$/,
      message:
        'Password must be 8 characters: first uppercase, second lowercase, then 6 digits or symbols.',
    },
  },

  otp: {
    required: {
      value: true,
      message: 'Please enter the verification code.',
    },
    pattern: {
      value: /^\d{6}$/,
      message: 'The code must be exactly 6 digits.',
    },
  },

  fullName: {
    required: {value: true, message: 'Full name is required.'},
    minLength: {
      value: 3,
      message: 'Full name must be at least 3 characters long.',
    },
  },

  mobile: {
    required: {value: true, message: 'Mobile number is required.'},
    pattern: {
      value: /^(\+98|0)?9\d{9}$/,
      message: 'Invalid mobile number format.',
    },
  },
};

// این ورژن درست با استفاده از getValues('password')
export const confirmPasswordValidation = (
  getValues: (name: keyof ResetPasswordTypes) => string,
) => ({
  required: { value: true, message: 'Please confirm your password.' },
  validate: (value: string) =>
    value === getValues('newPassword') || 'Passwords do not match.',
});
