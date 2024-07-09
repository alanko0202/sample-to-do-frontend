import { Divider } from "antd";
import Text from "../Text";
import Row from "../Row";
import Button from "../Button";
import Container from "../Container";
import { Duty } from "../../interfaces/Duty";

interface Props {
  updateRecord(duty: Duty): void;
  deleteRecord(id: string): void;
  duties: Duty[];
  isLoading: boolean;
  isError: boolean;

}

const TodoItemForm = (props: Props) => {
  if (props.isLoading) {
    return <span>Loading...</span>
  }

  if (props.isError) {
    return <span>Loading...</span>
  }

  return (
    <div>
      <Divider />
      <ul>
        {!!props.duties &&
          props.duties.map((duty: Duty) => {
            return (
              <div key={duty.id}>
                <Row
                  flexDirection="row"
                  maxWidth={800}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Container width={"600px"}>
                    <Text title={duty.name}></Text>
                  </Container>
                  <Container flexDirection="row" justifyContent="flex-end">
                    <Button
                      data-testid={`edit-button`}
                      title="Edit"
                      onClick={() => props.updateRecord(duty)}
                    ></Button>
                    <Button
                      data-testid="delete-button"
                      title="Delete"
                      onClick={() => props.deleteRecord(duty.id)}
                    ></Button>
                  </Container>
                </Row>
                <Divider></Divider>
              </div>
            );
          })}

        {!props.duties || (props.duties.length === 0 && <div>No tasks...</div>)}
      </ul>
    </div>
  );
};

export default TodoItemForm;
