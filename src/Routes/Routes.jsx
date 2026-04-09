import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Books from "../pages/Books/Books";
import Homepage from "../pages/Homepage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "/bookDetails/:id",
        Component: BookDetails,
        loader: () => fetch("/booksData.json"),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
