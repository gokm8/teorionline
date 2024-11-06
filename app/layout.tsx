import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "TeoriOnlie | Danmarks bedste teoriprøver",
    description: "Teoriprøver",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
