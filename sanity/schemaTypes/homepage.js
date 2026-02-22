export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
      description: 'The main heading on the homepage',
    },
    {
      name: 'instagramHandle',
      title: 'Instagram Handle',
      type: 'string',
      description: 'e.g., @PELLEGRINOS2000',
    },
    {
      name: 'websiteUrl',
      title: 'Website URL',
      type: 'string',
      description: 'e.g., PELLEGRINO2000.COM',
    },
    {
      name: 'email',
      title: 'Reservations Email',
      type: 'string',
      description: 'e.g., reservations@pellegrino2000.com',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      description: 'e.g., +61 9455 0221',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      description: 'Physical address',
    },
    {
      name: 'googleMapsUrl',
      title: 'Google Maps Link',
      type: 'url',
      description: 'Link to Google Maps location',
    },
    {
      name: 'openingHours',
      title: 'Opening Hours',
      type: 'string',
      description: 'e.g., 5PM-late',
    },
    {
      name: 'menuPdf',
      title: 'Menu PDF',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    },                  // 👈 This closing }, was missing!
    {
      name: 'desktopLogo',
      title: 'Desktop Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mobileLogo',
      title: 'Mobile Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    prepare() {
      return { title: 'Homepage' }
    },
  },
}
