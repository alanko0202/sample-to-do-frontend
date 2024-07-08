import {
  render,
  fireEvent,
  cleanup,
  screen,
  waitFor,
  renderHook,
} from "@testing-library/react";
import React from "react";

import "@testing-library/jest-dom";
import TodoAddForm from "../components/TodoAddForm";
import TodoEditForm from "../components/TodoEditForm";
import TodoItemForm from "../components/TodoItemForm";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ConfigProvider, App } from "antd";
import { useApiFunctions } from "../services/axios";
import { useReactQuery } from "../hooks/useReactQuery";
import { renderWithClient } from "./utils";
import {
  RECORD_UPDATED,
  RECORD_ADDED,
  RECORDS_ERROR,
} from "../constants/messages";

const mockedTodo = [
  {
    id: "e25fc1ec-574a-4284-be36-af6289c05070",
    name: "Something to do",
  },
];

const updateRecord = jest.fn();
const deleteRecord = jest.fn();

afterEach(() => {
  cleanup();
});

const TestTodoForm = () => {
  return (
    <ConfigProvider>
      <App>
        <TodoItemForm
          updateRecord={updateRecord}
          duties={mockedTodo}
          deleteRecord={deleteRecord}
          isLoading={false}
          isError={false}
        />
      </App>
    </ConfigProvider>
  );
};

test("TodoItemForm renders without crashing", () => {
  renderWithClient(<TestTodoForm />);
});

test("Todo item to be edit on click of edit button", async () => {
  const result = renderWithClient(<TestTodoForm />);
  const editBtn = result.getByTestId("edit-button");
  fireEvent.click(editBtn);
  await waitFor(() => {
    expect(updateRecord).toHaveBeenCalledTimes(1);
    expect(updateRecord).toHaveBeenCalledWith(mockedTodo[0]);
  });
});
test("Todo item to be deleted on click of delete button", async () => {
  const result = renderWithClient(<TestTodoForm />);
  const deleteBtn = result.getByTestId("delete-button");
  fireEvent.click(deleteBtn);
  await waitFor(() => {
    expect(deleteRecord).toHaveBeenCalledTimes(1);
    expect(deleteRecord).toHaveBeenCalledWith(mockedTodo[0].id);
  });
});
