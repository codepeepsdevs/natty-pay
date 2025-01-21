"use client";
import useUserStore from "@/store/user.store";
import BalanceCard from "../../BalanceCard";
import TransferNgnProcess from "./TransferNgnProcess";
const AddFundsNgnContent = () => {
  const { user } = useUserStore();

  return (
    <div className="flex flex-col gap-4 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2">
        <BalanceCard currency="ngn" balance={user?.wallet?.balance || 0} />
      </div>
      <TransferNgnProcess />
    </div>
  );
};

export default AddFundsNgnContent;
