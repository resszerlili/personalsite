using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using backend.Entities;
using backend.Interfaces;
using Microsoft.IdentityModel.Tokens;

namespace backend.Services;

public class TokenService(IConfiguration config) : ITokenService
{
    public string CreateToken(AdminUser user)
    {
        string secretKey = config["Jwt:Secret"]!;
        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));

        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);


        var claims = new List<Claim>
        {
            new(ClaimTypes.Email,user.Email ),
            new(ClaimTypes.NameIdentifier,user.UserName)
        };

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claims),
            Expires = DateTime.UtcNow.AddDays(1),
            SigningCredentials = credentials
        };

        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDescriptor);

        return tokenHandler.WriteToken(token);

    }
}
