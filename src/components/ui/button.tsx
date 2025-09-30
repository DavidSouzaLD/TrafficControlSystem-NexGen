type ButtonProps =
    {
        text: string
    }
function Button({ text, ...props }: ButtonProps) {
    return (
        <button className="w-full max-w-[400px] h-13 px-4 rounded-md font-semibold text-[1.3rem] bg-primary text-foreground" {...props}>
            {text}
        </button>
    )
}

export default Button