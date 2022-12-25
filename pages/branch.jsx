import Alumni from "../components/subComponents/Alumni"

const branch = () => {
  return (
    <div className="flex justify-center py-20">
        <div className='grid grid-cols-4 gap-x-6 gap-y-6 px-auto'>
            <Alumni image={'/i1.png'} name={'Abhinav Pathak'} year={2023} branch={'Computer Science and Eng.'} status={'Student'}/>
            <Alumni image={'/i1.png'} name={'Sahil De'} year={2024} branch={'Computer Science and Eng.'} status={'Student'}/>
            <Alumni image={'/i1.png'} name={'Hina Puri '} year={2022} branch={'Computer Science and Eng.'} status={'Alumni'}/>
            <Alumni image={'/i1.png'} name={'Amit Singh'} year={2023} branch={'Computer Science and Eng.'} status={'Student'}/>
            <Alumni image={'/i1.png'} name={'Mohit Pant'} year={2023} branch={'Computer Science and Eng.'} status={'Student'}/>
            <Alumni image={'/i1.png'} name={'Kiran Sharma'} year={2023} branch={'Computer Science and Eng.'} status={'Student'}/>
        </div>
    </div>
  )
}

export default branch