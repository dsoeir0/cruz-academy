import Link from "next/link";

export default function Home() {
  return (
    <div className="size-full flex justify-center content-center">
        <button>
            <Link href={'/parents/1'} className='p-6 bg-blue-500 content-center w-36 text-center duration-500 hover:bg-blue-800 hover:cursor-pointer text-white rounded-2xl'>Encarregado </Link>
        </button>
    </div>
  );
}
