import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://www.dnd5eapi.co/api';

export const spellApi = createApi({
  reducerPath: 'fetchSpellsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    fetchAllSpells: builder.query({
      query: level => '/spells' + (level !== 'All' ? `?level=${level}` : ''),
    }),
    fetchAllSpellsWithLevel: builder.query({
      query: level => `/spells?level=${level}`,
    }),
    fetchSpellByIndex: builder.query({
      query: index => '/spells/' + index,
    }),
  }),
  overrideExisting: false,
});

export const { useFetchAllSpellsQuery, useFetchSpellByIndexQuery, useFetchAllSpellsWithLevelQuery } = spellApi;
