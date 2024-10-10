import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table/table";
import Button from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { SquareMinus } from "lucide-react";
import Spinner from "../ui/spinner";
import { usePropertyContext } from "../../component/pages/ContextApi/ContextAPI ";

export default function PropertyTables() {
  const { occupancyData, financialData, loading } = usePropertyContext();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-semibold text-purple-900 text-center">
              Property Occupancy Overview
              <span className="ml-2 w-[40px] h-[13px] text-[12px] leading-[12.93px] font-medium font-poppins text-purple-900">
                Statistics
              </span>
            </h2>
            <p className="text-sm text-gray-500">
              Detailed occupancy breakdown
            </p>
          </div>
          <div className="space-x-2 flex">
            <Button variant="secondary" size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
              Delete
            </Button>
            <Button size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add new
            </Button>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[30px]">
                <SquareMinus />
              </TableHead>
              <TableHead>Owner Name</TableHead>
              <TableHead>Property Name</TableHead>
              <TableHead>Total Units</TableHead>
              <TableHead>Filled Units</TableHead>
              <TableHead>Vacant Units</TableHead>
              <TableHead>Occupancy Rate</TableHead>
              <TableHead>Last Maintenance Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {occupancyData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{row.owner_name}</TableCell>
                <TableCell>{row.property_name}</TableCell>
                <TableCell>{row.total_units}</TableCell>
                <TableCell>{row.filled_units}</TableCell>
                <TableCell>{row.vacant_units}</TableCell>
                <TableCell>{row.occupancy_rate} %</TableCell>
                <TableCell>{formatDate(row.last_maintenance_date)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-semibold text-purple-900">
              Financial Overview
              <span className="ml-2 w-[40px] h-[13px] text-[12px] leading-[12.93px] font-medium font-poppins text-purple-900">
                Statistics
              </span>
            </h2>
            <p className="text-sm text-gray-500">
              Financial status for each property, summarizing income, expenses,
              and net profit.
            </p>
          </div>
          <div className="space-x-2 flex">
            <Button variant="secondary" size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
              Delete
            </Button>
            <Button size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add new
            </Button>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[30px]">
                <SquareMinus />
              </TableHead>
              <TableHead>Owner Name</TableHead>
              <TableHead>Property Name</TableHead>
              <TableHead>Income</TableHead>
              <TableHead>Expenses</TableHead>
              <TableHead>Net Profit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {financialData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{row.owner_name}</TableCell>
                <TableCell>{row.property_name}</TableCell>
                <TableCell>{row.income}</TableCell>
                <TableCell>{row.expenses}</TableCell>
                <TableCell>{row.net_profit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
