using System.ComponentModel.DataAnnotations;

public class AdminUserDTO
{
    [Required]
    public required string UserName { get; set; }
    [Required]
    public required string Email { get; set; }
    [Required]
    public required string Password { get; set; }
    public DateTime Created {  get; set; } = DateTime.Now;
    public DateTime LastLogin { get; set; }
    public bool IsOwner { get; set; }
}