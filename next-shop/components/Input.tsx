import { ChangeEventHandler } from "react";

export default function Input({type, value, onChange, required}
                              :{type:string, value: string, 
                                onChange:ChangeEventHandler<HTMLInputElement>, required?: boolean}) {
  return (
    <input type={type}  value={value} onChange={onChange}
      {...(required ? { required: true } : {})} // aggiunge solo se true
      className="border px-3 py-1 w-80"
    />
  )
}