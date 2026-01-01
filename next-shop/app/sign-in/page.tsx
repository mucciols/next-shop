'use client'
import Button from "@/components/Button";
import Field from "@/components/Field";
import Input from "@/components/Input";
import Page from "@/components/Page";
import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('event', { email, password });
  }

  return (
    <Page title="sign in">
      <form onSubmit={handleSubmit}>
        <Field label="Email">
          <Input required onChange={(event) => setEmail(event.target.value)} value={email} type="email"></Input>
        </Field>

        <Field label="Password">
          <Input required onChange={(event) => setPassword(event.target.value)} value={password} type="password"></Input>
        </Field>
        <Button type="submit">
          Sign In
        </Button>
      </form>
    </Page>
  );
}