'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { SAMPLE_EXPERIENCES } from '@/lib/sample-data'
import { Input, Textarea, Select } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

export default function EditExperiencePage() {
  const params = useParams()
  const router = useRouter()

  const experience = SAMPLE_EXPERIENCES.find((e) => e.id === params.id)
  if (!experience) return notFound()

  const [form, setForm] = useState({
    name: experience.name,
    slug: experience.slug,
    category: experience.category,
    description: experience.description,
    duration_text: experience.duration_text || '',
    price_eur: (experience.price_eur / 100).toString(),
    price_note: experience.price_note || '',
    image_url: experience.image_url || '',
    available: experience.available.toString(),
    sort_order: experience.sort_order.toString(),
  })

  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)

  function set(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 600))
    setSaved(true)
    setLoading(false)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <Link href="/admin/experiences" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-muted hover:text-white transition-colors font-semibold mb-4">
          <ArrowLeft size={12} />
          All Experiences
        </Link>
        <h1 className="font-display text-white leading-none" style={{ fontSize: '32px' }}>
          {experience.name}
        </h1>
        <p className="text-muted text-sm mt-1">{experience.category}</p>
      </div>

      <form onSubmit={handleSave} className="bg-surface border border-border p-6 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <Input label="Name" value={form.name} onChange={(e) => set('name', e.target.value)} required />
          <Input label="Slug" value={form.slug} onChange={(e) => set('slug', e.target.value)} required className="font-mono" />
        </div>

        <Select label="Category" value={form.category} onChange={(e) => set('category', e.target.value)}>
          {['FOOD', 'AIR', 'LAND', 'SEA', 'CULTURE', 'PARTY', 'HEALTH'].map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </Select>

        <Textarea label="Description" value={form.description} onChange={(e) => set('description', e.target.value)} rows={4} required />

        <div className="grid grid-cols-2 gap-4">
          <Input label="Duration" value={form.duration_text} onChange={(e) => set('duration_text', e.target.value)} placeholder="3 hours" />
          <Input label="Price (€)" type="number" step="0.01" value={form.price_eur} onChange={(e) => set('price_eur', e.target.value)} required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Input label="Price Note" value={form.price_note} onChange={(e) => set('price_note', e.target.value)} />
          <Input label="Sort Order" type="number" value={form.sort_order} onChange={(e) => set('sort_order', e.target.value)} />
        </div>

        <Input label="Image URL" type="url" value={form.image_url} onChange={(e) => set('image_url', e.target.value)} />

        <Select label="Status" value={form.available} onChange={(e) => set('available', e.target.value)}>
          <option value="true">Active (visible to guests)</option>
          <option value="false">Hidden</option>
        </Select>

        <div className="flex gap-3 pt-2">
          <Button type="submit" loading={loading}>
            {saved ? '✓ Saved' : 'Save Changes'}
          </Button>
          <Link href="/admin/experiences"><Button type="button" variant="ghost">Cancel</Button></Link>
        </div>
      </form>
    </div>
  )
}
