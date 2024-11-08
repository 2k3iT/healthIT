import UserModel from "@/lib/models/userModel";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/config/db";

const loadDB = async () => {
  await connectDB();
};
loadDB();

// export async function GET(req: Request, res: Response) {
//   const data = await OrderModel.find();
//   return NextResponse.json(data);
// }

export async function POST(req: Request, res: Response) {
  const userData = await req.json();

  const { email, name, password } = userData;

  console.log(userData);

  const userExists = await UserModel.findOne({ email });

  if (userExists) {
    return NextResponse.json({
      msg: `${email} đã tồn tại`,
    });
  } else {
    const newUser = await UserModel.create(userData);
    return NextResponse.json({
      success: true,
      msg: "Đã tạo tài khoản thành công",
      user: newUser,
    });
  }
}
