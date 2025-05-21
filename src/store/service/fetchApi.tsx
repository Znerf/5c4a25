import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";


export const BlueprintApi = createApi({
    reducerPath: "blueprintApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
    }),
    tagTypes: ['Blueprint'],
    endpoints: (builder) => ({
        getBlueprints: builder.query({
            query:() => "api/v1/123/actions/blueprints/bp_456/graph",
            providesTags: ['Blueprint'],
        }), 
    }),
})

export const { useGetBlueprintsQuery } = BlueprintApi;