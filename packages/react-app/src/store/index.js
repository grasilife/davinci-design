import { init } from "@rematch/core";
import { app } from "@/models/app";
import loadingPlugin from "@rematch/loading";
import selectPlugin from "@rematch/select";
import immerPlugin from "@rematch/immer";
import updatedPlugin from "@rematch/updated";
import persistPlugin from "@rematch/persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};
const store = init({
  models: {
    app,
  },
  plugins: [
    loadingPlugin(),
    selectPlugin(),
    immerPlugin(),
    updatedPlugin(),
    persistPlugin(persistConfig),
  ],
});

export default store;
