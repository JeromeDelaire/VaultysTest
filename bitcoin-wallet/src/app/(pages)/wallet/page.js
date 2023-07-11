"use client";

import AppBar from "@/app/components/appbar";
import NavBar from "../../components/navbar";
import { useAppSelector } from "@/app/redux/hooks";
import AppItem from "@/app/components/app-item";
import { AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoSnapchat } from "react-icons/bi";
import QRCode from "qrcode";
import { useEffect, useState } from "react";

export default function Wallet() {
  const currentTab = useAppSelector((state) => state.walletReducer.currentTab);
  const walletAddress = useAppSelector((state) => state.walletReducer.address);
  const [qrCodeDataURL, setQRCodeDataURL] = useState("");

  useEffect(() => {
    generateQRCode();
  }, [walletAddress]);

  async function generateQRCode() {
    if (walletAddress) {
      const qrCodeDataURL = await QRCode.toDataURL(walletAddress);
      setQRCodeDataURL(qrCodeDataURL);
    }
  }

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
        return (
          <div className="tab-content centered">
            {qrCodeDataURL && (
              <img
                src={qrCodeDataURL}
                alt="Bitcoin address as QR code"
                className="qr-code"
              />
            )}
          </div>
        );

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
