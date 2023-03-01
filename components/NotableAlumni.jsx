import Image from 'next/image'

const NotableAlumni = () => {
    return (
        <div className="notableAlumniMain">
            <div className="notableAlumniText">Notable Alumni</div>
            <div className="notableAlumniImageOuterDiv">
                <div className="notableAlumniImageInnerDiv">
                    <Image
                        src="/i2.webp"
                        className='rounded-full'
                        alt="Picture of the college"
                        width={120}
                        height={120}
                    />
                </div>
                <div className="notableAlumniImageInnerDivText">
                    Founder Batch of GBPIET (GBPEC 1995)
                </div>
            </div>
        </div>
    )
}

export default NotableAlumni