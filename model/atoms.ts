import { atom } from "jotai";

export const isSidebarOpen = atom(false);
export const isAuthModalOpen = atom(false);
export const isContactsModalOpen = atom(false);

// authentication
export const isAuthenticated = atom(false);

// modals
export const isGlobalLoading = atom(false);
export const isProductModalShown = atom(false);
export const isCategoryModalShown = atom(false);
export const isBrandModalShown = atom(false);
export const isCountryModalShown = atom(false);

// modals contents
export const isProductEditing = atom(false);
export const editingProductId = atom<number | undefined>(undefined);
export const editingCategoryId = atom<number | null>(null);
export const editingBrandId = atom<number | null>(null);
export const editingCountrydId = atom<number | null>(null);

// alert
export const isAlertShown = atom(false);
export const alertContent = atom("");
