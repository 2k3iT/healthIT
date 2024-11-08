import { CheckCircle } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const SuccessModal = ({
  title,
  route,
  setClose,
}: {
  title: string;
  route: string;
}) => {
  const router = useRouter();
  return (
    <>
      <div className="w-full h-96 flex items-center justify-center flex-col ">
        <CheckCircle className="text-lime-400 w-28 h-28" />
        <div className="text-black-100">{title}</div>
        <Button
          className="border-2 border-lime-500 bg-white hover:bg-lime-500 hover:text-white"
          onClick={() => {
            setClose(false);
            router.push(route);
          }}
        >
          Quay về
        </Button>
      </div>
    </>
  );
};

export default SuccessModal;
