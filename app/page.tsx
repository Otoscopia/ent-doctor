"use client";
import { useState } from "react";
import Footer from "./components/footer";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement sign in logic
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-8">Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="email" className="text-lg font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
            required
          />
          <label htmlFor="password" className="text-lg font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className="border border-gray-300 rounded-lg px-4 py-2"
            required
          />
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className="rounded"
            />
            <label htmlFor="rememberMe" className="text-lg font-medium">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-4 py-2"
          >
            Sign In
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
}
