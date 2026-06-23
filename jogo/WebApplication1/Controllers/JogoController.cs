
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;
using GeneroJogo.Data;

public class JogoController : Controller
{
    private readonly BancoContext _context;

    public JogoController(BancoContext context)
    {
        _context = context;
    }

    // GET: JOGOS
    public async Task<IActionResult> Index()    
    {
        return View(await _context.Jogos.ToListAsync());
    }

    // GET: JOGOS/Details/5
    public async Task<IActionResult> Details(string? idjogo)
    {
        if (idjogo == null)
        {
            return NotFound();
        }

        var jogo = await _context.Jogos
            .FirstOrDefaultAsync(m => m.IdJogo == idjogo);
        if (jogo == null)
        {
            return NotFound();
        }

        return View(jogo);
    }

    // GET: JOGOS/Create
    public IActionResult Create()
    {
        return View();
    }

    // POST: JOGOS/Create
    // To protect from overposting attacks, enable the specific properties you want to bind to.
    // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Create([Bind("IdJogo,Imagem,Titulo,IdGenero,Genero")] Jogo jogo)
    {
        if (ModelState.IsValid)
        {
            _context.Add(jogo);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
        return View(jogo);
    }

    // GET: JOGOS/Edit/5
    public async Task<IActionResult> Edit(string? idjogo)
    {
        if (idjogo == null)
        {
            return NotFound();
        }

        var jogo = await _context.Jogos.FindAsync(idjogo);
        if (jogo == null)
        {
            return NotFound();
        }
        return View(jogo);
    }

    // POST: JOGOS/Edit/5
    // To protect from overposting attacks, enable the specific properties you want to bind to.
    // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Edit(string? idjogo, [Bind("IdJogo,Imagem,Titulo,IdGenero,Genero")] Jogo jogo)
    {
        if (idjogo != jogo.IdJogo)
        {
            return NotFound();
        }

        if (ModelState.IsValid)
        {
            try
            {
                _context.Update(jogo);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JogoExists(jogo.IdJogo))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return RedirectToAction(nameof(Index));
        }
        return View(jogo);
    }

    // GET: JOGOS/Delete/5
    public async Task<IActionResult> Delete(string? idjogo)
    {
        if (idjogo == null)
        {
            return NotFound();
        }

        var jogo = await _context.Jogos
            .FirstOrDefaultAsync(m => m.IdJogo == idjogo);
        if (jogo == null)
        {
            return NotFound();
        }

        return View(jogo);
    }

    // POST: JOGOS/Delete/5
    [HttpPost, ActionName("Delete")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> DeleteConfirmed(string? idjogo)
    {
        var jogo = await _context.Jogos.FindAsync(idjogo);
        if (jogo != null)
        {
            _context.Jogos.Remove(jogo);
        }

        await _context.SaveChangesAsync();
        return RedirectToAction(nameof(Index));
    }

    private bool JogoExists(string? idjogo)
    {
        return _context.Jogos.Any(e => e.IdJogo == idjogo);
    }
}
