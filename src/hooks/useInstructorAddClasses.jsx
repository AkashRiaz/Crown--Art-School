import React, { useContext } from "react";

import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProviders";

const useInstructorAddClasses = (email) => {
  const { user } = useContext(AuthContext);
  const {
    isLoading,
    refetch,
    data: addedClass = [],
  } = useQuery({
    queryKey: ["addedClass", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `https://summer-camp-server-side-akashriaz.vercel.app/classes/${user?.email}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.json();
    },
  });
  return [addedClass, refetch];
};

export default useInstructorAddClasses;
