"use client";

import WalletCard from "./WalletCard";
import useUserStore from "@/store/user.store";
import WalletTransactions from "./walletTransactions";

const WalletContent = () => {
  const { user } = useUserStore();
  const activeCurrency = "ngn";
  const currencies = [
    {
      name: "ngn",
      balance: user?.wallet?.balance,
      title: "NGN Balance",
      active: activeCurrency === "ngn",
      path: "/user/add-funds/ngn",
    },
  ];
  return (
    <div className="flex flex-col gap-6 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2">
        {currencies.map((currency) => (
          <WalletCard
            key={currency.name}
            currency={currency.name}
            balance={currency.balance || 0}
            active={currency.active}
            title={currency.title}
            path={currency.path}
          />
        ))}
      </div>
      <WalletTransactions />
    </div>
  );
};

export default WalletContent;
