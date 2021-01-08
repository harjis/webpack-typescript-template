import React, { Suspense } from "react";

import { TodoList, TodoStore } from "./features/Todos";
import { Loading } from "./components/Loading";
import { TodoStoreProvider } from "./stores/TodoStoreProvider";

function App() {
  return (
    <TodoStoreProvider store={new TodoStore()}>
      <Suspense fallback={<Loading />}>
        <TodoList />
      </Suspense>
    </TodoStoreProvider>
  );
}

export default App;
