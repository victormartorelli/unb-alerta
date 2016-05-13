SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `projeto-lp` ;


-- -----------------------------------------------------
-- Table `projeto-lp`.`tb_tipoUsuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `projeto-lp`.`tb_tipoUsuario` ;

CREATE TABLE IF NOT EXISTS `projeto-lp`.`tb_tipoUsuario` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projeto-lp`.`tb_usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `projeto-lp`.`tb_usuario` ;

CREATE TABLE IF NOT EXISTS `projeto-lp`.`tb_usuario` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `CPF` BIGINT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `RG` INT NULL,
  `matricula` INT NULL,
  `sexo` CHAR NULL,
  `email` VARCHAR(45) NOT NULL,
  `login` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `status` TINYINT(1) NOT NULL,
  `data_nasc` DATE NULL,
  `tb_tipoUsuario_ID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC),
  INDEX `fk_tb_usuario_tb_tipoUsuario1_idx` (`tb_tipoUsuario_ID` ASC),
  UNIQUE INDEX `CPF_UNIQUE` (`CPF` ASC),
  CONSTRAINT `fk_tb_usuario_tb_tipoUsuario1`
    FOREIGN KEY (`tb_tipoUsuario_ID`)
    REFERENCES `projeto-lp`.`tb_tipoUsuario` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projeto-lp`.`tb_categoria`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `projeto-lp`.`tb_categoria` ;

CREATE TABLE IF NOT EXISTS `projeto-lp`.`tb_categoria` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projeto-lp`.`tb_localizacao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `projeto-lp`.`tb_localizacao` ;

CREATE TABLE IF NOT EXISTS `projeto-lp`.`tb_localizacao` (
  `longitude` FLOAT NOT NULL,
  `latitude` FLOAT NOT NULL,
  `ID` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projeto-lp`.`tb_ocorrencia`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `projeto-lp`.`tb_ocorrencia` ;

CREATE TABLE IF NOT EXISTS `projeto-lp`.`tb_ocorrencia` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `data` DATE NOT NULL,
  `hora` TIMESTAMP NOT NULL,
  `descricao` TEXT NULL,
  `foto` VARCHAR(45) NULL,
  `validade` CHAR NOT NULL,
  `atendida` TINYINT(1) NOT NULL,
  `emergencia` TINYINT(1) NOT NULL,
  `vitimado` TINYINT(1) NOT NULL,
  `resposta` VARCHAR(45) NULL,
  `usuario_ID` INT NOT NULL,
  `vigilante_ID` INT NOT NULL,
  `tb_categoria_ID` INT NOT NULL,
  `tb_localizacao_ID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC),
  INDEX `fk_tb_ocorrencia_tb_usuario1_idx` (`usuario_ID` ASC),
  INDEX `fk_tb_ocorrencia_tb_usuario2_idx` (`vigilante_ID` ASC),
  INDEX `fk_tb_ocorrencia_tb_categoria1_idx` (`tb_categoria_ID` ASC),
  INDEX `fk_tb_ocorrencia_tb_localizacao1_idx` (`tb_localizacao_ID` ASC))
ENGINE = MyISAM;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
