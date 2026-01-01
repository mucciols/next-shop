import Button from "@/components/Button";
import Field from "@/components/Field";
import Input from "@/components/Input";
import Page from "@/components/Page";

export default function SignInPage() {
  return (
    <Page title="sign in">
      <form>
        <Field label="Email">
          <Input type="email"></Input>
        </Field>

        <Field label="Password">
          <Input type="password"></Input>
        </Field>
        <Button>
          Sign In
        </Button>
      </form>
    </Page>
  );
}
