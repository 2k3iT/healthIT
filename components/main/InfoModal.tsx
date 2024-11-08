import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { formatDateTime } from "@/lib/utils";
import axios from "axios";
import toast from "react-hot-toast";

export function InfoModal({ data, setRender }: { data: any }) {
  const handleSubmit = async () => {
    await axios.put(`/api/order/${data._id}`, { status: "OK" }).then(() => {
      setRender(true);
      toast.success("Đơn đã được duyệt!");
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mx-7 bg-green-500 text-white hover:bg-white hover:text-green-500">
          Thông tin
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white-100">
        <DialogHeader>
          <DialogTitle>Thông tin bệnh nhân</DialogTitle>
          <DialogDescription>Vui lòng xác nhận</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-blue-500">
              Tên:
            </Label>
            <Label htmlFor="name">{data.name}</Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="born-date" className="text-right text-blue-500">
              Năm sinh:
            </Label>
            <Label htmlFor="born-date">{data.bornDate}</Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="genre" className="text-right text-blue-500">
              Giới tính:
            </Label>
            <Label htmlFor="genre">{data.genre}</Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="tel" className="text-right text-blue-500">
              Số điện thoại:
            </Label>
            <Label htmlFor="tel">{data.tel}</Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right text-blue-500">
              Địa chỉ email:
            </Label>
            <Label htmlFor="email">{data.email}</Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="reason" className="text-right text-blue-500">
              Mô tả bệnh:
            </Label>
            <Label htmlFor="reason">{data.reason}</Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="note" className="text-right text-blue-500">
              Ghi chú:
            </Label>
            <Label htmlFor="note">{data.note}</Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="note" className="text-right text-blue-500">
              Lịch:
            </Label>
            <Label htmlFor="note">{formatDateTime(data.date)}</Label>
          </div>
        </div>
        {/* <DialogFooter>
          <Button onClick={handleSubmit}>Xác nhận đơn</Button>
        </DialogFooter> */}
        <DialogClose
          className="bg-green-500 px-3 py-4 rounded-full text-white-100"
          onClick={handleSubmit}
        >
          Xác nhận đơn
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
