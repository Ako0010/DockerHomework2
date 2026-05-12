using System.ComponentModel.DataAnnotations;

namespace DockerHW2.DTO;

public class SignInDto
{
    [Required]
    public string UserNameOrEmail { get; set; } = string.Empty;

    [Required]
    public string Password { get; set; } = string.Empty;

}
