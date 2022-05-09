import { FormItemProps } from "../components/FormItem/FormItem";

type InjectedProps = {};

export const withSendFormSelect = (
  SelectComponent: React.ComponentType<FormItemProps>
) => {
  return (props: Omit<FormItemProps, keyof InjectedProps>) => {
    return (
      <SelectComponent
        id={props.id}
        element={props.element}
        labelName={props.labelName}
        labelStyle={props.labelStyle}
		  errors={props.errors}
		  mainStyleElement={props.mainStyleElement}
		  register={props.register}
		  formItemStyle={props.formItemStyle}
		  selectOptions={props.selectOptions}
      />
    );
  };
};
