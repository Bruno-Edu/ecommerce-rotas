CREATE TABLE usuario (
  idusuario INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(15) NOT NULL,
  email VARCHAR(15) NOT NULL,
  senha VARCHAR(8) NOT NULL,
  telefone INTEGER(11) UNSIGNED NULL,
  PRIMARY KEY(idusuario)
);

CREATE TABLE produto (
  idcodigo INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  usuario_idusuario INTEGER UNSIGNED NOT NULL,
  nome VARCHAR(15) NOT NULL,
  categoria VARCHAR(15) NOT NULL,
  valor REAL NOT NULL,
  quantidade INTEGER UNSIGNED NOT NULL,
  descri VARCHAR(50) NOT NULL,
  PRIMARY KEY(idcodigo, usuario_idusuario),
  INDEX produto_FKIndex1(usuario_idusuario)
);


