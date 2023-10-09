import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <Link href="/">
      <Image width={150} alt="logo" src={require("../../../../public/logo.png")} />
    </Link>
  );
};

export default Logo;
