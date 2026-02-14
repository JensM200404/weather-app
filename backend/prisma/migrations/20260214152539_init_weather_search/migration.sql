-- CreateTable
CREATE TABLE "WeatherSearch" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "units" TEXT NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "weatherDescription" TEXT NOT NULL,
    "searchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WeatherSearch_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "WeatherSearch_city_idx" ON "WeatherSearch"("city");
