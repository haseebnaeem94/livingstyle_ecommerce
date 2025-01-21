import { groq } from "next-sanity"


export const allProductsQuery = groq `*[_type == "product"]'`;
export const four = groq `*[_type == "product"] | order(_createdAt desc) [0...3]`;
