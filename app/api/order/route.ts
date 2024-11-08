import OrderModel from "@/lib/models/orderModel";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/config/db";

const loadDB = async () => {
  await connectDB();
};
loadDB();

export async function GET(req: Request) {
  const data = await OrderModel.find();
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const orderData = await req.json();
  await OrderModel.create(orderData);

  console.log("order created successfully");

  return NextResponse.json({
    success: true,
    msg: "order created successfully",
    data: orderData,
  });
}
