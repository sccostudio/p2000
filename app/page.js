import { client } from '@/lib/sanity-client'
import { urlFor } from '@/lib/sanity-image'

async function getHomepageData() {
  const query = `*[_type == "homepage"][0]{
    mainHeading,
    instagramHandle,
    websiteUrl,
    email,
    phoneNumber,
    address,
    openingHours,
    "menuPdfUrl": menuPdf.asset->url,
    desktopLogo,
    mobileLogo
  }`

  try {
    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.error('Error fetching homepage data:', error)
    return null
  }
}

export default async function Home() {
  const data = await getHomepageData()

  // const fallback = {
  //   mainHeading: 'Neighbourhood trattoria in Surry Hills',
  //   instagramHandle: '@PELLEGRINOS2000',
  //   websiteUrl: 'PELLEGRINO2000.COM',
  //   email: 'reservations@pellegrino2000.com',
  //   phoneNumber: '+61 9455 0221',
  //   address: '80 CAMPBELL STREET SURRY HILLS 2010',
  //   openingHours: '5PM-late',
  //   menuPdfUrl: '/img/Food-Menu-Pellegrino-1.6.22.pdf',
  // }

  const content = {
    ...data,
    menuPdfUrl: data?.menuPdfUrl
  }

  const desktopLogoUrl = data?.desktopLogo
    ? urlFor(data.desktopLogo).url()
    : '/img/logo.png'

  const mobileLogoUrl = data?.mobileLogo
    ? urlFor(data.mobileLogo).url()
    : '/img/logo-mobile.png'

  return (
    <div className='container'>
      <header className='w-full'>
        <a href='/' className='logo'>
          <img
            src={desktopLogoUrl}
            alt='Pellegrino 2000'
            className='img-fluid d-none d-md-block'
          />
          <img
            src={mobileLogoUrl}
            alt='Pellegrino 2000'
            className='img-fluid d-block d-md-none'
          />
        </a>
        <nav>
          <ul className='nav'>
            <li>
              <a href={content.menuPdfUrl} target='_blank'>
                MENU
              </a>
            </li>
            <li>
              <a href='/book'>BOOK</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className='main'>
        <div className='row'>
          <div className='col'>
            <h1
              dangerouslySetInnerHTML={{
                __html: content.mainHeading.replace(
                  'trattoria',
                  '<br />&nbsp;trattoria'
                )
              }}
            />
          </div>
          <div className='col-auto d-none d-md-block'>
            <ul className='list-social'>
              <li>
                <a
                  href={`https://www.instagram.com/${content.instagramHandle.replace('@', '')}`}
                  target='_blank'
                >
                  {content.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.instagram.com/${content.instagramHandle.replace('@', '')}`}
                  target='_blank'
                >
                  {content.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.instagram.com/${content.instagramHandle.replace('@', '')}`}
                  target='_blank'
                >
                  {content.instagramHandle}
                </a>
              </li>
              <li>
                <a href='/'>{content.websiteUrl}</a>
              </li>
              <li>
                <a href='/'>{content.websiteUrl}</a>
              </li>
              <li>
                <a href='/'>{content.websiteUrl}</a>
              </li>
              <li>
                <a href={`mailto:${content.email}`}>
                  {content.email.toUpperCase()}
                </a>
              </li>
              <li>
                <a href={`mailto:${content.email}`}>
                  {content.email.toUpperCase()}
                </a>
              </li>
              <li>
                <a href={`mailto:${content.email}`}>
                  {content.email.toUpperCase()}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <div className='w-full'>
        <footer className='footer'>
          <div className='row'>
            <div className='col-auto'>
              <div className='row d-none d-md-flex'>
                <div className='col'>
                  <a href={`tel:${content.phoneNumber.replace(/\s/g, '')}`}>
                    {content.phoneNumber}
                  </a>
                </div>
                <div className='col-auto'>
                  <a href='/book'>RESERVATIONS ONLINE</a>
                </div>
              </div>
              <div className='d-block d-md-none'>
                <a href={`mailto:${content.email}`} className='email-mobile'>
                  {content.email.toUpperCase()}
                </a>
              </div>
              <address>{content.address}</address>
              <div className='d-block d-md-none'>
                <a
                  href={`https://www.instagram.com/${content.instagramHandle.replace('@', '')}`}
                  className='social-mobile'
                >
                  {content.instagramHandle}
                </a>
              </div>
            </div>
            <div className='col d-none d-md-block'>
              <div className='time'>{content.openingHours}</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
