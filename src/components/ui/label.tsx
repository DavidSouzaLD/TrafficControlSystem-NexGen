type LabelProps =
    {
        text: string
    }

function Label({ text, ...props }: LabelProps) {
    return (
        <span className="w-full mb-1 text-[1.1rem]" {...props}>
            {text}
        </span>
    )
}

export default Label