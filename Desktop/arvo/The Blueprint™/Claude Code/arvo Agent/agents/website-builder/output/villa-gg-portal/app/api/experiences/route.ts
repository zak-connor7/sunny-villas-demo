import { NextRequest, NextResponse } from 'next/server'
import { SAMPLE_EXPERIENCES } from '@/lib/sample-data'

// GET all experiences
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const adminAll = searchParams.get('all') === 'true'

  let experiences = SAMPLE_EXPERIENCES
  if (!adminAll) experiences = experiences.filter((e) => e.available)
  if (category) experiences = experiences.filter((e) => e.category === category)

  return NextResponse.json(experiences)
}

// POST create experience (admin)
export async function POST(request: NextRequest) {
  const body = await request.json()

  const required = ['name', 'slug', 'category', 'description', 'price_eur']
  for (const field of required) {
    if (body[field] === undefined || body[field] === '') {
      return NextResponse.json({ error: `${field} is required` }, { status: 400 })
    }
  }

  // In production: insert into Supabase experiences table
  const newExp = {
    id: `exp-${Date.now()}`,
    ...body,
  }

  return NextResponse.json(newExp, { status: 201 })
}
