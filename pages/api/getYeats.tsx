const axios = require('axios');
const cheerio = require('cheerio');

export async function getYearsWorked(url: string) {
  try {
    const response = await axios.get(url);
    const html = response.data;

    debugger;
    const $ = cheerio.load(html);

    const container = $('.pvs-list__outer-container'); 
    const list = container('.class="pvs-list                             ');

    if (list.length > 0) {
      const yearsWorked = list.text();
      return yearsWorked;
    } else {
      return 'Informação não encontrada';
    }
  } catch (error) {
    console.error('Ocorreu um erro:', error);
    return 'Erro ao obter informações';
  }
}

