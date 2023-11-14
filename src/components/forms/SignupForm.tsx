"use client";

import { useModal } from "@/contexts/modalContext";
import { TSignup, signupSchema } from "@/lib/zod/user";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { Loader } from "../index";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {BsArrowRight} from "@/lib/icons"

const SignupForm = ({toggleSignin}:{toggleSignin: () => void}) => {
  const form = useForm<TSignup>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      role: "USER",
      password: "",
    },
  });

  const onFormSubmit: SubmitHandler<TSignup> = async (data) => {
    try {
      const validateData = signupSchema.safeParse(data);
      if (!validateData.success) {
        toast.error("Invalid data");
        throw new Error("Invalid data");
      }
      const resp = await axios.post("/api/users/register", validateData.data);
      if (!resp?.status || !resp?.data) {
        toast.error("Failed to create user...");
      }
      switch (resp?.data.statusCode) {
        case 200:
          toast.success(resp?.data?.message);
          toggleSignin();
          break;
        case 500:
          toast.error("Internal Server Error...");
          break;
        case 400:
          toast.error(resp?.data?.message);
          break;
        case 403:
          toast.error(resp?.data?.message);
          break;
        default:
          throw new Error("Something went wrong...");
      }
    } catch (error) {
      console.log(error);
    } finally {
      form.reset();
      console.log("Finished");
    }
  };

  return (
    <>
      {form?.formState?.isSubmitting ? <Loader /> : ""}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onFormSubmit)}
          id="signUpForm"
          className="mt-8"
        >
          <div className="mb-3">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} className="dark:text-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} className="dark:text-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} className="dark:text-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          </div>
          <Button
            type="submit"
            disabled={form?.formState?.isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
          >
            Create Account
              <BsArrowRight />
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SignupForm;
