export default function OrderRow({ order }) {
  return (
    <tr className="border-b">
      <td className="p-2">{order.id}</td>
      <td className="p-2">{order.date}</td>
      <td className="p-2">{order.total} €</td>
      <td className="p-2">{order.status}</td>
      <td className="p-2">
        <button className="text-blue-600">Voir détails</button>
      </td>
    </tr>
  );
}
