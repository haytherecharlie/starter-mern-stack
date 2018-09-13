/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * Enzyme Testing Configuration
 ******************************************/

/*******************************************
 * Node Modules
 ******************************************/
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/*******************************************
 * Configure
 ******************************************/
configure({ adapter: new Adapter() });
