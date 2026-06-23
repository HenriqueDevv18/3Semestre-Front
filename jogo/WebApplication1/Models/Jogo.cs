using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1.Models
{
    public class Jogo
    {
        [Key]
        public string IdJogo { get; set; } = Guid.NewGuid().ToString();

        public string? Imagem { get; set; }

        [Required]
        public string Titulo { get; set; } = string.Empty;

        [Required]
        public string IdGenero { get; set; } = string.Empty;

        [ForeignKey("IdGenero")]
        public virtual Genero? Genero { get; set; }
    }
}