import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface DropdownListProps {
	list: React.ReactElement[];
}

const DropdownList: React.FC<DropdownListProps> = ({ list }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				maxWidth: '70%',
			}}
		>
			{list.map((listItem: React.ReactElement, idx: number) => {
				return (
					<div
						key={idx}
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '1em',
						}}
					>
						<FontAwesomeIcon
							icon={faCheckCircle}
							style={{
								color: '#04DDB2',
							}}
						/>
						{listItem}
					</div>
				);
			})}
		</div>
	);
};

export default DropdownList;
