import { rootReducer } from "./combine.store";

export type RootState = ReturnType<typeof rootReducer>;