import {
  Control,
  FieldPath,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
  useController,
  Controller,
} from "react-hook-form";
import { Input } from "antd";

interface FormValues {
  name: string;
}

declare type FromProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  shouldUnregister?: boolean;
  defaultValue?: FieldPathValue<TFieldValues, TName>;
  control?: Control<TFieldValues>;
  disabled?: boolean;
  type?: "text" | "number" | "date";
  placeholder?: string;
  testId?: string;
};

const StyledInput = (props: FromProps<FormValues>) => {
  const { fieldState } = useController(props);

  return (
    <>
      <Controller
        name={props.name}
        control={props.control}
        render={({ field }) => {
          return (
            <Input
              {...field}
              type={props.type}
              placeholder={props.placeholder}
              name={props.name}
              data-testid={props.testId}
              status={
                fieldState.isDirty
                  ? "warning"
                  : fieldState.invalid
                  ? "error"
                  : ""
              }
            />
          );
        }}
      />
    </>
  );
};

export default StyledInput;
