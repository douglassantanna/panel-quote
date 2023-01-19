using domain.Common;

namespace domain.Entities.Customers;
public class Customer : BaseEntity
{
    public Customer(string fullName, string email, string telephoneNumber, DateTime birthDate)
    {
        FullName = fullName;
        Email = email;
        TelephoneNumber = telephoneNumber;
        BirthDate = birthDate;
    }

    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string TelephoneNumber { get; set; } = string.Empty;
    public DateTime BirthDate { get; set; }
}