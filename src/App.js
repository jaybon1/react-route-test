// import { Counter } from "components/commons/Counter";
// import { HeaderLayout } from "components/layouts/HeaderLayout";
import Error404 from "pages/Error404";
import Main from "pages/Main";
import NumberPage from "pages/NumberPage";
import StringDetailPage from "pages/StringDetailPage";
import StringPage from "pages/StringPage";
// import { NonHeaderLayout } from "components/layouts/NonHeaderLayout";
// import NumberPage from "pages/NumberPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="num" element={<NumberPage />} />
          <Route path="str" element={<StringPage />} />
          <Route path="str/:idx" element={<StringDetailPage />}></Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
