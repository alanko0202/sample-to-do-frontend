// App.tsx
import React from "react";

import Container from "./components/Container";

import TodoList from "./containers/TodoList";

const MyApp: React.FC = () => {
  return (
    <Container maxWidth={960}>
      <TodoList />
    </Container>
  );
};

export default MyApp;
