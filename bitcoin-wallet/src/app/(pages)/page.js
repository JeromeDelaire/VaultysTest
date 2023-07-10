"use client";

import { useAppSelector } from "../redux/hooks";

export default function Home() {
  const firstName = useAppSelector((state) => state.accountReducer.firstName);
  return <main>{firstName}</main>;
}
