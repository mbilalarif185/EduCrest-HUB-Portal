import { NextRequest, NextResponse } from 'next/server';
import { pgPool } from '@/lib/db';
import bcrypt from 'bcryptjs';


export async function POST(req: NextRequest) {
   try {
      const { Fname, Lname, email, password, Cpassword } = await req.json();
     
      // Check if passwords match
      if (password !== Cpassword) {
         return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 })
      }

      // Hash the password before storing in DB
      const hashedPassword = await bcrypt.hash(password, 10)

      // Connect to the PostgreSQL database
      const client = await pgPool.connect()

      // Check if the email is already registered
      const userExists = await client.query('SELECT * FROM users WHERE email = $1', [email])
      if (userExists.rows.length > 0) {
         client.release() // Release client connection
         return NextResponse.json({ error: 'Email already registered' }, { status: 409 })
      }

      // Insert the new user into the database
      await client.query(`
         INSERT INTO users (first_name, last_name, email, password)
         VALUES ($1, $2, $3, $4)
      `, [Fname, Lname, email, hashedPassword])

      // Release client connection after the operation
      client.release()

      // Return success response
      return NextResponse.json({ message: 'User registered successfully' }, { status: 200 })

   } catch (error: any) {
      console.error(error)
      console.error("API error:", error);
      return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 })
   }
}
