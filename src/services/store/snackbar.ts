import { drop, isArray, isEmpty } from "lodash";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { generateUUID } from "^libs/helper";
import { SnackbarContent, SnackbarStoreProps } from "./types";

const MAX_ZISE = 10;

const overSizeSnackbar = (contents: Array<SnackbarContent>) => {
  if (contents.length === MAX_ZISE) {
    return drop(contents);
  }
  return contents;
};

const overideContents = (contents: Array<SnackbarContent>) => {
  const overideContent = contents.map((content) => {
    if (isEmpty(content.id)) {
      content.id = generateUUID();
    }
    return content;
  });
  return overSizeSnackbar(overideContent);
};

const useSnackBarStore = create<SnackbarStoreProps>()(
  devtools(
    immer((set) => ({
      contents: [],
      setSnackbarContents: (params) => {
        set((state) => {
          if (isArray(params)) {
            state.contents = overideContents(params);
            return;
          }
          state.contents = overSizeSnackbar(params(state.contents));
        });
      },
      onDestruckSnackbar: (params) => {
        set((state) => {
          if (params) {
            state.contents = state.contents.filter(
              (item) => item.id !== params
            );
            return;
          }

          state.contents = drop(state.contents);
        });
      },
    }))
  )
);

export default useSnackBarStore;
