'use server'

import Image from "next/image";
import Switch from "components/Switch";

const Header = () => (
  <header className="flex justify-between">
    <Image priority src="/images/logo.svg" height={32} width={32} alt="Logo" />
    <Switch />
  </header>
);

export default Header;
