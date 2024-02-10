"use client";

import { Dialog, Transition } from "@headlessui/react";
import CloseIcon from "@mui/icons-material/Close";
import React, { Dispatch, Fragment, SetStateAction } from "react";

interface IDrawerProps {
  children: React.ReactNode;
  drawerOpen: boolean;
  title: string;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const Drawer: React.FunctionComponent<IDrawerProps> = ({
  children,
  drawerOpen,
  title,
  setDrawerOpen,
}: IDrawerProps) => {
  return (
    <Transition.Root show={drawerOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setDrawerOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="font-semibold leading-6 text-lg text-gray-800">
                          {title}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-white text-zinc-500 hover:text-zinc-600 focus:outline-none"
                            onClick={() => setDrawerOpen(false)}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <CloseIcon style={{ fontSize: 28 }} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {children}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Drawer;
