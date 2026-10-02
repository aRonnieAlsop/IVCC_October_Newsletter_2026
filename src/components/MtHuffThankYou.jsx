import { useEffect, useRef, useState } from 'react'
import thankYouImage from '../assets/mt_huff_thank_you.png'
import './MtHuffThankYou.css'

const imageDescription =
  'Thank you, Mt. Huff Golf Course! For hosting our Chamber mixer on Wednesday, September 9, 2026, and treating everyone to delicious chicken strips on the house. We appreciate your generosity and hospitality! Indian Valley Chamber of Commerce.'

export default function MtHuffThankYou() {
  const dialogRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    const previousBodyOverflow = document.body.style.overflow
    const previousHtmlOverflow = document.documentElement.style.overflow

    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousHtmlOverflow
    }
  }, [isOpen])

  function openImage() {
    dialogRef.current.showModal()
    setIsOpen(true)
  }

  function closeImage() {
    dialogRef.current.close()
  }

  return (
    <section
      className="mt-huff-thank-you"
      aria-label="Thank you to Mt. Huff Golf Course"
    >
      <button
        className="mt-huff-image-button"
        type="button"
        onClick={openImage}
        aria-label="Enlarge the Mt. Huff Golf Course thank-you note"
        aria-haspopup="dialog"
      >
        <img
          src={thankYouImage}
          alt={imageDescription}
          loading="lazy"
          decoding="async"
        />
      </button>

      <dialog
        className="mt-huff-lightbox"
        ref={dialogRef}
        aria-label="Mt. Huff Golf Course thank-you note"
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeImage()
        }}
      >
        <button
          className="mt-huff-lightbox-close"
          type="button"
          onClick={closeImage}
          aria-label="Close enlarged image"
          autoFocus
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>

        <img
          className="mt-huff-lightbox-image"
          src={thankYouImage}
          alt={imageDescription}
        />
      </dialog>
    </section>
  )
}