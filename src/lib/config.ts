/**
 * The actual product (login, dashboard, everything in BridgePay-Frontend)
 * lives on a separate subdomain from this marketing site. Falls back to
 * localhost:3001 for local dev — run BridgePay-Frontend on that port
 * alongside this site, or override via .env.local.
 */
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3001';

export const APP_LOGIN_URL = `${APP_URL}/login`;
export const APP_REGISTER_URL = `${APP_URL}/register`;
