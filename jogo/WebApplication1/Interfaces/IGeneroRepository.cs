using System;
using System.Collections.Generic;
using WebApplication1.Models;

namespace FilmesTorloni.WebAPI.Interfaces;

public interface IGeneroRepository
{
    void Cadastrar(Genero novoGenero);
    void AtualizarIdCorpo(Genero generoAtualizado);
    void AtualizarIdUrl(Guid id, Genero generoAtualizado);
    List<Genero> Listar();
    void Deletar(Guid id);
    Genero BuscarPorId(Guid id);

}
