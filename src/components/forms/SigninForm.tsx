"use client";

import { BsArrowRight } from "@/lib/icons";
import { TLoginSchema, loginSchema } from "@/lib/zod/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Loader } from "..";
import toast from "react-hot-toast";
import axios from "axios";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/authContext";

const SigninForm = ({toggleSignup,modalClose}:{toggleSignup: () => void, modalClose: () => void }) => {
  const {login} = useAuth();
  const form = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onFormSubmit: SubmitHandler<TLoginSchema> = async (formData) => {
    try {
      const validateData = loginSchema.safeParse(formData);
      if (!validateData.success) {
        toast.error("Invalid data received from User...");
        throw new Error("Invalid data");
      }
      const obj = validateData.data;
      obj.username = validateData.data.email;
      const resp = await axios.post("/api/users/login", obj);
      const { data } = resp;
      if (data.success) {
        // console.log(data?.data);
        login(data?.data);
        toast.success(data?.message);
        modalClose();
      } else {
        toast.error(data?.message);
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
      <form onSubmit={form.handleSubmit(onFormSubmit)} className="mt-8">
        <div className="mb-3">
      <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} className="dark:text-white mb-2" />
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
                  <Input type="password" placeholder="Password" {...field} className="dark:text-white mb-2" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          </div>
        <Button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
            >
              Get started <BsArrowRight />
            </Button>
      </form>
      </Form>
    </>
  );
};

export default SigninForm;
