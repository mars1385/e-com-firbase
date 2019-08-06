//import
import { useSelector } from 'react-redux';
import { compose } from 'redux';
import { dataLoadingSelector } from '../../redux/selectors/shopSelectors';
//component
import Collections from './Collections';
import Spinner from '../spinner/Spinner';

const loading = () => {
	const isLoading = useSelector(dataLoadingSelector);
	return isLoading;
};

const CollectionsContainer = compose(
	loading(),
	Spinner
)(Collections);

export default CollectionsContainer;
