import { useAppDispatch, useAppSelector } from '../../store/store';
import { useEffect } from 'react';
import { toggleNotification } from '../../store/ui-slice';

const Notification = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const notificationMessage = useAppSelector(
		(state) => state.ui.notificationMessage
	);

	const isSuccess = useAppSelector((state) => state.ui.isSuccess);

	useEffect(() => {
		const timerId = setTimeout(() => {
			dispatch(toggleNotification({ showNotification: false }));
		}, 3000);

		return () => {
			clearTimeout(timerId);
		};
	}, [dispatch]);

	return (
		<div
			className={
				isSuccess ? 'notification-box-success' : 'notification-box-error'
			}
		>
			<p className="notification-message">{notificationMessage}</p>
		</div>
	);
};

export default Notification;
