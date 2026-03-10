import { PortalNav } from '@/components/portal/PortalNav'

interface Props {
  children: React.ReactNode
  params: Promise<{ reservationCode: string }>
}

export default async function PortalLayout({ children, params }: Props) {
  const { reservationCode } = await params

  return (
    <div className="min-h-screen bg-bg">
      <PortalNav reservationCode={reservationCode} />
      <main className="pt-20 md:pt-14 max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {children}
      </main>
    </div>
  )
}
