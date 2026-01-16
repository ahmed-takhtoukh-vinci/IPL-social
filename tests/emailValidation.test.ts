
import { isValidEmail } from "../src/emailValidation";

describe("Email validation", () => {

  test("email valide", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
  });

  test("email sans @", () => {
    expect(isValidEmail("testexample.com")).toBe(false);
  });

  test("email avec espace", () => {
    expect(isValidEmail("test @example.com")).toBe(false);
  });

  test("email sans point dans domaine", () => {
    expect(isValidEmail("test@examplecom")).toBe(false);
  });

  test("email avec point en dernier caractère", () => {
    expect(isValidEmail("test@example.")).toBe(false);
  });

  test("email sans texte avant @", () => {
    expect(isValidEmail("@example.com")).toBe(false);
  });

  test("email sans texte après @", () => {
    expect(isValidEmail("test@")).toBe(false);
  });

});
