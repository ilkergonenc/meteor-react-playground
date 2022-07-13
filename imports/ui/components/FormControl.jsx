import React from "react";

export function FormControl(props) {
  const { handle, label, holder, type, helper, register, rules, errors } =
    props;

  return (
    <div className="relative">
      <label htmlFor={handle} className="form-label">
        {label}
      </label>
      <input
        {...register(handle, rules ? rules : {})}
        type={type}
        id={handle}
        name={handle}
        placeholder={holder}
        className="form-input"
      />
      {helper && (
        <div id={handle + "Help"} className="form-text-helper">
          {helper}
        </div>
      )}
      {errors[handle] && (
        <span className="form-text-error">This field is required</span>
      )}
    </div>
  );
}
