"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { css } from "@emotion/css";

type ProviderProps = {
  children: ReactNode;
  customLoader?: ReactNode;
};

const LoadingContext = createContext({
  show: () => {},
  hide: () => {},
});

export function LoadingProvider({ children, customLoader }: ProviderProps) {
  const [isShow, setIsShow] = useState(true);

  const show = () => {
    setIsShow(true);
  };

  const hide = () => {
    setIsShow(false);
  };

  return (
    <LoadingContext.Provider value={{ show, hide }}>
      {children}
      {isShow && (
        <div
          className={css`
            z-index: 99;
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          {customLoader ? (
            customLoader
          ) : (
            <TailSpin color="#fff" height={80} width={80} />
          )}
        </div>
      )}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}
