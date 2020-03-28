
import { getInvoice } from '../../../../src/services/invoice';
import requestService from '../../../../src/services/request';

describe('Invoice service', () => {
  beforeEach(() => {
    requestService.http.get = jest.fn();
  });

  it('get a invoice', (done) => {
    getInvoice({
      invoiceId: 'a',
      authorization: 'b'
    });

    expect(requestService.http.get).toHaveBeenCalled();
    done();
  });
});
