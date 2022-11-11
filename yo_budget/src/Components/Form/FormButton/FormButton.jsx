
export const FormButton = ({ className, value }) => {
    return (
        <div className="form-ctr">
            <input
                className={className}
                type="submit"
                value={value} />
        </div>
    )
}
