"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/utils/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setTokenAuth } from "@/utils/auth";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await login(username, password);
      setTokenAuth(data.token);
      router.push("/dashboard");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-lg p-6 bg-white dark:bg-primary shadow-accent rounded-lg shadow-md">
        <h2 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-center text-primary dark:text-accent">
          Login
        </h2>

        {error && <p className="text-red-500 text-center mt-3">{error}</p>}

        <form onSubmit={handleSubmit} className="mt-4">
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-3 border-accent"
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-3 border-accent"
            required
          />

          <Button
            type="submit"
            variant="default"
            size="default"
            className="w-full"
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
}
