import jwt from "jsonwebtoken";

const SECRET_KEY =
  process.env.JWT_SECRET || "AComplexKey1234567890@!#$%^&*()_+"; // Gunakan ENV variable untuk keamanan

export function verifyToken(token: string | undefined): { id: number } | null {
  if (!token) {
    console.error("Token is missing");
    return null; // Token tidak ada
  }

  try {
    // Verifikasi token menggunakan secret key yang sama
    const decoded = jwt.verify(token, SECRET_KEY) as { id: number };

    if (!decoded || !decoded.id) {
      console.error("Token is invalid or missing user ID");
      return null; // Jika decode gagal atau tidak ada ID
    }

    return decoded; // Token valid, kembalikan ID user
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      console.error("Token has expired");
    } else if (error instanceof jwt.JsonWebTokenError) {
      console.error("Token is invalid");
    } else {
      console.error("Unknown JWT error", error);
    }

    return null; // Token tidak valid atau error lainnya
  }
}
