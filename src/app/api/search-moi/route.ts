import { NextRequest, NextResponse } from 'next/server';
import { pgPool } from '@/lib/db';  // Your database connection pool

// Handle the POST request for search-moi route
export async function POST(req: NextRequest) {
  try {
    const { universityName } = await req.json();  // Extract search query (Pakistani university name)

    // Check if universityName is provided
    if (!universityName) {
      return NextResponse.json({ error: 'University name is required' }, { status: 400 });
    }

    const client = await pgPool.connect();

    const normalizedName = universityName.trim().toLowerCase();
    const result = await client.query(
        `
          SELECT   
           pak_unis.university_name AS pak_uni_name,
              uk_unis.university_name,
              uk_unis.famous_for,
              uk_unis.ranking,
              uk_unis.image_url
          FROM moi_acceptance
          JOIN uk_unis ON moi_acceptance.uk_uni_id = uk_unis.id
          JOIN pak_unis ON moi_acceptance.pak_uni_id = pak_unis.id
          WHERE LOWER(pak_unis.university_name) LIKE '%' || $1 || '%'
        `,
        [normalizedName]
      );
      
    client.release();

    if (result.rows.length === 0) {
      return NextResponse.json({ message: 'No UK universities found accepting MOI from this Pakistani university' }, { status: 404 });
    }
    const pakUniName = result.rows[0].pak_uni_name;
    return NextResponse.json(
        {
          pak_uni_name: result.rows[0]?.pak_uni_name, // get it from the first row
          uk_universities: result.rows
        },
        { status: 200 }
      );
      

} catch (error) {
    console.error('Search MOI Error:', error);
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: 'Internal server error', details: message }, { status: 500 });
  }
  
}
