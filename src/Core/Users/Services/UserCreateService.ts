export class UserCreateService {
  public async invoke(request: any): Promise<any> {
    const user = { username: 'teste', password: '122324546' };

    function save(request) {
      console.log('User created');
    }

    return user;
  }
}
