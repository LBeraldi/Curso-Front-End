Deve ser usado sempre que houver a possibilidade de ocorrer   
um erro no programa

```
try{
funçãoQuePodeGerarErro()
//  CÓDIGO COM POSSIBILIDADE DE GERAR ERRO
}catch (error)[
console.error(error)
//  LIDAR COM O ERRO SEM COMPROMETER O RESTANTE DO PROGRAMA
]
```