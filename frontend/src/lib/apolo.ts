import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o85gs9156n01xx0wq86mq0/master',
    cache: new InMemoryCache()
})