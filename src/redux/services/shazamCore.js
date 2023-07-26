import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "7410492805msh00df8bec3c37ffdp189b0djsnbc5a7029ab21"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "/charts/world",
    }),
    getSongsByGenre: builder.query({
      query: (genre) => `/charts/genre-world?genre_code=${genre}`,
    }),
    getSongDetailes: builder.query({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `/tracks/related?track_id=${songid}`,
    }),
    getArtistDetails: builder.query({
      query: ({ artistId }) => `/artists/details?artist_id=${artistId}`,
    }),
    getSongsByCountry: builder.query({
      query: (countrycode) => `/charts/country?country_code=${countrycode}`,
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) =>
        `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongDetailesQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
