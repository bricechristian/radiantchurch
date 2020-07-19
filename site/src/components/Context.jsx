// Context.js
import React from "react"

const defaultContextValue = {
  data: {
    // set your initial data shape here
    menuOpen: false,
    logo: "logo",
  },
  set: () => {},
}

const { Provider, Consumer } = React.createContext(defaultContextValue)

class ContextProviderComponent extends React.Component {
  constructor() {
    super()

    this.setData = this.setData.bind(this)
    this.state = {
      ...defaultContextValue,
      set: this.setData,
    }
  }

  setData(newData) {
    this.setState(state => ({
      data: {
        ...state.data,
        ...newData,
      },
    }))
  }

  componentDidMount() {
    var data = { ...this.state.data }
    data.menuOpen = false
    this.setState({ data })
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { Consumer as default, ContextProviderComponent }
