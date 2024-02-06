import "./App.css";
import AppRoutes from "./AppRoutes";
import { PostNewsProvider } from "./hooks/FetchNews";
import NavBar from "./components/NavBar";
import { UserProvider } from "./library/UserContext";

function App() {
  return (
    <>
      <PostNewsProvider>
        <UserProvider>
          <NavBar />
          <AppRoutes />
        </UserProvider>
      </PostNewsProvider>
    </>
  );
}

export default App;
