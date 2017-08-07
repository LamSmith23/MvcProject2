using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MvcProject2.Startup))]
namespace MvcProject2
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
