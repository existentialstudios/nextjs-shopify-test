import Client from 'shopify-buy';

export const client = Client.buildClient({
    storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESSTOKEN,
    domain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
})