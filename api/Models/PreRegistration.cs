namespace api.Models;
public class PreRegistration
{
    public int Id { get; set; }
    public Customer Customer { get; set; } = null!;
    protected PreRegistration()
    {

    }
}
public class Customer
{
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public string Cpf { get; set; } = string.Empty;
    public string Cellphone { get; set; } = string.Empty;

}
public class Address
{
    public string Street { get; set; } = string.Empty;
    public string Number { get; set; } = string.Empty;
    public string ZipCode { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
}
