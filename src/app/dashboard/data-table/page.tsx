import { payments } from "@/data/payments.data";
import { columns } from "./columns";
import { DataTable } from "./data-table";

async function fetchData() {
  return payments;
}

export default async function Page() {

  const data = await fetchData();

  return (
    <div>
      <pre>
        {/* {JSON.stringify(data, null, 2)} */}
        <DataTable columns={columns} data={data} />
      </pre>
    </div>
  );
}
