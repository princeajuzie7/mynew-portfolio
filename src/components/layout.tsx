"use client";

import React from "react";
import { Analytics } from "@vercel/analytics/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children} <Analytics /> </div>;
}

export default Layout;
