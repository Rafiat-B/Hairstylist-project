-- CreateTable
CREATE TABLE "Stylist" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "website" TEXT,
    "emailContact" TEXT,
    "phoneContact" TEXT,
    "contactPreference" TEXT,
    "profileImage" TEXT,
    "workImages" TEXT[],
    "videos" TEXT[],
    "isVisible" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Stylist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Stylist_email_key" ON "Stylist"("email");
