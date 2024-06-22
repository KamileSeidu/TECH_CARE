import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Pagecontent from "../components/PageContent";

function ErrorPage() {
  const error = useRouteError();

  let title = "An error occured!";
  let message = "Something went wrong!";

  if (error.status === 404) {
    title = "Page Not Found";
    message = "Could not find resource or page.";
  }

  if (error.status === 401) {
    title = "Unauthorized";
    message = "You need to be authenticated.";
  }

  if (error.status === 400) {
    title = "Bad Request";
    message = "Malformed authorization header.";
  }

  if (error.status === 405) {
    title = "Not allowed";
    message = "Method not allowed!";
  }

  return (
    <>
      <MainNavigation />
      <Pagecontent title={title}>
        <p>{message}</p>
      </Pagecontent>
    </>
  );
}

export default ErrorPage;
