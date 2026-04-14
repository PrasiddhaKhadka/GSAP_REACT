export default function Card({ title, description, color }) {
  return (
    <div
      className={`${color} text-white p-8 rounded-2xl shadow-lg
                  hover:scale-105 transition duration-300
                  w-80 h-96 flex flex-col justify-center flex-shrink-0`}
    >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm opacity-90">{description}</p>
    </div>
  )
}