"use client";
import Button from "@/components/Button";
import Field from "@/components/Field";
import Input from "@/components/Input";
import Page from "@/components/Page";
import { useState } from "react";
import { fetchJson } from "../api/api";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState({ loading: false, error: false });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState({ error: false, loading: true });
    try {
      const response = await fetchJson("api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
      });
      setState({ error: false, loading: false });
      // console.log("sign in response: ", response);
      router.push('/');
    } catch (error) {
      setState({ error: true, loading: false });
    }
  };

  return (
    <Page title="sign in">
      <form onSubmit={handleSubmit}>
        <Field label="Email">
          <Input
            required
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="email"
          ></Input>
        </Field>
        <Field label="Password">
          <Input
            required
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            type="password"
          ></Input>
        </Field>
        {state.error && <p className="text-red-700">Invalid credentials</p>}
        {state.loading ? (<p>...Loading</p>) : (
          <Button type="submit">Sign In</Button>
        ) }
      </form>
    </Page>
  );
}