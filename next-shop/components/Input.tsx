export default function Input({type}:{type:string}) {
  return (
    <input type={type} 
      className="border px-3 py-1 w-80"
    />
  )
}