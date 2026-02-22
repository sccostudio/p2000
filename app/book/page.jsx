'use client'

import './book.css'
import { useEffect, useRef } from 'react'

export default function BookPage() {
  const widgetRef = useRef(null)

  useEffect(() => {
    if (!widgetRef.current) return
    if (widgetRef.current.querySelector('script')) return

    const script = document.createElement('script')
    script.src =
      '//www.opentable.com.au/widget/reservation/loader?rid=165665&type=standard&theme=tall&iframe=true&domain=comau&lang=en-AU&newtab=false&ot_source=Restaurant%20website'
    script.async = true

    widgetRef.current.appendChild(script)
  }, [])

  return (
    <div className="book-wrapper">

      <a href="/" className="logo" aria-label="Home">
        <span className="sr-only">Pellegrino 2000</span>
      </a>

      <div className="widget-area">
        <div ref={widgetRef} />
      </div>

      <div className="pattern-bottom" />

    </div>
  )
}
