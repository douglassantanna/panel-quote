namespace application.DTOs;
public record ViewCustomerDTO(int Id,
                          string Name,
                          string Email,
                          string TelephoneNumber,
                          DateTime BirthDate);