import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>Bromptastic engineering</h1>
        <h2> Brompton bikes are stylish and sofisticated</h2>
        <p> sign for a secret ride</p>
        <SignedOut></SignedOut>
        <div class=" border-l-pink-400 text-xl">
          <SignedIn>
            <a href="https://www.brompton.com/c/electric-bikes/">
              https://www.brompton.com/c/electric-bikes
            </a>
          </SignedIn>
        </div>
      </div>
    </>
  );
}
