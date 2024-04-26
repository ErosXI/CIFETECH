<?php


$pesquisa = $_POST["search-text"];

switch ($pesquisa) {
    case '20240405-01':
        header("location: ../id20240405-01.html");
        break;
        
    case '20240405-02':
        header("location: ../id20240405-02.html");
        break;
        
    case '20240405-03':
        header("location: ../id20240405-03.html");
        break;

    case '20240426-01':
        header("location: ../id20240426-01.html");
        break;

    case '20240428-01':
        header("location: ../id20240428-01.html");
        break;
    
    default:
        echo("<script> alert('Erro esse OS não foi reconhecido')</script>");
        break;
}

?>