<?php

$pdo = new PDO('sqlite: bd.sqlite');
$pdo->exec('CREATE TABLE IF NOT EXISTS tecnicos (cpf INTEGER PRIMARY KEY, nome TEXT, endereco TEXT, telefone INTEGER, especializacao TEXT, opcao TEXT)');

if (isset($_POST['tech-name'], $_POST['tech-end'], $_POST['tech-cpf'], $_POST['tech-nmb'], $_POST['tech-spc'])) {
    $cpf = $_POST['tech-cpf'];
    $nome = $_POST['tech-name'];
    $end = $_POST['tech-end'];
    $tel = $_POST['tech-nmb'];
    $spc = $_POST['tech-spc'];
    $opc = $_POST['opcao'];

    $stm = $pdo->prepare('INSERT INTO tecnicos(cpf,nome,endereco,telefone,especializacao,opcao) VALUES(?,?,?,?,?,?)');
    $stm->execute([$cpf, $nome, $end, $tel, $spc, $opc]);

    echo ("<script> alert('Seu formuário foi enviado com sucesso, entraremos em contato!');
    window.location.href='../trabalhe-conosco.html' </script>");

    die;
}