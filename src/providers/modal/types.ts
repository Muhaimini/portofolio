import { HTMLAttributes, ReactNode } from "react";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface ModalProviderProps {
  children: ReactNode;
}
