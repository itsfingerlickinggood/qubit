import "./globals.css";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import Icon from "./logo.ico";
import Icon2 from "./logo.png";

import Image from "next/image";

export const metadata = {
  title: "Qubit",
  description: "entropy-com",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={Icon2.src} type="image/x-icon" />
      </head>
      <body>
        <header>
          <nav className="nav container">
            <Image
              src={Icon.src}
              width={50}
              height={50}
              alt="logo"
              className="border-working"
            />
            <h1 className="text-display-1 ml-11 text-edit">Qubit</h1>
            <div>
              {!(await isAuthenticated()) ? (
                <>
                  <LoginLink className="btn btn-ghost sign-in-btn">
                    Sign in
                  </LoginLink>
                  <RegisterLink className="btn btn-dark">Sign up</RegisterLink>
                </>
              ) : (
                <div className="profile-blob">
                  {user?.picture ? (
                    <img
                      className="avatar"
                      src={user?.picture}
                      alt="user profile avatar"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="avatar">
                      {user?.given_name?.[0]}
                      {user?.family_name?.[0]}
                    </div>
                  )}
                  <div>
                    <p className="text-heading-2">
                      {user?.given_name} {user?.family_name}
                    </p>

                    <LogoutLink className="text-subtle">Log out</LogoutLink>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <strong className="text-heading-2">Qubit</strong>
            <p className="footer-tagline text-body-3">
              Visit our{" "}
              <Link className="link" href="https://github.com/entropy-com">
                Org
              </Link>
            </p>

            <small className="text-subtle">
              © 2024 Qubit, Inc. All rights reserved
            </small>
          </div>
        </footer>
      </body>
    </html>
  );
}
