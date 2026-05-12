using DockerHW2.Common;
using DockerHW2.DTO;
using DockerHW2.Entities;
using DockerHW2.Service.Interface;
using Microsoft.AspNetCore.Identity;

namespace DockerHW2.Service;

public class AuthService : IAuthService
{
    private readonly UserManager<AppUser> _userManager;

    public AuthService(UserManager<AppUser> userManager)
    {
        _userManager = userManager;
    }
    async public Task<ApiResponse<string>> SignUpAsync(SignUpDto signUpDto)
    {
       var user = new AppUser
        {
            UserName = signUpDto.UserName,
            Email = signUpDto.Email,
        };

        var result = await _userManager.CreateAsync(user, signUpDto.Password);
        
        if(!result.Succeeded)
        {
            var errors = string.Join(", ", result.Errors.Select(e => e.Description));
            return ApiResponse<string>.ErrorResponse(errors);
        }

        return ApiResponse<string>.SuccessResponse("User registered successfully");
    }

    public async Task<ApiResponse<object>> SignInAsync(SignInDto signInDto)
    {
        var user = await _userManager.FindByEmailAsync(signInDto.UserNameOrEmail)
                   ?? await _userManager.FindByNameAsync(signInDto.UserNameOrEmail);

        if (user is null)
            return ApiResponse<object>.ErrorResponse("Invalid username or email");

        var result = await _userManager.CheckPasswordAsync(user, signInDto.Password);

        if (!result)
            return ApiResponse<object>.ErrorResponse("Invalid password");

        return new ApiResponse<object>
        {
            Success = true,
            Message = "User signed in successfully",
            Data = new
            {
                id = user.Id,
                username = user.UserName,
                email = user.Email
            }
        };
    }

}
