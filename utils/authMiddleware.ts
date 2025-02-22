import jwt from "jsonwebtoken";

const SECRET_KEY =
  process.env.JWT_SECRET || "AComplexKey1234567890@!#$%^&*()_+"; // Pastikan menggunakan ENV variable untuk keamanan

export function verifyToken(token: string | undefined): boolean {
  if (!token) {
    console.error("Token is missing");
    return false; // Token tidak ada
  }

  try {
    // Verifikasi token menggunakan secret key yang sama
    const decoded = jwt.verify(token, SECRET_KEY);

    if (!decoded) {
      console.error("Token is invalid or corrupted");
      return false; // Jika decode gagal
    }

    return true; // Token valid
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      console.error("Token has expired"); // Menangani kasus token kedaluwarsa
    } else if (error instanceof jwt.JsonWebTokenError) {
      console.error("Token is invalid"); // Token tidak valid
    } else {
      console.error("Unknown JWT error", error);
    }

    return false; // Token tidak valid atau error lainnya
  }
}
