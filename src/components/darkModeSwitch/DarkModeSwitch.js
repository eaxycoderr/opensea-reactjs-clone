import React from 'react'

const DarkModeSwitch = (props) => {
    
  return (
    <div>
      <label class="switch">
            <input type="checkbox"  onClick={props.toggleTheme} />
            <span class="slider round"></span>
          </label>
    </div>
  )
}

export default DarkModeSwitch
