import api from "^config/api";
import { useSnackBarStore } from "^services/store";
import { useQuery } from "react-query";

const THIS_TEXT_USED_FOR_REFETCH_DATA = "test-api";

export interface TestResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const useTestQuery = () => {
  const { setSnackbarContents } = useSnackBarStore();

  return useQuery(
    [THIS_TEXT_USED_FOR_REFETCH_DATA],
    () => api.get<TestResponse>("/posts/1"),
    {
      onSuccess: () => {
        setSnackbarContents((prev) =>
          prev.concat({
            type: "success",
            message: "OK!",
          })
        );
      },

      onError: () => {
        setSnackbarContents((prev) =>
          prev.concat({
            type: "error",
            message: "Oops!",
          })
        );
      },
    }
  );
};

export default useTestQuery;
