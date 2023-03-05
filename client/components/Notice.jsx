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
                <div className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00004F" className="bi bi-share-fill" viewBox="0 0 16 16">
                        <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                    </svg>
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
                <div>
                    <div className='noticeDetailsLabel'>Applications</div>
                    <div className='noticeDetailsText'>{props.applications} applied</div>
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
                        <div className='font-light'>Published On {props.published}</div>
                    </div>
                </div>

                <div className='flex gap-x-4'>
                    <button className='noticeViewButton'>View Job Post</button>
                    <button className='noticeApplyButton'>Apply</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Notice