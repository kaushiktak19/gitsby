//1st
// 'use client';
// import { useState } from "react";
// import { SignIn } from "@clerk/nextjs";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";

// export default function HomePage() {
//   const [showSignIn, setShowSignIn] = useState(false);

//   const handleClickOutside = (e: React.MouseEvent) => {
//     const target = e.target as HTMLElement; // Cast target to HTMLElement
//     if (target.id === "overlay") {
//       setShowSignIn(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800">
//       {/* Header */}
//       <header className="w-full backdrop-blur-lg bg-white/80 shadow-md p-4 fixed top-0 left-0 z-20">
//         <div className="flex items-center justify-between max-w-7xl mx-auto">
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center justify-center h-12 w-12 bg-blue-600 rounded-full shadow-md overflow-hidden">
//               <img src="/gitsby.webp" alt="Logo" className="h-full w-full object-cover" />
//             </div>
//             <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
//               Gitsby
//             </h1>
//           </div>
//           <Button
//             onClick={() => setShowSignIn((prev) => !prev)}
//             className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full shadow-lg transform transition-all hover:scale-105"
//           >
//             Sign In / Sign Up
//           </Button>
//         </div>
//       </header>

//       {/* Sign-In Modal */}
//       {showSignIn && (
//         <div
//           id="overlay"
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30"
//           onClick={handleClickOutside}
//         >
//           <SignIn />
//         </div>
//       )}

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto text-center pt-28 px-4">
//         {/* Hero Section */}
//         <div className="text-center max-w-4xl mt-3">
//           <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
//             Get the Answers You Need for Your Project Repositories
//           </h2>
//           <p className="mt-5 text-xl text-gray-700 leading-relaxed">
//             Integrate GitHub repositories, get summaries of the latest commits, ask queries about code, upload meeting audio for insights, and collaborate with team members—all on a single AI-powered platform.
//           </p>
//           <Button
//             onClick={() => setShowSignIn(true)}
//             className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg transform transition-all hover:scale-105"
//           >
//             Get Started
//           </Button>
//         </div>

//         {/* Features Section */}
//         <div className="grid md:grid-cols-3 gap-8 mt-16 w-full">
//           <Card className="p-8 bg-white shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 rounded-2xl transform hover:-translate-y-1">
//             <h4 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
//               Track Commits
//             </h4>
//             <p className="text-center text-gray-600">
//               Access and summarize your repository's latest commit history with ease.
//             </p>
//           </Card>
//           <Card className="p-8 bg-white shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 rounded-2xl transform hover:-translate-y-1">
//             <h4 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
//               Code Summary
//             </h4>
//             <p className="text-center text-gray-600">
//               Analyze and get answers for queries related to your project files, enhancing understanding and productivity.
//             </p>
//           </Card>
//           <Card className="p-8 bg-white shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 rounded-2xl transform hover:-translate-y-1">
//             <h4 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
//               Meeting Analysis
//             </h4>
//             <p className="text-center text-gray-600">
//               Upload audio meeting recordings and get transcriptions and actionable insights.
//             </p>
//           </Card>
//         </div>

//         {/* How It Works Section */}
//         <div className="bg-gradient-to-r from-gray-200 to-gray-300 py-16 px-8 mt-16 w-full rounded-md shadow-inner">
//           <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
//             How It Works
//           </h3>
//           <div className="grid md:grid-cols-3 gap-12 text-center">
//             <div>
//               <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white">
//                 1
//               </div>
//               <h4 className="mt-6 text-lg font-semibold text-gray-800">
//                 Connect Your Repository
//               </h4>
//               <p className="mt-3 text-gray-600">
//                 Start by linking your GitHub repository for commit tracking and analysis.
//               </p>
//             </div>
//             <div>
//               <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-600 text-white">
//                 2
//               </div>
//               <h4 className="mt-6 text-lg font-semibold text-gray-800">
//                 Ask Questions & Upload Meetings
//               </h4>
//               <p className="mt-3 text-gray-600">
//                 Extract meaningful insights from files, retrieve relevant code snippets for your queries, and generate comprehensive summaries of meeting recordings.
//               </p>
//             </div>
//             <div>
//               <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-600 text-white">
//                 3
//               </div>
//               <h4 className="mt-6 text-lg font-semibold text-gray-800">
//                 Collaborate Effectively
//               </h4>
//               <p className="mt-3 text-gray-600">
//                 Invite members to the project, share insights, manage projects, and keep your team aligned.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="mt-6"></div>
//       </div>
//     </div>
//   );
// }

