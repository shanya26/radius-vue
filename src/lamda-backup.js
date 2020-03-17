exports.handler = async (event,context,callback) => {
    var response = {
        statusCode: 500,
        errors: [
            {
              code:   "123",
              source: "/data/attributes/first-name",
              message:  "Value is too short",
              detail: "First name must contain at least three characters."
            },
            {
              code:   "225",
              source: "/data/attributes/password",
              message: "Passwords must contain a letter, number, and punctuation character.",
              detail: "The password provided is missing a punctuation character."
            },
            {
              code:   "226",
              source: "/data/attributes/password",
              message: "Password and password confirmation do not match."
            }
        ]
    }
    callback(JSON.stringify(response))
    //context.fail();
};



Lambda Error Regex  .*"status":400.*
Mapping Template  $input.path('$.errorMessage')