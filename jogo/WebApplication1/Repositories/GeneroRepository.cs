using GeneroJogo.Data;
using WebApplication1.Models; 

namespace WebApplication1.Repositories
{
    public class GeneroRepository
    {
        private readonly BancoContext _context;

        
        public GeneroRepository(BancoContext context)
        {
            _context = context;
        }

   
        public void Cadastrar(Genero novoGenero)
        {
            _context.Generos.Add(novoGenero);
            _context.SaveChanges();
        }

     
        public List<Genero> Listar()
        {
            return _context.Generos.ToList();
        }

        public Genero BuscarPorId(string id)
        {
            return _context.Generos.Find(id)!;
        }

        public void Atualizar(Genero generoAtualizado)
        {
            _context.Generos.Update(generoAtualizado);
            _context.SaveChanges();
        }

        public void Deletar(string id)
        {
            var generoBuscado = _context.Generos.Find(id);
            if (generoBuscado != null)
            {
                _context.Generos.Remove(generoBuscado);
                _context.SaveChanges();
            }
        }
    }
}