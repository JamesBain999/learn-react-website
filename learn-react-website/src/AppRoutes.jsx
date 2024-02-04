import { Route, Routes } from 'react-router-dom'
import Homepage from "./pages/Homepage";
import DashboardPage, {
  DashboardContext,
  DashboardCustomHooks,
  DashboardUseState,
  DashboardUseEffect
} from "./pages/DashboardPage";
import SignupForm from './pages/SignupForm'
import PageNotFound from "./pages/PageNotFound";

function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<Homepage {...props} />} />
      <Route path="dash" element={<DashboardPage {...props} />}>
        <Route path="UseState" element={<DashboardUseState />} />
        <Route path="UseEffect" element={<DashboardUseEffect />} />
        <Route path="Context" element={<DashboardContext />} />
        <Route path="CustomHooks" element={<DashboardCustomHooks />} />
      </Route>
      <Route path="/signup" element={<SignupForm {...props} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;