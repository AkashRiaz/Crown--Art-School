import React from "react";
import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="hero min-h-screen  bg-image">
        <div className="hero-overlay bg-opacity-75"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div id="error-page" className="space-y-2">
              <h1 className="font-semibold text-4xl">Oops!</h1>
              <div className="text-xl">
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                  <i>Page {error.statusText || error.message}!!</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;