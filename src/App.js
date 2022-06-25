import React from "react";

// Components
import ProfileUser from "./components/ProfileUser/ProfileUser";
import NavList from "./components/Navigation/NavList";
import GetStarted from "./components/GetStarted/GetStarted";
import Overview from "./components/Overview/Overview";

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
          <Overview />
        </main>
      </div>
    </div>
  );
};

export default App;
