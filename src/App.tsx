import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.scss";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { Toaster } from "react-hot-toast";
import Hotels from "./Pages/Hotels/Hotels";
import SingleHotel from "./Pages/SingleHotel/SingleHotel";
import BookingPage from "./Pages/BookingPage/BookingPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/hotels",
      element: <Hotels />,
    },
    {
      path: "/hotels/:id",
      element: <SingleHotel />,
    },
    {
      path: "/bookings",
      element: <BookingPage />,
    },
  ]);
  return (
    <>
      <div>
        <Toaster />
      </div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
