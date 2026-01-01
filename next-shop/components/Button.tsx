import { Children } from "react";

export default function Button({children, type}:{children: React.ReactNode, type: string}) {
  return (
    <button type={type} 
        className="bg-green-800 text-gray-100 px-4 py-2 rounded hover:bg-green-700 
                    hover:cursor-pointer my-2">
      {children}
    </button>
  )
}