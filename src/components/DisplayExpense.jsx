import { useContext } from "react";
import { Value } from "./Context";

export default function DisplayExpense() {
  const { expenseData } = useContext(Value);

  return (
    <table className="min-w-full leading-normal">
      <thead>
        <tr>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Category
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Expense
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Amount
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Date
          </th>
        </tr>
      </thead>
      <tbody>
        {expenseData.map((item) => (
          <tr key={item.id}>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              {item.category}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              {item.expense}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              {item.amount}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              {item.date}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
