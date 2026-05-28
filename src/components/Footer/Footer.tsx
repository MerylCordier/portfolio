export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <div className="footer-link-item">
          <a
            className="footer-link-icon"
            href="https://www.linkedin.com/in/meryl-cordier/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.79 2.66 4.79 6.12V21h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.74 0-2 1.35-2 2.75V21H9z" />
            </svg>
          </a>
          <span className="footer-link-label">LinkedIn</span>
        </div>
        <div className="footer-link-item">
          <a
            className="footer-link-icon"
            href="https://github.com/MerylCordier?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.49v-1.72c-2.77.6-3.35-1.18-3.35-1.18-.45-1.14-1.11-1.44-1.11-1.44-.9-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.52 2.34 1.08 2.91.82.09-.65.35-1.08.64-1.33-2.21-.25-4.54-1.11-4.54-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.83-2.33 4.68-4.55 4.92.36.31.68.92.68 1.86v2.75c0 .27.18.59.69.49A10 10 0 0 0 12 2z" />
            </svg>
          </a>
          <span className="footer-link-label">GitHub</span>
        </div>
        <div className="footer-link-item">
          <a
            className="footer-link-icon"
            href="https://merylcordier-cv.netlify.app/style/image/MerylCordier-VCARD.vcf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="vCard"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
              <path d="M15 3v5h5" />
              <path d="M7 13h10" />
              <path d="M7 17h6" />
            </svg>
          </a>
          <span className="footer-link-label">vCard</span>
        </div>
      </div>
    </footer>
  );
}
