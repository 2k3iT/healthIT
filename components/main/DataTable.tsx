"use client";
import React, { useEffect, useReducer, useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDateTime } from "@/lib/utils";
import { InfoModal } from "./InfoModal";
import DeleteModal from "./DeleteModal";
import { StatCard } from "@/components/main/StatCard";
import axios from "axios";

interface orderDataType {
  name: string;
  bornDate: string;
  genre: string;
  tel: string;
  email: string;
  reason: string;
  note: string;
  date: Date;
}

const DataTable = () => {
  const [order, setOrder] = useState<orderDataType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const appointments = {
    scheduledCount: 0,
    pendingCount: 1,
    cancelledCount: 2,
  };

  const fetchData = async () => {
    setIsLoading(true);
    const res = await axios.get("/api/order");

    if (res.statusText === "OK") {
      setOrder(res.data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [ignored]);

  const statusCount = (type: string) => {
    const num = order?.filter((item) => item.status === type);
    return num?.length;
  };

  return (
    <>
      <section className="admin-stat">
        <StatCard
          type="appointments"
          count={statusCount("OK")}
          label="Đã đặt lịch"
          icon={"admin/appointments.svg"}
        />
        <StatCard
          type="pending"
          count={statusCount("Pending")}
          label="Đơn đang chờ"
          icon={"admin/pending.svg"}
        />
        <StatCard
          type="cancelled"
          count={statusCount("Cancelled")}
          label="Đơn bị hủy"
          icon={"admin/cancelled.svg"}
        />
      </section>
      <Table className="border-2 rounded-lg mt-10">
        <TableCaption>Danh sách lịch khám</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Bệnh nhân</TableHead>
            <TableHead className="w-44 px-7 text-center">Tình trạng</TableHead>
            <TableHead className="w-32">Lịch khám</TableHead>
            <TableHead className="w-[300px]">Bác sĩ phụ trách</TableHead>
            <TableHead className="text-center w-52">Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {order?.map((order: any, index) => {
            const setButtonStyle = () => {
              switch (order.status) {
                case "OK":
                  return "bg-green-300";
                case "Pending":
                  return "bg-blue-300";
                case "Cancelled":
                  return "bg-red-500";
                default:
                  return "w-12 h-12 m-4";
              }
            };
            return (
              <TableRow key={index}>
                <TableCell className="font-medium">{order.name}</TableCell>
                <TableCell className="flex justify-center">
                  <span
                    className={` px-7 py-3 rounded-full text-white-100  ${setButtonStyle()}`}
                  >
                    {order.status === "OK" ? "Đã đặt lịch" : order.status}
                  </span>
                </TableCell>
                <TableCell>{formatDateTime(order.date)}</TableCell>
                <TableCell className="font-medium">{order.doctor}</TableCell>
                <TableCell>
                  <InfoModal
                    data={order}
                    setRender={(item) => {
                      if (item) {
                        fetchData();
                      }
                    }}
                  />
                  <DeleteModal
                    data={order}
                    setDelete={(item) => {
                      if (item) {
                        fetchData();
                      }
                    }}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default DataTable;
