using System.Data.Entity;
using System.Security.Cryptography;
using backend.Data;
using backend.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


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

        [HttpPost]
        public async Task<ActionResult<AdminUserDTO>> AddAdminUser([FromBody]AdminUserDTO user)
        {
            var hasher = new PasswordHasher<AdminUserDTO>();
            string hashedPassword = hasher.HashPassword(user, user.Password);
            var newUser = new AdminUser
            {
                UserName = user.UserName,
                Email = user.Email,
                PasswordHash = hashedPassword,
                Created = user.Created,
                LastLogin = user.LastLogin,
                IsOwner = user.IsOwner
            };

            context.AdminUsers.Add(newUser);
            await context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetAdminUser),
                new { id = newUser.Id }
            );

        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<AdminUser>> EditAdminUser(int id, [FromBody]AdminUserDTO newUser)
        {
            var adminUser = await context.AdminUsers.FindAsync(id);
            if (adminUser == null) return NotFound();

            adminUser.UserName = newUser.UserName;
            adminUser.Email = newUser.Email;
            adminUser.Created = newUser.Created;
            adminUser.LastLogin = newUser.LastLogin;
            adminUser.IsOwner = newUser.IsOwner;
            context.AdminUsers.Update(adminUser);

            await context.SaveChangesAsync();

            return Ok(adminUser);
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult<AdminUser>> DeleteAdminUser(int id)
        {
            var adminUser = await context.AdminUsers.FindAsync(id);
            if (adminUser == null) return NotFound();
            context.AdminUsers.Remove(adminUser);
            await context.SaveChangesAsync();

            return Ok(adminUser);
        }
    }
}
