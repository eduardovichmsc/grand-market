'use client';
import { locationData } from "@/app/config/contacts.config";
import { useAtomValue, useSetAtom } from "jotai";
import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { isContactsModalOpen } from "../model/atoms";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ContactsModal = () => {
  const isOpen = useAtomValue(isContactsModalOpen);
  const setIsOpen = useSetAtom(isContactsModalOpen);

  const closeModal = () => setIsOpen(false);
  
  useEffect(() => {
    if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && 
        <motion.div 
          className="z-40 fixed w-full h-screen bg-black/40 flex 
          justify-center items-center"
          initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}>
          <motion.div 
          className="flex flex-col gap-10 bg-res-green p-10" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{duration: 0.3}}
          onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-10 *:text-white">
              <p className="section-title">Наши контакты</p>
              <XIcon className="transition duration-75 size-10 mt-2 cursor-pointer hover:text-white/80" onClick={closeModal}/>
            </div>

            <div className="flex flex-col gap-4">
              {
                locationData.map((city) => (
                  <div key={city.id} className="bg-white p-4 rounded-lg">
                    <div className="flex justify-between">
                      <h3 className="font-semibold text-xl mb-2">{city.name}</h3>
                      <div className="flex gap-4">
                        <Link href={city.social.instagram.href} className="size-8 relative">
                          <Image src={'/icons/instagram_d.svg'} fill className="p-1" alt="instagram" />
                        </Link>
                      </div>
                    </div>
                    <p className="text-base">{city.address}</p>
                  </div>
                ))
              }
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>
  )
}