import Image from "next/image";
import logo from '../../public/logo.png';

export default function EmptyPage() {
    return (
        <p className='text-center'>
            <Image alt='Auroras Madhouse Logo' src={logo} width={500} className='mx-auto' />
            There's nothing to show here yet, but we're updating all the time. Check back later.
        </p>
    )
}