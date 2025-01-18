const VerifiedDashboard = () => {
  return (
    <div className="pb-10  w-full flex flex-col justify-center items-center gap-8 xs:gap-10">
      {/* <div className="w-full bg-white rounded-xl">
        {tableLoading ? (
          <div className="flex flex-col gap-3 p-4">
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
          <div></div>
        ) : (
          <Table
            data={transactionsData?.transactions || []}
            columns={columns}
          />
      <EmptyState
            image={images.emptyTransactions}
            title={"No transactions yet"}
            path={"/user/services"}
            placeholder={"Pay a bill"}
          />
        )}
      </div>

       {hasTransactions && (
          <Pagination
            pageCount={transactionsData?.pageCount}
            onPageChange={(newPage) => setPageNumber(newPage)}
            onPageSizeChange={(newSize) => setPageSize(newSize)}
            pageNumber={pageNumber}
          />
        )}  */}
    </div>
  );
};

export default VerifiedDashboard;
