import PatientsPage from "./pages/Patients";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayoutPage from "./pages/RootLayout";
import OverviewPage from "./pages/Overview";
// import classes from "./App.module.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayoutPage />,
    children: [
      {
        path: "",
        element: <OverviewPage />,
      },
      {
        path: "patients",
        element: <PatientsPage />,
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
