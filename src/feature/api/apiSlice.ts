import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// interface Menu {
//   name: string;
//   price: number;
//   id: string;
//   description: string;
// }
// export interface MenuState {
//   value: Menu[];
// }
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
  tagTypes: ["Menu"],
  endpoints: (builder) => ({
    getMenu: builder.query({
      query: () => "/menu",
      providesTags: ["Menu"],
    }),
    // addTodo: builder.mutation({
    //     query: (todo) => ({
    //         url: '/todos',
    //         method: 'POST',
    //         body: todo
    //     }),
    //     invalidatesTags: ['Todos']
    // }),

    // deleteTodo: builder.mutation({
    //     query: ({ id }) => ({
    //         url: `/todos/${id}`,
    //         method: 'DELETE',
    //         body: id
    //     }),
    //     invalidatesTags: ['Todos']
    // }),
  }),
});

export const {
  useGetMenuQuery,
  // useAddTodoMutation,
  // useDeleteTodoMutation
} = apiSlice;
