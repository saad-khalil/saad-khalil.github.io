import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
const Nav = () => {
    return (
        <Navbar position="static" isBlurred={false} maxWidth="full" height="3rem">
            <NavbarBrand>
                <Link href="#"><p className="text-black">saadkhalil.</p></Link>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Link className=" text-[0.5rem] text-black " href="#">ABOUT</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className=" text-[0.5rem] text-black " href="#">BLOG</Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

export default Nav;