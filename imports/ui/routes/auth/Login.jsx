import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useAuth } from "../../providers/AuthProvider";
import { FormControl } from "../../components/FormControl";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit({ username, password }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        auth.signin({ username, password }, () => {
          // Send them back to the page they tried to visit when they were
          // redirected to the login page. Use { replace: true } so we don't create
          // another entry in the history stack for the login page.  This means that
          // when they get to the protected page and click the back button, they
          // won't end up back on the login page, which is also really nice for the
          // user experience.
          navigate(from, { replace: true });
        });
      }, 100);
    });
  }

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
