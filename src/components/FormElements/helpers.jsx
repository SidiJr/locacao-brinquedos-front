import * as yup from "yup";

export const inputCss =
  "px-4 py-1 rounded-md border-2 border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition duration-150 ease-in-out w-full";

export function isValidCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, "");

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }

  let rev = 11 - (sum % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(9))) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }

  rev = 11 - (sum % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(10))) return false;

  return true;
}

export const generateSchema = (fields) => {
  const shape = {};

  fields.forEach((field) => {
    let validator;

    switch (field.type) {
      case "number":
        validator = yup
          .number()
          .typeError("Deve ser um número!")
          .transform((value, originalValue) =>
            originalValue === "" ? null : value
          )
          .nullable();
        break;

      case "email":
        validator = yup
          .string()
          .transform((value) => (value === "" ? undefined : value))
          .email("Email inválido!");
        break;

      case "select":
        validator = yup
          .mixed()
          .transform((value) => (value === "" ? undefined : value))
          .test(
            "not-empty",
            `${field.label || field.name} é obrigatório`,
            (value) => value !== "" && value !== null && value !== undefined
          );
        break;

      case "date":
        validator = yup
          .date()
          .typeError("Data inválida!")
          .transform((value, originalValue) =>
            originalValue === "" ? null : value
          )
          .nullable();
        break;

      case "tel":
        validator = yup
          .string()
          .transform((value) => (value === "" ? undefined : value))
          .matches(/^\d{10,11}$/, "Informe o DDD e o número de telefone!");
        break;

      default:
        validator = yup
          .mixed()
          .transform((value) => (value === "" ? undefined : value));
    }

    if (field.label?.toLowerCase() === "cpf") {
      validator = yup
        .string()
        .transform((value) => (value === "" ? undefined : value))
        .test("cpf-valido", "CPF inválido! O CPF deve conter somente números!", (value) =>
          value ? isValidCPF(value) : false
        );
    }

    if (field.required && typeof validator.required === "function") {
      validator = validator.required(`${field.label} é obrigatório!`);
    }

    shape[field.name] = validator;
  });

  return yup.object().shape(shape);
};
