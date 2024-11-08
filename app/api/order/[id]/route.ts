import OrderModel from "@/lib/models/orderModel";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function PUT(req, context: any) {
  const { params } = await context;
  const itemChange = await req.json();

  const orderId = await params.then((item) => item.id);

  const data = await OrderModel.findByIdAndUpdate(orderId, itemChange);
  if (!data) {
    return NextResponse.json({
      message: `cannot find any order with ID ${orderId}`,
    });
  }

  const newData = await OrderModel.findOne({ _id: orderId });

  return NextResponse.json(newData);
}
