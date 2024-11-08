import DataTable from "@/components/main/DataTable";

const Dashboard = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        {/* <Link href="/" className="cursor-pointer">
          <Image
            src="/logo.png"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link> */}

        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Xin chào 👋</h1>
          <p className="text-dark-700">
            Bắt đầu đến với công cụ dành cho các bác sĩ
          </p>
        </section>
        <DataTable />

        {/* 
        {isLoading ? (
          <div className="w-full h-full mt-16 font-bold flex justify-center">
            Đang lấy danh sách đơn ...
          </div>
        ) : (
        )} */}
      </main>
    </div>
  );
};
export default Dashboard;
