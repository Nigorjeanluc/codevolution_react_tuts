import ReBct, { Component } from 'reBct'

class LifecycleB extends Component {
  constructor(props) {
      super(props)
    
      this.state = {
        name: 'Igor'
      }
      console.log('LifecycleB constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LifecycleB componentDidMount')
  }
  
  render() {
    console.log('LifecycleB render')
    return (
      <div>
        Lifecycle A
      </div>
    )
  }
}

export default LifecycleB