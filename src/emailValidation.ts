
export function isValidEmail(email: string): boolean {

  if (email.includes(" ")) return false;

  const parts = email.split("@");
  if (parts.length !== 2) return false;

  const [localPart, domainPart] = parts;


  if (!localPart || !domainPart) return false;

  if (!domainPart.includes(".")) return false;
  if (domainPart.endsWith(".")) return false;

  return true;
}
