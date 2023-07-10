"use client";

import {} from "../redux/features/accountSlice";
import style from "../styles/modules/login.module.css";
import EditText from "./edit-text";

export default function Login() {
  const isEmailValid = (value) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(value);
  };

  const isPhoneNumberValid = (value) => {
    const phoneRegex =
      /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
    return phoneRegex.test(value);
  };

  return (
    <div className={style.layout}>
      <h1>Personnal data</h1>
      <div className={style.horizontal}>
        <EditText
          label="First name"
          validate={(value) => value.length > 3}
          invalideMsg="Invalid"
        />
        <EditText
          label="Last name"
          validate={(value) => value.length > 3}
          invalideMsg="Invalid"
        />
      </div>
      <EditText
        label="Email"
        inputType="email"
        validate={isEmailValid}
        invalideMsg="Invalid Email"
      />
      <EditText
        label="Phone number"
        validate={isPhoneNumberValid}
        inputType="tel"
        invalideMsg="Invalid phone number"
      />
      <button>Save</button>
    </div>
  );
}
