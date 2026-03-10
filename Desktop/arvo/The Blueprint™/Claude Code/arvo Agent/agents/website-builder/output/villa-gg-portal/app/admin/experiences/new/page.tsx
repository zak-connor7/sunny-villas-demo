'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input, Textarea, Select } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export default function NewExperiencePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    name: '',
    slug: '',
    category: 'FOOD',
    description: '',
    duration_text: '',
    price_eur: '',
    price_note: '',
    image_url: '',
    available: 'true',
    sort_order: '99',
  })

  function set(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function handleNameChange(name: string) {
    setForm((f) => ({ ...f, name, slug: slugify(name) }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/experiences', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          price_eur: Math.round(parseFloat(form.price_eur) * 100),
          sort_order: parseInt(form.sort_order),
          available: form.available === 'true',
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.error || 'Failed to create experience.')
        setLoading(false)
        return
      }

      router.push('/admin/experiences')
    } catch {
      setError('Something went wrong.')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <Link href="/admin/experiences" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-muted hover:text-white transition-colors font-semibold mb-4">
          <ArrowLeft size={12} />
          Back
        </Link>
        <h1 className="font-display text-white leading-none" style={{ fontSize: '40px' }}>ADD EXPERIENCE</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-surface border border-border p-6 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Name"
            value={form.name}
            onChange={(e) => handleNameChange(e.target.value)}
            placeholder="Private Chef Dinner"
            required
            className="col-span-2 sm:col-span-1"
          />
          <Input
            label="Slug (URL)"
            value={form.slug}
            onChange={(e) => set('slug', e.target.value)}
            placeholder="private-chef-dinner"
            required
            className="font-mono"
          />
        </div>

        <Select
          label="Category"
          value={form.category}
          onChange={(e) => set('category', e.target.value)}
        >
          {['FOOD', 'AIR', 'LAND', 'SEA', 'CULTURE', 'PARTY', 'HEALTH'].map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </Select>

        <Textarea
          label="Description"
          value={form.description}
          onChange={(e) => set('description', e.target.value)}
          rows={4}
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <Input label="Duration" value={form.duration_text} onChange={(e) => set('duration_text', e.target.value)} placeholder="3 hours" />
          <Input label="Price (€)" type="number" step="0.01" value={form.price_eur} onChange={(e) => set('price_eur', e.target.value)} required placeholder="1500.00" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Input label="Price Note" value={form.price_note} onChange={(e) => set('price_note', e.target.value)} placeholder="per group (up to 20)" />
          <Input label="Sort Order" type="number" value={form.sort_order} onChange={(e) => set('sort_order', e.target.value)} />
        </div>

        <Input label="Image URL" type="url" value={form.image_url} onChange={(e) => set('image_url', e.target.value)} placeholder="https://..." />

        <Select label="Status" value={form.available} onChange={(e) => set('available', e.target.value)}>
          <option value="true">Active (visible to guests)</option>
          <option value="false">Hidden</option>
        </Select>

        {error && <p className="text-[12px] text-danger">{error}</p>}

        <div className="flex gap-3 pt-2">
          <Button type="submit" loading={loading}>Create Experience</Button>
          <Link href="/admin/experiences"><Button type="button" variant="ghost">Cancel</Button></Link>
        </div>
      </form>
    </div>
  )
}
