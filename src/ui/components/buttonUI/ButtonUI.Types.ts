export interface ButtonUIProps {
  title: string;
  loading?: boolean;
  outlineButton?: boolean;
  onPressButton?: () => void;
  disabled?: boolean;
}
