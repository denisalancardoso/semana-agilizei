# https://docbehat.readthedocs.io/pt/v3.1/guides/1.gherkin.html
#language: pt

Funcionalidade: Cadastro

    Como usuário, desejo realizar um Cadastro
    Para que  possa acessar o sistema

Cenario: Cadastro de novo usuário no site
    Dado que acesso site
    Quando informar meus dados
    E Salvar
    Entao devo ser cadastrado com sucesso


# Given / Dado -> Contexto (Dado que)
# When / Quando -> Ação executada 
# Then / Entao -> Resultado Esperado
# And / E -> Continuidade do passo anterior