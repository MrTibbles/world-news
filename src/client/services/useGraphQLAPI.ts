import { useState } from "react";

interface NetworkState<T> {
  data?: T;
  error: string;
  loading: boolean;
}

interface SubmitQueryFn {
  (query: string): Promise<any>;
}

function useGraphQLAPI<T>(): [NetworkState<T>, SubmitQueryFn] {
  const [networkState, setNeworkState] = useState({
    data: undefined,
    error: "",
    loading: false
  });

  const handleErrorResponse = (error: string): any => {
    let _error = error;

    // Handle GraphQL errors
    if (Array.isArray(error)) {
      _error = error
        .map(({ message }: { message: string }): string => message)
        .join(", ");
    }

    setNeworkState({
      ...networkState,
      error: _error,
      loading: false
    });
  };

  const submitQuery = async (query: string): Promise<any> => {
    setNeworkState({ ...networkState, error: "", loading: true });

    const { data, errors } = await fetch("http://localhost:4000/", {
      body: JSON.stringify({ query }),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .catch((err): Promise<any> => handleErrorResponse(err.message))
      .then(
        (res): Promise<any> => {
          if (!res.ok) return handleErrorResponse("Something went wrong");

          return res.json();
        }
      );

    if (errors) return handleErrorResponse(errors);

    return setNeworkState({
      ...networkState,
      data,
      loading: false
    });
  };

  return [networkState, submitQuery];
}

export default useGraphQLAPI;
