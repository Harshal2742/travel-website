type LabeledInputPropes = {
	label: string;
	type: React.HTMLInputTypeAttribute;
	id: string;
	placeholder?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string;
	isInvalid?: boolean;
	autoComplete?: 'on' | 'off';
	invalidMessage?: string;
};

export const LabeledInput = ({
	label,
	type,
	id,
	placeholder,
	onChange,
	value,
	isInvalid,
	autoComplete,
	invalidMessage,
}: LabeledInputPropes): JSX.Element => {
	return (
		<div className="input-box">
			<label htmlFor={id}>{label}</label>
			<input
				type={type}
				id={id}
				placeholder={placeholder}
				autoComplete={autoComplete}
				onChange={onChange}
				value={value}
				aria-invalid={isInvalid}
			/>
			<p className="input-invalid-message">
				{isInvalid && invalidMessage} &nbsp;
			</p>
		</div>
	);
};
