import { useField } from "formik";
import React from "react";

const Formikinput = ({ label, id, classname, name, ...rest }) => {
  const field = useField(name);
  const [data, meta] = field;
  const { value, onChange, onBlur } = data;
  const { error, touched } = meta;
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        className={classname}
        {...rest}
      />
      {error && touched && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default Formikinput;
