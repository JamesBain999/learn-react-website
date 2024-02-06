import { Route, Routes } from 'react-router-dom'
import News from "./pages/News";
import SignupForm from './pages/SignupForm'
import AddNewsPost from "./pages/AddNews";
import PageNotFound from "./pages/PageNotFound";
import ProtectedRoute from "./routes/ProtectedRoute"

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<News {...props} />} />
      <Route
        path="/AddNews"
        element={
          <ProtectedRoute>
            <AddNewsPost {...props} />
          </ProtectedRoute>
        }
      />
      <Route path="/signup" element={<SignupForm {...props} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;