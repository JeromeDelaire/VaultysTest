import style from "../styles/modules/navbar.module.css";
import { AiOutlineAppstore, AiOutlineProfile } from "react-icons/ai";
import { BsWindow } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setCurrentTab } from "../redux/features/walletSlice";
import { WALLET_TABS } from "../shared/constants";

export default function NavBar() {
  const currentTab = useAppSelector((state) => state.walletReducer.currentTab);
  const dispatch = useAppDispatch();

  return (
    <div className={style.layout}>
      <div
        className={`${style.tab} clickable ${
          currentTab === 0 ? style.active : ""
        }`}
        onClick={() => dispatch(setCurrentTab(0))}
      >
        <AiOutlineAppstore className={style.tabicon} size={40} />
        <h1 className={style.tabname}>{WALLET_TABS[0]}</h1>
      </div>
      <div
        className={`${style.tab} clickable ${
          currentTab === 1 ? style.active : ""
        }`}
        onClick={() => dispatch(setCurrentTab(1))}
      >
        <BsWindow className={style.tabicon} size={40} />
        <h1 className={style.tabname}>{WALLET_TABS[1]}</h1>
      </div>
      <div
        className={`${style.tab} clickable ${
          currentTab === 2 ? style.active : ""
        }`}
        onClick={() => dispatch(setCurrentTab(2))}
      >
        <AiOutlineProfile className={style.tabicon} size={40} />
        <h1 className={style.tabname}>{WALLET_TABS[2]}</h1>
      </div>
      <div
        className={`${style.tab} clickable ${
          currentTab === 3 ? style.active : ""
        }`}
        onClick={() => dispatch(setCurrentTab(3))}
      >
        <LuSettings2 className={style.tabicon} size={40} />
        <h1 className={style.tabname}>{WALLET_TABS[3]}</h1>
      </div>
    </div>
  );
}
