import { ReactNode } from "react";

type StateCallback<T> = {
  (params: T): T;
};

export interface SnackbarContent {
  id?: string;
  type: "success" | "error";
  message: ReactNode;
}

export type DisplayModalprops = boolean | StateCallback<boolean>;

export type SnackbarContentParams =
  | Array<SnackbarContent>
  | StateCallback<Array<SnackbarContent>>;

export interface SnackbarStoreProps {
  contents: Array<SnackbarContent>;
  setSnackbarContents: (params: SnackbarContentParams) => void;
  onDestruckSnackbar: (id?: string) => void;
}

interface ModalElemnt {
  element: ReactNode;
  title?: string;
}

export interface ModalStoreProps {
  display: boolean;
  chlidren: ReactNode;
  title?: string;
  setDisplay(params: DisplayModalprops): void;
  setChildren(params: ModalElemnt): void;
}
