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
        public ActionResult<IEnumerable<AdminUser>> GetAdminUsers()
        {
            var adminUsers = context.AdminUsers.ToList();

            return Ok(adminUsers);
        }

        [HttpGet("{id:int}")]

        public ActionResult<AdminUser> GetAdminUser(int id)
        {
            var adminUser = context.AdminUsers.Find(id);

            return Ok(adminUser);
        }
    }
}
