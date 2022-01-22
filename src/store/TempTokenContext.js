import React, { useContext, useState, useEffect, createContext } from "react";

const TempTokenContext = createContext();
const url = process.env.REACT_APP_TOKEN_API_URL;
const apiKey = process.env.REACT_APP_SWAGGER_API_KEY;


export function TempTokenContextProvider({ children }) {
  const [tempToken, setTempToken] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchToken = async () => {
      const response = await fetch(`${url}`, {
        headers: {
          apiKey: apiKey,
        },
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedTokens = responseData;

      setTempToken(loadedTokens);
      setIsLoading(false);
    };

    fetchToken().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p className="section-title">Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section>
        <p className="section-title">{httpError}</p>
      </section>
    );
  }
  return (
    <TempTokenContext.Provider
      value={{
        tempToken,
      }}
    >
      {children}
    </TempTokenContext.Provider>
  );
}

export function useTempToken() {
  const context = useContext(TempTokenContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
