import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
	reducerPath: 'shazamApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://shazam-core7.p.rapidapi.com',
		prepareHeaders: (headers) => {
			headers.set('X-RapidAPI-Key', 'd4f3eaa394mshb10e41c0e2ee51bp18c01ajsn2da89b830ee3');
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getTopSongs: builder.query({
			query: (countryCode) => `charts/get-top-songs-in-country?NG&limit=10`,
		}),
	}),
});

export const { useGetTopSongsQuery } = shazamApi;