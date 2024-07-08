import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import { Duty } from "../../interfaces/Duty";

interface Props {
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  updateEditRecord(data: { name: string }): void;
  duty: Duty;
}

const TodoEditForm = (props: Props) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: props.duty?.name,
    },
    mode: "onChange",
  });
  return (
    <form onSubmit={handleSubmit(props.updateEditRecord)}>
      <Input
        control={control}
        type="text"
        name="name"
        placeholder="Name"
        testId="name"
        rules={{ required: true }}
      />
      <Button title="Edit" data-testid="submit-button" name="submit"></Button>
      <Button
        title="Cancel"
        data-testid="cancel-button"
        onClick={() => props.setIsEdit(false)}
      ></Button>
    </form>
  );
};

export default TodoEditForm;
