import React from "react";

export function FormControl(props) {
  const { handle, label, holder, type, helper, register, rules, errors } =
    props;

  return (
    <div className="relative">
      <label
        htmlFor={handle}
        className="
          absolute left-0 top-0 pl-3 pt-1.5 text-gray-600 text-xs
        "
      >
        {label}
      </label>
      <input
        {...register(handle, rules ? rules : {})}
        type={type}
        id={handle}
        name={handle}
        placeholder={holder}
        className="
          w-full px-3 pt-6 pb-2 border rounded-md
          border-gray-300 placeholder-transparent text-gray-500 
          focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 
        "
      />
      {helper && (
        <div
          id={handle + "Help"}
          className="form-text text-xs flex text-gray-600"
        >
          {helper}
        </div>
      )}
      {errors[handle] && (
        <span className="flex mt-2 text-sm text-red-400">
          This field is required
        </span>
      )}
    </div>
  );
}
