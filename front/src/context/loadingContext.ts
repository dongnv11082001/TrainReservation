import {
  useState,
  useContext,
  createContext,
  Dispatch,
  FC,
  ReactElement,
} from "react";

interface LoadingContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void | Dispatch<boolean>;
}

const LoadingContext = createContext<LoadingContextType>({
  loading: false,
  setLoading: (loading: boolean) => console.log(loading),
});

function useLoading() {
  return useContext(LoadingContext);
}

const LoadingProvider: FC = ({ children }): ReactElement => {
  const [loading, setLoading] = useState(false);
  const value = { loading, setLoading };
  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};

export { useLoading, LoadingProvider };
