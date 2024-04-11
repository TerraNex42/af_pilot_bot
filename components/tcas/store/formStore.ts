import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { z } from "zod";
import { useFormState } from "react-dom";
import { init } from "next/dist/compiled/webpack/webpack";

type State = {
  isLoading: boolean;
  error: {
    isError: boolean;
    message: string;
  };
};

type Actions = {
  setIsLoading: (e: boolean) => void;
  toggleIsError: () => void;
  setErrorMessage: (e: string) => void;
  resetFormStore: () => void;
};

const initialState: State = {
  isLoading: false,
  error: {
    isError: false,
    message: "",
  },
};

const useFormStore = create<State & Actions>()(
  devtools(
    immer((set) => ({
      ...initialState,
      setIsLoading: (formState: boolean) =>
        set((state) => {
          state.isLoading = formState;
        }),
      toggleIsError: () =>
        set((state) => {
          state.error.isError = !state.error.isError;
        }),
      setErrorMessage: (message: string) =>
        set((state) => {
          state.error.message = message;
        }),
      resetFormStore: () => set(initialState),
    }))
  )
);

export default useFormStore;
