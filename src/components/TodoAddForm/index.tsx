import { useForm } from "react-hook-form";
import Input from "../Input";
import Row from "../Row";
import Button from "../Button";
interface Props {
  addRecord(data: { name: string }): void;
}

const TodoAddForm = (props: Props) => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      name: "",
    },
    mode: "onChange",
  });
  const addRecord = (data: { name: string }) => {
    props.addRecord(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(addRecord)}>
        <Row flexDirection="row">
          <Input
            testId="new-name"
            control={control}
            placeholder="Name"
            type="text"
            name="name"
            rules={{ required: true }}
          />
          <Button
            title="Add"
            name="submit"
            data-testid="submit-button"
          ></Button>
        </Row>
      </form>
    </>
  );
};

export default TodoAddForm;
