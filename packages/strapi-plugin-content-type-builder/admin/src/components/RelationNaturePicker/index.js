/**
*
* RelationNaturePicker
*
*/

import React from 'react';
import { map, startCase } from 'lodash';

import { FormattedMessage } from 'react-intl';
import RelationIco from 'components/RelationIco';

import ManyToMany from '../../assets/images/many_to_many.svg';
import ManyToManySelected from '../../assets/images/many_to_many_selected.svg';
import ManyToOne from '../../assets/images/many_to_one.svg';
import ManyToOneSelected from '../../assets/images/many_to_one_selected.svg';
import OneToMany from '../../assets/images/one_to_many.svg';
import OneToManySelected from '../../assets/images/one_to_many_selected.svg';
import OneToOne from '../../assets/images/one_to_one.svg';
import OneToOneSelected from '../../assets/images/one_to_one_selected.svg';

import styles from './styles.scss';

class RelationNaturePicker extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.icos = [
      {
        name: 'oneToOne',
        ico: OneToOne,
        icoSelected: OneToOneSelected,
      },
      {
        name: 'oneToMany',
        ico: OneToMany,
        icoSelected: OneToManySelected,
      },
      {
        name: 'manyToOne',
        ico: ManyToOne,
        icoSelected: ManyToOneSelected,
      },
      {
        name: 'manyToMany',
        ico: ManyToMany,
        icoSelected: ManyToManySelected,
      },
    ]
  }
  render() {
    return (
      <div className={styles.relationNaturePicker}>
        {map(this.icos, (value, key) => (
          <RelationIco key={key} ico={this.props.selectedIco === value.name ? value.icoSelected : value.ico} name={value.name} handleChange={this.props.handleChange} />
        ))}
        <div className={styles.infoContainer}>
          <span>{startCase(this.props.contentTypeName)}</span>
          &nbsp;
          <FormattedMessage id={`content-type-builder.relation.${this.props.selectedIco}`} />
          &nbsp;
          <span>{startCase(this.props.contentTypeTarget)}</span>
        </div>
      </div>
    );
  }
}

RelationNaturePicker.propTypes = {
  contentTypeName: React.PropTypes.string,
  contentTypeTarget: React.PropTypes.string,
  handleChange: React.PropTypes.func,
  selectedIco: React.PropTypes.string,

}

export default RelationNaturePicker;