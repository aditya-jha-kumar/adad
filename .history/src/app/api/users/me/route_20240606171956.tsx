import { getDataFromTokent } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const userID = await getD
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
