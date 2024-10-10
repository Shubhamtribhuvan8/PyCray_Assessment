import React, { lazy, Suspense } from "react";
import { Bell, ChevronDown, Search } from "lucide-react";
import { motion } from "framer-motion";
import Image from "../ui/image";
import Spinner from "../ui/spinner";

const SideBar = lazy(() => import("./SideBar"));
const SummaryCards = lazy(() => import("./SummaryCards"));
const PropertyTables = lazy(() => import("./PropertyTables"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-full">
    <Spinner />
  </div>
);

export default function Assessment() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Suspense fallback={<LoadingFallback />}>
        <motion.div
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SideBar />
        </motion.div>
      </Suspense>

      <main className="flex-1 p-8 overflow-auto">
        <motion.div
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-[343px] pl-4 pr-10 py-2 border focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-[10px]"
            />
            <Search
              className="absolute right-4 top-2.5 text-gray-400"
              size={20}
            />
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="text-gray-500" />
              <span className="absolute top-0 right-0 block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            </div>

            <div className="flex items-center space-x-2">
              <Image
                src="https://s3-alpha-sig.figma.com/img/0b7d/dead/270613ec07e31b96acbc3a664717b0aa?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OpBAUG3Le9LHyNmS2bYZwY-xQ9nU8b3eGIDaiytMc7G8FSVyYzSUe19TZQA~FF7Joy5QpGYtENH7o7MTxVG1JOzuRB5eJ-RkoA1vV~JJ7KPkX9m6kPfZeTa~ukEgiWH0Kpp~XS40j9o6q6Cwq-7cApHFkaEpUN3FUt8MoJOplF8IJrWj9FcR3V6niz99WdsUzKDh4o75aTXOgptxfaBMGM6ZBXIH3kRvuF3tusFL-l9eIfcFaFXSKuCTqzuvHv6ytSDzpoaCmWI9C4CZe9DdN-~AsNDhnlJ7d9kxKkxSdbQOTUHRSlDtiun7lTRYuhsCNlUz1~rR14WH3u7kkW33VA__"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <span className="font-medium">Alex Johnson</span>
              <ChevronDown className="text-gray-500" size={20} />
            </div>
          </div>
        </motion.div>

        <motion.h2
          className="w-[630px] h-[42px] text-[24px] font-medium font-poppins mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Dashboard
        </motion.h2>

        <Suspense fallback={<LoadingFallback />}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SummaryCards />
          </motion.div>
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <PropertyTables />
          </motion.div>
        </Suspense>
      </main>
    </div>
  );
}
