import { useNavigate, Outlet } from "react-router-dom";
import React from "react";

export default function DashboardPage() {
  const navigate = useNavigate();
  return (
    <div className="DashboardPage componentBox">
      <Outlet />
      <button onClick={() => navigate("/dash/UseEffect")}>UseEffect</button>
      <button onClick={() => navigate("/dash/UseState")}>UseState</button>
      <button onClick={() => navigate("/dash/CustomHooks")}>
        Custom Hooks
      </button>
      <button onClick={() => navigate("/dash/Context")}>Context</button>
    </div>
  );
}

export function DashboardUseState(props) {
  return <div className="DashboardUseState"></div>;
}

export function DashboardUseEffect(props) {
  return <div className="DashboardUseEffect"></div>;
}

export function DashboardContext(props) {
  return <div className="DashboardContext"></div>;
}

export function DashboardCustomHooks(props) {
  return <div className="DashboardCustomHooks"></div>;
}
