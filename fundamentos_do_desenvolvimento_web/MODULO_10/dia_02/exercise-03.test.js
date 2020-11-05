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
// 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.
// Dica: Utilize o try/catch para o caso de erro.
describe('When user is call with async/awite', () => {
  it('it should return user propety', async () => {
    expect.assertions(1);
    const result = await getUserName(4);
    expect(result).toBe('Mark');
  });
  it('should return error mesa', async () => {
    expect.assertions(1);
    try {
      await getUserName(2);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 2 not found.' });
    }
  });
});