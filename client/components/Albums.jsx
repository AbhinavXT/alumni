import Image from 'next/image'
import Link from 'next/link'

const Albums = () => {
    return (
        <Link href='/gallary'>
            <div className="albumsMain">
                <div className="text-3xl font-extrabold">Albums</div>

                <div className="albumsImageOuterDiv">
                    <div className="albumsImageInnerDiv">
                        <Image
                            src="/g1.jpg"
                            alt="Picture of the college"
                            width={379}
                            height={306}
                        />
                    </div>
                    <div className="albumsFouders">
                        Founder Batch of GBPIET (GBPEC 1995)
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Albums
