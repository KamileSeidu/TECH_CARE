import PatientsPage from "./pages/Patients";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayoutPage from "./pages/RootLayout";
import OverviewPage from "./pages/Overview";
import ErrorPage from "./pages/Error";
import { loader as PatientsDataLoader } from "./pages/Patients";
// import classes from "./App.module.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "overview",
        element: <OverviewPage />,
      },
      {
        path: "",
        element: <PatientsPage />,
        loader: PatientsDataLoader,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
