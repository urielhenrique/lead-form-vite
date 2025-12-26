// src/api/base44Client.js

const APP_ID = '6940ac99ae39da85359d8f26';
const API_KEY = 'ab5dca8132ec4e919c9e1e9704c06f16';
const BASE_URL = `https://app.base44.com/api/apps/${APP_ID}/entities`;

export const base44 = {
  entities: {
    Lead: {
      // Esta é a função que o formulário da Home vai chamar
      create: async (data) => {
        const response = await fetch(`${BASE_URL}/Lead`, {
          method: 'POST',
          headers: {
            'api_key': API_KEY,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            data: data // O Base44 geralmente espera os campos dentro de um objeto data
          })
        });

        if (!response.ok) {
          throw new Error('Erro ao enviar dados');
        }

        return response.json();
      },

      // Caso precise listar os leads no futuro
      list: async () => {
        const response = await fetch(`${BASE_URL}/Lead`, {
          headers: {
            'api_key': API_KEY,
            'Content-Type': 'application/json'
          }
        });
        return response.json();
      }
    }
  }
};