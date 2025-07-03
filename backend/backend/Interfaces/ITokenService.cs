using System;
using backend.Entities;

namespace backend.Interfaces;
public interface ITokenService
{
    public string CreateToken(AdminUser user);
}