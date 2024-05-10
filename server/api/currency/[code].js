import { defineEventHandler } from 'h3';
import { useRuntimeConfig } from '@nuxtjs/config-runtime'; // Import useRuntimeConfig
import { useFetch } from 'nuxt'; // Import useFetch from 'nuxt' instead of 'nuxt/app'

export default defineEventHandler(async (event) => {
    const { code } = event.context.params;
    const { currencyKey } = useRuntimeConfig();
    const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`;

    try {
        const { data } = await useFetch(uri);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
});
