import localStorageService from '../../../../src/services/localStorage';

describe('local-storage service', () => {
  it('should set token', () => {
    localStorageService.setAuth('testToken');
    expect(localStorageService.getToken()).toEqual('testToken');
  });

  it('should set token', () => {
    localStorageService.deleteAuth();
    expect(localStorageService.getToken()).toEqual(null);
  });
});
