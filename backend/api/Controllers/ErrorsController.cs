using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;
// [ApiController]
// [Route("[controller]")]
public class ErrorsController : ControllerBase
{
    [NonAction]
    [Route("/error")]
    public IActionResult Error()
    {
        var context = HttpContext.Features.Get<IExceptionHandlerFeature>();
        Exception? exception = context?.Error;
        var code = exception switch
        {
            ArgumentException _ => 400,
            _ => 500
        };
        return Problem(detail: exception?.Message, statusCode: code);
    }
}