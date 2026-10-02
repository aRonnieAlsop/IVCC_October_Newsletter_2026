import { useState } from 'react'
import './NewsletterFooter.css'

// Replace with the published WordPress newsletter URL when ready.
const newsletterUrl = ''

// Later, import your finished share image and replace '' with that import.
const shareImage = ''

export default function NewsletterFooter() {
  const [message, setMessage] = useState('')
  const [manualLink, setManualLink] = useState('')

  const shareUrl = newsletterUrl || window.location.href
  const shareTitle = 'October Newsletter | Indian Valley Chamber of Commerce'

  function backToTop(event) {
    event.preventDefault()

    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })

    document.getElementById('page-top')?.scrollIntoView({
      behavior: 'instant',
      block: 'start',
    })
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setManualLink('')
      setMessage('Link copied!')
    } catch {
      setManualLink(shareUrl)
      setMessage('Select and copy the link below.')
    }
  }

  async function shareNewsletter() {
    const data = {
      title: shareTitle,
      text: 'A little look at what’s happening in Indian Valley.',
      url: shareUrl,
    }

    if (
      navigator.share &&
      (!navigator.canShare || navigator.canShare(data))
    ) {
      try {
        await navigator.share(data)
        setMessage('')
        return
      } catch (error) {
        if (error.name === 'AbortError') return
      }
    }

    await copyLink()
  }

  return (
    <>
      <section
        className="newsletter-share"
        aria-labelledby="newsletter-share-heading"
      >
        <div className="newsletter-share-inner">
          <div className="newsletter-share-preview">
            {shareImage ? (
              <img
                src={shareImage}
                alt="October newsletter share artwork"
                loading="lazy"
              />
            ) : (
              <div className="newsletter-share-placeholder">
                <span>Indian Valley</span>
                <strong>
                  Good things
                  <br />
                  to pass along.
                </strong>
                <span>October 2026</span>
              </div>
            )}
          </div>

          <div className="newsletter-share-copy">
            <h2 id="newsletter-share-heading">Pass it along.</h2>

            <div className="newsletter-share-actions">
              <button type="button" onClick={shareNewsletter}>
                Share
              </button>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  shareUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook (opens in a new tab)"
              >
                Facebook
              </a>

              <button type="button" onClick={copyLink}>
                Copy link
              </button>
            </div>

            <p className="newsletter-share-status" role="status">
              {message}
            </p>

            {manualLink && (
              <input
                className="newsletter-share-manual"
                aria-label="Newsletter link to copy"
                value={manualLink}
                readOnly
                onFocus={(event) => event.target.select()}
              />
            )}
          </div>
        </div>
      </section>

      <footer className="chamber-footer">
        <a
          className="chamber-back-top"
          href="#page-top"
          onClick={backToTop}
        >
          Back to Top ↑
        </a>

        <nav
          className="chamber-socials"
          aria-label="Connect with the Chamber"
        >
          <a
            href="https://www.facebook.com/IVCoC/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chamber Facebook (opens in a new tab)"
          >
            <SocialIcon type="facebook" />
          </a>

          <a
            href="https://www.instagram.com/indianvalley_chamber/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chamber Instagram (opens in a new tab)"
          >
            <SocialIcon type="instagram" />
          </a>

          <a
            href="https://indianvalleychamber.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chamber website (opens in a new tab)"
          >
            <SocialIcon type="website" />
          </a>

          <a
            href="mailto:chamberofcommerceiv@gmail.com"
            aria-label="Email the Chamber"
          >
            <SocialIcon type="email" />
          </a>
        </nav>

        <p className="chamber-copyright">
          © 2026 Indian Valley Chamber of Commerce
        </p>
      </footer>
    </>
  )
}

function SocialIcon({ type }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {type === 'facebook' && (
        <path
          fill="currentColor"
          stroke="none"
          d="M14 21v-8h3l.5-3H14V8.2c0-.9.3-1.7 1.8-1.7H18V3.2c-.5-.1-1.6-.2-2.8-.2C12.3 3 10.5 4.7 10.5 7.8V10H8v3h2.5v8H14z"
        />
      )}

      {type === 'instagram' && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.5"
            cy="6.5"
            r="1"
            fill="currentColor"
            stroke="none"
          />
        </>
      )}

      {type === 'website' && (
        <>
          <circle cx="12" cy="12" r="9" />
          <ellipse cx="12" cy="12" rx="4" ry="9" />
          <path d="M3 12h18M5 6.5h14M5 17.5h14" />
        </>
      )}

      {type === 'email' && (
        <>
          <rect x="3" y="5" width="18" height="14" rx="1" />
          <path d="m3 6 9 7 9-7" />
        </>
      )}
    </svg>
  )
}