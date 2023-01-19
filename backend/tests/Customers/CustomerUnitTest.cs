using domain.Entities.Customers;
using FluentAssertions;

namespace tests.Customers;
public class CustomerUnitTest
{
    [Fact]
    public void GivenRigthArguments_CreateNewCustomer()
    {
        Customer customer = new("John", "j@j.com", "11941012994", DateTime.Now);
        customer.Should().NotBeNull();
    }
}