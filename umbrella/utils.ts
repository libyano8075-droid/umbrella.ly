import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

type PageName = "Home" | "Cart" | "Orders" | "AdminRequests" | "AdminOrders" | "AdminSettings" | "login" | "signup" | "Landing" | "settings";

export function createPageUrl(pageName: PageName): string {
    return `/${pageName}`;
}
