import Button from "./Button"
export default function Categories(){
    return(
        <div  className="flex justify-center gap-4 mt-4">
            <Button>Food</Button>
            <Button>Shopping</Button>
            <Button>Finance</Button>
            <Button>Utilities</Button>
        </div>
    )
}