import style from "../styles/modules/appbar.module.css";
import { useAppSelector } from "../redux/hooks";
import { WALLET_TABS } from "../shared/constants";
import { BiExit } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function AppBar() {
  const currentTab = useAppSelector((state) => state.walletReducer.currentTab);
  const router = useRouter();

  return (
    <div className={style.layout}>
      <h1 className={style.tabname}>{WALLET_TABS[currentTab]}</h1>
      <BiExit
        size={40}
        className={`${style.exit} clickable`}
        onClick={() => router.push("/")}
      />
    </div>
  );
}
