type Props = {
  text: string
  baseClass?: string
  startGreen?: boolean
}

export default function TitleMix({ text, baseClass = "text-black", startGreen = true }: Props) {
  const parts = text.trim().split(/\s+/)
  return (
    <>
      {parts.map((w, i) => {
        const green = startGreen ? i % 2 === 0 : i % 2 === 1
        return (
          <span key={i} className={green ? "text-[#36e43e]" : baseClass}>
            {w}
            {i < parts.length - 1 ? " " : ""}
          </span>
        )
      })}
    </>
  )
}
