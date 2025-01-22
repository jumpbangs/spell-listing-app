import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from 'utils/constant';

export const spellApi = createApi({
  reducerPath: 'fetchSpellsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    fetchAllSpells: builder.query({
      query: level => '/spells' + (level !== 'All' ? `?level=${level}` : ''),
    }),
    fetchSpellByIndex: builder.query({
      query: index => '/spells/' + index,
    }),
  }),
});

export const { useFetchAllSpellsQuery, useFetchSpellByIndexQuery } = spellApi;
