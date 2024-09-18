export type VariableValue = {
    value: string;
    mandatory: boolean;
    default: string;
};
  
export type Variables = {
    [dict_key: string]: VariableValue;
};