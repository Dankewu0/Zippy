'use client';
import { Menubar } from "@/components/ui/menubar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Avatar } from "@/components/ui/avatar";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const catalogItems = [
    { name: "Комплектующие ПК", href: "/" },
    { name: "Компьютерная периферия", href: "/" },
    { name: "Смартфоны и аудио", href: "/" },
    { name: "ТВ, Консоли", href: "/" },
    { name: "ПК и ноутбуки", href: "/" }
  ];

  return (
    <header className="flex items-center justify-between px-4 bg-[#F8F9FA]">
      <div className="flex items-center gap-2">
        <div className="bg-[#E9ECEF] text-[#212529] w-[62px] h-[32px] flex items-center justify-center">
        Zippy
        </div>
        <Switch/>
        <Sun className="h-4 w-4"/>
      </div>

      <Menubar className="absolute left-1/2 transform -translate-x-1/2 bg-[#E9ECEF]">
        <DropdownMenu>
          <DropdownMenuTrigger className="hover:bg-[#E1E2E3] px-4">
            Каталог
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {catalogItems.map((item, index) => (
              <DropdownMenuItem key={index} className="px-4 py-2 hover:bg-[#E1E2E3]">
                <Link href={item.href} className="w-full">
                  {item.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="/" className="hover:bg-[#E1E2E3] px-4">Наши магазины</Link>
        <Link href="/" className="hover:bg-[#E1E2E3] px-4">О нас</Link>
      </Menubar>

      <Avatar/>
    </header>
  )
}