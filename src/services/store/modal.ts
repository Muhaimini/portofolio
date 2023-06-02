import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { ModalStoreProps } from "./types";
import { isBoolean } from "lodash";

export const useModalStore = create<ModalStoreProps>()(
  devtools(
    immer((set) => ({
      display: false,
      setDisplay: (params) => {
        set((state) => {
          if (isBoolean(params)) {
            state.display = params;
            state.chlidren = !params ? null : state.chlidren;
            return;
          }

          state.display = params(state.display);
        });
      },

      chlidren: null,
      setChildren: (params) => {
        set((state) => {
          state.display = true;
          state.title = params?.title;
          state.chlidren = params.element;
        });
      },
    }))
  )
);

export default useModalStore;
