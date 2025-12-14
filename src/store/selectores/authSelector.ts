import type { RootState } from "../store";

export const selectAvatar = (state: RootState) => state.auth.avatar;
