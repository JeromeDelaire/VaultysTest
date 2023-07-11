import { isEmailValid, isPhoneNumberValid } from "../shared/utils";
import style from "../styles/modules/login.module.css";
import EditText from "./edit-text";
import { useAppDispatch } from "../redux/hooks";
import { useRouter } from "next/navigation";
import { createWallet } from "../redux/features/walletSlice";

export default function Login() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <div className={style.layout}>
      <h1>Personnal data</h1>
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
      <button
        className={style.createWalletButton}
        onClick={async () => {
          await dispatch(createWallet());
          router.push("/wallet");
        }}
      >
        Save
      </button>
    </div>
  );
}
