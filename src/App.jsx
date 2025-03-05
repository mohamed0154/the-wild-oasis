import React, { Suspense } from "react";
const AppLayout = React.lazy(() => import("./pages/AppLayout"));
const Home = React.lazy(() => import("./features/dashboard/Home"));
const Cabins = React.lazy(() => import("./features/cabins/Cabins"));
const Settings = React.lazy(() => import("./features/settings/Settings"));
const BookingsShow = React.lazy(() =>
  import("./features/Booking/BookingsShow")
);
const BookingDetails = React.lazy(() =>
  import("./features/Booking/BookingDetails")
);
const Login = React.lazy(() => import("./features/auth/Login"));
const ProtectedRoute = React.lazy(() => import("./pages/ProtectedRoute"));
const CreateUser = React.lazy(() => import("./features/users/CreateUser"));
const UpdateUser = React.lazy(() => import("./features/users/updateUser"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Loading from "./ui/Loading";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="/dashboard" />} />
              <Route path="/dashboard" element={<Home />} />
              <Route path="/cabins" element={<Cabins />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/bookings" element={<BookingsShow />} />
              <Route path="/bookings/:id" element={<BookingDetails />} />
              <Route path="/createUser" element={<CreateUser />} />
              <Route path="/updateUser" element={<UpdateUser />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          padding: 5, // Adjusts the top margin
        }}
        toastOptions={{
          // Default toast styles
          style: {
            background: "#333",
            color: "#000000",
          },
          // Success toast
          success: {
            duration: 3000,
            style: {
              background: "white",
            },
          },
          // Error toast
          error: {
            duration: 5000,
            style: {
              background: "white",
            },
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
