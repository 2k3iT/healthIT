import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import axios from "axios";
import toast from "react-hot-toast";

const DeleteModal = ({ data, setDelete }: { data: any }) => {
  // const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleSubmit = async () => {
    await axios
      .put(`/api/order/${data._id}`, { status: "Cancelled" })
      .then(() => {
        toast.success(`Đơn đã được hủy thành công`);
      });
  };

  //   console.log(isSuccess);
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="bg-red-600 text-white-100 hover:bg-white-100 hover:text-red-600">
            Hủy
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-white-100">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-red-600">
              Bạn có chắc chắn hủy đơn khám bệnh này?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Mọi hành động của bạn đều sẽ phải chịu trách nhiệm hậu quả
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Thoát</AlertDialogCancel>
            <AlertDialogCancel
              onClick={handleSubmit}
              className="bg-white border-red-600 border-2 hover:bg-red-600"
            >
              Hủy
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeleteModal;
