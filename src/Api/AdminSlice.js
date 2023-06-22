import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const Adminapi=createApi({
    reducerPath:"adminApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://648be9618620b8bae7ebe983.mockapi.io/"}),
    endpoints:(builder)=>({
        getAdminByName:builder.query({
            query:()=>`crud`,
            providesTags:['crud'],
            invalidatesTags:['crud']
        }),
        addAdminByName:builder.mutation({
            query:(data)=>({
                url:'crud',
                method:'POST',
                body:{data}
            }),
            providesTags:['crud'],
            invalidatesTags:['crud']
        }),
        deleteAdminById:builder.mutation({
            query:(id)=>({
                url:`crud/${id}`,
                method:'DELETE',
            }),
            providesTags:['crud'],
            invalidatesTags:['crud']
        }),
        editAdminById:builder.mutation({
            query:({id, name, email, age, gender })=>({
                url:`crud/${id}`,
                method:'PUT',
                body:{name:name, email:email, age:age, gender:gender}
            }),
            providesTags:['crud'],
            invalidatesTags:['crud']
        })
    })
})
export const {useGetAdminByNameQuery, useAddAdminByNameMutation, useDeleteAdminByIdMutation, useEditAdminByIdMutation } = Adminapi;