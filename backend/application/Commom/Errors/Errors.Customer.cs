using ErrorOr;

namespace application.Common.Errors
{
    public static class Errors
    {
        public static class Customer
        {
            public static Error DuplicateEmail => Error.Conflict
            (code: "customer.duplicate_email",
            description: "Customer with this email already exists");
        }
    }
}