namespace api.Models;
public class PreRegistration
{
    public int Id { get; private set; }
    public Customer Customer { get; private set; } = null!;
    public Address ResidencialAddress { get; private set; } = null!;
    public Address ComercialAddress { get; private set; } = null!;
    protected PreRegistration()
    {

    }
}
public class Customer
{
    public string Name { get; private set; } = string.Empty;
    public string Email { get; private set; } = string.Empty;
    public string Password { get; private set; } = string.Empty;
    public string Cpf { get; private set; } = string.Empty;
    public string Cellphone { get; private set; } = string.Empty;

}
public class Address
{
    public string Street { get; private set; } = string.Empty;
    public string Number { get; private set; } = string.Empty;
    public string ZipCode { get; private set; } = string.Empty;
    public string City { get; private set; } = string.Empty;
}
