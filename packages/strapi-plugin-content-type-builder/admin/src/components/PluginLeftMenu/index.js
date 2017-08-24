/*
*
* PluginLeftMenu
*
*   - Required props :
*     - {array} sections : Menu section
*
*   - Optionnal props :
*     - {function} addCustomSection : Allows to add the menu a custom section
*     - {function} renderCustomLink : Overrides the link behavior
*
*/



import React from 'react';
import { map } from 'lodash';
import PluginLeftMenuSection from 'components/PluginLeftMenuSection';
import styles from './styles.scss';

class PluginLeftMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const customSection = this.props.addCustomSection(styles) || '';
    return (
      <div className={`${styles.pluginLeftMenu} col-md-3`}>
        {map(this.props.sections, (section, index) => (
          <PluginLeftMenuSection
            key={index}
            section={section}
            renderCustomLink={this.props.renderCustomLink}
            basePath={this.props.basePath}
          />
        ))}
        {customSection}
      </div>
    );
  }
}

PluginLeftMenu.propTypes = {
  addCustomSection: React.PropTypes.func,
  basePath: React.PropTypes.string,
  renderCustomLink: React.PropTypes.func,
  sections: React.PropTypes.array.isRequired,
};

export default PluginLeftMenu;