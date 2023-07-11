import style from "../styles/modules/appbar.module.css";
import { useAppSelector } from "../redux/hooks";
import { WALLET_TABS } from "../shared/constants";

export default function AppBar() {
  const currentTab = useAppSelector((state) => state.walletReducer.currentTab);
  return (
    <div className={style.layout}>
      <h1 className={style.tabname}>{WALLET_TABS[currentTab]}</h1>
    </div>
  );
}
