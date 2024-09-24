"use client"

import { Payment } from "@/data/payments.data"
import { ColumnDef } from "@tanstack/react-table"


export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "clientName",
    header: "Client Name",
  },
]
