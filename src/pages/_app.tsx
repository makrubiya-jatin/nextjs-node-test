import "@/styles/globals.css";
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import type { AppProps } from "next/app";
import { LogProvider } from "@/contexts/LogContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LogProvider>
      <Component {...pageProps} />
    </LogProvider>
  );
}
