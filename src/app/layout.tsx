import type { Metadata } from "next";
import "./globals.css";
import "./graph.css";
export const metadata: Metadata={title:"MCA Debt Consultant | Business MCA strategy",description:"Educational and advisory support for business owners evaluating merchant cash advance payment structures and business cash flow."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
