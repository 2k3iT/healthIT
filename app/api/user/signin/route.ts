import UserModel from "@/lib/models/userModel";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/config/db";

const loadDB = async () => {
  await connectDB();
};
loadDB();

export async function GET() {
  return NextResponse.json("Hello World");
}

export async function POST(req: Request) {
  const userData = await req.json();

  const { email, password } = userData;

  const existUser = await UserModel.findOne({ email });

  if (existUser && existUser.password === password) {
    return NextResponse.json({
      auth: true,
      msg: "Đăng nhập thành công, enjoy <3",
      user: existUser,
    });
  } else {
    return NextResponse.json({
      auth: false,
      msg: "Email hoặc mật khẩu không chính xác",
      user: null,
    });
  }
}
