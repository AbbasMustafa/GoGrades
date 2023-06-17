
import Image from 'next/image'

const BannerRating = ({image, heading}) => {
    return ( 

        <div className='flex flex-row'>
            <div>
                <Image 
                src={image}
                alt='this'
                width={30}
                height={30}
                />
            </div>

            <div>
                <h2 className='text-2xl text-white font-semibold px-2'>{heading}</h2>
            </div>
        </div>
    );
}
 
export default BannerRating;