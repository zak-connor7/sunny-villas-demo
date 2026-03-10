import { SignJWT, jwtVerify } from 'jose'

const secret = new TextEncoder().encode(
  process.env.PORTAL_JWT_SECRET || 'dev-secret-change-in-production'
)

export interface PortalSession {
  bookingId: string
  reservationCode: string
}

export async function signPortalToken(payload: PortalSession): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret)
}

export async function verifyPortalToken(token: string): Promise<PortalSession | null> {
  try {
    const { payload } = await jwtVerify(token, secret)
    return {
      bookingId: payload.bookingId as string,
      reservationCode: payload.reservationCode as string,
    }
  } catch {
    return null
  }
}
