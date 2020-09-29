Feature: Listagem

    Como usuário, desejo acessar a Listagem
    Para que possa visualizar os dados de cadastro

Scenario: Listagem sem registros
    Given que o site não possui registros
    When acessar a listagem 
    Then devo visualizar a listagem vazia

Scenario: Listagem com apenas um registro
    Given que o site possui apenas um registro 
    When acessar a listagem
    Then devo visualizar apenas um registro