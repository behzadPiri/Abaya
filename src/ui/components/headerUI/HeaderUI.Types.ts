export interface HeaderUIProps {
  title?: string;
  shadow?: boolean;
  onPressBack?: () => void;
  onPressFav?: () => void;
  onPressCart?: () => void;
  disableIconBack?: boolean;
  disableIcon_Cart_Fav?: boolean;
}
