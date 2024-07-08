import React, { useState } from "react";
import Header from "../components/Header";
import { useReactQuery } from "../hooks/useReactQuery";
import TodoAddForm from "../components/TodoAddForm";
import TodoItemForm from "../components/TodoItemForm";
import TodoEditForm from "../components/TodoEditForm";
import { Duty } from "../interfaces/Duty";

interface IFormInput {
  name: string;
}

const TodoList: React.FC = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [duty, setDuty] = useState<Duty>({
    id: "",
    name: "",
  });
  const { useQueryFetchDuties, useQueryCreateDuty, useQueryDeleteDuty, useQueryUpdateDuty } =
    useReactQuery();
  const { data: duties, isLoading, isError, error  } = useQueryFetchDuties();
  const deleteMutation = useQueryDeleteDuty();
  const addMutation = useQueryCreateDuty();
  const updateMutation = useQueryUpdateDuty();

  const updateRecord = (duty: Duty) => {
    setDuty(duty);
    setIsEdit(true);
  };

  const deleteRecord = (id: string) => {
    deleteMutation.mutate(id, {});
  };

  const updateEditRecord = (data: Duty) => {
    updateMutation.mutate({ id: duty.id, name: data.name });
    setIsEdit(false);
  };

  const addRecord = (data: IFormInput) => {
    addMutation.mutate(data.name, {});
  };

  return (
    <div>
      <Header title={"To-Do List"}></Header>
      {!isEdit && (
        <>
          <TodoAddForm addRecord={addRecord} />
          <TodoItemForm
            updateRecord={updateRecord}
            duties={duties}
            deleteRecord={deleteRecord}
            isLoading={isLoading}
            isError={isError}
          />
        </>
      )}

      {isEdit && (
        <TodoEditForm
          setIsEdit={setIsEdit}
          duty={duty}
          updateEditRecord={updateEditRecord}
        />
      )}
    </div>
  );
};

export default TodoList;
