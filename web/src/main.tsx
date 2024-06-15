import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "@mantine/core/styles.css";
import { VisibilityProvider } from './providers/VisibilityProvider';
import App from './components/App';
import { MantineProvider } from "@mantine/core"
import { theme } from "./theme"
import { isEnvBrowser } from './utils/misc';

const root = document.getElementById("root")

if (isEnvBrowser()) {
  root!.style.backgroundImage = 'url("https://cdn.discordapp.com/attachments/1250542824294973612/1250546896590606398/image.png?ex=666ea1ce&is=666d504e&hm=feb83089455c884e643b437a891fc929bb88569d82d57fc6a303e9ef774fee07&")';
  root!.style.backgroundSize = "cover";
  root!.style.backgroundRepeat = "no-repeat";
  root!.style.backgroundPosition = "center";
}

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <MantineProvider forceColorScheme='dark' theme={theme}>
      <VisibilityProvider>
        <App />
      </VisibilityProvider>
    </MantineProvider>
  </React.StrictMode>,
);
