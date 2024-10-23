import Table from "@/app/ui/customers/table";

export default async function Page({}) {
  // const query = searchParams?.query || "";
  // const currentPage = Number(searchParams?.page) || 1;
  // const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="w-full">
      <Table />
    </div>
  );
}
