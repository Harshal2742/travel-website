import { ReactNode } from 'react';

type HorizonalScrollBoxProps = {
	children: ReactNode;
	className?: string;
};

const HorizonalScrollBox = ({
	children,
	className,
}: HorizonalScrollBoxProps): JSX.Element => {
	return <div className={`horizontal-scroll-box ${className}`}>{children}</div>;
};

export default HorizonalScrollBox;
