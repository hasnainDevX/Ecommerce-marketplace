"use client";
import { formatPrice } from "@/lib/utils";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
  SheetFooter,
} from "./ui/sheet";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
const Cart = () => {
  const itemCount = 0;
  const fee= 2;
  return (
    <>
      <Sheet>
        <SheetTrigger className="group -m-2 flex items-center p-2 ">
          <ShoppingCart
            aria-hidden="true"
            className="h-6 w-6 flex shrink-0 text-gray-400 group-hover:text-gray-500"
          />
          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
            0
          </span>
        </SheetTrigger>
        <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
          <SheetHeader className="space-y-2.5 pr-6">
            <SheetTitle>Cart (0)</SheetTitle>
          </SheetHeader>
          {itemCount > 0 ? (
            <>
              <div className="flex w-full flex-col pr-6">Cart items</div>
              <div className="space-y-4 pr-6 ">
                <Separator />
                <div className="space-y-1.5 pr-6">
                  <div className="flex">
                    <span className="flex-1 ">Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex">
                    <span className="flex-1 ">Transaction fee</span>
                    <span>{formatPrice(fee)}</span>
                  </div>
                  <div className="flex">
                    <span className="flex-1 ">Total:</span>
                    <span>{formatPrice(fee)}</span>
                  </div>
                </div>
                <SheetFooter>
                  <SheetTrigger asChild>
                    <Link href={"/cart"} className={buttonVariants({className:"w-full"})}>Continue to Checkout</Link>
                  </SheetTrigger>
                </SheetFooter>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <div className="relative mb-4 w-60 h-60 text-muted-foreground">
                <Image aria-hidden="true" src={"/hippo-empty-cart.png"} fill alt="empty-cart" />
              </div>
              <div className="text-xl font-semibold">Your cart is empty</div>
              <SheetTrigger asChild>
                <Link href={"/product"} className={buttonVariants({variant:"link", 
                  size:"sm",
                  className:"text-sm text-muted-foreground",
                })}>ADD ITEMS TO YOUR CART TO CHECKOUT</Link>
              </SheetTrigger>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Cart;
