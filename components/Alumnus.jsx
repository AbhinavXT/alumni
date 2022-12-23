import Alumni from "./subComponents/Alumni"

const Alumnus = () => {
  return (
    <div className='grid grid-cols-4 gap-x-6 gap-y-6'>
      <Alumni image={'/i1.png'} name={'Abhinav Pathak'} year={2023} branch={'Computer Science and Eng.'} status={'Student'}/>
      <Alumni image={'/i1.png'} name={'Sahil De'} year={2024} branch={'Computer Science and Eng.'} status={'Student'}/>
      <Alumni image={'/i1.png'} name={'Hina Puri '} year={2022} branch={'Electrical Eng.'} status={'Alumni'}/>
      <Alumni image={'/i1.png'} name={'Amit Singh'} year={2023} branch={'Computer Science and Eng.'} status={'Student'}/>
      <Alumni image={'/i1.png'} name={'Prasoon Loyal '} year={2021} branch={'Electronics and Comm Eng.'} status={'Alumni'}/>
      <Alumni image={'/i1.png'} name={'Mohit Pant'} year={2023} branch={'Computer Science and Eng.'} status={'Student'}/>
      <Alumni image={'/i1.png'} name={'Nancy Bedi '} year={2024} branch={'Electrical Eng.'} status={'Student'}/>
      <Alumni image={'/i1.png'} name={'Abbas Mistry'} year={2020} branch={'Biotechnology'} status={'Alumni'}/>
      <Alumni image={'/i1.png'} name={'Indira Persaud'} year={2023} branch={'Mechnical Eng.'} status={'Student'}/>
      <Alumni image={'/i1.png'} name={'Nidhi Parsa'} year={2021} branch={'Civil Eng.'} status={'Alummni'}/>
    </div>
  )
}

export default Alumnus