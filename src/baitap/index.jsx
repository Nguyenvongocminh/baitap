import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./style.css";

const BAITAP = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Họ Và Tên</label>
      <input
        {...register("name", {
          required: true,
          minLength: 3,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors?.name?.type === "required" && <p>This field is required</p>}
      {errors?.name?.type === "maxLength" && (
        <p> name cannot exceed 20 characters</p>
      )}
      {errors?.name?.type === "minLength" && (
        <p> name cannot exceed 3 characters</p>
      )}

      <label>Ngày Sinh</label>
      <input
        type="date"
        {...register("test", {
          valueAsDate: false,
        })}
      />

      <label>Số Điện Thoại</label>
      <input
        type="tel"
        placeholder="Mobile number"
        {...register("Mobile number", {
          required: true,
          minLength: 6,
          value: false,
          maxLength: 12,
        })}
      />
      <label>Email</label>
      <input
        type="text"
        placeholder="Email"
        {...register("Email", {
          required: true,
          max: 20,
          min: 5,
          maxLength: 30,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        })}
      />
      {errors?.Email?.type === "pattern" && <p>Email invalidate</p>}
      <label>Password</label>
      <input
        type="password"
        {...register("password", {
          required: "You must specify a password",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters",
          },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <input type="submit" />
    </form>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<BAITAP />, rootElement);
export default BAITAP;
