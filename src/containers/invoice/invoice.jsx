import React, { useEffect, useState, useContext } from 'react';
import { AuthenticationContext } from '../../contexts/authentication';
import Table from '../../components/commons/table';
import Card from '../../components/card/card';
import { getInvoice } from '../../services/invoice';
import Total from '../../components/invoice/total';
import BillinInfo from '../../components/invoice/billin-info';

export default function Invoice() {
  const [ authentication ] = useContext(AuthenticationContext);
  const [ invoice, setInvoice ] = useState(null);
  const [  setError ] = useState(false);

  const columns = [
    {
      label: 'Product',
      key: 'product'
    },
    {
      label: 'Department',
      key: 'department'
    },
    {
      label: 'Cantidad',
      key: 'quantity'
    },
    {
      label: 'Precio',
      key: 'unitPrice'
    }
  ];

  useEffect(() => {
    getInvoice('I-00028988', authentication)
      .then(({ data }) => {
        setInvoice(data);
      })
      .catch(() => {
        setError(true);
      })
  }, []);

  return (
  <div className="billin-invoice">
    { invoice && (<Card>
        <BillinInfo items={ 
          [{
            title: 'Nº Factura',
            info: invoice.id
          },
          {
            title: 'Cliente',
            info: invoice.client
          }] }/> 
        <Table columns={ columns } data={ invoice.lineItems } /> 
        <Total total={invoice.lineItems.reduce((acc, curr) => acc + (curr.quantity * curr.unitPrice), 0) } />
    </Card>)}
  </div>
  )
}