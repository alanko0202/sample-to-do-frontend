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
import { renderWithClient } from './utils'
import {
  RECORD_UPDATED,
  RECORD_ADDED,
  RECORDS_ERROR,
} from "../constants/messages";

const mockedTodo = {
  id: "e25fc1ec-574a-4284-be36-af6289c05070",
  name: "Update to do",
};

const setIsEdit = jest.fn();
const setDuty = jest.fn();
const updateEditRecord = jest.fn();

afterEach(() => {
  cleanup();
});

const TestTodoForm = () => {
  return (
      <ConfigProvider>
        <App>
        <TodoEditForm
          setIsEdit={setIsEdit}
          duty={mockedTodo}
          updateEditRecord={updateEditRecord}
        />
        </App>
      </ConfigProvider>
  );
};

test("TodoItemForm renders without crashing", () => {
  renderWithClient(<TestTodoForm />)
});

test("Todo item to be edit", async () => {
  const result = renderWithClient(<TestTodoForm />);
  const input = result.getByTestId("name");
  const button = result.getByTestId("submit-button");
  fireEvent.change(input, { target: { value: mockedTodo.name } });
  fireEvent.click(button);
  await waitFor(() => {
    expect(updateEditRecord).toHaveBeenCalled();
  });
});


test("Todo item on click of cancel button", async () => {
  // const {getByTestId} = render(<TestTodoForm/>);
  const result = renderWithClient(<TestTodoForm />);
  const cancelBtn = result.getByTestId("cancel-button");
  fireEvent.click(cancelBtn);
  await waitFor(() => {
    // expect(setIsEdit).toHaveBeenCalledTimes(1);
    expect(setIsEdit).toHaveBeenCalledWith(false);
  });
});
