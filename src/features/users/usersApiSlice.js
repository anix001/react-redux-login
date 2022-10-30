import { apiSlice } from "../../app/api/apiSlice"

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/users',
            keepUnusedDataFor: 5, //for 5 sec
        })
    })
})

export const {
    useGetUsersQuery
} = usersApiSlice 