import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, password, website, emailContact, phoneContact, contactPreference } = req.body;

    // Check if email already exists
    const existingStylist = await prisma.stylist.findUnique({ where: { email } });
    if (existingStylist) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Create new stylist
    const stylist = await prisma.stylist.create({
      data: {
        email,
        password, // Already hashed in the frontend
        website,
        emailContact,
        phoneContact,
        contactPreference,
        workImages: [],
        videos: [],
      },
    });

    return res.status(200).json(stylist);
  } catch (error) {
    console.error("Error in registration:", error);
    return res.status(500).json({ error: "Registration failed" });
  }
}