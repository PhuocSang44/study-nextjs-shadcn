import { NextResponse } from 'next/server'
import recipes from '../../../../_data/db.json'

export async function GET() {
  return NextResponse.json(recipes.recipes)
}