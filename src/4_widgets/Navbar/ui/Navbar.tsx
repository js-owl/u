import { classNames } from "1_shared/libs/classNames/classNames";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return <div className={classNames(cls.Navbar, {}, [className])}></div>;
};
export default Navbar;
