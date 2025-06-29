public class AdminUserDTO
{
    public required string UserName { get; set; }
    public required string Email { get; set; }
    public required string Password { get; set; }
    public DateTime Created {  get; set; } = DateTime.Now;
    public DateTime LastLogin { get; set; }
    public bool IsOwner { get; set; }
}