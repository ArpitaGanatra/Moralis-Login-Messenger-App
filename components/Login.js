import React from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";

const Login = () => {
    const { authenticate } = useMoralis();
    return (
        <div className="bg-black relative text-white">
            <h1>Login</h1>
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center">
                {/* Logo */}
                {/* Login Button */}
                <button
                    className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
                    onClick={authenticate}
                >
                    Login to Chat
                </button>
            </div>

            <div className="w-full h-screen">
                <Image
                    src="https://links.papareact.com/55n"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    );
};

export default Login;
