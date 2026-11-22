import { notFound } from 'next/navigation'
import { FoodShareApp } from '@/components/foodshare-app'
import type { Metadata } from 'next'

const sections = ['stock', 'associations', 'requests', 'submit', 'statistics'] as const
type Section = typeof sections[number]
export function generateStaticParams() { return sections.map((section) => ({ section })) }
export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> {
  const { section } = await params
  const labels: Record<Section, string> = { stock: 'Gestion du stock', associations: 'Associations', requests: 'Demandes de dons', submit: 'Nouvelle demande', statistics: 'Statistiques' }
  return { title: labels[section as Section] ? `${labels[section as Section]} · FoodShare` : 'FoodShare' }
}
export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  if (!sections.includes(section as Section)) notFound()
  return <FoodShareApp section={section as Section} />
}
