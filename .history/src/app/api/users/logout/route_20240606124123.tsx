import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = 
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

//we won't make any post request as we can simply clear out the login token
