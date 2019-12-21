import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = (size) => width / guidelineBaseWidth * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export { scale, moderateScale };