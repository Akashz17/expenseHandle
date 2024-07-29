import Img from '../assets/add-button.png'
export default function NoExpenseSelected(){
    return(
        <>
        <div className='flex justify-center mt-20'>
            <button><img src={Img} alt="" className='h-52 w-52'/></button>
        </div>
        <div className='text-center mt-5 font-semibold'>
            <p>Add an expense</p>
        </div>
        </>
    )
}