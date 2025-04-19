import {Toast} from 'toastify-react-native';

interface IToastProps {
  typeToast: 'success' | 'info' | 'error' | 'warn';
  message: string;
}

export const showToast = ({typeToast, message}: IToastProps) => {
  Toast.show({
    type: typeToast,
    text1: message,
    theme: 'light',
    visibilityTime: 3000,
    textColor:"black",
    topOffset:0.2,

  });
};
