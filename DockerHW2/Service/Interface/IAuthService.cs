using DockerHW2.Common;
using DockerHW2.DTO;

namespace DockerHW2.Service.Interface;

public interface IAuthService
{
    Task<ApiResponse<object>> SignInAsync(SignInDto signInDto);
    Task<ApiResponse<string>> SignUpAsync(SignUpDto signUpDto);

}
