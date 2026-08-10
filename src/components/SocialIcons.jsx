export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" style={{ isolation: "isolate" }} {...props}>
      <path fill="#1877F2" d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.25h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/>
    </svg>
  );
}

export function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" style={{ isolation: "isolate" }} {...props}>
      <path fill="#25D366" style={{fill: "#25D366"}} d="M12.01 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.1-1.34A9.94 9.94 0 0012.01 22C17.53 22 22 17.52 22 12S17.53 2 12.01 2zm0 18.06c-1.64 0-3.17-.48-4.46-1.3l-.32-.19-3.03.8.81-2.95-.21-.31A8.06 8.06 0 013.95 12c0-4.44 3.62-8.06 8.06-8.06S20.07 7.56 20.07 12s-3.62 8.06-8.06 8.06z"/>
      <path fill="#ffffff" style={{fill: "#ffffff"}} d="M16.97 14.24c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"/>
    </svg>
  );
}

export function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" style={{ isolation: "isolate" }} {...props}>
      <path fill="#000000" d="M16.6 5.82a4.28 4.28 0 01-3.02-1.36V15.5a5.65 5.65 0 11-4.87-5.6v2.5a3.15 3.15 0 103.15 3.15V0h2.6a4.28 4.28 0 004.28 4.28v2.5a6.75 6.75 0 01-2.14-.96z"/>
      <path fill="#25F4EE" d="M15.5 4.46a4.28 4.28 0 003.28 1.36V3.32A4.28 4.28 0 0115.5 0h-.9v4.46z" opacity=".85"/>
      <path fill="#FE2C55" d="M8.24 21.94a5.65 5.65 0 004.34-9.28V2.5h-2.6v10.16a3.15 3.15 0 11-1.74-.44v-2.5a5.65 5.65 0 000 12.22z" opacity=".85"/>
    </svg>
  );
}

export function InstagramIcon(props) {
  const id = 'ig-grad';
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" style={{ isolation: "isolate" }} {...props}>
      <defs>
        <radialGradient id={id} cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" fill={`url(#${id})`} />
      <rect x="6.2" y="6.2" width="11.6" height="11.6" rx="3.4" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.1" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1.1" fill="#fff" />
    </svg>
  );
}
