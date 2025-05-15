import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { pgPool } from '@/lib/db';



export async function POST(req: NextRequest) {
   try {
      const { email, password } = await req.json();

      // Connect to DB
      const client = await pgPool.connect();

      // Find user by email
      const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
      const user = result.rows[0];

      client.release();

      // If user not found
      if (!user) {
         return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
         return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
      }

      return NextResponse.json({ message: 'Login successful', user: { first_name: user.first_name, last_name: user.last_name, email: user.email } }, { status: 200 });

   } catch (error: any) {
      console.error('Signin error:', error);
      return NextResponse.json({ error: 'Internal server error', details: error.message }, { status: 500 });
   }
}
