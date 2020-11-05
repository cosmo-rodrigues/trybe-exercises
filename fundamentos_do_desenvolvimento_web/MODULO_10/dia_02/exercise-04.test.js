// 4 - O código abaixo busca, no GitHub de um usuário, de acordo com a URL, seus repositórios e retorna uma lista como resultado. Dada a URL 'https://api.github.com/users/tryber/repos', faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' não se encontram nessa lista.
const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}
console.log(getRepos('https://api.github.com/users/tryber/repos'));
describe('Searsh for a especifc repositorie', () => {
  it('should verify is exist a repositorie when is calling', async () => {
    const repositorie = await getRepos('https://api.github.com/users/tryber/repos');
    expect(repositorie).not.toContain('sd-01-week4-5-project-todo-list');
    expect(repositorie).not.toContain('sd-01-week4-5-project-meme-generator');
  });
});