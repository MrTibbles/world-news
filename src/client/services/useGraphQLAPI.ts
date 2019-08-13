import { useState } from "react";
import { GraphQLResponse } from "../pages/NewsFeed/queries/api-types";

interface NetworkState<T> {
  data?: T;
  error?: string;
  loading: boolean;
}

interface SubmitQueryFn {
  (query: string): Promise<any>;
}

function useGraphQLAPI<GQLResponse>(): [
  NetworkState<GQLResponse>,
  SubmitQueryFn
] {
  const initialState: NetworkState<GQLResponse> = {
    loading: false
  };

  const [networkState, setNeworkState] = useState(initialState);

  function handleErrorResponse(error: string): any {
    setNeworkState({
      ...networkState,
      error,
      loading: false
    });
  }

  function handleSuccessResponse(data: GQLResponse): void {
    setNeworkState({
      ...networkState,
      data,
      loading: false
    });
  }

  async function submitQuery(query: string): Promise<void> {
    setNeworkState({ ...networkState, error: "", loading: true });

    const { data, errors } = await fetch("http://localhost:4000/", {
      body: JSON.stringify({ query }),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    }).then(
      (res): Promise<any> =>
        res.ok
          ? (res.json() as Promise<GraphQLResponse>)
          : handleErrorResponse("Something went wrong")
    );

    if (errors) {
      const _error: string = errors
        .map(({ message }: { message: string }): string => message)
        .join(", ");

      return handleErrorResponse(_error);
    }

    return handleSuccessResponse(data);
  }

  return [networkState, submitQuery];
}

export default useGraphQLAPI;
