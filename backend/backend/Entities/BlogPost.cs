using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Entities
{
    public class BlogPost
    {
    }
}
public class BlogPost
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid Id { get; set; }
    public required string Title { get; set; }
    public required string Content { get; set; }
    public required Guid AdminUserId { get; set; }
    public DateTime created { get; set; }
    public DateTime updated { get; set; }

}