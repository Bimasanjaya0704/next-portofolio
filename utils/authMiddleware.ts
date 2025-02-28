import jwt from "jsonwebtoken";

const SECRET_KEY =
  process.env.JWT_SECRET || "AComplexKey1234567890@!#$%^&*()_+";

export function verifyToken(token: string | undefined): { id: number } | null {
  if (!token || !token.startsWith("Bearer ")) {
    return null;
  }

  try {
    const extractedToken = token.split(" ")[1];
    const decoded = jwt.verify(extractedToken, SECRET_KEY) as { id: number };

    return decoded.id ? decoded : null;
  } catch {
    return null;
  }
}
