type LabelProps =
    {
        text: string
    }

function Label({ text, ...props }: LabelProps) {
    return (
        <span className="w-full text-[1.4rem]" {...props}>
            {text}
        </span>
    )
}

export default Label