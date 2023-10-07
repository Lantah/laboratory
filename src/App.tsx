import LantahSdk from "lantah-sdk";
import { Provider } from "react-redux";
import { store } from "config/store";
import { AppContent } from "views/AppContent";

import "styles/main.scss";

if (typeof window !== "undefined") {
  // @ts-ignore
  window.LantahSdk = LantahSdk;
}

export const App = () => (
  <Provider store={store}>
    <AppContent />
  </Provider>
);
