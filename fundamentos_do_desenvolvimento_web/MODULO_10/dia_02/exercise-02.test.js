// 2 e 3 - O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa busca é uma 
// *Promise*, que é utilizada pelo método `getUserName`.
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}
// 2 - Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName para o caso
// em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users, para saber quais IDs existem.
describe('The function above', () => {
  it('should return a found user, when user exist', (done) => {
    expect.assertions(2);
    getUserName(4)
      .then(user => {
        expect(user).toBe('Mark');
        expect(user).not.toBe('Paul');
        done();
    });
  });
  it('should return a error mensagem, when user don\'t exist', (done) => {
    expect.assertions(1);
    getUserName(2)
      .catch(error => {
        expect(error).toEqual({ error: 'User with 2 not found.' });
        done();
      });
  });
});
