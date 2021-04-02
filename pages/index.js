import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import localize from "../localization";

export default function Home() {
  const router = useRouter();
  const { locale } = router;

  const changeLocale = React.useCallback(
    (newLocale) => {
      if (newLocale === "ar") {
        document.querySelector("body").dir = "rtl";
      } else {
        document.querySelector("body").dir = "ltr";
      }
      router.push(router.pathname, router.pathname, { locale: newLocale });
    },
    [router]
  );

  const MyButton = React.forwardRef(
    ({ onClick, href, title, className }, ref) => {
      return (
        <a className={className} href={href} onClick={onClick} ref={ref}>
          {title}
        </a>
      );
    }
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <div className="mb-3 text-blue-600">
          <Link href="/" passHref>
            <MyButton
              className="mr-3"
              onClick={() => changeLocale("en")}
              title="English"
            />
          </Link>
          <Link href="/ar" passHref>
            <MyButton
              className="mr-3"
              onClick={() => changeLocale("ar")}
              title="العربية"
            />
          </Link>
        </div>

        <h1 className="text-6xl font-bold">
          {localize(locale, "title")}{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          {localize(locale, "subtitle")}{" "}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code>
        </p>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {localize(locale, "poweredby")}{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ms-2" />
        </a>
      </footer>
    </div>
  );
}
