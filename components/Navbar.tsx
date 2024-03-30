import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <p className="text-lg font-semibold">Finance Tracker</p>
      <div>
        <Link href="/" legacyBehavior>
          <a className="p-2">Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className="p-2">About</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
