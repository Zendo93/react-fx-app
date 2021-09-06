import {applyMiddleware, combineReducers, createStore} from '@reduxjs/toolkit';
import resultReducer from "../reducers/resultReducer";
import {combineEpics, createEpicMiddleware, Epic} from "redux-observable";
import {resultEpic} from "../middleware/resultEpic";
import searchReducer from "../reducers/searchReducer";
import {searchEpic} from "../middleware/searchEpic";

const rootEpic = combineEpics(
    searchEpic as Epic,
    resultEpic
);

const rootReducer = combineReducers({
    resultReducer,
    searchReducer
});

const epicMiddleware = createEpicMiddleware();

function configureStore() {
  const store = createStore(
      rootReducer,
      applyMiddleware(epicMiddleware)
  );

    epicMiddleware.run(rootEpic);

  return store;
}
export const store = configureStore();
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

