-- CreateTable
CREATE TABLE `equipos` (
    `idEquipo` INTEGER NOT NULL AUTO_INCREMENT,
    `nombreEquipo` VARCHAR(255) NOT NULL,
    `institucion` VARCHAR(191) NOT NULL,
    `departamento` VARCHAR(191) NOT NULL,
    `municipio` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idEquipo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
