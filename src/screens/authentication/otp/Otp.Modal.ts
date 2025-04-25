import {Dispatch, SetStateAction} from 'react';

export interface OtpModal {
  handleNavigationBack:()=>void;
  seconds:number
  minutes:number,
  setSeconds:Dispatch<SetStateAction<number>>;
  setMinutes:Dispatch<SetStateAction<number>>;
}
