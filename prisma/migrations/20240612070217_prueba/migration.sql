-- CreateTable
CREATE TABLE "equipos" (
    "idEquipo" SERIAL NOT NULL,
    "nombreEquipo" VARCHAR(255) NOT NULL,
    "institucion" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,

    CONSTRAINT "equipos_pkey" PRIMARY KEY ("idEquipo")
);
