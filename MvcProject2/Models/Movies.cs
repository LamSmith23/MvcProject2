namespace MvcProject2.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Movies : DbContext
    {
        public Movies()
            : base("name=Movies")
        {
        }

        public virtual DbSet<Movy> Movie { get; set; }
        //changed movies to movie

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}
