import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuizSection from "./components/QuizSection";

// Pages
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import ProfilePage from "./pages/ProfilePage";

// Layout wrapper
function PageWithLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PageWithLayout>
              <HomePage />
            </PageWithLayout>
          }
        />
        <Route
          path="/quizes"
          element={
            <PageWithLayout>
              <QuizPage />
            </PageWithLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <PageWithLayout>
              <ProfilePage />
            </PageWithLayout>
          }
        />
        <Route
          path="/quiz/:quizId"
          element={
            <PageWithLayout>
              <QuizSection />
            </PageWithLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
