import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email, password, website, emailContact, phoneContact, contactPreference } = await req.json();

    const existingStylist = await prisma.stylist.findUnique({ where: { email } });
    if (existingStylist) {
      return NextResponse.json({ error: "Email already exists" }, { status: 400 });
    }

    const stylist = await prisma.stylist.create({
      data: {
        email,
        password,
        website,
        emailContact,
        phoneContact,
        contactPreference,
        workImages: [],
        videos: [],
      },
    });

    return NextResponse.json(stylist, { status: 200 });
  } catch (error) {
    console.error("Error in registration:", error);
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}