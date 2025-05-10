using System.Data.Entity;
using backend.Data;
using backend.Entities;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("admin/[controller]")] // /admin/adminusers
    public class AdminUsersController(DataContext context) : Controller
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AdminUser>>> GetAdminUsers()
        {
            var adminUsers = await context.AdminUsers.ToListAsync();

            return Ok(adminUsers);
        }

        [HttpGet("{id:int}")]

        public async Task<ActionResult<AdminUser>> GetAdminUser(int id)
        {
            var adminUser = await context.AdminUsers.FindAsync(id);

            return Ok(adminUser);
        }
    }
}
