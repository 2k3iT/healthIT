"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import axios from "axios";
import toast from "react-hot-toast";
import { useUser } from "@/lib/zustand/useUser";

const OrderModal = ({ doctor }: { doctor: string }) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [bornDate, setBornDate] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [date, setDate] = useState<Date>();

  const { user } = useUser();

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData = {
      ownerId: user._id,
      name,
      doctor,
      bornDate,
      genre,
      tel,
      email,
      reason,
      note,
      date,
    };

    await axios.post("/api/order", formData);
    setIsSuccess(true);
    toast.success("Bạn đã đặt lịch thành công");
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Đặt lịch ngay</Button>
        </DialogTrigger>
        {!isSuccess && (
          <DialogContent className="sm:max-w-[425px] bg-white">
            <DialogHeader>
              <DialogTitle>Điền thông tin</DialogTitle>
              <DialogDescription>
                Hãy để chúng tôi biết thêm về bạn
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Tên
                </Label>
                <Input
                  id="name"
                  value={name}
                  className="col-span-3"
                  onChange={(item) => setName(item.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="born-date" className="text-right">
                  Năm sinh
                </Label>
                <Input
                  id="born-date"
                  value={bornDate}
                  className="col-span-3"
                  onChange={(item) => setBornDate(item.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="genre" className="text-right">
                  Giới tính
                </Label>
                <Input
                  id="genre"
                  value={genre}
                  className="col-span-3"
                  onChange={(item) => setGenre(item.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="tel" className="text-right">
                  Số điện thoại
                </Label>
                <Input
                  id="tel"
                  value={tel}
                  className="col-span-3"
                  type="tel"
                  onChange={(item) => setTel(item.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Địa chỉ email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  className="col-span-3"
                  onChange={(item) => setEmail(item.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="reason" className="text-right">
                  Mô tả bệnh
                </Label>
                <Input
                  id="note"
                  value={reason}
                  className="col-span-3"
                  onChange={(item) => setReason(item.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="note" className="text-right">
                  Ghi chú
                </Label>
                <Input
                  id="note"
                  value={note}
                  className="col-span-3"
                  onChange={(item) => setNote(item.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="note" className="text-right">
                  Lịch khám
                </Label>
                <Popover>
                  <PopoverTrigger asChild className="col-span-3">
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {date ? format(date, "PPP") : <span>Chọn ngày</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0 bg-white-100"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleSubmit}>
                Xác nhận
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default OrderModal;
