import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/en');
}

// upon landing, this tsx file redirects users to the English version of the homepage.