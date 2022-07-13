import React from "react";

export function FormControl(props) {
  const { handle, label, holder, type, helper, register, rules, errors } =
    props;

  return (
    <label htmlFor={handle} className="block">
      <span className="form-label">{label}</span>
      <input
        {...register(handle, rules ? rules : {})}
        type={type}
        id={handle}
        name={handle}
        placeholder={holder}
        className="form-input"
      />
      {helper && (
        <span id={handle + "Help"} className="form-text-helper">
          {helper}
        </span>
      )}
      {errors[handle] && (
        <span className="form-text-error">This field is required</span>
      )}
    </label>
  );
}
