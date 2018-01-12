import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';
import {palette, fonts, Icon} from '../../constants/styles';
import * as couponsActions from '../../redux/coupons/actions';
import PropTypes from 'prop-types';

/**
 * Renders a capsule for the give sort or filter options
 */
export default class Capsule extends Component {

  /**
   * PropTypes passed from {@link CouponsSortControls}
   */
  static propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    coupons: PropTypes.object.isRequired,
    index: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  /**
   * Resets sort options back to default
   */
  resetSortState() {
    this.props.dispatch(couponsActions.toggleSort(false, 4, 'Recommended'));
    this.props.dispatch(couponsActions.setSortResults([]));
  }

  /**
   * Hides sort capsule if filter is still applied
   * @todo handle this differently so that sort and filter are independent of each other
   */
  hideSortCapsule() {
    this.props.dispatch(couponsActions.toggleSort(true, 4, 'hidden'));
    this.props.dispatch(couponsActions.requestCouponsByCategory(this.props.coupons.filter, 4));
  }

  /**
   * Updates filter option when capsule is dismissed and requests coupon data for new criteria
   * @param {number} newCount - Number of filter options minus one
   */
  updateFilteredResults(newCount) {
    // Update the filter options in the redux state
    let updatedFilters = this.props.coupons.filter;
    let i = this.props.index;
    updatedFilters[i].selected = !updatedFilters[i].selected;

    if(newCount === 0 && this.props.coupons.sort.byTitle === 'hidden') {
      this.resetSortState();
    } else {
      // Dispatch new filter count
      this.props.dispatch(couponsActions.setFilterCount(newCount));
      // Dispatch updated filters
      this.props.dispatch(couponsActions.setFilterBy(updatedFilters));
      // Request with updated filter criteria
      this.props.dispatch(couponsActions.requestCouponsByCategory(updatedFilters, this.props.coupons.sort.by));
    }
  }

  /**
   * Handles capsule close functions
   */
  handleClose() {

    if(this.props.type === 'sort') {
      if(this.props.coupons.filterCount === 0) {
        this.resetSortState();
      } else {
        this.hideSortCapsule();
      }
    }

    if(this.props.type === 'filter') {
      // Send updated filterCount before dispatching
      let newCount = this.props.coupons.filterCount - 1;
      this.updateFilteredResults(newCount);
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.capsule_left}
          disabled={true}
        >
          <Text style={styles.capsule_text}>{this.props.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.capsule_right}
          onPress={() => {this.handleClose();}}
        >
          <Icon
            name={'close'}
            size={13}
            color={'white'}
            style={styles.capsule_clear}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 10,
    marginBottom: 5,
    height: 30
  },
  capsule_left: {
    height: 30,
    minWidth: 40,
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: palette.gray.accent
  },
  capsulte_text: {
    color: palette.black.base,
    fontSize: 14,
    fontFamily: fonts.proxima.regular
  },
  capsule_right: {
    height: 30,
    width: 30,
    backgroundColor: palette.gray.border,
    justifyContent: 'center',
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14
  },
  capsule_clear: {
    alignSelf: 'center'
  }
});
