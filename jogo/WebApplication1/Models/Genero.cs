using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class Genero
    {
        [Key]
        public string IdGenero { get; set; } = Guid.NewGuid().ToString();

        [Required]
        public string Nome { get; set; } = string.Empty;
    }
}