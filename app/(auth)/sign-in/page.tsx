"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { signIn } from "@/auth";
import axios from "axios";
import { useRouter } from "next/navigation";

import toast, { Toaster } from "react-hot-toast";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(16),
});

const SignIn = () => {
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
    const userData = await axios.post("/api/user/signin", values);

    if (userData.data.auth === true) {
      console.log(userData.data.user);
      const userJSON = JSON.stringify(userData.data.user);
      localStorage.setItem("user", userJSON);
      toast.success(userData.data.msg);
      router.push("/");
    } else {
      toast.error(userData.data.msg);
    }
  }
  return (
    <div className="bg-white h-full w-full px-10 pt-10">
      <div className="w-full flex justify-center text-2xl mb-10 font-bold">
        Đăng nhập
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="nguyenthanhdat" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mật khẩu</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Đăng nhập
          </Button>
        </form>
      </Form>
      <div className="mt-2">
        Chưa có tài khoản?{" "}
        <span
          className="text-blue-500 font-bold cursor-pointer "
          onClick={() => router.push("/sign-up")}
        >
          Đăng kí ngay
        </span>
      </div>
      {/* <div className="w-full text-center my-5">hoặc</div> */}
      {/* <Button
        className="w-full"
        onClick={() => {
          //   "use server";

          signIn("github", { redirectTo: "/" });
        }}
      >
        Log in by github
      </Button> */}
      {/* <Toaster /> */}
    </div>
  );
};

export default SignIn;
