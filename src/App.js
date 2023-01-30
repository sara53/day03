import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./components/counter";
import { Test } from "./components/test";
import Login from "./components/login";
import { useState } from "react";
import MyNav from "./components/myNav";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Content } from "./components/content";
import { NotFound } from "./components/notFound";
import { Lib } from "./components/Lib";
import { Company } from "./components/company";

function App() {
  const [inputData, setInputData] = useState("");

  // const onGetInputData = (username) => {
  //   setInputData(username);
  // };

  return (
    <>
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="lib" element={<Lib />} />
          <Route path="company" element={<Company />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="content" element={<Content />}>
          <Route path=":id" element={<Content />} />
        </Route>
        {/* <Route path="content/:id" element={<Content />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
