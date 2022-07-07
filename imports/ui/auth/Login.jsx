import React from "react";
import { useForm } from "react-hook-form";
import { FormControl } from "../@/components/FormControl";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-2 w-1/3 mx-auto my-8"
    >
      <legend className="text-left text-3xl font-thin my-8">Login</legend>
      <FormControl
        handle="username"
        label="Username"
        holder="@username"
        type="text"
        register={register}
        rules={{ required: true }}
        errors={errors}
      />
      <FormControl
        handle="password"
        label="Password"
        holder="********"
        type="password"
        register={register}
        helper={<span>Wierd but true!</span>}
        rules={{ required: true }}
        errors={errors}
      />
      <input type="submit" className="btn ml-auto" value="Sign in" />
    </form>
  );
}
