
import { getInvoice } from '../../../../src/services/invoice';
import requestService from '../../../../src/services/request';
import { login } from '../../../../src/services/authentication';

describe('Invoice service', () => {
  beforeEach(() => {
    requestService.http.post = jest.fn();
  });

  it('login', (done) => {
    login({
      username: 'test',
      password: 'ee'
    })

    expect(requestService.http.post).toHaveBeenCalled();
    done();
  });
});
