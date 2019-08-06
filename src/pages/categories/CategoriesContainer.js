//import
import { useSelector } from 'react-redux';
import { compose } from 'redux';
import { isDataLoadedSelector } from '../../redux/selectors/shopSelectors';
//component
import Categories from './Categories';
import Spinner from '../../components/spinner/Spinner';

const CategoriesContainer = () => {
	const isLoaded = useSelector(isDataLoadedSelector);
	return isLoaded;
};

export default CategoriesContainer;
