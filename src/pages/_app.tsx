import type { AppProps } from "next/app";

import "../style.css";
import "../App.css";
import React from "react";
import { ConfigProvider } from "antd";
import en_US from "antd/locale/en_US";
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  type ThemeData = {
    borderRadius: number;
    colorPrimary: string;
  };
  
  const defaultData: ThemeData = {
    borderRadius: 8,
    colorPrimary:'blue',
    
    
  };
  const [data, setData] = React.useState<ThemeData>(defaultData);
  return <ConfigProvider
  locale={en_US}
  theme={{ token: { colorPrimary: data.colorPrimary, borderRadius: data.borderRadius, colorTextPlaceholder:"inherit",  } }}
><Component {...pageProps} /></ConfigProvider>;
}
