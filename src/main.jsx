import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProviders from "./providers/AuthProviders.jsx";
import 'remixicon/fonts/remixicon.css'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      <AuthProviders>
        <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
      </AuthProviders>
    
  </React.StrictMode>
);
