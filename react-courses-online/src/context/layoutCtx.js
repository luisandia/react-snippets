import React, { useState } from 'react'
import PropTypes from 'prop-types';


const LayoutContext = React.createContext();

function LayoutProvider({ children }) {

  const menu = ['Cursos', 'Cursos Eliminados']
  const [menuIndex, setMenuIndex] = useState(-1)

  return (
    <LayoutContext.Provider value={{ menu, menuIndex, setMenuIndex }}>
      {children}
    </LayoutContext.Provider>
  )
}
LayoutProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export { LayoutContext, LayoutProvider };