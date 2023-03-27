import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3500"}),
    tagTypes: ["Menu"],
    endpoints: (builder) => ({
        getMenu: builder.query({
            query: () => "/menu",
            providesTags: ["Menu"],
        }),
    }),
});

export const {
    useGetMenuQuery,
} = apiSlice;
