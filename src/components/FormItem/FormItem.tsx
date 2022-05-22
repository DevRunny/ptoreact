import React from "react";
import {FieldValues, UseFormRegister, ValidationRule} from "react-hook-form";
import style from "./FormItem.module.css";

export type FormItemProps = {
    element: Element;
    mainStyleElement: string;
    formItemStyle: string;
    labelStyle: string;
    labelName: string;
    register: UseFormRegister<FieldValues>;
    id: `${string}` | `${string}.${string}` | `${string}.${number}`;
    errors: { [x: string]: any };
    selectOptions?: string[];
    patternValue?: RegExp;
    patternMessage?: string;
    elementType?: string;
    elementPlaceholder?: string;
    selectDescription?: string;
    selectDescriptionStyle?: string;
    onChangeFunc?: (e: any) => void;
};

type Element = "select" | "input" | "textarea";

const FormItem: React.FC<FormItemProps> = ({
                                               element,
                                               errors,
                                               id,
                                               labelName,
                                               labelStyle,
                                               mainStyleElement,
                                               register,
                                               elementPlaceholder,
                                               elementType,
                                               patternMessage,
                                               patternValue,
                                               selectOptions,
                                               selectDescription,
                                               selectDescriptionStyle,
                                               onChangeFunc,
                                               formItemStyle,
                                           }) => {
    const checkElement = () => {
        switch (element) {
            case "input":
                return (
                    <>
                        <label htmlFor={id} className={labelStyle}>
                            {labelName}
                        </label>
                        <span className={style.alert}>
              {errors[`${id}`] && (
                  <span role="alert">{errors[`${id}`].message}</span>
              )}
            </span>
                        <input
                            {...register(id, {
                                required: "Поле обязательно к заполнению",
                                pattern: {
                                    value: patternValue,
                                    message: patternMessage,
                                } as ValidationRule<RegExp> | undefined,
                            })}
                            className={mainStyleElement}
                            id={id}
                            type={elementType}
                            placeholder={elementPlaceholder}
                        />
                    </>
                );
            case "select":
                return (
                    <>
                        <label htmlFor={id} className={labelStyle}>
                            {labelName}
                        </label>
                        <select
                            className={mainStyleElement}
                            {...register(id)}
                            onChange={onChangeFunc}
                        >
                            {selectOptions?.length ? (
                                selectOptions.map((option) => (
                                    <option key={option} value={option}>{`${option}`}</option>
                                ))
                            ) : (
                                <option>--Пусто--</option>
                            )}
                        </select>
                        {selectDescription ? (
                            <p className={selectDescriptionStyle}>{selectDescription}</p>
                        ) : (
                            <></>
                        )}
                    </>
                );
            case "textarea":
                return (
                    <>
                        <label className={labelStyle} htmlFor={id}>
                            {labelName}
                        </label>
                        <textarea className={mainStyleElement}
                                  placeholder={elementPlaceholder}
                                  maxLength={100}
                                  id={id}
                        />
                    </>
                );
            default:
                return <input className={mainStyleElement}/>;
        }
    };

    return <div className={formItemStyle}>{checkElement()}</div>;
};

export default FormItem;
