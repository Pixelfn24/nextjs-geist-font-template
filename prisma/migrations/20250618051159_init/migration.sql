-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "posterUrl" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "ageRating" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "cast" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
