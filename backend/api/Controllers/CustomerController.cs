using application.CustomerCommands.Create;
using application.DTOs;
using ErrorOr;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;
[ApiController]
[Route("[controller]")]
public class CustomerController : ControllerBase
{
    private readonly ISender _mediator;
    public CustomerController(ISender mediator) =>
        _mediator = mediator;

    [HttpPost]
    [Route("create-customer")]
    public async Task<IActionResult> CreateCustomer([FromBody] CustomerCommand command)
    {
        ErrorOr<ViewCustomerDTO> result = await _mediator.Send(command);
        return result.Match(
            customer => Ok(customer),
            errors => Problem(errors.ToString())
        );
    }
}