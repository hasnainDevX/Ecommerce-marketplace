"use client"
import { PRODUCT_CATEGORIES } from "@/config"
import { useEffect, useRef, useState } from "react"
import NavItem from "./NavItem"
import { useOnClickOutside } from "@/hooks/use-on-click-outside"
const NavItems = () => {
    const [activeIndex, setactiveIndex] = useState<
    null | number
    >(null)

    useEffect(() => {
      const listener = (e: KeyboardEvent) => {
          if (e.key === "Escape"){
            setactiveIndex(null)
          }
      }
      document.addEventListener("keydown",  listener)
    
      return () => {
        document.removeEventListener("keydown", listener)
      }
    }, [])
    

    const isAnyOpen = activeIndex !== null
    const navRef = useRef<HTMLDivElement | null >(null)
    useOnClickOutside(navRef, ()=> setactiveIndex(null))
  return (
    <div className="flex gap-4 h-full" ref={navRef}>
        {PRODUCT_CATEGORIES.map((category, i)=>{
            const isOpen = i === activeIndex;
            const handleOpen = () => {
                if(activeIndex === i){
                    setactiveIndex(null)
                }
                else{
                    setactiveIndex(i)
                }
            }
            return(
                <NavItem category={category} handleOpen={handleOpen} isOpen={isOpen} key={category.value} isAnyOpen={isAnyOpen}/>
            )
        })}
    </div>
  )
}
export default NavItems
