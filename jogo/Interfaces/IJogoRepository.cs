using System;
using System.Collections.Generic;
using WebApplication1.Models;

namespace WebApplication1.Interfaces
{
    public interface IJogoRepository
    {
        void Cadastrar(Jogo novoJogo);

        void AtualizarIdCorpo(Jogo jogoAtualizado);

        void AtualizarIdUrl(Guid id, Jogo jogoAtualizado);

        List<Jogo> Listar();

        void Deletar(Guid id);

        Jogo BuscarPorId(Guid id);
    }
}