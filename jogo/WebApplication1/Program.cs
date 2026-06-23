using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("BancoContext") ?? throw new InvalidOperationException("Connection string 'BancoContext' not found.");
builder.Services.AddDbContext<GeneroJogo.Data.BancoContext>(options =>
    options.UseSqlite("Data Source=jogos.db"));

var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run();
