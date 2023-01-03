function validateProfileForm(form) {
  // Convert fields into one object
  var arr = form.serializeArray();
  var data = {};
  $.each(arr, function (_i, field) {
    data[field.name] = field.value;
  });

  // Check for required fields
  var reqFields = ["institute", "branch", "year", "city", "phoneNumber"];
  for (index in reqFields) {
    var field = reqFields[index];
    if (
      !(field in data) ||
      validator.isEmpty(String(data[field]), { ignore_whitespace: true })
    ) {
      return [field + " is required"];
    }
    data[field] = String(data[field]);
  }

  // Check if phone number is valid
  if (!validator.isMobilePhone(data.phoneNumber)) {
    return ["Mobile phone number is not valid"];
  }
  return [];
}
