using DockerHW2.Common;
using DockerHW2.DTO;
using DockerHW2.Service.Interface;
using Microsoft.AspNetCore.Mvc;

namespace DockerHW2.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("sign-up")]
    public async Task<IActionResult> SignUp([FromBody] SignUpDto signUpDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ApiResponse<string>.ErrorResponse("Invalid input data"));

        var result = await _authService.SignUpAsync(signUpDto);

        if (!result.Success)
            return BadRequest(result);
        
        return Ok(result);
    }

    [HttpPost("sign-in")]
    public async Task<IActionResult> SignIn([FromBody] SignInDto signInDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ApiResponse<string>.ErrorResponse("Invalid input data"));

        var result = await _authService.SignInAsync(signInDto);

        if (!result.Success)
            return BadRequest(result);
        
        return Ok(result);
    }

}
