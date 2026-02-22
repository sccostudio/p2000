import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'restaurantName',
      type: 'string',
      title: 'Restaurant Name',
      initialValue: 'PELLEGRINO 2000',
    }),
    defineField({
      name: 'instagramHandle',
      type: 'string',
      title: 'Instagram Handle',
      description: 'Without the @ symbol',
      placeholder: 'PELLEGRINOS2000',
    }),
    defineField({
      name: 'websiteUrl',
      type: 'string',
      title: 'Website URL',
      placeholder: 'PELLEGRINO2000.COM',
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Reservations Email',
      placeholder: 'RESERVATIONS@PELLEGRINO2000.COM',
    }),
    defineField({
      name: 'phone',
      type: 'string',
      title: 'Phone Number',
      placeholder: '02 8593 0114',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Address',
      placeholder: '80 CAMPBELL STREET SURRY HILLS 2010',
    }),
    defineField({
      name: 'googleMapsLink',
      type: 'url',
      title: 'Google Maps Link',
    }),
    defineField({
      name: 'bookingPageLink',
      type: 'string',
      title: 'Booking Page Slug',
      description: 'e.g., "book" for /book page',
      placeholder: 'book',
    }),
    defineField({
      name: 'menuPdf',
      type: 'file',
      title: 'Menu PDF',
      description: 'Upload your menu PDF here',
      options: {
        accept: 'application/pdf',
      },
    }),
  ],
})
