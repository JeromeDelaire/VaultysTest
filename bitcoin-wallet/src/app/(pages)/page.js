"use client";

import Login from "../components/login";
import { useAppSelector } from "../redux/hooks";

export default function Home() {
  const firstName = useAppSelector((state) => state.accountReducer.firstName);
  return (
    <main>
      <Login />
    </main>
  );
}
