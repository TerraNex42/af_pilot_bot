
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { z } from "zod";
import { useFormState } from "react-dom";



type State = {
  isLoading: boolean;
};

type Actions = {
  setIsLoading: (e:boolean) => void;
};

const initialState: State = {
  isLoading: false
};

const useFormStore = create<State & Actions>()(
  devtools(
    immer((set) => ({
      ...initialState,
      setIsLoading: (formState: boolean) =>
        set((state) => {
          state.isLoading = formState;
        }),
    }))
  )
);

export default useFormStore;
