export default {
  /*
  |--------------------------------------------------------------------------
  | Validation Language Lines
  |--------------------------------------------------------------------------
  |
  | The following language lines contain the default error messages used by
  | the validator class. Some of these rules have multiple versions such
  | as the size rules. Feel free to tweak each of these messages here.
  |
  */
  accepted: "The :field must be accepted.",
  after: "The :field must be a date after :date.",
  after_or_equal: "The :field must be a date after or equal to :date.",
  alpha: "The :field may only contain letters.",
  alpha_dash: "The :field may only contain letters, numbers, and dashes.",
  alpha_num: "The :field may only contain letters and numbers.",
  array: "The :field must be an array.",
  before: "The :field must be a date before :date.",
  before_or_equal: "The :field must be a date before or equal to :date.",
  between: {
    numeric: "The :field must be between :min and :max.",
    file: "The :field must be between :min and :max kilobytes.",
    string: "The :field must be between :min and :max characters.",
    array: "The :field must have between :min and :max items.",
  },
  boolean: "The :field field must be true or false.",
  date: "The :field is not a valid date.",
  different: "The :field and :other must be different.",
  email: "The :field must be a valid email address.",
  image: "The :field must be an image.",
  integer: "The :field must be an integer.",
  max: {
    numeric: "The :field may not be greater than :max.",
    file: "The :field may not be greater than :max kilobytes.",
    string: "The :field may not be greater than :max characters.",
    array: "The :field may not have more than :max items.",
  },
  mimetypes: "The :field must be a file of type: :values.",
  min: {
    numeric: "The :field must be at least :min.",
    file: "The :field must be at least :min kilobytes.",
    string: "The :field must be at least :min characters.",
    array: "The :field must have at least :min items.",
  },
  numeric: "The :field must be a number.",
  regex: "The :field format is invalid.",
  required: "The :field field is required.",
  required_if: "The :field field is required when :other is :value.",
  required_unless: "The :field field is required unless :other is in :value.",
  required_with: "The :field field is required when :values is present.",
  required_with_all: "The :field field is required when :values is present.",
  required_without: "The :field field is required when :values is not present.",
  required_without_all:
    "The :field field is required when none of :values are present.",
  same: "The :field and :other must match.",
  size: {
    numeric: "The :field must be :size.",
    file: "The :field must be :size kilobytes.",
    string: "The :field must be :size characters.",
    array: "The :field must contain :size items.",
  },
  string: "The :field must be a string.",
  url: "The :field format is invalid.",
};
