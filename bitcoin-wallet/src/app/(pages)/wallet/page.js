"use client";

import AppBar from "@/app/components/appbar";
import NavBar from "../../components/navbar";
import { useAppSelector } from "@/app/redux/hooks";
import AppItem from "@/app/components/app-item";
import { AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoSnapchat } from "react-icons/bi";

export default function Wallet() {
  const currentTab = useAppSelector((state) => state.walletReducer.currentTab);

  function TabContent() {
    switch (currentTab) {
      case 0:
        return <div className="tab-content">Home not implemented</div>;

      case 1:
        return (
          <div className="tab-content">
            <div className="normal-list">
              <AppItem
                icon={<AiFillFacebook size={30} />}
                name="Facebook"
                favorite={true}
              />
              <AppItem
                icon={<AiFillTwitterCircle size={30} />}
                name="Twitter"
                favorite={true}
              />
              <AppItem
                icon={<BiLogoSnapchat size={30} />}
                name="Snapchat"
                favorite={false}
              />
            </div>
          </div>
        );

      case 2:
        return <div className="tab-content">Qr Code</div>;

      case 3:
        return <div className="tab-content">Settings not implemented</div>;
    }
  }

  return (
    <main>
      <AppBar />
      <TabContent />
      <NavBar />
    </main>
  );
}
