using application.DTOs;
using domain.Entities.Customers;
using ErrorOr;
using MediatR;

namespace application.CustomerCommands.Create
{
    public record CustomerCommand(string FullName,
                                  string Email,
                                  string TelephoneNumber,
                                  DateTime BirthDate) : IRequest<ErrorOr<ViewCustomerDTO>>;

    public class CustomerCommandHandler : IRequestHandler<CustomerCommand, ErrorOr<ViewCustomerDTO>>
    {

        public async Task<ErrorOr<ViewCustomerDTO>> Handle(CustomerCommand request, CancellationToken cancellationToken)
        {
            var customer = new Customer(request.FullName,
                                        request.Email,
                                        request.TelephoneNumber,
                                        request.BirthDate);

            ViewCustomerDTO viewCustomerDTO = new(customer.Id,
                                                  customer.FullName,
                                                  customer.Email,
                                                  customer.TelephoneNumber,
                                                  customer.BirthDate);
            await Task.CompletedTask;
            return viewCustomerDTO;
        }
    }
}