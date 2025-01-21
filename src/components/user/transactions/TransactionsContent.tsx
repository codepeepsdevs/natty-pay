"use client";
import { useGetTransactions } from "@/api/wallet/wallet.queries";

import { useTheme } from "@/store/theme.store";
import { FiSearch } from "react-icons/fi";

import EmptyState from "../table/EmptyState";
import Table from "../table/Table";
import MobileTable from "../table/MobileTable";
import images from "../../../../public/images";
import Pagination from "../table/Pagination";
import Skeleton from "react-loading-skeleton";
import { useState } from "react";
import { GenerateColumns } from "../table/columns";
import TransactionsFilter from "../table/TransactionsFilter";
import { TRANSACTION_CATEGORY, TRANSACTION_STATUS } from "@/constants/types";

type FilterChangeEvent = {
  category?: TRANSACTION_CATEGORY;
  status?: TRANSACTION_STATUS;
};

const TransactionsContent = () => {
  const theme = useTheme();
  const [pageSize, setPageSize] = useState(5);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterChangeEvent>({});

  const { transactionsData, isPending, isError } = useGetTransactions({
    page: pageNumber,
    limit: pageSize,
    search,
    ...filter,
  });

  const handleFilterChange = (filters: FilterChangeEvent) => {
    const filterOptions = {
      category: filters.category,
      status: filters.status,
    };
    setFilter(filterOptions);
  };

  const columns = GenerateColumns();

  const hasTransactions =
    transactionsData?.transactions && transactionsData.transactions.length > 0;
  const tableLoading = isPending && !isError;

  return (
    <div className="flex flex-col gap-4 mt-4">
      <h2 className="text-text-200 dark:text-text-400 text-lg sm:text-xl font-semibold">
        All Transactions{" "}
      </h2>
      <div className="w-full flex items-center justify-between gap-3">
        <div className="w-[80%] xs:w-[60%] sm:w-[50%] md:w-[40%] 2xl:w-[30%] flex items-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-3 sm:px-4 border border-transparent rounded-lg bg-bg-600 dark:bg-bg-1100">
          <FiSearch className="text-text-700 text-base sm:text-lg" />
          <input
            type="text"
            placeholder="Search by transaction reference"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full text-base outline-none bg-transparent placeholder:text-text-700 text-text-200 dark:text-text-400"
          />
        </div>
        <TransactionsFilter onFilterChange={handleFilterChange} />
      </div>
      <div className="pb-10  w-full flex flex-col justify-center items-center gap-8 xs:gap-10">
        <div className="w-full bg-bg-600 dark:bg-bg-1100 rounded-xl p-4">
          {tableLoading ? (
            <div className="flex flex-col gap-3 py-4">
              {[...Array(4)].map((_, index) => (
                <Skeleton
                  key={index}
                  className="h-8"
                  baseColor={theme === "light" ? "#e0e0e0" : "#202020"}
                  highlightColor={theme === "light" ? "#f5f5f5" : "#444444"}
                />
              ))}
            </div>
          ) : hasTransactions ? (
            <>
              <div className="hidden md:block">
                <Table
                  data={transactionsData?.transactions || []}
                  columns={columns}
                  rowStyle={"secondary"}
                />
              </div>
              <div className="block md:hidden">
                <MobileTable
                  data={transactionsData?.transactions || []}
                  columns={columns}
                />
              </div>
            </>
          ) : (
            <EmptyState
              image={images.emptyState.emptyTransactions}
              title={"No transactions"}
              path={"/user/services"}
              placeholder={"Pay a bill"}
              showButton={false}
            />
          )}
        </div>

        {hasTransactions && (
          <Pagination
            pageCount={transactionsData?.totalPages}
            onPageChange={(newPage) => setPageNumber(newPage)}
            onPageSizeChange={(newSize) => setPageSize(newSize)}
            pageNumber={pageNumber}
          />
        )}
      </div>
    </div>
  );
};

export default TransactionsContent;
