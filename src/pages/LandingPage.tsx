import React, { useState, SyntheticEvent } from 'react';
import styled from 'styled-components';
import OrdersTable from '../components/OrdersTable';
import Papa from 'papaparse';

export interface Order {
  first: string;
  last: string;
  address: string;
  city: string;
  zip: string;
  state: string;
  phone: string;
  products: string;
}

const LandingPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let target = event?.target as HTMLInputElement;
    let list = target.files as FileList;
    parseCSV(list[0]);
  };

  const parseCSV = (file: File) => {
    if (!file) return;
    let data = Papa.parse(file, { skipEmptyLines: true });
    console.log(data);
  };

  return (
    <>
      <Container>
        <FileInput>
          <input type="file" name="file" onChange={onChangeHandler} />
        </FileInput>
      </Container>
      <OrdersTable orders={orders} />
    </>
  );
};

export default LandingPage;

const Container = styled.div`
  width: 100%;
  padding-top: 20vh;
  display: flex;
  justify-content: center;
`;

const FileInput = styled.fieldset`
  max-width: 500px;
`;
