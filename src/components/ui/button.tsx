type ButtonProps =
    {
        text: string
    }
function Button({ text, ...props }: ButtonProps) {
    return (
        <button className="w-full max-w-[400px] h-11 px-4 rounded-md font-semibold text-[1rem] bg-primary text-foreground hover:cursor-pointer hover:opacity-90" {...props}>
            {text}
        </button>
    )
}

export default Button