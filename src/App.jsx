import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./view/LoginPage";
import HeaderView from "./view/HedaerView";
import MainPageController from "./controller/MainPageController";
import DetailPageController from "./controller/DetailPageController";
import axios from "axios";

axios.defaults.baseURL = "https://api.coincap.io/v2";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderView />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<MainPageController />} />
        <Route path="/coin/:id" element={<DetailPageController />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
