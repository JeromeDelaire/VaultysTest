import style from "../styles/modules/app-item.module.css";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

export default function AppItem({ icon, name, favorite }) {
  let favIcon = favorite ? (
    <AiTwotoneStar size={25} className={`${style.favicon} ${style.checked}`} />
  ) : (
    <AiOutlineStar size={25} className={style.favicon} />
  );

  return (
    <div className={style.layout}>
      <div className={style.appicon}>{icon}</div>
      <h1 className={style.appname}>{name}</h1>
      {favIcon}
    </div>
  );
}
