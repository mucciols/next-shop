
import Title from "@/components/title";
import Head from "next/head";
import NavBar from "./NavBar";

export default function Page({ title, children } : { children: React.ReactNode , title: React.ReactNode}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <NavBar>
          
        </NavBar>
      </header>
      <main className="p-2">
        <Title>{title}</Title>
        {children}
      </main>
    </>
  );
}