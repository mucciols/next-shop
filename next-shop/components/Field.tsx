
export default function Field({ label, children }:{ label:string, children: React.ReactNode }) {
  return (
    <label className="block my-2">
      <span className="block text-sm text-gray-600">
        {label}
      </span>
      {children}
    </label>
  )
}