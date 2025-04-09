
import { Button, Flex, Text } from "@radix-ui/themes"
import { FiLogIn } from "react-icons/fi"
import { TiShoppingCart } from "react-icons/ti";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrLinkNext } from "react-icons/gr";
import { useRef, useState } from "react";




const Nav = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null);

    const toggleNav = () => {
        setShowLinks(!showLinks)
    }
    


    return (
    <header className="bg-green-950 px-6 py-8 border-b">
<div className="hidden lg:block">
    
        <Flex justify='between' align={"center"} >
                  {/* Logo */}
            <Text size="6" weight="bold" className="flex flex-col">
              <span className="text-lime-100">DeLuca</span> <span className=" text-yellow-300">Hair</span>
            </Text>
        {/* Links */}
    
            <Flex justify={"center"} gap={'8'} >
                <a href="?#" className="text-lime-100">Home</a>
                <a href="?#" className="text-lime-100">Services</a>
                <a href="?#" className="text-lime-100">Shop Merch</a>
                <a href="?#" className="text-lime-100">Blog</a>
                <a href="?#" className="text-lime-100">About Us</a>
            </Flex>
            <Flex justify={"between"} gap={"6"} align={"center"}>
                <Button className="text-white" variant="surface" size={'2'}>Login <FiLogIn /> </Button>
                <button className="text-green-200"><TiShoppingCart className="text-3xl hover:text-green-100 duration-300 hover:scale-105"/></button>
            </Flex>
    
        </Flex>
</div>

    <div className="lg:hidden block">
    <Flex justify='between' align={"center"} >
                  {/* Logo */}
            <Text size="6" weight="bold" className="flex flex-col">
              <span className="text-lime-100">DeLuca</span> <span className=" text-yellow-300">Hair</span>
            </Text>
        <Flex justify={"between"} gapX={"5"}>
            <button><TiShoppingCart className="text-white text-4xl hover:scale-105 duration-500" /></button>
            <button onClick={()=> toggleNav()}><RxHamburgerMenu className="text-white text-5xl" /></button>
        </Flex>
    </Flex>
    <Flex direction={"column"} gapY={"6"} className="text-white my-5 tracking-[.40rem] font-bold ">
            <ul className={`${showLinks ? 'flex duration-300' : 'hidden duration-500'} flex-col duration-300 gap-y-4`} >
                <li><a href="?#" className="text-lime-100 hover:text-lime-950 hover:bg-lime-100 duration-300 flex justify-between items-center p-5">Home <GrLinkNext className="text-green-950 font-bold"/></a></li>
                <li><a href="?#" className="text-lime-100 hover:text-lime-950 hover:bg-lime-100 duration-300 flex justify-between items-center p-5">Services <GrLinkNext className="text-green-950 font-bold"/></a></li>
                <li><a href="?#" className="text-lime-100 hover:text-lime-950 hover:bg-lime-100 duration-300 flex justify-between items-center p-5">Shop Merch <GrLinkNext className="text-green-950 font-bold"/></a></li>
                <li><a href="?#" className="text-lime-100 hover:text-lime-950 hover:bg-lime-100 duration-300 flex justify-between items-center p-5">Blog <GrLinkNext className="text-green-950 font-bold"/></a></li>
                <li><a href="?#" className="text-lime-100 hover:text-lime-950 hover:bg-lime-100 duration-300 flex justify-between items-center p-5">About Us <GrLinkNext className="text-green-950 font-bold"/></a></li>
            </ul>
    </Flex>
    </div>

    </header>
  )
}
export default Nav