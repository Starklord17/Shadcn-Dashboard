"use client";

import { Badge } from "@/components/ui/badge";
import { Payment } from "@/data/payments.data";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const variant =
        {
          pending: "secondary",
          processing: "info",
          success: "success",
          failed: "destructive",
        }[status] ?? ("default" as any);

      return (
        <Badge
          // className={`px-2 py-1 text-xs font-medium rounded-full ${color}`}
          variant={variant}
          capitalize
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "clientName",
    header: "Client Name",
  },
];
