type Props = {
	options: string[]
}

const SelectComponent: React.FC<Props> = ({options}) => {
	return (
		<select>
			{options.map(option => <option value={option}>{option}</option>)}	
		</select>
	)
}

export default SelectComponent