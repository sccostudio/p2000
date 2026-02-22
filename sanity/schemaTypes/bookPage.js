export default {
  name: 'bookPage',
  title: 'Book Page',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading on the Book page',
    },
    {
      name: 'bookingUrl',
      title: 'Booking URL',
      type: 'url',
      description: 'Link to the external booking platform',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Short description or instructions for booking',
    },
  ],
  preview: {
    prepare() {
      return { title: 'Book Page' }
    },
  },
}
