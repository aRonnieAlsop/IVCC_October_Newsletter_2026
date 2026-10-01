import firstMarket from '../assets/first_market.png'
import openHouse from '../assets/open_house.png'
import taylorsvilleFestival from '../assets/tville_fall_festival.png'
import greenvilleFestival from '../assets/umc_fall_festival.png'
import nextMeeting from '../assets/next_mtg.png'
import halloween from '../assets/halloween.png'
import './EventsGrid.css'

const events = [
  {
    id: 'first-saturday-market',
    title: 'First Saturday Market',
    image: firstMarket,
    description:
      'Shop local artisans’ wares and goods from nearby farms at this monthly outdoor market, held every first Saturday, weather permitting.',
    day: 'Saturday',
    date: 'October 3, 2026',
    dateTime: '2026-10-03',
    time: '9 AM–2 PM',
    location: 'Coyote Karma parking lot',
    address: '15771 Highway 89, Crescent Mills, CA',
  },
  {
    id: 'genesee-open-house',
    title: 'Genesee Farm Open House',
    image: openHouse,
    description:
      'Tour the farm, explore ways to grow year-round, and meet the people helping our community build a healthier, more resilient food future.',
    day: 'Saturday',
    date: 'October 3, 2026',
    dateTime: '2026-10-03',
    time: '10 AM–2 PM',
    location: 'Genesee Farm',
    address: '8739 Genesee Road, Taylorsville, CA',
  },
  {
    id: 'taylorsville-fall-festival',
    title: 'Taylorsville Fall Festival',
    image: taylorsvilleFestival,
    description:
      'Browse quilts, handmade goods, art, and a bake sale at this returning community favorite. Stay for lunch, available for $10.',
    day: 'Saturday',
    date: 'October 3, 2026',
    dateTime: '2026-10-03',
    time: '10 AM–3 PM',
    location: 'Historic Taylorsville Hall',
    // Use the venue name until its street address is confirmed.
    address: null,
    mapQuery: 'Historic Taylorsville Hall, Taylorsville, CA',
  },
  {
    id: 'fall-into-greenville',
    title: 'Fall into Greenville',
    image: greenvilleFestival,
    description:
      'Live music, free food, games, and local vendors bring neighbors together—and help imagine a future community gathering place at Greenville UMC.',
    day: 'Sunday',
    date: 'October 4, 2026',
    dateTime: '2026-10-04',
    time: '11 AM–4 PM',
    location: 'Greenville United Methodist Church property',
    address: '206 Pine Street, Greenville, CA',
    locationNote: 'Next to The Spot',
  },
  {
    id: 'chamber-meeting',
    title: 'Chamber Board of Directors Meeting',
    image: nextMeeting,
    description:
      'Meet your Chamber and join the conversation. Current members, prospective members, and anyone curious about getting involved are welcome.',
    day: 'Monday',
    date: 'October 5, 2026',
    dateTime: '2026-10-05',
    time: '6 PM',
    location: 'Crescent Store',
    address: '15792 Highway 89, Crescent Mills, CA',
  },
  {
    id: 'community-halloween-day',
    title: 'Community Halloween Day',
    image: halloween,
    description:
      'Bring the family for free cookie decorating and face painting at Crescent Store. Keep an eye on the store’s social media for the confirmed event hours.',
    day: 'Saturday',
    date: 'October 24, 2026',
    dateTime: '2026-10-24',
    time: 'Time to be announced',
    location: 'Crescent Store',
    address: '15792 Highway 89, Crescent Mills, CA',
  },
]

function LocationLink({ event }) {
  const destination = event.mapQuery || event.address
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    destination
  )}`

  const tooltipId = `${event.id}-address`

  return (
    <div className="event-location">
      <a
        className="event-location-link"
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${event.location}. View location on Google Maps (opens in a new tab).`}
        aria-describedby={event.address ? tooltipId : undefined}
      >
        <span className="event-location-pin" aria-hidden="true">
          ⟟
        </span>

        <span>{event.location}</span>
      </a>

      {event.address && (
        <span
          className="event-address-tooltip"
          id={tooltipId}
          role="tooltip"
        >
          {event.address}
        </span>
      )}

      {event.locationNote && (
        <span className="event-location-note">
          {event.locationNote}
        </span>
      )}
    </div>
  )
}

export default function EventsGrid() {
  return (
    <section
      className="events-section"
      id="events"
      aria-labelledby="events-heading"
    >
      <header className="events-section-header">
        <p className="events-eyebrow">Around Indian Valley</p>
        <h2 id="events-heading">
          October’s first weekend is filling up.
        </h2>
      </header>

      <div className="events-grid">
        {events.map((event) => (
          <article
            className="event-card"
            id={event.id}
            key={event.id}
            aria-labelledby={`${event.id}-title`}
          >
            <div className="event-poster">
              <img
                src={event.image}
                alt={`${event.title} event poster`}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="event-card-body">
              <h3
                className="event-title"
                id={`${event.id}-title`}
              >
                {event.title}
              </h3>

              <p className="event-description">
                {event.description}
              </p>

              <div className="event-details">
                <time
                  className="event-date"
                  dateTime={event.dateTime}
                >
                  <span className="event-day">{event.day}</span>
                  <span>{event.date}</span>
                </time>

                <p className="event-time">{event.time}</p>

                <LocationLink event={event} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}