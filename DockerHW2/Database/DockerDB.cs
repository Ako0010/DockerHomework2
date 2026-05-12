using DockerHW2.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DockerHW2.Database;

public class DockerDB : IdentityDbContext<AppUser,IdentityRole<Guid>,Guid>
{
    public DockerDB(DbContextOptions options) : base(options) {}

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<AppUser>(AppUser =>
        {
            AppUser.Property(x => x.UserName)
                            .IsRequired()
                            .HasMaxLength(150);

            AppUser.Property(x => x.Email)
                            .IsRequired()
                            .HasMaxLength(150);

            AppUser.HasIndex(u => u.UserName)
                            .IsUnique();

            AppUser.HasIndex(u => u.Email)
                            .IsUnique();
        });

    }
}
