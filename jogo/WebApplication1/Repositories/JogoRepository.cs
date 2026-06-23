using GeneroJogo.Data;
using Microsoft.EntityFrameworkCore;        
using WebApplication1.Interfaces;  
using WebApplication1.Models;       

namespace WebApplication1.Repositories
{
    public class JogoRepository : IJogoRepository
    {
        private readonly BancoContext _context;

        public JogoRepository(BancoContext context)
        {
            _context = context;
        }

        public void AtualizarIdCorpo(Jogo jogoAtualizado)
        {
            try
            {
                Jogo jogoBuscado = _context.Jogos.Find(jogoAtualizado.IdJogo.ToString())!;

                if (jogoBuscado != null)
                {
                    jogoBuscado.Titulo = jogoAtualizado.Titulo;
                    jogoBuscado.Imagem = jogoAtualizado.Imagem;
                    jogoBuscado.IdGenero = jogoAtualizado.IdGenero;
                }
                _context.Jogos.Update(jogoBuscado!);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }
        public void AtualizarIdUrl(Guid id, Jogo jogoAtualizado)
        {
            try
            {
                Jogo jogoBuscado = _context.Jogos.Find(id.ToString())!;

                if (jogoBuscado != null)
                {
                    jogoBuscado.Titulo = jogoAtualizado.Titulo;
                    jogoBuscado.Imagem = jogoAtualizado.Imagem;
                    jogoBuscado.IdGenero = jogoAtualizado.IdGenero;
                }
                _context.Jogos.Update(jogoBuscado!);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public Jogo BuscarPorId(Guid id)
        {
            try
            {
                Jogo jogoBuscado = _context.Jogos
                    .Include(j => j.Genero)
                    .FirstOrDefault(j => j.IdJogo == id.ToString())!;

                return jogoBuscado;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Cadastrar(Jogo novoJogo)
        {
            try
            {
                novoJogo.IdJogo = Guid.NewGuid().ToString();

                _context.Jogos.Add(novoJogo);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Deletar(Guid id)
        {
            try
            {
                Jogo jogoBuscado = _context.Jogos.Find(id.ToString())!;
                if (jogoBuscado != null)
                {
                    _context.Jogos.Remove(jogoBuscado);
                }
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public List<Jogo> Listar()
        {
            try
            {
                List<Jogo> listaJogos = _context.Jogos.Include(j => j.Genero).ToList();
                return listaJogos;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}