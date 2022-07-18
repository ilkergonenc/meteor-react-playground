import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

// import { useAuth } from "../../providers/AuthProvider";
import { FormControl } from "../../components/FormControl";

export default function Login() {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const auth = useAuth();
  // const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit({ username, email, password }) {
    alert(`username: ${username}\nemail: ${email}\npassword: ${password}`);
  }

  return (
    <div className="w-1/3 mx-auto my-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-6 "
      >
        <legend className="text-left text-3xl font-thin my-8">Signup</legend>
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
          handle="email"
          label="Email"
          holder="youraddress@mail.com"
          type="email"
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
          helper="Wierd but true!"
          rules={{ required: true }}
          errors={errors}
        />
        <input type="submit" className="btn ml-auto" value="Sign up" />
      </form>
    </div>
  );
}
