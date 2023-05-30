import React from 'react'

const Notice = (props) => {
  return (
    <div className='noticeMain'>
        <div>
            <span className='noticeOwner'>
                {props.owner} {' '}
            </span>
            posted an opportunity
        </div>
        
        <div className='noticeTitle'>
            <div className='noticeTitleDiv'>
                <div className='font-light'>
                    <span className='noticeTitleSpan'>
                        {props.title} {' '}
                    </span>
                    | {props.company}
                </div>
            </div>

            <div className='noticeDetails'>
                <div>
                    <div className='noticeDetailsLabel'>Location</div>
                    <div className='noticeDetailsText'>{props.location}</div>
                </div>
                <div>
                    <div className='noticeDetailsLabel'>Deadline</div>
                    <div className='noticeDetailsText'>Apply by: {props.deadline}</div>
                </div>
                <div>
                    <div className='noticeDetailsLabel'>Salary</div>
                    <div className='noticeDetailsText'>{props.salary}</div>
                </div>
            </div>
            
            <div className='noticeType'>{props.type}</div>
            
            <div className='noticeFooter'>
                <div className='noticeFooterInnerDiv'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    </div>
                    <div className='text-sm'>
                        <div className='font-bold'>{props.owner}</div>
                    </div>
                </div>

                <div className='flex gap-x-4'>
                    <button className='noticeApplyButton'>
                        <a href={`${props.link}`}>Apply</a>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Notice