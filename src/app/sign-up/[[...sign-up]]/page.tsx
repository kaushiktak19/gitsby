import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
            <SignUp/>
        </div>
    )  
}