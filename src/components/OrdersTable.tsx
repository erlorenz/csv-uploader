import React from 'react';
import styled from 'styled-components';
import { Order } from '../pages/LandingPage';

interface OrdersTableProps {
  orders: Order[];
}
const OrdersTable: React.FC<OrdersTableProps> = ({ orders }) => {
  const renderRows = () =>
    orders.map((order) => (
      <tr>
        <td>{order.first}</td>
        <td>{order.last}</td>
        <td>{order.address}</td>
        <td>{order.city}</td>
        <td>{order.state}</td>
        <td>{order.zip}</td>
        <td>{order.phone}</td>
        <td>{order.products}</td>
      </tr>
    ));
  return (
    <table>
      <thead>
        <tr>
          <th>First</th>
          <th>Last</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th>Phone</th>
          <th>Products</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

export default OrdersTable;
