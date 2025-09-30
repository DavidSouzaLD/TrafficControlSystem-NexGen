function Input({ ...props }) {
    return (
        <input className="w-full max-w-[400px] h-11 px-4 rounded-md bg-input text-background" min={0} max={10} {...props} />
    )
}

export default Input