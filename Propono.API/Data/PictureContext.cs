#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Propono.API.Models;

    public class PictureContext : DbContext
    {
        public PictureContext (DbContextOptions<PictureContext> options)
            : base(options)
        {
        }

        public DbSet<Propono.API.Models.Picture> Picture { get; set; }
    }
