import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";

const useInstructors = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data: isInstructors, isLoading: isInstructorsLoading} = useQuery({
        queryKey: ['isInstructors', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructors/${user?.email}`);
            return res.data.instructor;
        }
    })
    return [isInstructors, isInstructorsLoading]
}
export default useInstructors;