//3a)
type post = {
    autor: string,
    texto: string
}

type postList = Array<post>
    
const posts: postList = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]

//3b) R.: Entradas: posts, autorInformado, Saida: posts

function buscarPostsPorAutor(posts: postList, autorInformado: string): postList {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }