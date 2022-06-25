import React from "react";

// Components
import ProfileUser from "./components/ProfileUser/ProfileUser";
import NavList from "./components/Navigation/NavList";
import GetStarted from "./components/GetStarted/GetStarted";

// Pages
import Overview from "./pages/Overview/Overview";
import Transaction from "./pages/Transaction/Transaction";

// Router
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <aside className="col-span-3 flex flex-col justify-between px-7.5 py-12.5">
          <ProfileUser name="Shayna Anne" email="shayna@anne.com" />
          <NavList />
          <GetStarted />
        </aside>
        <main className="col-span-9 p-12.5">
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/overview" replace={true} />}
            />
            <Route path="/overview" element={<Overview />} />
            <Route path="/transactions" element={<Transaction />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
