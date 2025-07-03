
using backend.Data;
using backend.Entities;
using backend.Interfaces;
using backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace backend.Controllers
{
    [Authorize]
    [ApiController]
    [Route("admin/[controller]")] // /admin/adminusers
    public class AdminUsersController(DataContext context, ITokenService tokenService) : Controller
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AdminUser>>> GetAdminUsers()
        {
            var adminUsers = await context.AdminUsers.ToListAsync();

            return Ok(adminUsers);
        }

        [HttpGet("{id:guid}")]

        public async Task<ActionResult<AdminUser>> GetAdminUser(Guid id)
        {
            var adminUser = await context.AdminUsers.FindAsync(id);

            return Ok(adminUser);
        }

        [HttpPost]
        public async Task<ActionResult<AdminUserDTO>> AddAdminUser([FromBody] AdminUserDTO user)
        {
            if (user == null) return BadRequest("User data is null");
            if (await AdminUserExists(user.UserName)) return Conflict("User with this ID already exists");
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
                nameof(AddAdminUser),
                new { id = newUser.Id }
            );

        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<ActionResult<AdminUser>> LoginAdminUser([FromBody] LoginDTO login)
        {
            if (login == null) return BadRequest("Empty login data");
            var adminUser = await context.AdminUsers.FirstOrDefaultAsync(u => u.UserName == login.UserName);
            if (adminUser == null) return Unauthorized("Invalid username/password");
            var hasher = new PasswordHasher<AdminUser>();   
            PasswordVerificationResult result = hasher.VerifyHashedPassword(adminUser, adminUser.PasswordHash, login.Password);
            
            if (result == PasswordVerificationResult.Failed) return Unauthorized("Invalid username/password");
            else return Ok(tokenService.CreateToken(adminUser));

        }

        [HttpPut("{id:guid}")]
        public async Task<ActionResult<AdminUser>> EditAdminUser(Guid id, [FromBody] AdminUserDTO newUser)
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

        [HttpDelete("{id:guid}")]
        public async Task<ActionResult<AdminUser>> DeleteAdminUser(Guid id)
        {
            var adminUser = await context.AdminUsers.FindAsync(id);
            if (adminUser == null) return NotFound();
            context.AdminUsers.Remove(adminUser);
            await context.SaveChangesAsync();

            return Ok(adminUser);
        }
        
        private async Task<bool> AdminUserExists(string username)
        {
            return await context.AdminUsers.AnyAsync(e => e.UserName == username);
        }
    }
}
