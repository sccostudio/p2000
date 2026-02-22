import { client } from './client'

// Fetch site settings
export async function getSiteSettings() {
  const query = `*[_type == "siteSettings"][0] {
    restaurantName,
    instagramHandle,
    websiteUrl,
    email,
    phone,
    address,
    googleMapsLink,
    bookingPageLink,
    "menuPdfUrl": menuPdf.asset->url
  }`
  
  return await client.fetch(query)
}

// Fetch page by slug
export async function getPage(slug) {
  const query = `*[_type == "page" && slug.current == $slug][0] {
    title,
    slug,
    showContactInfo,
    content
  }`
  
  return await client.fetch(query, { slug })
}
