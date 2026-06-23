using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace GeneroJogo.Data
{
    public class BancoContext : DbContext
    {
        public BancoContext(DbContextOptions<BancoContext> options) : base(options) { }

        public DbSet<Jogo> Jogos { get; set; }
        public DbSet<Genero> Generos { get; set; }
    }
}