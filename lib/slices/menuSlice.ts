import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Tipe data untuk menu aktif
interface MenuState {
  activeMenu: string | null;
}

// Status awal
const initialState: MenuState = {
  activeMenu: null,
};

// Slice Redux untuk menu
const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setActiveMenu(state, action: PayloadAction<string>) {
      state.activeMenu = action.payload;
    },
  },
});

export const { setActiveMenu } = menuSlice.actions;

export default menuSlice.reducer;
