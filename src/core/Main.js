import React from "react";
import Overview from "../overview/Overview";
import Reports from "../components/Reports";
import Cards from "../components/Cards";
import Support from "../components/Support";
function Main() {
  return (
    <div className="Main">
      <Overview />
      <Reports />
      <Cards />
      <Support />
    </div>
  );
}

export default Main;
