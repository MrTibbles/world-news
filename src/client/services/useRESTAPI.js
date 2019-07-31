import { useState } from "react";

/**
 * Shared fetch util for TRN API

 * @return {Array} [0]      Network state representation
 *                 [1]      Method for submitting network request
 */
const useRESTAPI = continent => {
  const [networkState, setNeworkState] = useState({
    data: undefined,
    error: undefined,
    loading: false
  });

  const handleErrorResponse = error => {
    return setNeworkState({
      ...networkState,
      error,
      loading: false
    });
  };

  const submitQuery = async () => {
    setNeworkState({ ...networkState, error: undefined, loading: true });

    const data = await fetch(`${GOOGLE_API}q=${continent}`, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .catch(err => handleErrorResponse(err.message))
      .then(res => {
        if (!res.ok) return handleErrorResponse("Something went wrong");

        return res.json();
      });

    return setNeworkState({
      ...networkState,
      data,
      loading: false
    });
  };

  return [networkState, submitQuery];
};

export default useRESTAPI;
