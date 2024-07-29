export default function Button({children}){
    return(
        <>
        <button className="bg-purple-300 rounded-md py-6 px-20 font-semibold hover:bg-purple-400">{children}</button>
        </>
    )
}