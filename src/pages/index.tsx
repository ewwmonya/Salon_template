import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Button, Flex, Text } from "@radix-ui/themes";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
		<>
    <Nav />
    
    </>
  );
}
