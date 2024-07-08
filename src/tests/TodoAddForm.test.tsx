import {
  render,
  fireEvent,
  cleanup,
  screen,
  waitFor,
} from "@testing-library/react";

import "@testing-library/jest-dom";
import TodoAddForm from "../components/TodoAddForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider, App } from "antd";
import { useApiFunctions } from "../services/axios";
import { renderWithClient } from "./utils";
import {
  RECORD_UPDATED,
  RECORD_ADDED,
  RECORDS_ERROR,
} from "../constants/messages";

const mockedTodo = {
  name: "Something to do",
};

const addRecord = jest.fn();

afterEach(() => {
  cleanup();
});

const TestTodoForm = () => {
  return (
    <ConfigProvider>
      <App>
        <TodoAddForm addRecord={addRecord} />
      </App>
    </ConfigProvider>
  );
};

test("TodoAddForm renders without crashing", () => {
  renderWithClient(<TestTodoForm />);
});

test("Form submission should not call add method if input field is empty", async () => {
  const result = renderWithClient(<TestTodoForm />);
  const button = result.getByTestId("submit-button");
  fireEvent.click(button);

  await waitFor(() => {
    expect(addRecord).not.toHaveBeenCalled();
    expect(result.queryByText(RECORD_ADDED)).toBe(null);
  });
});

test("Form submission should go through successfully", async () => {
  const result = renderWithClient(<TestTodoForm />);
  const input = result.getByTestId("new-name");
  const button = result.getByTestId("submit-button");

  fireEvent.change(input, { target: { value: mockedTodo.name } });
  fireEvent.click(button);

  await waitFor(() => {
    expect(addRecord).toHaveBeenCalled();
  });

  expect(input).toHaveValue("");
});
