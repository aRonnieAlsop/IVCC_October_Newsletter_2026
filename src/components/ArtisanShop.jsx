import mercantileImage from '../assets/xMas.webp'
import './ArtisanShop.css'

const mercantileMapsUrl =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('147 Crescent St, Greenville, CA 95947')

export default function ArtisanShop() {
  return (
    <section
      className="artisan-shop"
      id="artisan-shop"
      aria-labelledby="artisan-shop-heading"
    >
      <div className="artisan-shop-inner">
        <header className="artisan-shop-header">
          <p className="artisan-eyebrow">
            Indian Valley Artisan Shoppe
          </p>

          <h2 id="artisan-shop-heading">
            Local makers.
            <br />
            Holiday treasures.
          </h2>

          <p className="artisan-season-dates">
            <time dateTime="2026-11-26">November 26, 2026</time>
            {' '}through{' '}
            <time dateTime="2026-12-20">December 20, 2026</time>
          </p>
        </header>

        <div className="artisan-overview">
          <div className="artisan-overview-copy">
            <h3>Your handmade goods belong here.</h3>

            <p>
              The Chamber’s holiday Artisan Shoppe returns this year
              at Indian Valley Mercantile in Greenville. Local artisans
              can sell their goods with no space rental or vendor fee,
              thanks to grant funding already awarded to the Chamber.
            </p>

            <p>
              After a well-attended first season at Crescent Country
              in Crescent Mills, we’re excited for a new home and
              another season of shopping local.
            </p>

            <a
              className="artisan-signup-button"
              href="https://www.zeffy.com/en-US/ticketing/artisan-market-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign up to sell
              <span className="artisan-sr-only">
                {' '}(opens in a new tab)
              </span>
            </a>

            <p className="artisan-signup-note">
              Free for local vendors.
            </p>
          </div>

          <figure className="artisan-mercantile-image">
            <img
              src={mercantileImage}
              alt="Holiday poster featuring Indian Valley Mercantile and two vintage elves"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

        <section
          className="artisan-venue"
          aria-labelledby="artisan-venue-heading"
        >
          <div className="artisan-venue-intro">
            <p className="artisan-eyebrow">This year’s home</p>

            <h3 id="artisan-venue-heading">
              A place for local creatives.
            </h3>

            <p>
              Jennifer and Andy Meyers’ vision for Indian Valley
              Mercantile extends beyond the holidays—making it a
              fitting home for this year’s shop.
            </p>

            <div className="artisan-location">
              <a
                className="artisan-location-link"
                href={mercantileMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-describedby="artisan-mercantile-address"
              >
                <span aria-hidden="true">⟟</span>
                The Indian Valley Mercantile
                <span className="artisan-sr-only">
                  {' '}(opens Google Maps in a new tab)
                </span>
              </a>

              <span
                className="artisan-location-tooltip"
                id="artisan-mercantile-address"
                role="tooltip"
              >
                147 Crescent St, Greenville, CA 95947
              </span>
            </div>
          </div>

          <figure className="artisan-venue-quote">
            <blockquote>
              <p>
                “The goal of The Indian Valley Mercantile is to be a
                home for local creatives. We think it is important to
                have an accessible place to sell local art and handmade
                goods while supporting local business, our school
                programs and providing jobs to Indian Valley residents.”
              </p>
            </blockquote>

            <figcaption>
              Jennifer &amp; Andy Meyers
              <span>Indian Valley Mercantile</span>
            </figcaption>
          </figure>
        </section>

        <div className="artisan-contact">
          <a
            className="artisan-email-button"
            href="mailto:chamberofcommerceiv@gmail.com?subject=Artisan%20Shop%20Question"
          >
            Questions?
          </a>
        </div>
      </div>
    </section>
  )
}