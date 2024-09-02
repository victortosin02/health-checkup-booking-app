/* eslint-disable tailwindcss/enforces-shorthand */
import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <div className="flex items-center space-x-10">
            {/* Flex container for the text and logo */}
            <div className="flex items-center space-x-2">
              <Image
                src="/assets/icons/logo-icon.svg"
                height={1000}
                width={1000}
                alt="patient"
                className="mb-6 h-12 w-fit"
              />
              <span className="mb-4 text-xl font-bold text-white">MedHub</span>
            </div>
          </div>

          <PatientForm />

          <div className="text-14-regular mt-12 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 MedHub
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default Home;
