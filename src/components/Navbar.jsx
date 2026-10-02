const articleLinks = [
  {
    href: '#chamber-news',
    title: 'Chamber News',
    style: 'news',
  },
  {
    href: '#chamber-meeting',
    title: 'Chamber Board Meeting',
    style: 'meeting',
  },
  {
    href: '#artisan-shop',
    title: 'Artisan Shop',
    style: 'artisan',
  },
  {
    href: 'https://www.zeffy.com/en-US/donation-form/scholarship-donation-20',
    title: 'Scholarship',
    style: 'scholarship',
    external: true,
  },
]

const membershipUrl =
  'https://www.zeffy.com/en-US/ticketing/indian-valley-chamber-of-commerces-memberships'

export default function Navbar() {
  return (
    <header className="publication-header" id="newsletter-top">
      <nav className="article-nav" aria-label="Newsletter sections">
        {articleLinks.map((link) => (
          <a
            className={`article-nav-link article-nav-${link.style}`}
            href={link.href}
            key={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
          >
            <span>{link.title}</span>

            {link.subtitle && (
              <span className="article-nav-subtitle">
                {link.subtitle}
              </span>
            )}

            {link.external && (
              <span className="sr-only"> (opens in a new tab)</span>
            )}
          </a>
        ))}
      </nav>

      <div className="publication-masthead">
        <div className="publication-title">
          <h1>October Newsletter</h1>
          <p>Indian Valley Chamber of Commerce</p>
        </div>

        <a
          className="membership-link"
          href={membershipUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <JoinIcon />
          <span>Membership</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </header>
  )
}

function JoinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="9" cy="7" r="3" />
      <path d="M3 20v-2a6 6 0 0 1 12 0v2" />
      <path d="M19 7v8M15 11h8" />
    </svg>
  )
}