//2nd
'use client';
import { useState } from "react";
import { SignIn } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleClickOutside = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement; // Cast target to HTMLElement
    if (target.id === "overlay") {
      setShowSignIn(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200">
      {/* Header */}
      <header className="w-full backdrop-blur-lg bg-gray-800/80 shadow-md p-4 fixed top-0 left-0 z-20">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center h-12 w-12 bg-blue-600 rounded-full shadow-md overflow-hidden">
              <img src="/gitsby.webp" alt="Logo" className="h-full w-full object-cover" />
            </div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">
              Gitsby
            </h1>
          </div>
          <Button
            onClick={() => setShowSignIn((prev) => !prev)}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2 rounded-full shadow-lg transform transition-all hover:scale-105"
          >
            Sign In / Sign Up
          </Button>
        </div>
      </header>

      {/* Sign-In Modal */}
      {showSignIn && (
        <div
          id="overlay"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-30"
          onClick={handleClickOutside}
        >
          <SignIn />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto text-center pt-28 px-4">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mt-3">
          <h2 className="text-5xl font-extrabold text-white leading-tight">
            Get the Answers You Need for Your Project Repositories
          </h2>
          <p className="mt-5 text-xl text-gray-300 leading-relaxed">
            Integrate GitHub repositories, get summaries of the latest commits, ask queries about code, upload meeting audio for insights, and collaborate with team members—all on a single AI-powered platform.
          </p>
          <Button
            onClick={() => setShowSignIn(true)}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-full shadow-lg transform transition-all hover:scale-105"
          >
            Get Started
          </Button>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 w-full">
          <Card className="p-8 bg-gray-800 shadow-lg hover:shadow-xl transition-shadow border border-gray-700 rounded-2xl transform hover:-translate-y-1">
            <h4 className="text-2xl font-semibold text-gray-200 mb-4 text-center">
              Track Commits
            </h4>
            <p className="text-center text-gray-400">
              Access and summarize your repository's latest commit history with ease.
            </p>
          </Card>
          <Card className="p-8 bg-gray-800 shadow-lg hover:shadow-xl transition-shadow border border-gray-700 rounded-2xl transform hover:-translate-y-1">
            <h4 className="text-2xl font-semibold text-gray-200 mb-4 text-center">
              Code Summary
            </h4>
            <p className="text-center text-gray-400">
              Analyze and get answers for queries related to your project files, enhancing understanding and productivity.
            </p>
          </Card>
          <Card className="p-8 bg-gray-800 shadow-lg hover:shadow-xl transition-shadow border border-gray-700 rounded-2xl transform hover:-translate-y-1">
            <h4 className="text-2xl font-semibold text-gray-200 mb-4 text-center">
              Meeting Analysis
            </h4>
            <p className="text-center text-gray-400">
              Upload audio meeting recordings and get transcriptions and actionable insights.
            </p>
          </Card>
        </div>

        {/* How It Works Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 py-16 px-8 mt-16 w-full rounded-md shadow-inner">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-200">
            How It Works
          </h3>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white">
                1
              </div>
              <h4 className="mt-6 text-lg font-semibold text-gray-200">
                Connect Your Repository
              </h4>
              <p className="mt-3 text-gray-400">
                Start by linking your GitHub repository for commit tracking and analysis.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-600 text-white">
                2
              </div>
              <h4 className="mt-6 text-lg font-semibold text-gray-200">
                Ask Questions & Upload Meetings
              </h4>
              <p className="mt-3 text-gray-400">
                Extract meaningful insights from files, retrieve relevant code snippets for your queries, and generate comprehensive summaries of meeting recordings.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-600 text-white">
                3
              </div>
              <h4 className="mt-6 text-lg font-semibold text-gray-200">
                Collaborate Effectively
              </h4>
              <p className="mt-3 text-gray-400">
                Invite members to the project, share insights, manage projects, and keep your team aligned.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6"></div>
      </div>
    </div>
  );
}

//3rd 
// 'use client';
// import { useState } from "react";
// import { SignIn } from "@clerk/nextjs";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";

// export default function HomePage() {
//   const [showSignIn, setShowSignIn] = useState(false);

//   const handleClickOutside = (e: React.MouseEvent) => {
//     const target = e.target as HTMLElement; // Cast target to HTMLElement
//     if (target.id === "overlay") {
//       setShowSignIn(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-800 text-gray-200">
//       {/* Header */}
//       <header className="w-full bg-gradient-to-r from-gray-800 to-gray-600 shadow-md p-4 fixed top-0 left-0 z-20">
//         <div className="flex items-center justify-between max-w-7xl mx-auto">
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center justify-center h-12 w-12 bg-blue-500 rounded-full shadow-md overflow-hidden">
//               <img src="/gitsby.webp" alt="Logo" className="h-full w-full object-cover" />
//             </div>
//             <h1 className="text-2xl font-extrabold text-gray-100 tracking-tight">
//               Gitsby
//             </h1>
//           </div>
//           <Button
//             onClick={() => setShowSignIn((prev) => !prev)}
//             className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-6 py-2 rounded-full shadow-lg transform transition-all hover:scale-105"
//           >
//             Sign In / Sign Up
//           </Button>
//         </div>
//       </header>

//       {/* Sign-In Modal */}
//       {showSignIn && (
//         <div
//           id="overlay"
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30"
//           onClick={handleClickOutside}
//         >
//           <SignIn />
//         </div>
//       )}

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto text-center pt-28 px-4">
//         {/* Hero Section */}
//         <div className="text-center max-w-4xl mt-3">
//           <h2 className="text-5xl font-extrabold text-gray-100 leading-tight">
//             Get the Answers You Need for Your Project Repositories
//           </h2>
//           <p className="mt-5 text-xl text-gray-300 leading-relaxed">
//             Integrate GitHub repositories, get summaries of the latest commits, ask queries about code, upload meeting audio for insights, and collaborate with team members—all on a single AI-powered platform.
//           </p>
//           <Button
//             onClick={() => setShowSignIn(true)}
//             className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold rounded-full shadow-lg transform transition-all hover:scale-105"
//           >
//             Get Started
//           </Button>
//         </div>

//         {/* Features Section */}
//         <div className="grid md:grid-cols-3 gap-8 mt-16 w-full">
//           <Card className="p-8 bg-gray-700 shadow-lg hover:shadow-xl transition-shadow border border-gray-500 rounded-2xl transform hover:-translate-y-1">
//             <h4 className="text-2xl font-semibold text-gray-100 mb-4 text-center">
//               Track Commits
//             </h4>
//             <p className="text-center text-gray-400">
//               Access and summarize your repository's latest commit history with ease.
//             </p>
//           </Card>
//           <Card className="p-8 bg-gray-700 shadow-lg hover:shadow-xl transition-shadow border border-gray-500 rounded-2xl transform hover:-translate-y-1">
//             <h4 className="text-2xl font-semibold text-gray-100 mb-4 text-center">
//               Code Summary
//             </h4>
//             <p className="text-center text-gray-400">
//               Analyze and get answers for queries related to your project files, enhancing understanding and productivity.
//             </p>
//           </Card>
//           <Card className="p-8 bg-gray-700 shadow-lg hover:shadow-xl transition-shadow border border-gray-500 rounded-2xl transform hover:-translate-y-1">
//             <h4 className="text-2xl font-semibold text-gray-100 mb-4 text-center">
//               Meeting Analysis
//             </h4>
//             <p className="text-center text-gray-400">
//               Upload audio meeting recordings and get transcriptions and actionable insights.
//             </p>
//           </Card>
//         </div>

//         {/* How It Works Section */}
//         <div className="bg-gradient-to-r from-gray-700 to-gray-600 py-16 px-8 mt-16 w-full rounded-md shadow-inner">
//           <h3 className="text-4xl font-bold text-center mb-12 text-gray-100">
//             How It Works
//           </h3>
//           <div className="grid md:grid-cols-3 gap-12 text-center">
//             <div>
//               <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-500 text-white">
//                 1
//               </div>
//               <h4 className="mt-6 text-lg font-semibold text-gray-100">
//                 Connect Your Repository
//               </h4>
//               <p className="mt-3 text-gray-400">
//                 Start by linking your GitHub repository for commit tracking and analysis.
//               </p>
//             </div>
//             <div>
//               <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-teal-500 text-white">
//                 2
//               </div>
//               <h4 className="mt-6 text-lg font-semibold text-gray-100">
//                 Ask Questions & Upload Meetings
//               </h4>
//               <p className="mt-3 text-gray-400">
//                 Extract meaningful insights from files, retrieve relevant code snippets for your queries, and generate comprehensive summaries of meeting recordings.
//               </p>
//             </div>
//             <div>
//               <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-500 text-white">
//                 3
//               </div>
//               <h4 className="mt-6 text-lg font-semibold text-gray-100">
//                 Collaborate Effectively
//               </h4>
//               <p className="mt-3 text-gray-400">
//                 Invite members to the project, share insights, manage projects, and keep your team aligned.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }