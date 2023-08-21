const axios = require('axios');
const cheerio = require('cheerio');

export async function getYearsWorked(url: string) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    await delay(10000);
    debugger;
    const $ = cheerio.load(html);

    // Supondo que a informação que você procura está em um elemento específico,
    // você precisa identificar o seletor corretamente e extrair os dados desejados.
    const container = $('.pvs-list__outer-container'); // Substitua pelo seletor correto
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

