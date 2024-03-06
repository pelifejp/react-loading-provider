import { ReactNode } from "react";
type ProviderProps = {
    children: ReactNode;
    customLoader?: ReactNode;
};
export declare function LoadingProvider({ children, customLoader }: ProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useLoading(): {
    show: () => void;
    hide: () => void;
};
export {};
